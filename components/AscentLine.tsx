"use client";

import { motion, useReducedMotion } from "framer-motion";

/* The brand ascent line — draws across a dark hero as it settles. */
export default function AscentLine() {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 1000 300"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 h-[45%] w-full"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M -20 290 C 200 285, 380 240, 560 170 C 720 108, 850 60, 1020 18"
        stroke="url(#ascent-line)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={reduce ? undefined : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
      />
      <defs>
        <linearGradient id="ascent-line" x1="0" y1="300" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2068d8" stopOpacity="0" />
          <stop offset="0.45" stopColor="#2068d8" stopOpacity="0.55" />
          <stop offset="1" stopColor="#22c1f5" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
