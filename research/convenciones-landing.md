# Recurring conventions across Sol's landing-page repos

Source: eight repos under `github.com/sol-rgb`, read via the GitHub API on 2026-09-20.

| Repo | Shape | Read? |
|---|---|---|
| `anthropic-careers-page` | Next.js 14 + Tailwind 3, JS | yes |
| `carrara-onboarding-hub` | static HTML/CSS/JS + serverless | yes |
| `grindr-recruiter-hub` | Vite + React 18 + Tailwind 4, TS | yes |
| `modal-emea` | Next.js 16 + Tailwind 4 + Framer Motion, TS | yes |
| `the-index` | Next.js 15, TS, plain CSS | yes |
| `forus-talent-narrative` | single static HTML + one CSS file | yes |
| `console-hiring-dashboard` | **empty** — one 26-byte README (`# console-hiring-dashboard`), one commit ("Initial commit"), no code | skipped |
| `sphere-luma-questions` | static HTML/CSS/JS, no build | yes |

So the usable sample is **seven repos**, not eight. Counts below are out of seven unless stated.

A caution on sample bias: `the-index` is a personal travel app (June 2026), not client work, and it breaks several rules the six client repos share. Where it is the lone dissenter I say so.

---

## 1. Stack

**Rule: pick the lightest thing that ships to Vercel. Static HTML+CSS+JS when the page is one scroll and the content is fixed; Next.js App Router when there are routes or a database. Never a CMS. Never a component library beyond shadcn primitives.**

### Consistent across most repos

- **Vercel deploy, push-to-main = production.** 6 of 7 state it. `anthropic-careers-page` README: "Deployed on Vercel as the `anthropic-careers-page` project, which builds this repo's `main` branch... Every push to `main` goes to production." `sphere-luma-questions` README: "Push. Vercel redeploys automatically." `forus` README gives the live `.vercel.app` URL. `carrara-onboarding-hub` and `grindr-recruiter-hub` ship `vercel.json`.
- **npm, always.** Every repo with dependencies commits `package-lock.json`. No pnpm/yarn/bun lockfile anywhere.
- **No CMS, no headless anything.** Content is typed constants in the repo (see §8).
- **No CSS-in-JS, no CSS modules.** Zero `.module.css` files in any repo.
- **Scripts are minimal.** Four of the five npm-based repos have only `dev`/`build`/`start`(/`lint`). Only `the-index` adds real build tooling (`import:lists`, `enrich:places`, `sync`).

### Splits roughly in half

- **Static vs framework.** Static, no build step: `forus-talent-narrative`, `sphere-luma-questions`, `carrara-onboarding-hub` (3). Framework: `anthropic-careers-page`, `modal-emea`, `the-index`, `grindr-recruiter-hub` (4). The static ones say so as a virtue: forus DESIGN.md, "Single HTML file plus assets. No framework, no build step, no runtime data"; sphere DESIGN.md, "No frameworks, no build step: static HTML/CSS/JS so it deploys and edits in seconds."
- **TypeScript vs JavaScript.** TS: `modal-emea`, `the-index`, `grindr-recruiter-hub` (all three have `tsconfig.json`). JS: `anthropic-careers-page` (`.jsx`, no tsconfig). The three static repos are plain JS. So TS wins among framework repos 3-to-1 but is not universal.
- **Tailwind vs hand-written CSS.** Tailwind: `anthropic-careers-page` (v3.4, `tailwind.config.js`), `modal-emea` (v4, `@theme` in globals.css), `grindr-recruiter-hub` (v4, `@theme inline`). Hand-written CSS: `forus` (69 KB `styles.css`), `carrara-onboarding-hub` (54 KB `styles.css`), `sphere` (5 KB `styles.css`), `the-index` (1.5 KB `globals.css` + inline `style={{}}` objects). So 3 Tailwind, 4 plain CSS.

### Varies / one repo only

- **Framework versions are all over the place** and each is near-latest for its date: Next 14.2.5 (`anthropic-careers-page`), Next 15.5.19 (`the-index`), Next 16.2.12 + React 19.2.4 (`modal-emea`), Vite 6 + React 18.3 (`grindr-recruiter-hub`). No pinning convention, no shared baseline.
- **Component library: only `grindr-recruiter-hub`.** It is the only repo with Radix (`@radix-ui/react-accordion`, `-tabs`, `-slot`), `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react` — i.e. a shadcn/ui setup, which its README names: `src/components/ui/  shadcn primitives (button, accordion, tabs, dialog)`. Nowhere else. It is also the only repo using a router (`wouter`) rather than file-based routes.
- **Animation library: only `modal-emea`** (`framer-motion@^12.43.0`). Everyone else animates in CSS.
- **Backends, when present, are Supabase or Vercel serverless.** Supabase: `anthropic-careers-page` (nine numbered migrations), `the-index` (Postgres + PostGIS). Vercel functions + Postgres: `grindr-recruiter-hub` (`api/`, `db/schema.sql`). Vercel functions + stateless signed codes, deliberately no DB: `carrara-onboarding-hub` ("Codes are stateless: the survey answers travel inside the code, signed with `WELCOME_SECRET`, so there is no database").
- `the-index` is the only repo calling the Claude API (`@anthropic-ai/sdk`) and the only one with a map (`maplibre-gl`).
- `anthropic-careers-page` is the only one with a `middleware.js` password gate (`SITE_PASSWORD`). `grindr-recruiter-hub` gates in the client instead (password `Grindr2026` in `src/lib/constants.ts`, `localStorage` key `gh_unlocked`) — not a real gate.

---

## 2. Color

**Rule: take the client's own palette off their live site and keep their token names. Never invent a palette. One accent, used sparingly and never as a large fill. Backgrounds are either warm off-white or pure black, essentially never a neutral grey.**

This is the strongest and best-documented convention in the set. Both `forus` and `sphere` say in DESIGN.md that the tokens were *extracted from live computed styles on a named date*, not remembered:

- forus DESIGN.md: "Extracted from live computed styles on forus.com on 2026-08-13, not from memory... Forus token names kept verbatim so the client recognises them."
- sphere DESIGN.md: "inherits its token system verbatim (extracted from the live site's `:root` custom properties on 2026-09-16)."
- modal-emea commit `Adopt Modal's real design system`: "Extracted computed styles from modal.com."

### Backgrounds: warm off-white in 4 of 7, pure black in 2, pure white in 1

Warm off-white / bone / stone:
- `anthropic-careers-page` — `--ivory-light: #faf9f5` on `body`, with `--ivory-medium: #f0eee6` for cards and `--band: #f4f2ea`.
- `the-index` — `--paper: #ece8de`, cards `--card: #f4f1e9`. README calls it "warm bone paper".
- `sphere-luma-questions` — `--bg-page: var(--color-stone-20)` = `#f9f8f3`.
- `carrara-onboarding-hub` — `--canvas: #FFFFFF` but commented `/* grainy white */`, with card blocks at `--sage-soft: #EDEBEA`. This is the pure-white one, and it is still warm in the card layer.

Pure black (`#000000`, stated as non-negotiable):
- `modal-emea` — `--color-background: #000000`; DESIGN.md says "bg #000000 (pure, non-negotiable)" and "No light mode."
- `forus-talent-narrative` — `--black-500: #141212` page ground, `--black-600: #080707` hero. DESIGN.md: "Full-bleed dark throughout. No light sections."

Plain white:
- `grindr-recruiter-hub` — `--background: 0 0% 100%`. The only repo on flat white, and the only one storing colors as bare HSL triplets rather than hex.

### Accent: exactly one, rationed

