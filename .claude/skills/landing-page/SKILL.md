---
name: landing-page
description: Sol's house style and workflow for building landing pages, microsites, marketing pages, internal hubs, dashboards and any small web app that ships to a GitHub repo and deploys on Vercel. Use this skill whenever Sol asks to build, design, redesign, restyle or fix a site, page, hub, microsite, portfolio, app UI or visual HTML artifact, even when the request sounds small ("just make a page for X", "can you build a quick site", "fix the layout") and even when they never say the words landing page, design or brand. Also use it when auditing an existing page they say looks generic, cluttered, scrambled, too texty or AI-generated. Not for backend-only work, scripts, spreadsheets, documents or decks.
---

# Landing pages, the house style

This is an accumulated set of corrections from real builds. Following it up
front saves the three or four rounds of "I don't like this" that produced it.

The single most useful thing to understand: **Sol edits by subtraction.**
Almost every correction in this file removes something, shrinks
something, or pushes it behind a click. When you are unsure whether an
element earns its place, it does not. Build the sparse version first.

## Before writing any code

1. **Ask for references if none were given.** Sol thinks in screenshots, not
   adjectives. One image tells you more than a paragraph. If references were already
   pasted, read them closely: the *structure* matters more than
   the subject. A furniture catalogue reference means numbered index rows
   and hairlines, not furniture.
2. **Check for an existing brand.** If the page is for a company, scrape the
   real site for its fonts and colours rather than inventing them.
3. **Do the research before the design** when the page is *about* something
   (trips, candidates, venues, pricing). Fan out subagents, get real numbers
   and real URLs, then build. A beautiful page full of invented data is a
   failure. Never invent a price, a link or a name.
4. **Anything unverified ships behind a visible PLACEHOLDER flag**, loud
   enough that nobody mistakes it for real. A quiet "TBD" gets published by
   accident; a flag does not. Every figure on the page should trace to a
   named source.

## Colour: steal it, do not invent it

If the page is for a company that already has a site, **pull the real tokens
off its live computed styles and keep the client's own names for them**
(`--black-600`, `--greige-100`, `--color-stone-20`). Record the date you
pulled them. Six of Sol's repos do this and the two that document it treat
an invented palette as a defect, not a style choice.

**One accent, rationed.** The budget is literal: if the accent appears more
than roughly eight times on a page it is being wasted. Never a large fill of
it, never the accent as body text. It marks the one thing that matters on a
screen, and a second use halves the first.

**Ground is warm off-white or near-black, never grey.** Seen in production:
`#faf9f5`, `#ece8de`, `#f9f8f3` on the light side; `#000000` and `#141212`
on the dark. Which side to use is a per-project decision with no house
default, so ask rather than assume.

## The house look, when there is no brand to borrow

The direction that survived a full build with no client brand: **black and
white, warm off-white ground, grotesque type, hairlines, a lot of air.**
Swiss and editorial, not "minimal" in the sense of empty.

```css
:root {
  --bg:      #f1efe9;   /* warm off-white, never pure white */
  --bg-lift: #e9e7e0;   /* inputs, image placeholders, hover fills */
  --ink:     #0f0f0e;   /* near-black, never #000 for text */
  --ink-2:   #56554f;   /* body */
  --ink-3:   #8b8a83;   /* labels */
  --ink-4:   #b4b3ab;   /* index numbers, disabled */
  --rule:    #d9d7ce;   /* hairlines */
  --rule-2:  #e5e3db;   /* hairlines between rows */
}
```

No accent colour. No colour at all unless Sol asks. Photography goes
`filter: grayscale(1)`. Dark cards are a near-black block (`#1a1a18`) on the
warm ground, which is the one high-contrast move the style allows.

**Type.** Three tiers, and five of seven repos use exactly this triad: a
display face, a sans for body, a mono for eyebrows, indices and counters.

The display face is usually a serif **set at weight 400, never bold** and
never faux-bolded; this project is the exception, a grotesque at 700, which
is what "way larger and bolded" asked for. Either is fine. What is not fine
is a 600-weight serif.

**Tracking scales with size, and inverts by tier.** Display type gets
negative tracking, more negative as it grows: about −0.015em at 24px down to
−0.05em at 96px. The mono label tier goes the other way, +0.14em to +0.2em.
Body sits near zero.

Nothing is ever set in all capitals. One repo prescribes uppercase labels in
its own README and bans them in its CSS; the stated preference settles it.

**A type scale, enforced.** This is the most repeated correction: *a heading
must always be larger than the thing underneath it.* Declare the scale once
and use the variables, so an inversion becomes impossible:

