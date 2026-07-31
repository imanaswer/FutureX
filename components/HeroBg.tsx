"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef } from "react";

/* Full-bleed page-hero background: distinct per-page image, parallaxed on
   scroll with a cursor-tracked volumetric light. Pointer-transparent so the
   headline stays interactive. */
export default function HeroBg({ src }: { src: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  const lx = useMotionValue(70);
  const ly = useMotionValue(42);
  const light = useMotionTemplate`radial-gradient(620px circle at ${lx}% ${ly}%, rgba(52,198,247,0.12), transparent 60%)`;

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (e.clientY < r.top || e.clientY > r.bottom) return;
      lx.set(((e.clientX - r.left) / r.width) * 100);
      ly.set(((e.clientY - r.top) / r.height) * 100);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, lx, ly]);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0">
      <motion.div style={reduce ? undefined : { y, scale }} className="absolute inset-0">
        <Image src={src} alt="" fill priority sizes="100vw" className="object-cover object-center md:object-[right_center]" />
      </motion.div>
      {/* Mobile: image reads up top, text sits on the dark bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/5 md:hidden" />
      {/* Desktop: text left, image right */}
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#070b14_0%,rgba(7,11,20,0.92)_42%,rgba(7,11,20,0.35)_78%,rgba(7,11,20,0.15)_100%)] md:block" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-ink md:h-2/5" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink/70 to-transparent" />
      {!reduce && <motion.div className="absolute inset-0" style={{ background: light }} />}
    </div>
  );
}