- **forus** is explicit about the budget: `--green-300: #c5fa40` — "Its job: the 'won't get you there' half of the curve, active stage numbers, the price, the CTA, and nothing else. **If it appears more than roughly eight times on the page it is being wasted.**" Its only tint is `--green-800: #37481d`.
- **modal-emea**: `--color-primary: #7fee64`, hover `#a6ff6e`. DESIGN.md: "Lime only for eyebrows, markers, active states, glows. **Never a large lime fill.**"
- **sphere**: `--color-volt: #99ff4b`, "used ONLY as the brand gradient `linear-gradient(180deg,#6ae654,#99ff4b 44%,#ddfbd3 77%,#48b45f)` on the card's top bar, **never as text**."
- **carrara-onboarding-hub**: `--orange: #EB4E19` ("Ember"), used for the active nav item and the nav rail fill.
- **grindr-recruiter-hub**: `--primary: 41 97% 54%` = amber `#FCB316`, which also appears literally in the focus ring and the search-hit highlight.
- **the-index**: `--sage: #566a4e` for labels and metadata.

Three of these accents are a lime/volt green in the same family (`#c5fa40`, `#7fee64`, `#99ff4b`) — but each is documented as the client's own color, so this is coincidence of clientele, not a house accent.

**`anthropic-careers-page` is the exception: it is not monochrome-plus-one.** It carries a twelve-color flat tile palette — `clay #d97757`, `kraft #d4a27f`, `olive #788c5d`, `cactus #bcd1ca`, `oat #e3dacc`, `manilla #ebdbbc`, `sky #6a9bcc`, `heather #cbcadb`, `coral #ebcece`, `fig #c46686` — used as per-team card fills (`style={{ backgroundColor: t.color }}`). Its README names the pattern: "flat colour tiles, hairline dividers."

### Real `:root` blocks

`anthropic-careers-page/app/globals.css` (comment in file: "Tokens lifted verbatim from the recruiter playbook."):

```css
:root {
  --font-sans: "Anthropic Sans", "Instrument Sans", system-ui, -apple-system, sans-serif;
  --font-serif: "Anthropic Serif", "Newsreader", "Tiempos Text", Georgia, serif;

  --slate-dark: #141413;  --slate-medium: #3d3d3a;  --slate-light: #5e5d59;
  --ivory-light: #faf9f5; --ivory-medium: #f0eee6;  --ivory-dark: #e8e6dc;
  --cloud-light: #d1cfc5; --cloud-medium: #b0aea5;  --cloud-dark: #87867f;
  --clay: #d97757;  --accent-clay: #c6613f;  --kraft: #d4a27f;  --olive: #788c5d;
  --cactus: #bcd1ca; --oat: #e3dacc; --manilla: #ebdbbc; --sky: #6a9bcc;
  --heather: #cbcadb; --coral: #ebcece; --fig: #c46686;
  --ink: #141413; --ink-2: #46453f; --muted: #5e5d59; --muted-2: #73726c;
  --band: #f4f2ea; --paper: #fff;
  --line: #d8d8d1; --line-strong: #c4c2b8;
  --hair: 1px solid #d8d8d1;  --hair-strong: 1px solid #c4c2b8;

  --r-btn: 8px; --r-card: 12px; --r-lg: 16px; --nav-h: 64px;
}
```

`forus-talent-narrative/styles.css` (client token names kept verbatim):

```css
:root{
  --black-600:#080707; --black-500:#141212; --black-400:#1d1a1b;
  --black-300:#252222; --black-200:#2e2929;
  --greige-0:#fff; --greige-50:#fcfbfa; --greige-100:#f2f0ec;
  --greige-200:#e5e1d9; --greige-300:#c1bcb1; --greige-400:#a59e93; --greige-700:#66645c;
  --green-300:#c5fa40; --green-800:#37481d;
  --purple-200:#ebe2ff; --purple-800:#3a246a;
  --blue-300:#94e2fb; --blue-800:#123f64;
  --fuschia-200:#ffd5f1; --fuschia-800:#69183b;

  --r-ctl:4px; --r-pill:999px; --r-card:10px;
  --hair-dark:rgba(242,240,236,.14);
  --hair-light:rgba(29,26,27,.12);

  --serif:Rosart,Rockwell,"Roboto Slab","DejaVu Serif",serif;
  --sans:Diatype,"System UI",Arial,sans-serif;

  --maw:1160px;
  --pad:clamp(20px,5vw,48px);
  --band:clamp(72px,8vw,116px);
}
```

Note the purple/blue/fuschia tokens are carried but unused — DESIGN.md: "Deliberately unused: the purple, yellow, blue, fuschia and magenta tokens Forus carries for product surfaces. This page is black, bone and lime."

`sphere-luma-questions/styles.css`:

