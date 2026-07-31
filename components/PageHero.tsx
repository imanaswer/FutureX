import Image from "next/image";
import { Reveal, KineticHeading } from "@/components/motion";
import AscentLine from "@/components/AscentLine";
import HeroBg from "@/components/HeroBg";

export default function PageHero({
  kicker,
  title,
  lede,
  children,
  globe = true,
  bg,
  meta,
}: {
  kicker: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
  globe?: boolean;
  bg?: string;
  /** Short page-specific facts rendered as a base strip. */
  meta?: string[];
}) {
  const showGlobe = globe && !bg;

  const content = (
    <>
      <Reveal>
        <p className="font-mono text-[0.72rem] tracking-[0.22em] text-accent">{kicker}</p>
      </Reveal>
      <KineticHeading
        as="h1"
        onMount
        text={title}
        delay={0.15}
        className={`font-display mt-4 flex flex-wrap text-balance text-[2.6rem] font-extrabold leading-[1.03] tracking-[-0.03em] text-white sm:text-5xl md:text-7xl xl:text-[5.4rem] ${
          bg ? "max-w-4xl md:drop-shadow-[0_2px_30px_rgba(7,11,20,0.95)]" : "max-w-4xl"
        }`}
      />
      {lede && (
        <Reveal delay={0.3}>
          <p
            className={`mt-6 max-w-2xl text-lg leading-relaxed xl:text-xl ${
              bg ? "text-lite/85 md:drop-shadow-[0_1px_16px_rgba(7,11,20,0.9)]" : "text-sky-dim"
            }`}
          >
            {lede}
          </p>
        </Reveal>
      )}
      {children && <Reveal delay={0.4}>{children}</Reveal>}
    </>
  );

  const metaStrip =
    meta && meta.length > 0 ? (
      <div className="relative border-t border-sky/15 bg-ink/35 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4 md:gap-x-10 md:px-8">
          {meta.map((m) => (
            <span
              key={m}
              className="flex items-center gap-2.5 font-mono text-[0.7rem] tracking-[0.14em] text-sky-dim"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {m.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    ) : null;

  return (
    <section className="dark-zone relative overflow-hidden bg-ink">
      {/* ---------- Mobile: image banner on top, content below ---------- */}
      <div className="md:hidden">
        {bg ? (
          <div className="relative aspect-[16/11] w-full overflow-hidden">
            <Image src={bg} alt="" fill priority sizes="100vw" className="object-cover object-center" />
            <div aria-hidden className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink/80 to-transparent" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
          </div>
        ) : (
          <div className="h-20" />
        )}
        <div className="px-5 pb-10 pt-8">{content}</div>
        {metaStrip}
      </div>

      {/* ---------- Desktop: full-bleed overlay hero ---------- */}
      <div className="relative hidden min-h-[100svh] flex-col justify-end pt-32 md:flex">
        {bg && <HeroBg src={bg} />}
        {!bg && (
          <div
            aria-hidden
            className="absolute -bottom-48 left-1/2 h-72 w-[130%] -translate-x-1/2 rounded-[100%] bg-blue/15 blur-3xl"
          />
        )}
        {showGlobe && (
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 scale-90 rounded-full bg-blue/25 blur-3xl" />
              <Image
                src="/img/fx-globe.png"
                alt=""
                width={520}
                height={520}
                priority
                className="relative w-[clamp(300px,32vw,520px)] opacity-90 [animation:float_9s_ease-in-out_infinite] motion-reduce:animate-none"
                style={{ maskImage: "radial-gradient(circle, #000 62%, transparent 74%)" }}
              />
            </div>
          </div>
        )}
        {!bg && <AscentLine />}
        <div className="relative mx-auto w-full max-w-7xl px-8 pb-12">{content}</div>
        {metaStrip}
      </div>
    </section>
  );
}
