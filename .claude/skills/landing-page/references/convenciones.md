# What recurs across the other repos

Derived from seven of Sol's landing-page repos: `anthropic-careers-page`,
`carrara-onboarding-hub`, `grindr-recruiter-hub`, `modal-emea`, `the-index`,
`forus-talent-narrative`, `sphere-luma-questions`. Read this when starting a
project for a client that already has a brand, or when a choice in SKILL.md
feels arbitrary and you want to know whether it is load-bearing.

## Settled, and worth following

**Palette extraction.** `forus` and `sphere` both record in their DESIGN.md
that tokens were read off the client's live computed styles on a named date,
and both keep the client's own token names rather than renaming to a generic
scale. An invented palette is treated as a defect.

**Accent budget.** `forus` states it numerically: more than roughly eight
appearances on a page and the accent is wasted. `modal`: "never a large lime
fill." `sphere`: the gradient is for surfaces, "never as text."

**Grounds actually shipped.** Light: `#faf9f5`, `#ece8de`, `#f9f8f3`. Dark:
`#000000` (documented as "pure, non-negotiable"), `#141212`. One repo uses
flat white. Grey grounds appear nowhere.

**The block rule**, quoted from `anthropic-careers-page/globals.css`: never a
fill with a contrasting border. A block is one flat colour edge to edge, or
it is not a block and rows are divided by a hairline. Several commits move
*from* filled blocks *to* hairlines, never the reverse.

**Hairline token.** `--hair: 1px solid #d8d8d1` or a `border-t` on every
section. Sections are separated by a rule and whitespace, not by cards.

**Shadows.** Two in 54KB of CSS in `carrara`. Where they exist they encode
affordance: a 3px lift on hover means "this navigates."

**Radii.** Tokenised and small, 4/8/10/12/16, plus a 999px pill for buttons.
`carrara` is radius-0 and gets its edges from `clip-path` chamfers.

**Easing.** One token per project, always expo-out shaped:
`cubic-bezier(0.22,1,0.36,1)`, `cubic-bezier(0.16,1,0.3,1)`. Reveals move
12 to 38px over 0.3 to 0.6s with `once: true`.

**Reduced motion in all seven**, implemented three ways: a blanket kill
switch, per-effect final states, or inverted so motion only exists inside a
`no-preference` query. Any of the three is acceptable; absence is not.

**Never animate from a scroll listener.** CSS scroll-driven timelines where
available, otherwise a rAF loop with a comment saying why. Lenis was adopted
and removed: "re-smooths input macOS already smooths, which reads as lag."

**Content out of layout.** `lib/content.ts`, `src/content/<page>.ts`,
`lib/teams.js`, or JSON. Stated reason: copy edits must not touch layout.

**Nothing invented.** Every figure traces to a named source, and unverified
content ships behind a visible PLACEHOLDER flag rather than a quiet "TBD".

**DESIGN.md** with fixed headings in three of seven: Project, Audience, Type,
Color, Space, Layout, Components, Motion, Imagery, Voice, Constraints,
References, Ratified. Those three needed the fewest redesign rounds.

**Commits.** Imperative subject, body explaining the cause rather than the
files. "Pricing goes quiet." "Counters count again on every visit." Always a
`Co-Authored-By: Claude` trailer.

## Genuinely unsettled: ask, do not guess

These split evenly across the repos with no stated rule. Picking one
silently is how you end up rebuilding.

- **Light ground or dark.** No default exists.
- **Tailwind or hand-written CSS.** Even split. Follow the repo you are in.
- **TypeScript or JavaScript.** Even split.
- **Serif display or grotesque display.** Both ship. Weight 400 for serif is
  the only firm part.

## Known bad data in the repos

- `console-hiring-dashboard` is empty: a 26-byte README and one commit. The
  real work is probably in `console-recruiting-dashboard` or
  `console-ashby-dashboard`.
- `modal-emea`'s README describes a different project than its code: it
  names JetBrains Mono and a different set of hex values; the code uses Fira
  Mono. Trust the code.
- `forus` and `modal` each specify spacing and motion twice, in DESIGN.md and
  in CSS, with different numbers. Trust the CSS.
- `modal-emea` prescribes uppercase labels in its README and bans them in its
  CSS. The stated preference is no uppercase, so the CSS is right.
- The oldest repo violates the no-em-dash and spelling rules that the later
  ones follow. It predates them.
