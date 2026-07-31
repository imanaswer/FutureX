import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/motion";
import { courses } from "@/lib/data";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  return course
    ? { title: course.title, description: course.short }
    : { title: "Course not found" };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const idx = courses.findIndex((c) => c.slug === slug);
  const next = courses[idx + 1];

  return (
    <>
      <PageHero
        kicker={`${course.code} · LEVEL ${course.level} OF 4`}
        title={course.title}
        lede={course.summary}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-accent btn-sweep px-7 py-3.5 text-[0.95rem] font-bold text-ink transition hover:bg-accent-deep"
          >
            Enquire about this program
          </Link>
          <Link
            href="/courses"
            className="rounded-full border border-sky/30 px-7 py-3.5 text-[0.95rem] font-semibold text-lite transition hover:border-sky/70"
          >
            All programs
          </Link>
        </div>
      </PageHero>

      <section className="bg-paper py-16 md:py-20 xl:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-body">
                What you'll be able to do
              </h2>
              <ul className="mt-7 space-y-4">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex gap-3.5 text-[1rem] leading-relaxed text-body-soft">
                    <span aria-hidden className="mt-[3px] text-accent-deep">✦</span>
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-16">
              <div className="flex items-baseline gap-3">
                <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-body">
                  Syllabus
                </h2>
                <span className="font-mono text-[0.65rem] tracking-[0.14em] text-body-soft">
                  INDICATIVE — FINAL SYLLABUS SHARED ON ENQUIRY
                </span>
              </div>
              <ol className="mt-7 space-y-4">
                {course.syllabus.map((m, i) => (
                  <li
                    key={m.module}
                    className="paper-card rounded-2xl bg-paper-2 p-6 shadow-card"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[0.68rem] font-bold tracking-[0.12em] text-cyan">
                        M{String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-[1.08rem] font-bold text-body">
                        {m.module}
                      </h3>
                    </div>
                    <p className="mt-2 pl-9 text-[0.93rem] leading-relaxed text-body-soft">
                      {m.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={0.1}>
              <div className="dark-zone rounded-2xl bg-ink p-7">
                <p className="font-mono text-[0.65rem] tracking-[0.18em] text-accent">
                  CAREER OUTCOMES
                </p>
                <ul className="mt-4 space-y-3">
                  {course.roles.map((r) => (
                    <li key={r} className="flex items-center gap-3 text-[0.95rem] font-medium text-lite">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="rounded-2xl bg-paper-2 p-7 shadow-card">
                <p className="font-mono text-[0.65rem] tracking-[0.18em] text-cyan">
                  TOOLS &amp; STACK
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {course.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-blue/8 px-3 py-1.5 text-[0.8rem] font-medium text-cyan"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-[0.85rem] leading-relaxed text-body-soft">
                  Fees, duration, and batch dates are shared on enquiry —
                  programs run for students, professionals, and institutions.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 block rounded-full bg-blue btn-sweep px-5 py-3 text-center text-[0.9rem] font-bold text-white transition hover:bg-blue-deep"
                >
                  Request details
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {next && (
        <section className="dark-zone bg-ink py-16">
          <div className="mx-auto max-w-7xl px-5">
            <Link href={`/courses/${next.slug}`} className="group block">
              <p className="font-mono text-[0.68rem] tracking-[0.18em] text-sky">
                NEXT ON THE LADDER · LEVEL {next.level}
              </p>
              <p className="font-display mt-3 text-2xl font-extrabold tracking-[-0.02em] text-white transition group-hover:text-accent md:text-3xl">
                {next.title} <span aria-hidden>→</span>
              </p>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
