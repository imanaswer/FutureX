"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/* Browser-window frame around a muted brand film. Plays only while visible;
   reduced-motion users get the poster still. */
export function VideoFrame({
  src,
  poster,
  label = "futurexailab.com",
  className,
  children,
}: {
  src: string;
  poster: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className={cn("relative", className)}>
      <div className="border-gradient relative overflow-hidden rounded-2xl bg-ink-2 shadow-[0_40px_120px_-30px_rgba(32,104,216,0.55)] md:rounded-3xl">
        <div className="flex items-center gap-3 border-b border-white/8 bg-ink-2/90 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="mx-auto flex h-7 w-full max-w-xs items-center justify-center rounded-md border border-white/8 bg-ink/70 font-mono text-[0.68rem] tracking-wide text-sky-dim">
            {label}
          </div>
          <span className="w-12" />
        </div>
        <div className="relative aspect-[16/9]">
          <video
            ref={ref}
            className="absolute inset-0 h-full w-full object-cover"
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
          >
            <source src={src} type="video/mp4" />
          </video>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-2/60 via-transparent to-transparent" />
        </div>
      </div>
      {children}
    </div>
  );
}