```css
:root {
  --color-night: #0d0e0d;
  --color-volt: #99ff4b;
  --color-mint: #dcf8da;
  --color-stone-20: #f9f8f3;
  --color-stone-40: #ecebe7;
  --color-stone-60: #dfddcf;
  --color-midnight-40: #5e625e;
  --color-midnight-60: #414441;
  --color-midnight-80: #2e312e;
  --color-midnight-100: #1f231f;
  --color-white: #ffffff;

  --bg-page: var(--color-stone-20);
  --surface: var(--color-white);
  --text-primary: var(--color-night);
  --text-secondary: var(--color-midnight-60);
  --text-muted: var(--color-midnight-40);
  --border-subtle: var(--color-stone-60);

  --gradient-primary: linear-gradient(180deg, #6ae654 0%, #99ff4b 44%, #ddfbd3 77%, #48b45f 100%);

  --font-primary: "Cambon", Georgia, "Times New Roman", serif;
  --font-secondary: "CoFo Gothic", "Helvetica Neue", Arial, sans-serif;

  --radius-md: 16px;
  --radius-pill: 999px;

  --dur-base: 320ms;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

`the-index/app/globals.css` — the whole palette is six tokens:

```css
:root {
  --paper: #ece8de;
  --card: #f4f1e9;
  --ink: #1f1d18;
  --sage: #566a4e;
  --warm-grey: #8a857a;
  --hairline: #c9c3b5;
}
```

`carrara-onboarding-hub/styles.css`:

```css
:root {
  /* Carrara palette: Marmol canvas, Grafite ink, Nuvola neutral, Ember signature */
  --canvas: #FFFFFF; /* grainy white */
  --ink: #2D2A2A;
  --taupe: #9A938E;   /* Nuvola */
  --ardesia: #59534F;
  --sage: #A2C59B;    /* Moss accent */
  --sage-soft: #EDEBEA; /* cards read as Marmol blocks on grainy white */
  --orange: #EB4E19;  /* Ember */
  --blue: #B2CDED;    /* Cielo */
  --hairline: rgba(45, 42, 42, 0.14);
  --serif: 'Portrait', 'PT Serif', Georgia, serif;
  --sans: 'Manrope', 'Helvetica Neue', Arial, sans-serif;
  --rigid: 'Manrope', sans-serif;
  --chamfer: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%);
  --rock: polygon(0 14%, 10% 0, 86% 0, 100% 12%, 100% 84%, 88% 100%, 6% 100%, 0 90%);
}
```

`modal-emea/app/globals.css` uses Tailwind 4 `@theme` rather than `:root`, which is functionally the same thing:

```css
@theme {
  --color-background: #000000;
  --color-panel: #121412;
  --color-panel-elevated: #212525;
  --color-border: rgba(221, 255, 220, 0.16);
  --color-border-strong: rgba(221, 255, 220, 0.35);
  --color-card: #181818;
  --color-card-hi: #212525;
  --color-mint: #def0dd;
  --color-foreground: #ddffdc;
  --color-muted: rgba(221, 255, 220, 0.6);
  --color-faint: #5b6d5c;
  --color-primary: #7fee64;
  --color-primary-hover: #a6ff6e;
  ...
  /* lassie.ai's expo-out curve: fast start, long soft landing */
  --ease-quint: cubic-bezier(0.22, 1, 0.36, 1);
}
```

One more detail worth carrying: **the border color is often a tint of the foreground, not a grey.** modal-emea's `--color-border: rgba(221, 255, 220, 0.16)` is the mint text at 16%; carrara's `--hairline: rgba(45, 42, 42, 0.14)` is the ink at 14%; forus has both `--hair-dark: rgba(242,240,236,.14)` and `--hair-light: rgba(29,26,27,.12)`.

---

## 3. Typography

**Rule: a serif (or distinctive display face) for headings at weight 400, never bold; a neutral sans for body; a monospace for eyebrows, indices, counters and labels. Self-host or `next/font` the client's real licensed faces. Negative tracking on display type, roughly -0.015em to -0.05em, scaling more negative as size grows.**

### The serif-display + sans-body + mono-label triad: 5 of 7

| Repo | Display | Body / UI | Labels / data |
|---|---|---|---|
| `anthropic-careers-page` | Anthropic Serif 400 | Anthropic Sans | (no mono; small caps labels were removed, see below) |
| `forus-talent-narrative` | Rosart 400 | ABC Diatype 400/500 | ABC Diatype Mono 400 |
| `sphere-luma-questions` | Cambon Light 300 | CoFo Gothic 400/500 | CoFo Gothic 500 13px |
| `the-index` | Newsreader (italic) | Courier Prime (mono *is* the body) | Courier Prime 11px |
| `carrara-onboarding-hub` | Portrait 400/500 | Manrope | Manrope 600 11.5px (`--rigid`) |
| `modal-emea` | Goga 300–700 (variable) | Inter 400–700 | Fira Mono 400/500/700 |
| `grindr-recruiter-hub` | — | IBM Plex Sans 400/500/600/700 | — |

**Weight 400 for headings is near-universal and stated as a rule.** forus DESIGN.md: "Forus sets every heading in it at weight 400, never bold." `anthropic-careers-page` globals.css comment: "Serif display face: regular weight, tight tracking, **no faux bold**." `the-index` globals.css: `h1,h2,h3,h4 { font-family: var(--font-newsreader); font-weight: 400; }`. modal-emea's section headings are `font-normal`; only the hero is `font-medium`.

**`grindr-recruiter-hub` is the lone dissenter** — one family (IBM Plex Sans) for everything, and it aliases mono to the same sans:

```css
--font-sans: "IBM Plex Sans", sans-serif;
--font-mono: "IBM Plex Sans", sans-serif;
```

### Where fonts come from

- **Self-hosted woff2 is the default for client brand faces (4 of 7).** `forus` ships `fonts/Rosart-Regular.woff2` etc. with `font-display: swap`, pulled from forus.com/fonts. `sphere` ships `assets/fonts/Cambon-Light.woff2`, `CoFoGothic-Regular/-Medium.woff2`. `carrara-onboarding-hub` ships `Portrait-Medium-Web.woff2` and `Manrope-Variable.woff2`. `grindr-recruiter-hub` ships four IBM Plex `.ttf` files (the only repo shipping TTF rather than WOFF2).
- **`next/font/google` for Google faces (2 of 7).** `modal-emea`: `Inter` + `Fira_Mono`, each with an explicit `variable` and `weight` array. `the-index`: `Newsreader` (with `style: ["normal","italic"]`), `Courier_Prime`, `Archivo`, all `display: "swap"`.
- **One hybrid: `modal-emea`** loads Modal's own display face by `@font-face` from the client's CDN, with a comment explaining why it works: `/* Modal's display face, from their own CDN (served with open CORS) */`, `src: url("https://modal-cdn.com/fonts/Goga-VariableVF.woff2")`.
- **One fetch-at-build script: `anthropic-careers-page/fetch-assets.sh`**, because "File-based deploys ship no binaries; the fonts and marks are pulled from the live Platform Table site, which serves the same files publicly." It is a no-op on a git checkout.
- Font licensing is flagged, not assumed. forus README open items: "Fonts are Forus's licensed commercial faces (Rosart by Displaay, ABC Diatype by Dinamo), self-hosted here for a private proposal." DESIGN.md: "flagged to the client rather than assumed."

### Negative tracking on display type: 6 of 7

Real values found:

- `forus`: `h1,h2 { letter-spacing: -.04em }` — and `-.04em` recurs on essentially every serif element (`.fig p`, `.rcard .t`, `.dlg__ttl`, `.menubar__t`, `.stage__t`, `.beat__h`, `.tile__t`). The largest type goes further: `.fee { font-size: clamp(50px,8vw,96px); letter-spacing: -.05em }`. Body is `-.4px` at 16px. DESIGN.md gives the pixel intent: "-1.4px at 56px, -1.28px at 32px, -0.65px at 26px."
- `anthropic-careers-page`: `.display { letter-spacing: -0.022em; line-height: 1.08 }`, and `body { letter-spacing: -0.01em }` — tracking is tightened on body copy too, which is unusual and worth noting.
- `carrara-onboarding-hub`: `-0.02em` on the largest heading, `-0.015em` on the standard serif heading (the most common value in the file), `-0.01em` on smaller ones.
- `sphere`: `.page-title` and `.question` both `letter-spacing: -0.018em`.
- `modal-emea`: `tracking-[-0.01em]` on the hero h1 and sub; DESIGN.md says "Display headlines text-4xl→6xl, tracking -0.02em."
- `the-index` sets no negative tracking anywhere — its display face is set in italic Newsreader at default tracking.

**Positive tracking is reserved for the mono/label tier**, and is large: `the-index` `.label { letter-spacing: 0.15em; text-transform: uppercase }` and `.wordmark { letter-spacing: 0.2em }`; forus `.proccols__h { letter-spacing: .14em; text-transform: uppercase }`, `.stage__n { letter-spacing: .18em }`; carrara nav `letter-spacing: 0.04em`; sphere `.btn { letter-spacing: 0.02em }`.

### Type scale

**There is no shared named scale.** Only `forus` behaves like it has one, via repeated `clamp()` steps: `clamp(19px,2vw,25px)` / `clamp(22px,2.4vw,31px)` / `clamp(26px,3.2vw,40px)` / `clamp(30px,5vw,60px)` / `clamp(50px,8vw,96px)`. Everyone else sets sizes ad hoc — `modal-emea` uses Tailwind's steps (`text-4xl`→`text-7xl`), `the-index` writes pixel values inline in `style={{}}`, `anthropic-careers-page` writes one-off `text-[clamp(2.2rem,5vw,4.2rem)]` and `text-[16.5px]`.

One genuinely distinctive technique, in `sphere` only: **a type scale stepped by content length**, so cards of different question lengths fill the same fixed frame.

```css
.question    { font-size: clamp(28px, 7vw, 44px); line-height: 1.2; }
.question.q-md { font-size: clamp(24px, 5.5vw, 36px); }
.question.q-sm { font-size: clamp(20px, 4.5vw, 28px); line-height: 1.3; }
.question.q-xs { font-size: clamp(17px, 4vw, 22px); line-height: 1.4; }
```

### Uppercase: contested

- **For:** `the-index` (`.label`, `.wordmark`, all metadata uppercase mono), `forus` (`.proccols__h`, mono eyebrows — DESIGN.md: "Uppercase only in the mono, never in Rosart"), `modal-emea` (DESIGN.md: "Eyebrows: mono 10-11px uppercase tracking-widest, lime"), `carrara-onboarding-hub` (11 `text-transform: uppercase` rules).
- **Against, explicitly:** `sphere` DESIGN.md — "**NO all caps anywhere**: the brand never sets labels in uppercase." `modal-emea` commit `Polish pass`: "**No all-caps anywhere.**" (contradicting its own DESIGN.md, see open questions). `anthropic-careers-page` commit: "Also dropped the all-caps labels on panel headings and contact roles."

The honest reading: uppercase is allowed *only* in the mono/label tier, *only* when the client's own brand does it, and it gets stripped whenever someone looks at the page again.

### Body settings

Line-height on body copy is generous and varies by repo: `1.4` (forus, sphere), `1.6` (the-index), `1.7` (anthropic-careers-page), `1.8` (carrara-onboarding-hub). Base body size is 16px in 5 repos; `the-index` sets 14px because its body face is a monospace.

`-webkit-font-smoothing: antialiased` is on `body` in **all seven**.

---

## 4. Layout

**Rule: one centered container, a fluid side gutter, and hairline rules (not boxes, not shadows) to separate sections. Cards are a single flat fill OR a single hairline border, never both.**

### Max widths

No single number, but all sit in one band:

| Repo | Container | Prose measure |
|---|---|---|
| `anthropic-careers-page` | `.shell { max-width: 1440px }` | `max-w-prose: 46rem` (736px), plus `max-w-[20ch]` on the h1 |
| `forus` | `--maw: 1160px` | 680px narrow measure (DESIGN.md); `max-width: 22ch` on hero, `16ch` on `.beat__h` |
| `modal-emea` | `max-w-6xl` (1152px) | `max-w-4xl` hero, `max-w-2xl` sub, `max-w-xl` detail |
| `carrara-onboarding-hub` | 220px fixed sidebar + fluid main; content blocks capped 720–900px | `max-width: 48ch` on descriptions |
| `sphere` | 640px | 640px |
| `the-index` | 480px (mobile-first app) | 480px |

**Character-based measures (`22ch`, `20ch`, `16ch`, `48ch`) show up in 3 repos** and are worth lifting as a convention — the headline measure is set in `ch`, not px.

### Gutters

- `forus`: `--pad: clamp(20px, 5vw, 48px)` — one token, fluid.
- `anthropic-careers-page`: stepped, `20px` → `32px` at 760px → `48px` at 1200px.
- `modal-emea`: `px-5 md:px-8` (20px → 32px). DESIGN.md states it as a rule: "max-w-6xl content, px-5 md:px-8".
- `sphere`: `body { padding: 20px }`.

**20px is the mobile gutter in 4 of 7.**

### Section separation: hairline rules, and vertical rhythm as a token

- `modal-emea` puts `border-t border-border` on every `<section>` (`Findings.tsx`, `Phases.tsx`), with `py-24 md:py-28`. DESIGN.md: "section padding py-24/py-28, border-t border-border between sections."
- `forus`: `--band: clamp(72px, 8vw, 116px)`; DESIGN.md says "clamp(96px, 12vh, 176px) vertical between movements" (the token and the doc disagree — see open questions).
- `the-index` has a `<HairlineRule />` component used between every row, backed by `.hairline { border-top: 1px solid var(--hairline) }`.
- `anthropic-careers-page` ships `--hair: 1px solid #d8d8d1` and `--hair-strong` as ready-made tokens, and a commit moves *away* from filled blocks: "Points of contact and the three section links **drop their filled blocks for a title, a line of explanation and a hairline rule above each**."
- `carrara-onboarding-hub`: `.stat-strip { border-top: 1px solid var(--hairline); border-bottom: 1px solid var(--hairline) }`.
- `modal-emea` commit `Convert sections to Modal's hairline panel format`: "become single hairline-bordered containers divided by 1px rules with square lime markers... The presence table and the campaign panel **drop their fills for hairline borders**, and every bullet list renders as hairline-separated rows."

