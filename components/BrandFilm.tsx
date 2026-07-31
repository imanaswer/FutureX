"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

/* Full-bleed brand film — the FX orb loop plays behind a single line.
   Muted/looping/inline autoplay; paused and poster-only under reduced motion. */
export default function BrandFilm() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    // Only spend bandwidth/decoding while the band is on screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section className="dark-zone relative flex min-h-[85svh] items-center justify-center overflow-hidden bg-ink">
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        poster="/video/futurex-poster.jpg"
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="/video/futurex-loop.mp4" type="video/mp4" />
      </video>
      {/* Legibility + vignette */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink via-ink/45 to-ink" />
      <div aria-hidden className="absolute inset-0 bg-ink/35" />

      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <p className="font-mono text-[0.72rem] tracking-[0.28em] text-cyan">
          TOMORROW IS FUTUREX
        </p>
        <h2 className="font-display mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.025em] text-white md:text-6xl xl:text-7xl">
          The future isn&apos;t just coming.
          <br className="hidden sm:block" /> We&apos;re building it.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sky-dim">
          And we&apos;re building the people who build it — the next generation
          of AI professionals, one level at a time.
        </p>
        <Link
          href="/about"
          className="mt-9 inline-block rounded-full border border-sky/40 bg-ink/40 px-8 py-3.5 text-[0.95rem] font-semibold text-white backdrop-blur-sm transition hover:border-cyan hover:bg-ink/70"
        >
          Our mission
        </Link>
      </div>
    </section>
  );
}
