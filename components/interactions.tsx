"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/* ---- Magnetic ------------------------------------------------------------
   Element drifts toward the cursor with weighty spring physics, then springs
   back. Used on CTAs, the logo, and nav links. */
/* Magnetic effect removed by request — kept as a passthrough so existing
   call sites (and their spacing className) keep working. */
export function Magnetic({
  children,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  return <span className={`inline-block ${className ?? ""}`}>{children}</span>;
}

/* ---- Tilt -----------------------------------------------------------------
   Card rotates in 3D toward the pointer with a soft parallax lift and a
   light-glow that tracks the cursor. GPU transforms only. */
export function Tilt({
  children,
  className,
  max = 8,
  glow = true,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
  glow?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 150, damping: 18 });
  const sy = useSpring(py, { stiffness: 150, damping: 18 });

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const glowX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(sy, [0, 1], ["0%", "100%"]);

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function reset() {
    px.set(0.5);
    py.set(0.5);
  }

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 900 }}
      className={`relative ${className ?? ""}`}
    >
      {glow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-px z-0 rounded-[inherit]"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]: string[]) =>
                `radial-gradient(320px circle at ${gx} ${gy}, rgba(52,198,247,0.12), transparent 62%)`
            ),
          }}
        />
      )}
      <div style={{ transform: "translateZ(24px)" }} className="relative z-10 h-full [transform-style:preserve-3d]">
        {children}
      </div>
    </motion.div>
  );
}