### The card rule, stated outright

`anthropic-careers-page/app/globals.css` carries the clearest statement:

```css
/* Surfaces. Two treatments only, and never a fill with a contrasting border:
   a block is one flat colour edge to edge, or it isn't a block at all and
   rows are divided by a hairline. */
.card       { background: var(--ivory-medium); border: 0; border-radius: var(--r-card); }
.card-line  { background: transparent; border: 1px solid var(--line-strong); border-radius: var(--r-card); }
```

`modal-emea` commit `Solid single-color cards`: "Cards drop borders for one solid fill each and equal heights."

### Lists are hairline-separated rows, not bullets

`modal-emea/components/primitives.tsx`, `Bullets` — "One sentence per bullet. Lime dot marker, never a native list style":

```tsx
<li className="flex gap-3.5 border-t border-border py-3.5 text-[15px] leading-relaxed first:border-t-0">
  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-primary" />
  ...
</li>
```

Note the marker is a **square** (`h-2 w-2`, no `rounded-full`), and the bullet splits on `": "` to render a bold lead and a muted tail. `forus` DESIGN.md names the same device as `.bul`, and has a hard rule against loose prose:

> **No lone paragraphs.** Prose either carries a number, sits paired with a lead line, or becomes a list. The components for this are `.split`, `.stats`, `.callout` and `.bul`. A block of running text with nothing structural around it does not ship.

`modal-emea` DESIGN.md says the same more briefly: "Structure over walls of text: two sentences max under a card heading, then dot bullets."

### Border radius

Radii are small and tokenised, and the pill is reserved for buttons:

| Repo | Control | Card | Large | Pill |
|---|---|---|---|---|
| `anthropic-careers-page` | `--r-btn: 8px` | `--r-card: 12px` | `--r-lg: 16px` | — |
| `forus` | `--r-ctl: 4px` | `--r-card: 10px` | — | `--r-pill: 999px` |
| `sphere` | — | `--radius-md: 16px` | — | `--radius-pill: 999px` |
| `grindr-recruiter-hub` | `--radius: 0.5rem` (8px), with `calc(var(--radius) - 4px)` / `- 2px` derived steps | | | |
| `modal-emea` | `rounded-xl` (12px) panels, `rounded-2xl` (16px) cards and images, `rounded-full` buttons | | | |

**`carrara-onboarding-hub` is the standout: radius is zero everywhere.** The only three `border-radius` declarations in its 54 KB stylesheet are `border-radius: 0`. Corners are cut with `clip-path` polygons instead — `--chamfer` (one clipped top-right corner) and `--rock` (an irregular eight-point stone silhouette). That is a deliberate brand device (Carrara = marble), not a general convention.

### Shadows: rare, and only to signal "this navigates"

- `carrara-onboarding-hub`: **2** `box-shadow` declarations in 54 KB.
- `forus`: DESIGN.md calls for "a deep upward shadow" on the card stack — used structurally, once.
- `anthropic-careers-page` is the one repo with a real hover-shadow pattern, and it is scoped to links:

```css
/* Anything that navigates. Flat at rest, lifts and casts a shadow on hover. */
.tile { transition: transform 0.12s ease, box-shadow 0.12s ease; }
.tile:hover  { transform: translateY(-3px); box-shadow: 0 12px 28px -12px rgba(20,20,19,0.28); }
.tile:active { transform: translateY(-1px); box-shadow: 0 4px 12px -6px rgba(20,20,19,0.24); }
```

- `modal-emea` uses exactly one shadow, on the selected competitor card: `shadow-[0_18px_45px_rgba(0,0,0,0.65)]`. Its `card-lift` is `translateY(-4px)` plus a border tint.

`forus` bans two effects outright: "Explicitly banned because they cost frames: `backdrop-filter` on any fixed or scrolling layer, `mix-blend-mode` on anything full-bleed, and transforms written from script during scroll. All three were in the first build and all three were the jank." Also: "No gradient meshes. No glassmorphism. **No three-card feature grid anywhere.**"

### Navigation

