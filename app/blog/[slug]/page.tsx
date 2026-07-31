import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion";
import { articles } from "@/lib/data";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return article
    ? { title: article.title, description: article.excerpt }
    : { title: "Article not found" };
}

const dateFmt = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="dark-zone bg-ink pb-14 pt-32 md:pt-44">
        <div className="mx-auto max-w-3xl px-5 xl:max-w-4xl">
          <Reveal>
            <p className="font-mono text-[0.7rem] tracking-[0.2em] text-accent">
              {article.tag.toUpperCase()} · {dateFmt.format(new Date(article.date)).toUpperCase()} ·{" "}
              {article.readMinutes} MIN READ
            </p>
            <h1 className="font-display mt-5 text-balance text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-white md:text-5xl xl:text-6xl">
              {article.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <article className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 xl:max-w-4xl">
          {article.body.map((para, i) => (
            <p
              key={i}
              className={`leading-[1.8] text-body ${i === 0 ? "text-[1.15rem] font-medium" : "mt-6 text-[1.05rem]"}`}
            >
              {para}
            </p>
          ))}

          <div className="mt-14 rounded-2xl bg-paper-2 p-7 shadow-card">
            <p className="font-mono text-[0.65rem] tracking-[0.18em] text-cyan">
              CONTINUE THE CLIMB
            </p>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-body-soft">
              Ready to turn reading into skills? Explore the four-level
              certification ladder or ask us where to start.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/courses"
                className="rounded-full bg-blue btn-sweep px-6 py-2.5 text-[0.88rem] font-bold text-white transition hover:bg-blue-deep"
              >
                View programs
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-body/15 px-6 py-2.5 text-[0.88rem] font-semibold text-body transition hover:border-blue hover:text-sky"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-body/8 bg-paper pb-20">
        <div className="mx-auto max-w-3xl px-5 xl:max-w-4xl pt-12">
          <h2 className="font-mono text-[0.7rem] tracking-[0.2em] text-body-soft">
            MORE FROM THE NOTEBOOK
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {others.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group rounded-2xl bg-paper-2 p-6 shadow-card transition-shadow hover:shadow-card-lg"
              >
                <p className="font-mono text-[0.62rem] tracking-[0.14em] text-sky">
                  {a.tag.toUpperCase()}
                </p>
                <h3 className="font-display mt-2 text-[1.05rem] font-bold leading-snug text-body transition group-hover:text-sky">
                  {a.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
