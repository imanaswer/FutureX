"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/* Higgsfield-generated cosmic atmosphere, parallaxed behind content so the
   background quietly evolves as you scroll. Purely decorative. */
export default function Atmosphere({
  className = "",
  opacity = 0.5,
  from = "-12%",
  to = "12%",
  src = "/img/atmosphere.png",
}: {
  className?: string;
  opacity?: number;
  from?: string;
  to?: string;
  src?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [from, to]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        style={reduce ? { opacity } : { y, scale, opacity }}
        className="absolute inset-0"
      >
        <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
      {/* Blend the edges into the ink ground */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
    </div>
  );
}
