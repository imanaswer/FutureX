# DESIGN.md — FutureX AI Lab

<!-- Direction chosen via impeccable new-work. Note: concept-seed.mjs produced a
degraded (empty) roll this session; direction was self-derived and the user's
pinned constraint (hybrid: dark heroes, light content) is binding. -->

## World: "Flight Path"

AI education as an ascent. The site's one idea: a single continuous trajectory
from Level 1 to Level 4 — every surface expresses climbing, altitude, and
mission progress. Refuses the category default (three equal cards of
icon+heading+text on near-black with neon glow).

## Theme structure (unified cinematic — updated)

The site is now a single dark, cinematic world end to end (user direction:
"completely cinematic"). The earlier dark-hero/light-content hybrid was
retired — the bright paper sections broke the film mood.

- Every surface is dark. Section rhythm comes from ink tiers, not light/dark
  flips: `--ink` (#070B14) hero/CTA grounds, `--paper` (#0A1122, a hair
  lighter) content grounds, `--paper-2` (#111D33) raised cards.
- Cards read via a hairline sky ring + soft drop (`--shadow-card`), never a
  white fill. Content text is `--body` (#EAF0FC) / `--body-soft` (#97AACB).
- `text-blue` is retired in content → `text-sky`; small accents → `text-cyan`.
- Blueprint grid (`.paper-grid`) is a faint sky grid on dark, masked to fade.
- Video is the spine: full-bleed hero film, mid-page BrandFilm, closing
  VideoBand. Full-bleed image bands (hands) between content beats.

## Color

Strategy: Committed — brand blue carries large regions, brand CYAN (#22C1F5,
sampled from the logo gradient) is the single signal accent. The earlier amber
was off-palette and removed; the accent token is now `--accent` = cyan.

- `--ink`: #070B14 (dark ground, blue-black, never pure black)
- `--ink-2`: #0C1424 (raised dark surface)
- `--paper`: #F7F5F0 (light ground, warm)
- `--paper-2`: #FFFFFF (raised light surface)
- `--blue`: #2E6BFF (brand, from logo X)
- `--sky`: #7EB2FF (blue tint for dark-surface secondary text/lines)
- `--amber`: #FFB224 (signal/accent — CTAs on dark, highlights)
- `--text-ink`: #10182B on paper; #EDF2FF on ink
- Secondary text on dark surfaces is tinted from blue (--sky family), never gray.

## Type

- Display: **Bricolage Grotesque** (Google) — headlines, weight 700–800, tracking -0.02 to -0.03em.
- Body/UI: **Schibsted Grotesk** — 400/500/700.
- Data: **JetBrains Mono** — only for actual data: course codes (FX-L1…), stats, telemetry readouts, level markers. Never as decoration.

## Signature elements

- **The Trajectory**: an SVG ascent path that draws on scroll, threading the
  4 course levels (home course section). A smaller ascent line draws in the
  home hero as part of the settle moment. /courses expresses the same ascent
  as a vertical blue→amber rail with L1–L4 stations.
- **Registration ticks**: light-section cards carry a small blue→amber tick
  at the top-left — the engineering-paper "stamp" that marks authored cards.
- **Level markers**: mono chips `L1 → L4`, amber for the active level.
- **Telemetry strips**: thin mono data lines on dark surfaces (session counts,
  module counts — real course facts only).
- Motion: one orchestrated moment per page (hero settle + trajectory draw).
  Scroll-reveals are staggered, exponential ease-out, from visible defaults.
  `prefers-reduced-motion` respected everywhere.

## Rules

- Elevation: light surfaces use shadow (offset + blur), dark surfaces use
  1px `--sky`/12% borders. Never both on one element.
- Radii: 14px cards, 999px only on small controls.
- No gradient text, no glass-as-decoration, no eyebrow-on-every-section
  (the one kicker system: mono level/section codes where sequence matters).
- Course names, socials, compliance mandates (CBSE Acad-15/2026, NEP 2020,
  NCF-SE 2023) are facts — never altered. Prices/durations/batch dates do not
  exist — CTAs say "Enquire", never invent numbers.
- Illustrative curriculum outlines are labeled "Indicative syllabus".
