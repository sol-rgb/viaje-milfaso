# Finding a photo for every card

The goal is that no card ever renders an empty grey box. Three sources, in
order of how well they represent the actual thing.

## 1. The page already linked

If the item has a URL, that page's own cover image is the real thing. Curl
gets `og:image` from most sites in about a second.

```
curl -sL --max-time 18 --compressed -A "<a real browser UA>" "$URL"
```
then match `<meta property="og:image" content="...">`.

Expect roughly a 20% hit rate. Booking.com, Airbnb, Tripadvisor, Expedia,
GetYourGuide and Viator all return 403 to curl.

## 2. The same page, in a real browser

Those sites load fine in Chromium, which is already installed at
`/opt/pw-browsers/chromium-1194/chrome-linux/chrome`. This took one project
from 59 to 129 hits out of 175.

```js
const b = await chromium.launch({ executablePath: CHROME, args: [
  "--ignore-certificate-errors",
  "--disable-blink-features=AutomationControlled",
]});
const ctx = await b.newContext({ userAgent: UA, locale: "es-AR",
  viewport: { width: 1360, height: 900 } });
```

Two things matter:

**Prefer the largest visible `<img>` over `og:image`.** Booking and Airbnb
serve a generic brand image as `og:image`; the gallery photo is the real
one. Scroll a little and wait before measuring, because the gallery lazy
loads.

**Reject generic URLs** before downloading:

```js
const generica = (u) => /og[-_]image|default|placeholder|logo|
  airbnb-platform-assets|social[-_]share|bstatic\.com\/static/i.test(u);
```

**Skip search URLs entirely.** An Airbnb `/s/` search has no photo of its
own and will hand back the same placeholder for every card. Let those fall
through to the fallback.

Run three browser contexts in parallel, not more.

## 3. Wikipedia, Commons, Openverse

For museums, beaches, ruins and landmarks with no URL. The names in
research data are sentences, not place names, so pull the proper noun out
first: take the longest run of capitalised words, and fall back to the first
five words.

- `es.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=<q>&prop=pageimages&pithumbsize=1400`
- then the English Wikipedia
- then `commons.wikimedia.org/w/api.php` with `gsrnamespace=6`
- then `api.openverse.org/v1/images/?q=<q>`

All free, no key, no rate limit worth worrying about.

## Always: dedupe by content hash

After every run, hash the downloaded bytes and drop any image claimed by
more than one card. A single generic placeholder once ended up on 25 cards
and it is instantly obvious to a human. Delete the file, clear those keys
from the manifest, and re-fetch with a stricter filter.

## Always: compress

```js
sharp(ruta).rotate().resize({ width, withoutEnlargement: true })
  .webp({ quality: 74, effort: 5 })
```

1400px for anything full-bleed or in a gallery, 900px for card images.
Rename to `.webp` and update the manifest in the same pass, or the site
ships with a manifest pointing at filenames that no longer exist.

## Verify the extension from the bytes

Content-type headers lie. Read the first 12 bytes: `FF D8 FF` is jpeg,
`89 50` is png, bytes 8 to 12 reading `WEBP` is webp. A file saved as
`.img` will not be served with an image content-type and the browser may
refuse it.
