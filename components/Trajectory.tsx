"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { courses } from "@/lib/data";
import { Reveal, KineticHeading } from "@/components/motion";
import Atmosphere from "@/components/Atmosphere";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ponytail: desktop draws one shared SVG ascent; mobile falls back to a
   vertical rail — same data, no duplicated concept. */
export default function Trajectory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.65"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="dark-zone relative overflow-hidden bg-ink py-16 md:py-20 xl:py-24" ref={ref}>
      <Atmosphere src="/img/ascent-trail.png" opacity={0.55} from="-6%" to="10%" />
      <div className="relative mx-auto max-w-7xl px-5">
        <Reveal>
          <p className="font-mono text-[0.72rem] tracking-[0.22em] text-accent">
            THE CERTIFICATION LADDER
          </p>
        </Reveal>
        <KineticHeading
          text="Four levels. One trajectory."
          className="font-display mt-4 flex max-w-2xl flex-wrap text-balance text-4xl font-extrabold tracking-[-0.02em] text-white md:text-5xl xl:text-6xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-sky-dim">
            Every program hands off to the next — each level maps to job roles
            hiring right now.
          </p>
        </Reveal>

        {/* Desktop ascent */}
        <div className="relative mt-16 hidden md:block">
          {/* Stretched to the container so the path meets each level card's
              accent marker: card tops sit at ~mt-64/44/24/0 → the curve passes
              through each column's marker corner. */}
          <svg
            viewBox="0 0 1000 420"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden
            fill="none"
          >
            <path
              d="M -10 300 C 60 280, 130 232, 197 206 C 280 186, 380 172, 455 152 C 540 130, 630 117, 710 98 C 790 80, 900 52, 968 33"
              stroke="rgba(126,178,255,0.15)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            <motion.path
              d="M -10 300 C 60 280, 130 232, 197 206 C 280 186, 380 172, 455 152 C 540 130, 630 117, 710 98 C 790 80, 900 52, 968 33"
              stroke="url(#traj)"
              strokeWidth="3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={reduce ? undefined : { pathLength }}
            />
            <defs>
              <linearGradient id="traj" x1="0" y1="420" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#2068d8" />
                <stop offset="1" stopColor="#22c1f5" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative grid grid-cols-4 gap-5 pt-6">
            {[0, 1, 2, 3].map((idx) => {
              const levelCourses = courses.filter((c) => c.level === idx + 1);
              const offsets = ["mt-64", "mt-44", "mt-24", "mt-0"];
              return (
                <motion.div
                  key={idx}
                  initial={reduce ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: EASE }}
                  className={offsets[idx]}
                >
                  <LevelCard level={idx + 1} levelCourses={levelCourses} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile rail */}
        <div className="relative mt-12 space-y-6 border-l-[1px] border-sky/20 pl-6 md:hidden">
          {[1, 2, 3, 4].map((lvl) => (
            <Reveal key={lvl}>
              <LevelCard level={lvl} levelCourses={courses.filter((c) => c.level === lvl)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LevelCard({
  level,
  levelCourses,
}: {
  level: number;
  levelCourses: typeof courses;
}) {
  return (
    <div className="group rounded-2xl border border-sky/15 bg-ink-2 p-5 transition duration-300 hover:border-accent/40 hover:bg-ink-3">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.7rem] tracking-[0.16em] text-accent">
          LEVEL {level}
        </span>
        <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(34,193,245,0.5)]" />
      </div>
      {levelCourses.map((c) => (
        <Link key={c.slug} href={`/courses/${c.slug}`} className="mt-3 block">
          <h3 className="font-display text-[1.05rem] font-bold leading-snug text-white transition group-hover:text-accent">
            {c.title}
          </h3>
          <p className="mt-2 text-[0.85rem] leading-relaxed text-sky-dim">{c.short}</p>
          <p className="mt-3 font-mono text-[0.65rem] tracking-[0.14em] text-sky">
            {c.code} · {c.syllabus.length} MODULES
          </p>
        </Link>
      ))}
    </div>
  );
}
