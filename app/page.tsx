import Link from "next/link";
import Hero from "@/components/Hero";
import Trajectory from "@/components/Trajectory";
import PosterWall from "@/components/PosterWall";
import VideoBand from "@/components/VideoBand";
import { Reveal, KineticHeading } from "@/components/motion";
import { Tilt, Magnetic } from "@/components/interactions";
import Atmosphere from "@/components/Atmosphere";
import { services } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services */}
      <section className="relative overflow-hidden bg-paper py-16 md:py-20 xl:py-24">
        <Atmosphere opacity={0.45} />
        <div className="relative mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="font-mono text-[0.72rem] tracking-[0.22em] text-sky">
              WHAT WE DO
            </p>
            <KineticHeading
              text="Find your solution."
              className="font-display mt-4 flex max-w-2xl flex-wrap text-balance text-4xl font-extrabold tracking-[-0.02em] text-body md:text-5xl xl:text-6xl"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12}>
                <Tilt className="h-full rounded-2xl" max={7}>
                  <article className="paper-card group flex h-full flex-col rounded-2xl bg-paper-2 p-7 shadow-card">
                    <p className="font-mono text-[0.65rem] tracking-[0.16em] text-sky">
                      {s.mono}
                    </p>
                    <h3 className="font-display mt-4 text-[1.35rem] font-bold leading-snug text-body">
                      {s.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-body-soft">
                      {s.body}
                    </p>
                    <Link
                      href={s.title.startsWith("AI Training") ? "/courses" : "/about"}
                      className="mt-6 inline-flex items-center gap-2 text-[0.9rem] font-bold text-sky transition group-hover:gap-3"
                    >
                      Learn more <span aria-hidden>→</span>
                    </Link>
                  </article>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Trajectory />

      <PosterWall />

      {/* VibeKids teaser — dark */}
      <section className="dark-zone relative overflow-hidden bg-ink py-16 md:py-20">
        <Atmosphere opacity={0.4} from="8%" to="-8%" />
        <div
          aria-hidden
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue/20 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-[0.72rem] tracking-[0.22em] text-accent">
              FOR GRADES 3–12
            </p>
            <KineticHeading
              text="VibeKids: the AI tutor that never gives away the answer."
              className="font-display mt-4 flex flex-wrap text-balance text-4xl font-extrabold tracking-[-0.02em] text-white md:text-5xl xl:text-6xl"
            />
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-sky-dim">
              Vibey, our Socratic AI engine, guides students through reasoning
              step by step — mapping how each child thinks, closing foundational
              gaps, and building real AI literacy. Aligned with CBSE Circular
              Acad-15/2026, NEP 2020, and NCF-SE 2023.
            </p>
            <Magnetic className="mt-8" strength={0.5}>
              <Link
                href="/vibekids"
                className="inline-block rounded-full bg-accent btn-sweep px-7 py-3.5 text-[0.95rem] font-bold text-ink transition-colors hover:bg-accent-deep"
              >
                Discover VibeKids
              </Link>
            </Magnetic>
          </Reveal>

          <Reveal delay={0.15}>
            {/* Authored dialogue vignette — illustrative conversation */}
            <div className="rounded-2xl border border-sky/15 bg-ink-2 p-6">
              <p className="border-b border-sky/12 pb-3 font-mono text-[0.65rem] tracking-[0.18em] text-sky">
                VIBEY · SOCRATIC SESSION (SAMPLE)
              </p>
              <div className="mt-4 space-y-4 text-[0.92rem] leading-relaxed">
                <p className="rounded-xl rounded-bl-sm bg-ink-3 px-4 py-3 text-lite">
                  What's 3/4 of 240?
                </p>
                <p className="ml-8 rounded-xl rounded-br-sm bg-blue/15 px-4 py-3 text-sky">
                  Before we jump in — what's <em>1/4</em> of 240? What could you
                  divide by?
                </p>
                <p className="rounded-xl rounded-bl-sm bg-ink-3 px-4 py-3 text-lite">
                  240 ÷ 4… that's 60!
                </p>
                <p className="ml-8 rounded-xl rounded-br-sm bg-blue/15 px-4 py-3 text-sky">
                  Exactly. So if one quarter is 60, how many quarters do you
                  need now?
                </p>
              </div>
              <p className="mt-4 font-mono text-[0.6rem] tracking-[0.14em] text-sky-dim">
                COGNITIVE MAP UPDATED · FRACTIONS ✓ · MULTIPLICATION PENDING
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA — cinematic video close */}
      <VideoBand
        src="/video/futurex-final.mp4"
        poster="/video/futurex-poster.jpg"
        overlay="bg-ink/60"
        minH="min-h-[85svh]"
        className="border-b border-sky/10"
      >
        <Reveal>
          <p className="font-mono text-[0.72rem] tracking-[0.24em] text-accent">
            YOUR JOURNEY STARTS HERE
          </p>
          <KineticHeading
            text="Ready to build the future?"
            className="font-display mt-5 flex flex-wrap justify-center text-balance text-4xl font-extrabold leading-[1.04] tracking-[-0.025em] text-white md:text-6xl xl:text-7xl"
          />
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-lite/80">
            Tell us where you are — student, professional, or school — and we&apos;ll
            map your route up the ladder.
          </p>
          <Magnetic className="mt-9" strength={0.5}>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-accent btn-sweep px-9 py-4 text-[1rem] font-bold text-ink shadow-[0_10px_40px_-10px_rgba(34,193,245,0.65)] transition-colors hover:bg-accent-deep"
            >
              Start the conversation
            </Link>
          </Magnetic>
        </Reveal>
      </VideoBand>
    </>
  );
}