```css
--t1: clamp(38px, 6.5vw, 86px);  /* page title */
--t2: clamp(26px, 3.1vw, 42px);  /* section: "Where to stay" */
--t3: clamp(17px, 1.7vw, 21px);  /* sub-item: a place, a day */
--t4: 14px;                      /* body */
```

If a section heading is 15px and the sub-items under it are 22px, Sol notices this
immediately, and has caught it twice.

**Structure.** Hairlines between sections, never boxes inside boxes.

The card rule, worth quoting because it settles most layout arguments:
*never a fill with a contrasting border. A block is one flat colour edge to
edge, or it is not a block at all and its rows are divided by a hairline.*

Radii are tokenised and small (4/8/10/12/16 plus a 999px pill) or zero; this
project used zero, and one repo gets its edges from `clip-path` chamfers
instead. Shadows are close to absent, and when they appear they mean "this
navigates" rather than "this is elevated": a 3px lift on hover, nothing
else. No gradients beyond a photo scrim, no texture or grain. Numbered index
rows read as a catalogue; a bare arrow on a row says it is clickable.

**Motion.** Declare one easing token per project and use only that. Every
project lands on the same expo-out shape: `cubic-bezier(0.19, 1, 0.22, 1)`,
`cubic-bezier(0.22, 1, 0.36, 1)`, `cubic-bezier(0.16, 1, 0.3, 1)`. Reveals
travel 12 to 38px over 0.3 to 0.6s and fire once. Images scale ~1.04 on
hover.

**Never drive an animation from a scroll event listener.** Use CSS
scroll-driven timelines, or a requestAnimationFrame loop if you must. A
smooth-scroll library was adopted and then removed with the note that it
re-smooths input macOS already smooths, which reads as lag.

`prefers-reduced-motion` is handled in all seven repos, so treat it as
required rather than polish. Sol does want *something* moving, but it must
come from the content (a photo strip, a revealed price), never from
decoration.

## Text, which is where most corrections land

- **As little as possible.** Name and number visible; everything else behind
  a click or a hover.
- **No subtitles, no helper copy, no status messages.** Deleted so far:
  a storage-not-connected notice, a section label reading "what you all
  proposed", a footer of airport codes, and a line explaining departure
  times that had been requested one message earlier. If a string is not a
  fact someone needs, cut it.
- **Sentence case.** "Add a hotel", not "add a hotel" and not "ADD A HOTEL".
- **No em dashes or en dashes, ever.** Comma, colon, or restructure. This is
  a standing preference across everything Sol asks for, not just pages.
- **No middot separators.** Sol calls them "circles in between words". Data
  that would read `9.0 · Booking · 381 reviews` becomes stacked rows with
  their own tiny labels.
- **More than one sentence becomes bullets**, one sentence per bullet. A
  paragraph inside a small card does not get read.
- **Write in the language of the people who will use it.** For a page
  Sol's Argentine friends will read, that is Argentine Spanish, including every
  string that came out of English-language research. Mixed language reads as
  unfinished.

## Interaction

The pattern this converged on, which is worth reaching for by default:

- The page shows **names and one number**. Nothing else.
- **Everything is a chip**: an activity, a hotel, a restaurant, a flight.
  A chip is a bordered button with a name and optionally a small figure.
- **Clicking any chip opens the same centred card.** Photo, one line of
  description, a rule, the price with the thumbs beside it, a rule, the
  stacked details, the links, then notes. Same component everywhere, so the
  interface has one idea in it instead of six.
- **Secondary information lives in a button**, not on the page. A
  "Before you go" button that opens the fine print in a modal beat a
  section that pushed the itinerary below the fold.
- **A hover tooltip needs a tap equivalent.** On a touch screen the note
  simply renders inline under the heading.
- **Links everywhere, pre-filtered.** Not a homepage: a Google Flights URL
  with origin, destination and dates already applied, a booking deep link,
  the actual listing.

## Mobile is not a variant

"Make it so the site works perfectly and has a nice layout on the phone."
Treat a phone as the primary target:

- Export a `viewport` with `viewportFit: "cover"` and a `themeColor`.
- Sticky top bar with the back arrow, so leaving a page is always one tap.
- One column. Everything reachable by scrolling down; no horizontal scroll
  anywhere except a gallery, which is deliberate.
- Chips shrink and wrap their text rather than overflow.
- Modals become bottom sheets that slide up, with
  `env(safe-area-inset-bottom)` padding.
- Hover-only affordances become always-visible.
- Check it with a real 390px viewport and assert
  `document.documentElement.scrollWidth <= window.innerWidth`.

## Icons, never glyphs

