import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/motion";
import { courses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "The FutureX four-level AI certification ladder: generative AI foundations, RAG systems, AI agents & deployment, foundation models & FMOps, and AWS AI practitioner readiness.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        bg="/img/ascent-trail.png"
        meta={["5 Programs", "4 Levels", "Hands-on labs + capstone", "Career support"]}
        kicker="THE CERTIFICATION LADDER"
        title="Five programs. Four levels. One ascent."
        lede="Each level hands off to the next — start where you are, climb to production. Every program includes hands-on labs, a capstone, and career support."
      />

      <section className="paper-grid bg-paper py-16 md:py-20 xl:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <ol className="relative space-y-10 before:absolute before:bottom-8 before:left-[19px] before:top-2 before:w-[2px] before:bg-gradient-to-b before:from-blue before:to-accent md:space-y-12">
            {courses.map((c, i) => (
              <li key={c.slug} className="relative pl-14">
                <span
                  aria-hidden
                  className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue bg-paper-2 font-mono text-[0.7rem] font-bold text-cyan shadow-card"
                >
                  L{c.level}
                </span>
                <Reveal delay={Math.min(i * 0.06, 0.2)}>
                  <Link
                    href={`/courses/${c.slug}`}
                    className="paper-card group block rounded-2xl bg-paper-2 p-7 shadow-card transition-shadow duration-300 hover:shadow-card-lg md:p-9"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[0.68rem] tracking-[0.16em] text-accent-deep">
                        {c.code}
                      </span>
                      <span className="rounded-full bg-blue/8 px-2.5 py-0.5 font-mono text-[0.62rem] tracking-[0.12em] text-cyan">
                        {c.syllabus.length} MODULES
                      </span>
                    </div>
                    <h2 className="font-display mt-3 text-[1.4rem] font-bold leading-snug text-body transition group-hover:text-sky md:text-[1.6rem]">
                      {c.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-[0.97rem] leading-relaxed text-body-soft">
                      {c.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {c.roles.map((r) => (
                        <span
                          key={r}
                          className="rounded-full bg-paper px-3 py-1 text-[0.75rem] font-medium text-body-soft"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 inline-flex items-center gap-2 text-[0.9rem] font-bold text-sky transition group-hover:gap-3">
                      Program details <span aria-hidden>→</span>
                    </p>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="dark-zone bg-ink py-20 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <Reveal>
            <h2 className="font-display text-balance text-3xl font-extrabold tracking-[-0.02em] text-white md:text-4xl xl:text-5xl">
              Not sure which level fits you?
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-sky-dim">
              Tell us your background and goals — we'll place you on the right rung.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-accent btn-sweep px-8 py-3.5 font-bold text-ink transition hover:bg-accent-deep"
            >
              Get placement guidance
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
