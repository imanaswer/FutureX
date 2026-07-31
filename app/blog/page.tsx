import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/motion";
import { Tilt } from "@/components/interactions";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — The Lab Notebook",
  description:
    "Notes from FutureX AI Lab on AI literacy, careers, RAG systems, Socratic AI, and the technologies shaping education.",
};

const dateFmt = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default function BlogPage() {
  const [lead, ...rest] = articles;
  return (
    <>
      <PageHero
        bg="/img/atmosphere.png"
        meta={["AI Literacy", "Careers", "Technology", "VibeKids"]}
        kicker="THE LAB NOTEBOOK"
        title="Notes from the ascent."
        lede="What we're learning about AI education, careers, and the systems behind it all — written for learners, parents, and educators."
      />

      <section className="bg-paper py-16 md:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <Link
              href={`/blog/${lead.slug}`}
              className="group grid gap-8 rounded-2xl bg-paper-2 p-8 shadow-card transition-shadow duration-300 hover:shadow-card-lg md:grid-cols-[1fr_1.4fr] md:p-10"
            >
              <div className="dark-zone flex flex-col justify-between rounded-xl bg-ink p-6">
                <p className="font-mono text-[0.65rem] tracking-[0.18em] text-accent">
                  LATEST ENTRY
                </p>
                <p className="font-display mt-10 text-5xl font-extrabold leading-none text-sky md:text-6xl">
                  {lead.tag}
                </p>
              </div>
              <div>
                <p className="font-mono text-[0.68rem] tracking-[0.14em] text-body-soft">
                  {dateFmt.format(new Date(lead.date)).toUpperCase()} · {lead.readMinutes} MIN READ
                </p>
                <h2 className="font-display mt-3 text-balance text-2xl font-extrabold leading-snug tracking-[-0.015em] text-body transition group-hover:text-sky md:text-4xl xl:text-5xl">
                  {lead.title}
                </h2>
                <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-body-soft">
                  {lead.excerpt}
                </p>
                <p className="mt-6 inline-flex items-center gap-2 font-bold text-sky transition group-hover:gap-3">
                  Read the entry <span aria-hidden>→</span>
                </p>
              </div>
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08}>
                <Tilt className="h-full rounded-2xl" max={6}>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="group block h-full rounded-2xl bg-paper-2 p-7 shadow-card"
                  >
                    <p className="font-mono text-[0.65rem] tracking-[0.16em] text-sky">
                      {a.tag.toUpperCase()} · {a.readMinutes} MIN
                    </p>
                    <h3 className="font-display mt-3 text-[1.2rem] font-bold leading-snug text-body transition group-hover:text-sky">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-[0.9rem] leading-relaxed text-body-soft">{a.excerpt}</p>
                    <p className="mt-5 font-mono text-[0.65rem] tracking-[0.12em] text-body-soft">
                      {dateFmt.format(new Date(a.date)).toUpperCase()}
                    </p>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
