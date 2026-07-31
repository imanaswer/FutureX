import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/motion";
import { Tilt } from "@/components/interactions";

export const metadata: Metadata = {
  title: "VibeKids — Socratic AI Learning for Grades 3–12",
  description:
    "VibeKids is an AI-powered interactive learning system for grades 3–12. Vibey, its Socratic AI engine, guides reasoning instead of giving answers. Aligned with CBSE Circular Acad-15/2026, NEP 2020, and NCF-SE 2023.",
};

const features = [
  {
    title: "Cognitive diagnostics",
    body: "Vibey monitors reasoning habits in real time and pinpoints the foundational gap — often from an earlier grade — that's actually blocking today's concept.",
    mono: "REAL-TIME COGNITIVE MAPPING",
  },
  {
    title: "Multi-dashboard analytics",
    body: "Separate views for school leadership, teachers, and parents — performance, progress, and early-warning signals for every learner.",
    mono: "LEADERSHIP · TEACHER · PARENT",
  },
  {
    title: "AI literacy training",
    body: "Age-appropriate modules on spotting hallucinations, recognizing bias, and writing effective prompts — literacy for the AI era, not just screen time.",
    mono: "HALLUCINATIONS · BIAS · PROMPTS",
  },
  {
    title: "Virtual STEM labs",
    body: "Digital simulations across physics, mathematics, financial literacy, and robotics — with connectivity to physical STEM kits in the classroom.",
    mono: "PHYSICS · MATH · ROBOTICS",
  },
];

const stakeholders = [
  {
    who: "Schools",
    points: ["CBSE compliance out of the box", "Differentiation that scales", "Performance analytics per class & cohort"],
  },
  {
    who: "Teachers",
    points: ["Automated grading", "Early learning-blocker identification", "Lesson-planning support"],
  },
  {
    who: "Students",
    points: ["Personalized Socratic guidance", "Gamified progress", "Critical-thinking development"],
  },
  {
    who: "Parents",
    points: ["Weekly progress reports", "Clear performance visibility", "Less homework supervision"],
  },
];

export default function VibeKidsPage() {
  return (
    <>
      <PageHero
        bg="/img/vibekids.png"
        meta={["Grades 3–12", "CBSE Acad-15/2026", "NEP 2020 · NCF-SE 2023", "Socratic AI engine"]}
        kicker="VIBEKIDS · GRADES 3–12"
        title="The AI tutor that asks — never tells."
        lede="VibeKids is an AI-powered interactive learning system that integrates with school curricula, textbooks, and STEM/robotics kits. At its heart is Vibey, a Socratic AI engine built to guide reasoning step by step instead of handing over answers."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-accent btn-sweep px-7 py-3.5 text-[0.95rem] font-bold text-ink transition hover:bg-accent-deep"
          >
            Book a school demo
          </Link>
        </div>
      </PageHero>

      {/* Why Socratic */}
      <section className="paper-grid bg-paper py-16 md:py-20 xl:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-[0.72rem] tracking-[0.22em] text-sky">
              THE VIBEY DIFFERENCE
            </p>
            <h2 className="font-display mt-4 text-balance text-4xl font-extrabold tracking-[-0.02em] text-body md:text-5xl xl:text-6xl">
              Answer machines create copy-paste learners.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-body-soft">
              Most AI tutors hand students the solution — and short-circuit the
              learning. Vibey is built around one constraint: it never gives the
              direct answer. It asks the next-smallest question, so the student
              takes the step themselves.
            </p>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-body-soft">
              Behind the conversation, real-time cognitive mapping tracks how
              each child reasons — building a live map of strengths, gaps, and
              exactly what to close next.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-2xl bg-paper-2 p-7 shadow-card-lg">
              <p className="border-b border-body/10 pb-3 font-mono text-[0.65rem] tracking-[0.18em] text-cyan">
                SAMPLE SESSION · CLASS 6 MATHS
              </p>
              <div className="mt-4 space-y-4 text-[0.93rem] leading-relaxed">
                <p className="rounded-xl rounded-bl-sm bg-paper px-4 py-3 text-body">
                  I don't get how to find the area of a triangle.
                </p>
                <p className="ml-8 rounded-xl rounded-br-sm bg-blue/10 px-4 py-3 text-cyan">
                  Let's start somewhere you know. What's the area of a rectangle
                  that's 6 cm by 4 cm?
                </p>
                <p className="rounded-xl rounded-bl-sm bg-paper px-4 py-3 text-body">
                  24 cm²!
                </p>
                <p className="ml-8 rounded-xl rounded-br-sm bg-blue/10 px-4 py-3 text-cyan">
                  Now imagine cutting that rectangle corner-to-corner. What do
                  you get — and what happened to the area?
                </p>
              </div>
              <p className="mt-4 font-mono text-[0.6rem] tracking-[0.14em] text-body-soft">
                ILLUSTRATIVE DIALOGUE · COGNITIVE MAP: RECTANGLES ✓ → TRIANGLES IN PROGRESS
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="dark-zone bg-ink py-16 md:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="font-mono text-[0.72rem] tracking-[0.22em] text-accent">
              SYSTEM CAPABILITIES
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-balance text-4xl font-extrabold tracking-[-0.02em] text-white md:text-5xl xl:text-6xl">
              Built for the whole classroom.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 0.12}>
                <Tilt className="h-full rounded-2xl" max={6}>
                  <article className="h-full rounded-2xl border border-sky/15 bg-ink-2 p-7 transition duration-300 hover:border-accent/40">
                    <p className="font-mono text-[0.62rem] tracking-[0.16em] text-sky">{f.mono}</p>
                    <h3 className="font-display mt-3 text-[1.25rem] font-bold text-white">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-sky-dim">{f.body}</p>
                  </article>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="bg-paper py-16 md:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="font-mono text-[0.72rem] tracking-[0.22em] text-sky">
              ONE PLATFORM, FOUR WINS
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-balance text-4xl font-extrabold tracking-[-0.02em] text-body md:text-5xl xl:text-6xl">
              Everyone sees the progress.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stakeholders.map((s, i) => (
              <Reveal key={s.who} delay={i * 0.08}>
                <article className="paper-card h-full rounded-2xl bg-paper-2 p-6 shadow-card">
                  <h3 className="font-display text-[1.1rem] font-bold text-body">{s.who}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-[0.88rem] leading-relaxed text-body-soft">
                        <span aria-hidden className="mt-[2px] text-accent-deep">✦</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-zone bg-ink py-20 text-center md:py-24">
        <div className="mx-auto max-w-2xl px-5">
          <Reveal>
            <h2 className="font-display text-balance text-3xl font-extrabold tracking-[-0.02em] text-white md:text-5xl xl:text-6xl">
              Bring VibeKids to your school.
            </h2>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-sky-dim">
              We'll walk your leadership team through the platform, dashboards,
              and CBSE alignment — with your own textbooks and curriculum.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-accent btn-sweep px-8 py-4 font-bold text-ink shadow-[0_8px_30px_-8px_rgba(34,193,245,0.55)] transition hover:bg-accent-deep"
            >
              Book a demo
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
