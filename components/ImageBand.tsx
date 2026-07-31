import Image from "next/image";
import { Reveal } from "@/components/motion";

/* Full-bleed landscape image band with an overlaid line. For text-free brand art. */
export default function ImageBand({
  src,
  alt,
  kicker,
  title,
  align = "center",
}: {
  src: string;
  alt: string;
  kicker: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <section className="dark-zone relative flex min-h-[60svh] items-center overflow-hidden bg-ink">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className={`absolute inset-0 ${
          align === "left"
            ? "bg-gradient-to-r from-ink via-ink/70 to-transparent"
            : "bg-ink/55"
        }`}
      />
      <div
        className={`relative mx-auto w-full max-w-7xl px-5 md:px-8 ${
          align === "center" ? "text-center" : ""
        }`}
      >
        <Reveal>
          <p className="font-mono text-[0.72rem] tracking-[0.24em] text-cyan">{kicker}</p>
          <h2
            className={`font-display mt-5 text-balance text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-white md:text-5xl xl:text-6xl ${
              align === "left" ? "max-w-2xl" : "mx-auto max-w-3xl"
            }`}
          >
            {title}
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