Fixed, minimal, and often a vertical rail rather than a top bar:
- `modal-emea`: logo fixed top-left, vertical section menu fixed at left middle, `xl:` only, mono 12px, active item marked by a growing `h-px` line (`w-3` → `w-6`) rather than a color block.
- `carrara-onboarding-hub`: 220px fixed left sidebar with a 2px `.nav-rail` whose orange fill height animates.
- `anthropic-careers-page`: fixed top bar, `--nav-h: 64px`, `html { scroll-padding-top: 96px }`, and a `pt-16` spacer div.
- `sphere` / `the-index`: no nav at all.

---

## 5. Motion

**Rule: one easing curve per project, declared as a token. Reveals are short (0.3–0.6s), small (12–38px), and fire once. Every animation has a `prefers-reduced-motion` branch that renders the final state. Never drive a scroll effect from a JS scroll listener.**

### Easing

Two curves recur, both "expo-out" shaped (fast start, long landing):

- `cubic-bezier(0.22, 1, 0.36, 1)` — `modal-emea`, as both a CSS token and a TS constant, with the same comment in both places: `/* lassie.ai's expo-out curve: fast start, long soft landing */` and `export const QUINT = [0.22, 1, 0.36, 1] as const;`
- `cubic-bezier(0.16, 1, 0.3, 1)` — `sphere`, as `--ease-out`.

Everywhere else it is plain `ease` / `ease-out`.

### Durations

Short and clustered:

- `anthropic-careers-page`: `0.12s` on every hover/lift transition; `0.15s` on the `panel-rise` keyframe.
- `carrara-onboarding-hub`: `0.18s`–`0.25s` for color/border, `0.45s` for the reveal, `0.5s` for the progress bar.
- `sphere`: `--dur-base: 320ms` for the question swap, `180ms` for button states, and **`140ms` on the way out** (`.question.is-leaving { transition-duration: 140ms }`) — leave faster than you enter.
- `modal-emea`: `0.6s` for `Reveal`, `1s` for `ClipReveal`, `0.55s` for the hero fade with `0.1`/`0.24` stagger delays, `0.22s` for the detail cross-fade, `900ms` for the count-up.
- `grindr-recruiter-hub`: `0.2s` accordion open/close.

`forus` DESIGN.md sets an explicit ceiling: "Expandables animate height and opacity, 320 to 420ms, on real interaction." `sphere` uses the same word: "One transition: question swap, 320ms... **Ceiling, not target.**"

### Reveal distances

12px (`forus` `@keyframes rise`, `sphere` `.is-leaving`), 16px (`modal-emea` hero), 20px (`modal-emea` `Reveal`), 28px (`grindr-recruiter-hub` `[data-fx="deal"]`), 38px (`forus` card entry). `modal-emea` DESIGN.md: "Reveal fade-up (12px, 0.3s, once, 25% viewport)" — though the shipped `primitives.tsx` is 20px / 0.6s, another doc-vs-code drift.

`viewport={{ once: true, amount: 0.25 }}` in `modal-emea` — **reveals fire once and never replay**.

### `prefers-reduced-motion`: present in all seven

Three distinct approaches:

