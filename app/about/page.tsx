import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ImageBand from "@/components/ImageBand";
import { Reveal, Counter } from "@/components/motion";
import { careerTracks } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FutureX AI Lab, an initiative of G-TEC Education — making AI education accessible, practical, and career-focused for school, college, and professional learners.",
};

const objectives = [
  {
    title: "World-class curriculum, every stage",
    body: "AI education personalized for learners across school, college, and professional levels — one ladder, many entry points.",
  },
  {
    title: "Careers, not just certificates",
    body: "Certifications, hands-on internships, industry-focused projects, and placement assistance built into every program.",
  },
  {
    title: "Inclusive by design",
    body: "Accessible, affordable, and impactful AI education for both rural and urban learners.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        bg="/img/about-hub.png"
        meta={["School · College · Professional", "An initiative of G-TEC Education", "Placement support"]}
        kicker="ABOUT FUTUREX AI LAB"
        title="Making AI education accessible, practical, and career-focused."
        lede="FutureX AI Lab is an initiative of G-TEC Education. We train learners to design, build, and deploy AI-powered solutions — in generative AI, large language models, vision AI, AI agents, and the technologies still emerging."
      />

      <section className="paper-grid bg-paper py-16 md:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="font-mono text-[0.72rem] tracking-[0.22em] text-sky">
              WHAT DRIVES US
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-balance text-4xl font-extrabold tracking-[-0.02em] text-body md:text-5xl xl:text-6xl">
              Three commitments behind every program.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {objectives.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.12}>
                <article className="paper-card h-full rounded-2xl bg-paper-2 p-7 shadow-card">
                  <p className="font-mono text-[0.68rem] font-bold tracking-[0.14em] text-accent-deep">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-3 text-[1.25rem] font-bold leading-snug text-body">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-body-soft">{o.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-zone bg-ink py-16 md:py-20 xl:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-[0.72rem] tracking-[0.22em] text-accent">
              MISSION &amp; VISION
            </p>
            <h2 className="font-display mt-4 text-balance text-4xl font-extrabold tracking-[-0.02em] text-white md:text-5xl xl:text-6xl">
              A hub of AI innovation and talent.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-sky-dim">
              Our mission: deliver world-class AI education tailored to learners
              at every stage — school, college, and professional — while
              creating clear career pathways through certifications, hands-on
              internships, industry-focused projects, and placement support.
            </p>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-sky-dim">
              Our vision: position FutureX as a hub of AI innovation and talent,
              where every student, professional, and organization can harness AI
              to transform industries, communities, and lives.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <dl className="grid grid-cols-2 gap-x-10 gap-y-10">
              {[
                { n: 4, s: "", label: "Certification levels" },
                { n: 5, s: "", label: "Industry programs" },
                { n: 26, s: "", label: "Hands-on modules" },
                { n: 12, s: "+", label: "Career pathways" },
              ].map((stat) => (
                <div key={stat.label} className="border-t border-sky/20 pt-5">
                  <dd className="font-display text-5xl font-extrabold text-white xl:text-6xl">
                    <Counter to={stat.n} suffix={stat.s} />
                  </dd>
                  <dt className="mt-2 text-[0.9rem] text-sky-dim">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <ImageBand
        src="/img/hands.jpg"
        alt="A human hand and a robotic hand reaching toward each other across the glowing FutureX mark."
        kicker="HUMAN + MACHINE"
        title="Where human ambition meets machine intelligence."
      />

      <section className="bg-paper py-16 md:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="font-mono text-[0.72rem] tracking-[0.22em] text-sky">
              WHERE THE LADDER LEADS
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-balance text-4xl font-extrabold tracking-[-0.02em] text-body md:text-5xl xl:text-6xl">
              Career pathways across every industry.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {careerTracks.map((t, i) => (
              <Reveal key={t.title} delay={(i % 2) * 0.1}>
                <article className="paper-card h-full rounded-2xl bg-paper-2 p-7 shadow-card">
                  <h3 className="font-display text-[1.2rem] font-bold text-body">{t.title}</h3>
                  <p className="mt-2.5 text-[0.93rem] leading-relaxed text-body-soft">{t.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {t.examples.map((e) => (
                      <span
                        key={e}
                        className="rounded-full bg-blue/8 px-3 py-1 font-mono text-[0.68rem] tracking-wide text-cyan"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-block rounded-full bg-blue btn-sweep px-8 py-3.5 font-bold text-white transition hover:bg-blue-deep"
            >
              Explore the programs
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