`←`, `→`, `↗`, `×` and `·` render as emoji on iOS and look broken. Ship a
tiny `Icono.tsx` of inline SVGs (`Izquierda`, `Derecha`, `Salida`, `Cruz`,
`Mas`, `Menos`) using `stroke="currentColor"` and use those.

## Images

- **Never leave a card without one.** Pool photos across everything related
  to that page, and fall back to a deterministic choice hashed from the
  item's key so it is stable between loads. Render a fallback slightly
  dimmed so it reads as atmosphere rather than a claim.
- **Accept whatever filenames arrive.** Sol uploads through the GitHub web
  UI; asking for files renamed to `01.jpg` blocks the whole task. Scan the
  directory at build time and write a manifest.
- **Compress before shipping.** Sharp, webp, quality ~74, 1400px for
  galleries and 900px for cards. One build went from 79MB to 19MB.
- **Dedupe by content hash.** Scrapers return the same generic og-image for
  many pages; 25 cards once shared one Airbnb placeholder. Drop duplicates
  and re-fetch.
- Galleries scroll horizontally with real arrow buttons and open a lightbox
  with keyboard arrows.

For fetching images for named places and venues, see
`references/imagenes.md`.

## Stack and deployment

Next.js App Router, TypeScript, plain CSS in one `globals.css` with custom
properties. This project used no Tailwind and no component library, on the
grounds that the whole style is about a hundred lines of tokens and a
utility framework hides them. Across the wider set of repos the Tailwind
question splits evenly with no stated rule, so follow whatever the repo you
are in already does, and ask if it is new.

**Keep content out of layout.** Every repo does this, in a `lib/content.ts`,
a `src/content/` file per page, or typed constants in `data/`. The reason
given is that copy edits should never touch layout, which also means a
non-engineer can change the words.

- Repo on GitHub, deployed on Vercel from that repo.
- **Do not rely on the npm `prebuild` hook.** Vercel may invoke `next build`
  directly and silently skip it. Put generation in `build` itself:
  `"build": "node scripts/fotos.mjs && next build"`. A stale generated
  manifest broke every image on a live deploy this way.
- Vercel rejects Next.js versions with open CVEs at build time. If the build
  fails with `VULNERABLE_NEXTJS_VERSION`, upgrade and move on.
- New Vercel projects inherit team SSO protection, which makes the link
  useless for the people it is meant for. Turn it off
  (`ssoProtection: null`) and verify the deployed URL returns 200 without a
  session.
- **Commit subjects are a plain imperative sentence** and the body explains
  the actual cause, not the files touched. Real examples: "Pricing goes
  quiet", "Counters count again on every visit". Match the language the repo
  already uses; English is the default and this Spanish-language project was
  the exception.

## Shared state

Sol asks for thumbs up/down, comments and user submissions on most pages,
and wants them shared, not per-browser. Put every kind of writable state in
one JSON document behind one route handler, with a pluggable backend:
Supabase if `SUPABASE_URL` and `SUPABASE_KEY` exist, Vercel Blob if
`BLOB_READ_WRITE_TOKEN` exists, otherwise server memory plus a localStorage
mirror on the client so the feature never looks broken while the store is
being provisioned. Optimistic updates, and let people delete only their own.

Details and a working shape in `references/estado.md`.

## Write the brief down

Three repos carry a `DESIGN.md` with fixed headings, and they are the ones
that needed the fewest redesign rounds. Use them: Project, Audience, Type,
Color, Space, Layout, Components, Motion, Imagery, Voice, Constraints,
References, and a **Ratified** line with the date the direction was agreed.

The Ratified line is the useful part. It converts "I don't like this" from a
restart into a diff against something already settled.

## Verify before you say it is done

Screenshot the built page with Playwright at 1440px and at 390px, log in if
there is a gate, open a modal, and look at the images. Several regressions
here were invisible in the code and obvious in a screenshot: broken images
from a stale manifest, an inverted type scale, a form with no styles. Send
the screenshot rather than describing the page.

## When a choice feels arbitrary

`references/convenciones.md` records what recurs across the other seven
repos, with the actual values, and separates what is settled from what
genuinely splits (light ground or dark, Tailwind or hand-CSS, TypeScript or
JavaScript, serif or grotesque display). Read it when starting for a client
with an existing brand, or before guessing on one of those four.

## What gets pushed back on

If you catch yourself doing any of these, stop:

- A heading smaller than its content
- Any sentence that is not load-bearing
- An em dash, or a `·` between two facts
- A lowercase button label
- Data revealed only on hover, when it is the main number
- A card with an empty image slot
- Text arrows
- A page that scrolls sideways on a phone
- Colour, of any kind, that was not asked for
