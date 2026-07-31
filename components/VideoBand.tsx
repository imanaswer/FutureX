"use client";

import { useEffect, useRef } from "react";

/* Full-bleed video band. Plays only while on screen; poster-only under reduced motion. */
export default function VideoBand({
  src,
  poster,
  className = "",
  overlay = "bg-ink/55",
  minH = "min-h-[80svh]",
  children,
}: {
  src: string;
  poster: string;
  className?: string;
  overlay?: string;
  minH?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.2 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className={`dark-zone relative flex ${minH} items-center justify-center overflow-hidden bg-ink ${className}`}
    >
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
      >
        <source src={src} type="video/mp4" />
      </video>
      <div aria-hidden className={`absolute inset-0 ${overlay}`} />
      <div aria-hidden className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
      <div className="relative mx-auto w-full max-w-4xl px-5 text-center">{children}</div>
    </section>
  );
}