1. **Blanket kill switch** (`modal-emea/app/globals.css`):
```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
2. **Per-effect final state** (`carrara-onboarding-hub`): `.reveal, .reveal.in { opacity: 1; transform: none; transition: none; } html { scroll-behavior: auto; }` — plus separate opt-outs for `.wk-dot` and `.bv-chev`. `grindr-recruiter-hub` does the same per-animation (`.fw-spin`, `.dot-breathe`).
3. **Inverted — animate only on `no-preference`** (`forus`). The scroll-driven rules sit *inside* `@media (prefers-reduced-motion: no-preference)`, so the static state is the default and motion is added. `forus` has 14 `no-preference` blocks and 10 `reduce` blocks.

In JS, `modal-emea` uses Framer's `useReducedMotion()` and **returns a plain `<div>` before animating at all**, rather than animating to zero:

```tsx
const reduced = useReducedMotion();
if (reduced) return <div className={className}>{children}</div>;
```
and in `useCountUp`: `const [value, setValue] = useState(reduced ? target : 0)`.

### Scroll-driven, not scroll-listened

`forus` DESIGN.md states the strongest version:

> **The rule: nothing animates from a scroll event listener.** Every scroll-linked effect runs on a CSS scroll-driven timeline, which the compositor owns, so script never runs between a wheel event and a frame. This is what keeps the scroll smooth, and it is worth more than any individual effect.

It uses `animation-timeline: view()`, `timeline-scope`, `scroll(root)` and `animation-range: entry 4% entry 42%`. There is no pinning: "**No pinning and no scroll hijacking.** The page moves exactly as far as the wheel says it should."

`modal-emea` and `grindr-recruiter-hub` reach the same goal differently, with a **`requestAnimationFrame` loop instead of a scroll event**, each with a comment explaining why. `modal-emea/Nav.tsx`: "Tracks the section closest to the top of the viewport with a rAF loop rather than scroll events, which the preview pane disables." `grindr-recruiter-hub/index.css`: "A scroll listener sets `--p` (0..1) on every `[data-fx]` element; these rules map it to the visual. No scroll-timeline involvement, so it behaves identically everywhere."

And smooth-scroll libraries were tried and rejected. `modal-emea` commit `Remove Lenis, return to native scrolling`: "Two rounds of tuning still felt wrong on a trackpad: Lenis re-smooths input that macOS already smooths, which reads as lag. Native scrolling comes back... and the dependency is gone. The quint easing, clip reveals and scroll-linked timeline stay."

### Focus rings are designed, not defaulted

Three repos style `:focus-visible` explicitly, always in the accent color:
- `forus`: `:focus-visible { outline: 2px solid var(--green-300); outline-offset: 2px; border-radius: var(--r-ctl) }`
- `anthropic-careers-page`: `.tile:focus-visible { outline: 2px solid var(--accent-clay); outline-offset: 3px }`
- `grindr-recruiter-hub`, at zero specificity so components can override — "One visible focus style for everything, at zero specificity so any component can still override it":
```css
:where(a, button, input, textarea, select, summary, [role="button"], [tabindex]):focus-visible {
  outline: 2px solid #FCB316;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(31, 31, 32, 0.12);
  border-radius: 4px;
}
```

---

## 6. Content and copy

**Rule: English, sentence case, second person, no em dashes, no invented facts. Every number traces to a named source. Section indices are mono numerals.**

### Language: English throughout

All seven repos are English. No Spanish UI copy anywhere, in labels or content. `<html lang="en">` in every HTML file checked.

The only Spanish is incidental data in `the-index`: its README names the owner's Google Maps list folders ("Paris, Ny, Madrid, Japon, Ibiza, Cerdeña, Menorca, Mykonos"), i.e. private input filenames, not UI. `the-index` also uses British spellings in code and copy (`neighbourhood`, `normalises`, `Cafés`) while `sphere` DESIGN.md mandates "US spelling" — so spelling is not standardised across repos.

### The no-em-dash rule: stated in 3 repos, followed in 5

- `modal-emea` README, content rule 2: "**No em dashes.** Use colons, commas or parentheses. Middle dots (`·`) for separators." DESIGN.md repeats it: "No em dashes anywhere; use colons, commas, parentheses; middle dot for separators."
- `forus` DESIGN.md: "No em dashes."
- `sphere` DESIGN.md: "NO em dashes (commas/colons/full stops)."
- **Violated in `the-index`** seed copy: "The one that never stops giving — if you know where to look", "Do not be put off by the line", "Part bookshop, part archive, entirely essential." Several em dashes in `lib/data/cities.ts`. This is the June 2026 personal repo, predating the rule's appearance in the August/September client repos.
- **Violated in `grindr-recruiter-hub`** `index.html` meta: `"Grindr Recruiter Hub — internal recruiter playbook."`

The middle dot (`·`) as the sanctioned separator does show up in practice: `sphere` page title `Table Talk · Ground Truth`, `anthropic-careers-page` footer `&middot;`, `sphere` DESIGN.md "Vol. 1 · Invite only".

### Second person, and the ban on meta-titles

`modal-emea` README, rules 3 and 4:

> 3. **Second person throughout.** "You sell the layer everything else runs on."
> 4. **No meta-titles.** A section is called "Why this seat is different", never "Why Modal, summarized".

Its DESIGN.md: "Second person to Modal ('Your London office reached the press before you did')."

Nav labels in `modal-emea` follow it: "Why now", "EMEA presence", "Two offices", "Market audit", "Campaign", "Timeline", "Built already" — all sentence case, all concrete, none a meta-description.

### Banned vocabulary

`forus` DESIGN.md: "No 'transform', 'unlock', 'elevate', 'partner with', 'in today's landscape'. Never describe the work as a journey." Plus: "Plain declarative sentences... short, specific, unembarrassed. **Numbers wherever a number exists.**"

There is a recurring commit verb for this: **"deslop"**. `modal-emea` has `Deslop the bullet leads: plain labels over clever fragments` and `Deslop pass plus built-for-teams subtitle` ("Dead thread exports removed, conversational pivots and aphorisms rewritten, redundant phrasing trimmed"). `anthropic-careers-page` has a whole commit on it: "The worst of it explained the mechanism instead of saying the thing: 'the tactical layer, gathered async so interview time stays on the narrative' is now 'the practical questions, teams answer in writing so the calls aren't spent on logistics'."

### Nothing invented, and placeholders are visibly marked

This is the most-repeated content rule in the set.

- `modal-emea` README rule 1: "**Nothing is invented.** Every number, quote, comp band and role detail traces to a public source: Modal's Ashby board, modal.com, the Modal blog, Justin Dignelli's joining post, or a named customer case study."
- `forus` DESIGN.md: "No fabricated logos, testimonials, metrics or client names beyond what the SOW documents already state as fact. **Every dollar figure and every statistic traces to the SOW. If it is not in the SOW it does not go on the page.**"
- `sphere` DESIGN.md: "No fabricated content presented as real: until the Luma export lands in questions.js, `PLACEHOLDER=true` renders a visible 'sample questions' notice on the page." The notice text: "Sample deck for setup. The submitted questions land before doors open."
- `forus`, on imagery: "Until final images are chosen, placeholders render with a visible `PLACEHOLDER` label so nothing unmarked ships." And a commit: "The diagnosis bullets are TBD pending Forus's own interview data. They are marked as placeholders and read muted so nobody mistakes them for findings."
- `anthropic-careers-page` README: "Empty fields render as skeletons, **never as 'TBD' lines**."
- Both `modal-emea` and `forus` README carry "Known gaps" / "Open items" sections listing exactly what is unverified, including where two sources disagree: "The Ramp merged-PR figure is stated as 'more than half' per the February case study. The Series C post says 70%. **Do not blend the two.**"
- `modal-emea` README ends with a disclaimer: "Independent candidate resource. Not an official Modal Labs page."

### Section numbers and index codes: yes, in mono

- `forus`: `.stage__n { font-family: var(--sans); font-size: 14px; letter-spacing: .18em; color: var(--green-300) }` — six numbered stage bands, "Mono index, Rosart headline, one-line body, expandable detail." DESIGN.md also calls for "mono week numbers" on the 12-week timeline. Its hidden pricing page is `pricing-x94q.html` — an unguessable index code as the URL.
- `modal-emea`: the phase rail renders `ph.num` in `font-mono text-[11px] tabular-nums`. DESIGN.md ratifies "numbered section indices."
- `sphere`: "Vol. 1" tag in the header; the card carries a "Question · counter" label row; the whole design is lifted from the event site's `"SW054000 · Software"` catalog-code device.
- `the-index`: README calls the aesthetic "archival / museum-label / receipt"; place pages are a "museum object label", the planner output a "receipt itinerary".
- Not present: `anthropic-careers-page`, `carrara-onboarding-hub`, `grindr-recruiter-hub`.

`tabular-nums` / `lnum` is deliberate: `anthropic-careers-page` body sets `font-feature-settings: "pnum" on, "lnum" on, "liga" on`.

### Capitalisation in UI labels: sentence case

Consistent across all seven. "Draw another question" (sphere), "Why now" / "Built already" (modal), "The Narrative" / "Battle cards" / "Recruiter FAQ" (grindr), "Not started, In progress, Done" (anthropic-careers-page), "Plan a Trip" (the-index — Title Case, the lone exception). Note the `anthropic-careers-page` commit renaming a column purely on nuance: "**Board's first column is Not started.** 'Up next' implies something is queued. Most of these have not been picked up at all yet, and the board should say so."

### Copy density: dense, but structured

Copy is substantive, not thin marketing lines — but it is always broken into lead-plus-detail. `grindr-recruiter-hub`'s home hero sub is two full clauses ("Grindr is an exceptional business, doing work at the technical frontier, with a consequential mission. All three in one building of about 200 people."), followed by four stat tiles with labels ("FY25 revenue, up 28%", "monthly active users", "chats sent in 2025", "people in the whole company") and a six-item nav grid where every item has a one-line `desc`. `modal-emea`'s cap is explicit: "two sentences max under a card heading, then dot bullets."

Stat counters that count up on entry appear in 3 repos (`modal-emea` `useCountUp`, `grindr-recruiter-hub` stats, `forus` `.stats`).

---

## 7. Mobile

**Rule: `max-width` media queries in hand-written CSS, `min-width` Tailwind prefixes in Tailwind repos. Breakpoints are chosen per component, not from a shared scale. Below the breakpoint: multi-column grids collapse to one, side rails and hover-only affordances are hidden, full-width buttons.**

**There is no shared breakpoint set.** The values in use:

- `forus` (`max-width`): **900, 880, 640, 620, 600, 560** px. Uses many, each chosen where a specific component breaks.
- `carrara-onboarding-hub` (`max-width`): **1200, 1080, 900, 860, 720, 620** px.
- `anthropic-careers-page` (`min-width`): **760, 1024, 1200** px for the shell gutters and scrollbar styling, plus Tailwind's `sm:` / `lg:` / `xl:` on the card grid.
- `sphere` (`min-width`): **640** px only. One breakpoint in the whole file.
- `modal-emea`: Tailwind defaults, essentially only `md:` (768px) plus `xl:` (1280px) for the vertical nav.
- `grindr-recruiter-hub`, `the-index`: Tailwind defaults / none.

The only near-consensus is **a break somewhere in 620–720px** (forus 620, carrara 620/720, sphere 640, modal `md:` 768) and **a break around 860–900px** (forus 880/900, carrara 860/900).

### What actually changes

- **Grids collapse to one column.** `forus`: `@media(max-width:880px){.two{grid-template-columns:1fr;gap:30px}}`, `@media(max-width:600px){.proccols{grid-template-columns:1fr;gap:24px}}`, `@media(max-width:560px){.def{grid-template-columns:1fr;gap:6px}}`. Its menu grid steps 4 → 2 at 900px → 1 at 600px. `carrara`: `.rock-grid` goes to `repeat(2, 1fr)` at 1200px.
- **Rails, nav links and hints are hidden, not restacked.** `forus`: `@media(max-width:900px){.nav__links{display:none}}`, `@media(max-width:620px){.railnav{display:none}}`, `@media(max-width:620px){.railhead .hint{display:none}}`. `carrara`: `@media (max-width: 900px) { .hovercard { display: none !important; } }` and `@media (max-width: 620px) { .gal-hint { display: none; } }`. `modal-emea`: the vertical section nav is `hidden ... xl:flex`.
- **Buttons go full width below the breakpoint.** `sphere` defaults `.btn { width: 100% }` and only at `min-width: 640px` does `.btn { width: auto; align-self: center; padding: 16px 48px }`. `carrara`: `@media (max-width: 620px) { .bv-skill-act { width: 100%; } }`.
- **Images shrink proportionally.** `forus`: `@media(max-width:560px){.tilt img{width:44%}}`, `@media(max-width:880px){.tilt--stage img{width:min(300px,50%)}}`.
- **Hover is feature-detected, not breakpoint-detected**, in `sphere`: `@media (hover: hover) { .btn:hover { ... } }`, with `.btn:active { transform: scale(0.98) }` as the touch affordance. Only repo doing this, and it's the only explicitly mobile-first one.

`sphere` is the only repo that treats mobile as the primary target: DESIGN.md, "Senior engineers in AI x regulated industries, at a table, on their phones, ambient light. **Mobile-first.**" It uses `100dvh` and `clamp(280px, 44dvh, 420px)` for the card height, and `touch-action: manipulation` on the button. `the-index` is also phone-shaped (480px container) but says so nowhere.

Two repos ship a web app manifest and apple-touch icons (`grindr-recruiter-hub`, `the-index`); `grindr-recruiter-hub` sets `maximum-scale=1` in its viewport meta, which the others do not.

---

## 8. Repo hygiene

**Rule: content lives in typed constants in one folder, separate from layout. A DESIGN.md holds the locked brief. README says what the project is, where the copy lives, how to run it, and what is still unverified. Commit subjects are imperative sentences describing the change in plain language, with a body explaining the cause.**

### Content is separated from layout, always

Every repo does this, by one of three mechanisms:

| Repo | Where content lives |
|---|---|
| `modal-emea` | `lib/content.ts` (19 KB), `lib/photos.ts`, `lib/hubTypes.ts` |
| `grindr-recruiter-hub` | `src/content/*.ts` — 15 files, one per page (`narrative.ts`, `faq.ts`, `battleCards.ts`, `sourcing.ts`, `sources.ts`…), each `export const x = {...} as const` |
| `anthropic-careers-page` | `lib/teams.js`, `lib/questions.js`, `lib/bundle.js`, `lib/granola-meetings.js` |
| `the-index` | `lib/data/cities.ts` seed constants + `data/raw/` CSVs + Supabase |
| `forus` | inline in the single `index.html` (no data layer) |
| `sphere` | `questions.js` — a single `QUESTIONS` array plus a `PLACEHOLDER` boolean |
| `carrara-onboarding-hub` | **JSON, not TS**: `codex.json` (34 KB), `people.json`, `profiles.json`, `team.json`, `clients.json`, `welcome.json` |

The rationale is written down. `modal-emea` README: "All copy, roles, deal types, stats and links are in `lib/content.ts`. Sections are thin components in `components/` that read from it, **so copy edits do not touch layout**." `grindr-recruiter-hub` README: "All copy lives in `src/content/*.ts` as plain objects. Changing a string there changes the page, the Cmd+K search index, and the Markdown/Word exports at the same time."

`carrara-onboarding-hub` is the only one where data is *machine-refreshed*: "A scheduled Claude Code task on Sol's machine ('refresh-hub-clients', Mondays 8:46am) re-exports it weekly and pushes; Vercel redeploys automatically."

### Folder layout

Next.js repos: `app/` + `components/` + `lib/`, flat, no `src/`. Vite repo: `src/` with `content/`, `pages/`, `components/`, `components/ui/`, `lib/`. Static repos: everything at the root (`index.html`, `styles.css`, `main.js` or `app.js`, plus `fonts/`, `media/` or `assets/`).

`components/primitives.tsx` in `modal-emea` is a nice pattern worth naming: the shared motion + list atoms (`Reveal`, `ClipReveal`, `Bullets`, `useCountUp`) in one small file, each with a docstring stating the rule it enforces.

### DESIGN.md: the single strongest artifact

**3 of 7 carry one** — `modal-emea` (3.2 KB), `forus-talent-narrative` (8.7 KB), `sphere-luma-questions` (3.6 KB) — and they share a fixed set of headings:

`Project · Audience · Type · Color · Space · Layout · Components · Motion · Imagery · Voice · Constraints · References · Ratified`

`modal-emea` and `sphere` use a two-column label/value layout; `forus` expands the same headings into `##` sections. All three end with a **"Ratified"** block naming the choices that were deliberate rather than defaults, which is the part that stops a later pass "fixing" them:

- `modal-emea`: "Pure #000000 bg; Inter+Fira Mono pairing; mono eyebrow labels; numbered section indices; card grids; lime accent: all deliberately chosen (Sol's locked rules + Modal's brand), not defaults."
- `sphere`: "Ratified defaults (chosen, not defaulted): cream/Stone background, pill buttons, uppercase mono-style eyebrow labels, single accent gradient. All are the client's own system."
- `forus`: "Ratified: `.panel` sits inside `.card`. It is an ARIA tabpanel for the campaign menu, carrying no background, border, padding or radius of its own, so it is not a nested visual card."

`forus` also carries a separate **`PHOTOS.md`** (5.8 KB) — an image brief listing public-domain sources.

### CLAUDE.md / AGENTS.md

- `modal-emea` and `carrara-onboarding-hub` both have an 11-byte `CLAUDE.md`, which is almost certainly `@AGENTS.md` — a pointer, not content.
- `modal-emea/AGENTS.md` is a generated warning block about the Next.js version: "This is NOT the Next.js you know... Read the relevant guide in `node_modules/next/dist/docs/` before writing any code."
- `carrara-onboarding-hub/AGENTS.md` is the substantive one: a "POps contract" listing four files that are load-bearing plumbing, addressed directly to AI assistants — "if you are an AI assistant, stop and tell your user to check with Eric before touching these."
- `grindr-recruiter-hub` has a `.claude/` directory; `modal-emea` too.

### README conventions

Consistent shape across 6 of 7 (the seventh, `console-hiring-dashboard`, is a bare title):

1. One-line statement of what it is and who it's for.
2. Stack line — `modal-emea`: "Next.js 16 (App Router) · Tailwind v4 · Framer Motion · deployed on Vercel." (middle dots, per the copy rule).
3. **"Running it"** / "Local" with the literal commands.
4. **"Where the content lives"** / "Editing content" / "Updating the questions" — a numbered procedure a non-engineer can follow.
5. **"Content rules"** or **"Design tokens"** — the tokens often as a Markdown table (`modal-emea`, `the-index`).
6. **"Known gaps" / "Open items"** — what is unverified, placeholder, or awaiting a decision.
7. Env vars, each with a one-line description of what turns on when it's set, and what happens when it isn't.

That last point is a real pattern: **every optional integration degrades to bundled data and says so.** `the-index`: "Works with **no env vars** — uses seed data." `carrara-onboarding-hub`: "**Dormant by default.** With `POPS_HUB_TOKEN` unset, every request is refused with a 401." `anthropic-careers-page`: "Until they exist, the panels save to the browser only and say so under the list."

### Images: committed, and sourced from public-domain archives

- Committed: `modal-emea/public/` (logos, `stockholm-office-view.jpg`, `logos/`, `people/`, `thumbs/`), `forus/media/` including a **4.9 MB `forus-hero.mp4`**, `sphere/assets/` (logo SVGs + webfonts), `grindr-recruiter-hub/src/assets/fonts/`, `carrara-onboarding-hub/assets/`.
- Not committed: `anthropic-careers-page` — the only repo that fetches binaries at build (`fetch-assets.sh`), with the reason in the script comment: "File-based deploys ship no binaries."
- Sourcing is a stated rule. `modal-emea` DESIGN.md: "Archival black-and-white photography (Wikimedia Commons hotlinks), grayscale + slight contrast... London = commerce/street, Stockholm = engineering/build." `forus` DESIGN.md: "Sourced from public-domain archives only, listed in `PHOTOS.md`. **No stock photography of people in offices. No AI-generated imagery.**"
- Treatment is consistent where photography appears: grayscale, contrast up, brightness down. `modal-emea/Hero.tsx`: `className="... object-cover grayscale contrast-110 brightness-90"`, with a `bg-gradient-to-t from-black/70` scrim and a `font-mono text-[11px]` figcaption. `forus`: duotoned to black + greige.

### Build scripts

Only `the-index` has real ones (`import:lists`, `enrich:places`, `sync`, all `tsx`). Two repos have verification scripts instead of tests — `carrara-onboarding-hub`: "run `WELCOME_SECRET=test-secret node scripts/verify-mint.js` **and** `node scripts/verify-my-onboarding.js`... Both print `... OK` and exit non-zero on any mismatch." **No repo in the set has a test suite, a linter config beyond `next lint`, or CI.** `carrara-onboarding-hub` has a `.github/` directory (the only one).

### Commit message style

This is highly consistent across `anthropic-careers-page`, `modal-emea`, `forus-talent-narrative`, `grindr-recruiter-hub` and `carrara-onboarding-hub`:

- **Subject: an imperative or declarative sentence, sentence case, no prefix, no trailing period, typically 40–70 chars.** Examples: `Stamp the deployed commit onto the page`, `Board's first column is Not started`, `Pricing goes quiet`, `The promise sets in three lines`, `Counters count again on every visit`, `Timeline dots keep one size on the line; years read larger`, `Remove Lenis, return to native scrolling`, `Convert sections to Modal's hairline panel format`.
- **Body explains the cause, in prose, wrapped ~72 chars.** It names the actual bug or reasoning, often at a level of specificity that reads like a post-mortem:
  > "A transformed ancestor makes `position: fixed` anchor to that element instead of the window, and every page here is wrapped in `.rise`, which animates a transform. So the contacts pop-up opened wherever that wrapper happened to sit rather than in view. Measured from a page scrolled to the bottom it landed at y=555 in an 800px window and ran off the screen."

  > "The measure had to be fixed at the source: `.promise p` outranked `.promise__p` on specificity, 0,1,1 against 0,1,0, so it won regardless of order and two earlier edits to `.promise__p` did nothing at all."
- **Migrations are named in the body when needed:** "Needs supabase/migrations/0008." appears as a standalone closing line in several `anthropic-careers-page` commits.
- **Co-authorship trailer on essentially every commit**, naming the model: `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`, `Claude Fable 5`, or `Claude Sonnet 5`. `anthropic-careers-page` and `the-index` also add `Claude-Session: https://claude.ai/code/session_...`.

**Two exceptions:**
- `the-index` uses **Conventional Commits** — `feat(stage-3): live Claude AI trip planner with structured output`, `feat(stage-2-v2): Google Maps Lists → Supabase pipeline` — with long bulleted bodies listing every file touched and a closing "npm run build passes cleanly (25 routes)". Nobody else does this. It is the oldest repo.
- `sphere-luma-questions` uses bare subjects with no bodies and no trailers — `Volt button inside card, remove footer`, `Fit question type to card on phones`, `Add missing midnight color tokens` — because the commits were made through the GitHub web UI (`committer: GitHub <noreply@github.com>`, and one `Add files via upload`).

**Branching:** `carrara-onboarding-hub` is the only repo with PRs, and it uses `author/topic` branch names (`maggie/who-we-are-copy-timeoff-format-checklist`, `maggie/timeoff-full-policy-page`). Everywhere else, commits land straight on `main`.

**Multiple authors** appear only in `carrara-onboarding-hub` (Maggie Stout) and `forus-talent-narrative` (Gonz Sanchez). The rest are `sol@carrara.is` or a `Claude <noreply@anthropic.com>` author identity.

---

## Open questions — where the repos contradict each other

1. **Uppercase labels: house rule or brand-dependent?** `modal-emea`'s DESIGN.md prescribes "mono 10-11px uppercase tracking-widest" eyebrows and ratifies them as deliberate, but a `modal-emea` commit says "**No all-caps anywhere.**" `sphere` bans uppercase outright; `anthropic-careers-page` has a commit removing all-caps labels; `the-index` and `forus` use them freely. The DESIGN.md and the commit log in the *same repo* disagree.

2. **Light or dark ground?** Four repos are warm off-white, two are hard black with "No light mode" written into the brief, one is pure white. Since every palette is justified as "the client's own," there may be no house default at all — but if a skill has to pick one for a greenfield page, the repos don't say which.

3. **TypeScript or not?** Three framework repos use TS, one (`anthropic-careers-page`, the most recently pushed of them) deliberately does not, with `.jsx` and no tsconfig. No repo explains the choice.

4. **Tailwind or hand-written CSS?** Roughly even (3 vs 4), and it does not track with project size: `forus` writes 69 KB of hand CSS for one page, while `modal-emea` builds a comparably rich page in Tailwind utilities. The deciding factor isn't stated anywhere.

5. **`forus` section rhythm is specified twice, differently.** DESIGN.md: "clamp(96px, 12vh, 176px) vertical between movements." The shipped `styles.css`: `--band: clamp(72px, 8vw, 116px)`. Different function (vh vs vw) and different range.

6. **`modal-emea`'s reveal is specified twice, differently.** DESIGN.md: "Reveal fade-up (12px, 0.3s, once, 25% viewport)." `primitives.tsx`: `y: 20`, `duration: 0.6`. Which is the rule?

7. **`modal-emea`'s two docs name different mono faces.** README's token table says "Inter for body and headings, **JetBrains Mono** for eyebrows, labels, tags and code" and lists `--color-panel #0D0D0F`, `--color-card #1A1A1C`. The shipped `layout.tsx` loads **Fira Mono**, and `globals.css` has `--color-panel: #121412`, `--color-card: #181818`. The README appears to describe the sibling `modal-gtm` project it was forked from and was never updated.

8. **Em dashes.** Banned in three DESIGN.mds, present in `the-index`'s seed copy and in `grindr-recruiter-hub`'s meta description. Is the rule retroactive, or client-work-only?

9. **Spelling.** `sphere` mandates US spelling; `the-index` uses British throughout (`neighbourhood`, `normalises`). No repo sets a default.

10. **Password gating is inconsistent and one version is not a gate.** `anthropic-careers-page` uses server middleware with `SITE_PASSWORD`; `grindr-recruiter-hub` hardcodes `Grindr2026` in client-side TS with a `localStorage` flag, which anyone can read from the bundle; `carrara-onboarding-hub`'s README only *recommends* turning on Vercel Deployment Protection, for a site it says contains team emails and the client roster. If a skill encodes a gating pattern, it should encode the middleware one.

11. **`console-hiring-dashboard` is empty.** One 26-byte README, one "Initial commit", no code. There is a separate `sol-rgb/console-recruiting-dashboard` and a `sol-rgb/console-ashby-dashboard` in the account listing, so the real work is probably in one of those — but both are outside the list I was given, so I did not read them.

---

## Access note

None of these repos were attached to this session initially. I attached all eight through `add_repo` (read access where the repo was public, push-scope attachment where the GitHub API needed it to read private files) and read everything through the GitHub API. Cloning was blocked by the sandbox, so nothing was checked out to disk. Two large stylesheets (`forus/styles.css`, `carrara-onboarding-hub/styles.css`) exceeded the API response limit and were extracted locally into the scratchpad to grep; they are not copied into the repo.
