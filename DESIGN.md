# DESIGN.md — FutureX AI Lab

## Direction

A dark, editorial product site in the style of modern component libraries
(21st.dev conventions): generous whitespace, one container width, sentence-case
headlines, a single cyan accent, and motion that reveals content rather than
decorating it. The earlier "mission-control terminal" treatment (mono uppercase
labels, bracketed `[ INITIATE ]` buttons, scramble effects, fake telemetry) was
retired because it read as generic sci-fi rather than as an education brand.

The one idea the site keeps expressing is the **ladder**: four levels, one
continuous climb. It appears as the interactive level stepper on the home page,
the filterable program grid on /courses, the prev/next cards on each program,
and the "how it works" timeline on /about.

## Layout system

- Container: `max-w-7xl`, `px-5 sm:px-6 lg:px-8` everywhere (`<Container>`).
- Section rhythm: `py-20 md:py-28`, alternating `bg-ink` / `bg-paper` grounds.
- Radii: `rounded-2xl` cards, `rounded-3xl` feature panels, `rounded-full` pills.
- Borders on dark: `border-white/10`; hover `border-white/20`; never box-shadow
  plus a bright border on the same element. Feature panels use the
  `.border-gradient` hairline (cyan → transparent → blue).
- Interior pages open with `<PageHero>`: eyebrow badge, blur-in H1, lede,
  optional right visual, optional fact strip.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `--color-ink` | `#070B14` | Page ground |
| `--color-paper` | `#0A1122` | Alternate section ground |
| `--color-ink-2` / `--color-paper-2` | `#0C1424` / `#111D33` | Raised surfaces |
| `--color-blue` | `#2068D8` | Brand blue (gradients, glows) |
| `--color-accent` | `#34C6F7` | The single signal color: CTAs, active states, icons |
| `--color-body` / `--color-body-soft` | `#F1F5FF` / `#B7C4DC` | Text |
| `--color-sky-dim` | `#8FA5C9` | Tertiary text, labels |

Gradient text is used in exactly one place: the rotating word in the home H1.

## Type

- Display: **Bricolage Grotesque**, 700, tracking -0.02 to -0.03em, sentence case.
- Body/UI: **Schibsted Grotesk**.
- Mono: **JetBrains Mono** only for data chips (course codes, module counts,
  step numbers). Never for labels or body copy.

## Motion

- Entrances: word-by-word blur-in for headings (`<BlurIn>`), fade/rise for blocks
  (`<FadeIn>`), staggered children for grids (`<Stagger>` / `<StaggerItem>`).
- Hover: cursor-tracking spotlight on cards (`<SpotlightCard>`), slide arrows on
  links, shine sweep on primary buttons.
- Ambient: slow aurora blooms, marquees that pause on hover, a floating glass
  card or two. One auto-advancing component per page at most (the level ladder).
- Smooth scroll via Lenis. Everything respects `prefers-reduced-motion`
  through the hydration-safe `useReducedMotion` hook in `lib/`.

## Content rules (unchanged)

Course names, socials, and compliance references (CBSE Circular Acad-15/2026,
NEP 2020, NCF-SE 2023) are facts and are never altered. Fees, durations, batch
dates, student counts, and placement stats are not published: CTAs say
"Enquire". Numbers shown on the site (levels, programs, modules, roles) are
computed from `lib/data.ts`. Syllabi are labelled "Indicative".
