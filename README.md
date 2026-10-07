# FutureX AI Lab — Website

Marketing site for **FutureX AI Lab**, an AI‑education initiative of
**G‑TEC Education**. Rebuild of [futurexailab.com](https://futurexailab.com)
in Next.js with a dark, editorial design built from a reusable component kit.

---

## 1. Overview

FutureX AI Lab offers a **four‑level AI certification ladder** (5 programs),
plus **VibeKids** — a Socratic AI tutor for school grades 3–12. This site is the
marketing front door: it explains the programs, shows the career pathways, and
drives enquiries.

- **Visual direction:** dark and editorial. Rotating-word hero over the brand
  film, an interactive four-level ladder, a live Socratic chat demo, and a
  poster marquee.
- **Mode:** Persuade (a landing/marketing site — earn attention, drive enquiry).
- **Brand:** deep‑blue grounds, bright **cyan** accent (sampled from the logo),
  Bricolage Grotesque display / Schibsted Grotesk body / JetBrains Mono for data.

---

## 2. Tech stack

| Concern        | Choice                                             |
| -------------- | -------------------------------------------------- |
| Framework      | **Next.js 15** (App Router, React 19, TypeScript)  |
| Styling        | **Tailwind CSS v4** (`@theme` tokens in CSS)       |
| Animation      | **Framer Motion** + Lenis smooth scroll            |
| Icons          | **lucide-react**                                   |
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
  layout.tsx            Root layout: fonts, <Nav>, <Footer>, smooth scroll
  template.tsx          Light route transition
  page.tsx              HOME — Hero → tools marquee → services bento
                        → level ladder → VibeKids chat → poster gallery → FAQ → CTA
  globals.css           Tailwind import + @theme tokens + keyframes + utilities
  about/page.tsx        Mission/vision, commitments, stats, image band, timeline, tracks
  courses/page.tsx      Level overview + filterable program grid
  courses/[slug]/       Program detail: outcomes, syllabus accordion, sidebar, prev/next
  vibekids/page.tsx     VibeKids: chat demo, features bento, stakeholders, compliance
  blog/page.tsx         Featured article + grid
  blog/[slug]/          Article reader with progress bar
  contact/page.tsx      Enquiry form + direct channels
  not-found.tsx         404

components/
  Nav.tsx / Footer.tsx     Floating pill nav (mobile sheet) and footer
  Hero.tsx                 Home hero: badge, rotating-word headline, CTAs, video frame
  PageHero.tsx             Shared interior-page hero
  CourseExplorer.tsx       Level filter tabs + animated program grid
  ContactForm.tsx          Client enquiry form
  ReadingProgress.tsx      Scroll progress bar for articles
  SmoothScroll.tsx         Lenis wrapper
  ui/                      The component kit (21st.dev conventions):
    button, badge, section (Container/Section/SectionHeader), text
    (BlurIn/FadeIn/Stagger/WordRotate/GradientText), spotlight-card, marquee,
    accordion, background (GridPattern/DotPattern/Aurora/Glow/Hairline),
    number-ticker, tilt, chat-mock, level-ladder, timeline, video-frame,
    cta-section, social-icons

lib/
  data.ts                  ALL content: courses, services, career tracks,
                           articles, socials, nav. Single source of truth.
  utils.ts                 cn() + shared easing
  use-reduced-motion.ts    Hydration-safe prefers-reduced-motion hook

public/
  img/       logo-white.png, about-hub.png, vibekids.png, hands.jpg …
  images/courses/  one cover per program
  posters/   brand poster JPEGs
  video/     futurex-loop.mp4, futurex-final.mp4, futurex-poster.jpg
```

---

## 5. Design system

Defined as Tailwind v4 `@theme` tokens in `app/globals.css`; see `DESIGN.md`
for the full direction. In short: one container width (`max-w-7xl`), dark
grounds (`ink` / `paper`), a single cyan accent, Bricolage Grotesque display
type in sentence case, and a reusable component kit in `components/ui/`.
Icons are Lucide (`lucide-react`). Motion respects `prefers-reduced-motion`.

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
