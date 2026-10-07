"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/text";

export type TimelineStep = { title: string; body: string; icon: React.ReactNode };

/* Vertical steps with a line that fills as you scroll past them. */
export function Timeline({ steps }: { steps: TimelineStep[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 65%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <ol ref={ref} className="relative space-y-10 md:space-y-14">
      <span aria-hidden className="absolute left-[1.45rem] top-3 bottom-3 w-px bg-white/10 md:left-[1.7rem]" />
      <motion.span
        aria-hidden
        style={{ scaleY }}
        className="absolute left-[1.45rem] top-3 bottom-3 w-px origin-top bg-gradient-to-b from-accent via-accent to-blue md:left-[1.7rem]"
      />
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-6 md:gap-8">
          <FadeIn className="shrink-0" delay={0.05}>
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-ink-2 text-accent shadow-card md:h-14 md:w-14 [&>svg]:h-5 [&>svg]:w-5">
              {s.icon}
            </span>
          </FadeIn>
          <FadeIn className="pt-1.5 md:pt-3" delay={0.1}>
            <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-dim">
              Step {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="font-display mt-2 text-xl font-bold text-white md:text-2xl">{s.title}</h3>
            <p className="mt-2 max-w-xl text-[0.98rem] leading-relaxed text-body-soft">{s.body}</p>
          </FadeIn>
        </li>
      ))}
    </ol>
  );
}
