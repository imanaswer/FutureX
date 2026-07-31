# FutureX AI Lab — Website

A premium, cinematic marketing site for **FutureX AI Lab**, an AI‑education
initiative of **G‑TEC Education**. Rebuild of [futurexailab.com](https://futurexailab.com)
in Next.js with an all‑dark, film‑led visual world ("Flight Path").

---

## 1. Overview

FutureX AI Lab offers a **four‑level AI certification ladder** (5 programs),
plus **VibeKids** — a Socratic AI tutor for school grades 3–12. This site is the
marketing front door: it explains the programs, shows the career pathways, and
drives enquiries.

- **Visual direction:** unified dark, cinematic. Full‑bleed brand video, a
  scroll‑drawn "ascent" trajectory, brand poster gallery, and image bands.
- **Mode:** Persuade (a landing/marketing site — earn attention, drive enquiry).
- **Brand:** deep‑blue grounds, bright **cyan** accent (sampled from the logo),
  Bricolage Grotesque display / Schibsted Grotesk body / JetBrains Mono for data.

---

## 2. Tech stack

| Concern        | Choice                                             |
| -------------- | -------------------------------------------------- |
| Framework      | **Next.js 15** (App Router, React 19, TypeScript)  |
| Styling        | **Tailwind CSS v4** (`@theme` tokens in CSS)       |
| Animation      | **Framer Motion**                                  |
| Fonts          | `next/font/google` (Bricolage, Schibsted, JetBrains Mono) |
| Images/Video   | `next/image` + native `<video>` (files in `public/`) |
| Rendering      | Fully static (SSG) — all 19 routes prerender       |

No database, no backend. The contact form composes a ready‑to‑send message
(see §7).

---

## 3. Getting started

Requires **Node 18.18+** (developed on Node 25).

```bash
npm install       # install dependencies
npm run dev       # start dev server → http://localhost:3000
npm run build     # production build (static export of all routes)
npm run start     # serve the production build
```

> **Heads‑up (dev cache):** never run `npm run build` while `npm run dev` is
> live — they share the `.next/` folder and a concurrent build corrupts the dev
> runtime (`__webpack_modules__ is not a function`). Fix: `rm -rf .next` and
> restart. Likewise, don't run two dev servers against the same folder.

---

## 4. Project structure

```
app/
  layout.tsx            Root layout: fonts, <Nav>, <Footer>, metadata
  page.tsx              HOME — Hero → ticker → Services → Trajectory
                        → PosterWall → VibeKids → closing VideoBand
  globals.css          Tailwind import + @theme design tokens + keyframes
  icon.png             Favicon (FX globe)
  not-found.tsx        Cinematic 404
  about/page.tsx       Mission, vision, stats, hands ImageBand, career tracks
  courses/page.tsx     The 4‑level ladder (all 5 programs)
  courses/[slug]/      Per‑course detail (outcomes, syllabus, roles, tools)
  vibekids/page.tsx    VibeKids product page (Socratic AI, features, stakeholders)
  blog/page.tsx        Article index (featured + grid)
  blog/[slug]/         Article reader
  contact/page.tsx     Enquiry form + direct channels

components/
  Nav.tsx / Footer.tsx     Global chrome (logo, links, socials)
  Hero.tsx                 Home hero — full‑bleed FX‑orb video, headline
  PageHero.tsx             Shared interior‑page hero (globe + ascent line)
  Trajectory.tsx           Scroll‑drawn 4‑level ascent (desktop) / rail (mobile)
  PosterWall.tsx           Brand poster gallery (4 posters)
  BrandFilm.tsx            Full‑bleed video band (reusable; currently unused)
  VideoBand.tsx            Reusable full‑bleed video section (closing CTA)
  ImageBand.tsx            Reusable full‑bleed image band (hands, on /about)
  AscentLine.tsx           The brand "ascent" SVG that draws on load
  ContactForm.tsx          Client enquiry form
  motion.tsx               <Reveal> (scroll‑in) + <Counter> (count‑up)

lib/
  data.ts                  ALL content: courses, services, career tracks,
                           articles, socials, nav. Single source of truth.

public/
  img/       logo-white.png, fx-globe.png, hands.jpg …
  posters/   brand poster JPEGs
  video/     futurex-loop.mp4, futurex-final.mp4, futurex-poster.jpg
```

---

## 5. Design system

Defined as Tailwind v4 `@theme` tokens in `app/globals.css`. The whole theme is
token‑driven — changing a token value re‑themes the site with no per‑file edits.

**Color**

| Token            | Value      | Use                                        |
| ---------------- | ---------- | ------------------------------------------ |
| `--color-ink`    | `#070B14`  | Deepest ground (hero, CTA, footer)         |
| `--color-paper`  | `#0A1122`  | Content‑section ground (dark)              |
| `--color-paper-2`| `#111D33`  | Raised card surface                        |
| `--color-blue`   | `#2068D8`  | Primary brand blue (fills, buttons)        |
| `--color-cyan` / `--color-accent` | `#34C6F7` | Signal accent (CTAs, kickers, dots) |
| `--color-sky`    | `#A8C6FF`  | Secondary text / links on dark             |
| `--color-body`   | `#F1F5FF`  | Primary text                               |
| `--color-body-soft` | `#C2CEE4` | Secondary text                           |

- **Elevation:** cards use a hairline sky ring + soft drop (`--shadow-card`),
  never a filled white surface.
- **Accent = cyan only.** (An earlier amber/yellow accent was removed as
  off‑brand.)

**Type**

- Display: **Bricolage Grotesque** (`.font-display`) — headings, 700–800.
- Body/UI: **Schibsted Grotesk** — default.
- Data: **JetBrains Mono** — course codes, level markers, kickers only.

**Motion**

- One orchestrated moment per view; scroll reveals via `<Reveal>`
  (exponential ease‑out). The ascent line draws on load. All motion respects
  `prefers-reduced-motion` (videos fall back to poster stills).

See `DESIGN.md` for the full direction contract.

---

## 6. Content & data

All copy and structured content lives in **`lib/data.ts`** — edit there, not in
the page components:

- `courses` — the 5 programs (code, level, title, summary, outcomes, syllabus,
  roles, tools). Drives `/courses` and every `/courses/[slug]`.
- `services`, `careerTracks`, `articles`, `socials`, `nav`.

**Do not invent** prices, durations, batch dates, student counts, or placement
stats — none are published, so CTAs say "Enquire". Course names and the
compliance references (**CBSE Circular Acad‑15/2026, NEP 2020, NCF‑SE 2023**)
are facts — keep them exact.

---

## 7. Contact form

`components/ContactForm.tsx` has no backend. It composes the enquiry as a
ready‑to‑send message the visitor delivers via Instagram / Facebook / LinkedIn.

To switch to real email delivery, set `ENQUIRY_EMAIL` at the top of the file —
the form then opens a prefilled `mailto:` draft. For a true API submission,
wire the `onSubmit` handler to a form endpoint (e.g. Formspree, Resend, or a
Next.js route handler).

---

## 8. Assets

Brand originals are in `assests/Futurexailab Docs/` (brochure, brand
guidelines PDF, images, videos). Web‑optimized copies used by the site live in
`public/`. Notable unused originals still available: the 6 banner strips, extra
posters, the 21s `fx animation final` and 386 MB `loader alpha` videos, and the
brand‑guidelines PDF.

---

## 9. Deployment

Static output — deploys anywhere that runs a Next.js app:

- **Vercel** (recommended): import the repo, zero config.
- **Node host:** `npm run build && npm run start`.
- Videos (~24 MB total) and images are served from `public/`; a CDN in front is
  ideal for the video bands.

---

## 10. Accessibility & performance notes

- Semantic landmarks, skip link, keyboard focus states, `aria-current` nav,
  alt text on all imagery.
- Videos are `muted`/`playsInline`/`loop`, play only when in view
  (IntersectionObserver), and degrade to poster stills under reduced motion.
- Text contrast tuned for the dark theme (bright body/secondary tokens).

---

*An initiative of G‑TEC Education. FutureX AI Lab, VibeKids, and "Vibey" are
product names of the client.*
