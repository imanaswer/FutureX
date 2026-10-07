"use client";

import { useReducedMotion } from "@/lib/use-reduced-motion";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { courses } from "@/lib/data";
import { Chip } from "@/components/ui/badge";
import { cn, EASE_OUT } from "@/lib/utils";

const LEVELS = [
  { n: 1, label: "Start", blurb: "Use AI tools expertly" },
  { n: 2, label: "Build", blurb: "Ground AI in real data" },
  { n: 3, label: "Ship", blurb: "Deploy agents to production" },
  { n: 4, label: "Operate", blurb: "Run models at scale" },
] as const;

const AUTO_MS = 6500;

/* Interactive four-level stepper with an auto-advancing detail panel. */
export function LevelLadder() {
  const [active, setActive] = useState<number>(1);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!auto || paused || reduce) return;
    const id = setTimeout(() => setActive((a) => (a % 4) + 1), AUTO_MS);
    return () => clearTimeout(id);
  }, [active, auto, paused, reduce]);

  const levelCourses = courses.filter((c) => c.level === active);
  const lead = levelCourses[0];
  const others = levelCourses.slice(1);

  function pick(n: number) {
    setActive(n);
    setAuto(false);
  }

  return (
    <div
      className="grid gap-6 lg:grid-cols-12 lg:gap-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Stepper */}
      <div className="lg:col-span-5">
        <ol className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0" role="tablist">
          {LEVELS.map((lvl, i) => {
            const isActive = lvl.n === active;
            const done = lvl.n < active;
            const names = courses.filter((c) => c.level === lvl.n).map((c) => c.shortName);
            return (
              <li key={lvl.n} className="relative shrink-0 lg:shrink">
                {/* connector */}
                {i < LEVELS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[1.9rem] top-[3.4rem] hidden h-[calc(100%-1.6rem)] w-px bg-white/10 lg:block"
                  >
                    <motion.span
                      className="fx-motion block w-full origin-top bg-accent"
                      initial={false}
                      animate={{ scaleY: done ? 1 : 0 }}
                      transition={{ duration: 0.6, ease: EASE_OUT }}
                      style={{ height: "100%" }}
                    />
                  </span>
                )}
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => pick(lvl.n)}
                  className={cn(
                    "group relative flex w-[15.5rem] cursor-pointer items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-300 lg:w-full",
                    isActive
                      ? "border-accent/30 bg-accent/[0.07]"
                      : "border-transparent hover:border-white/10 hover:bg-white/[0.03]"
                  )}
                >
                  <span
                    className={cn(
                      "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-display text-base font-bold transition-all duration-300",
                      isActive
                        ? "border-accent bg-accent text-ink shadow-[0_0_28px_rgba(52,198,247,0.5)]"
                        : done
                        ? "border-accent/50 bg-accent/15 text-accent"
                        : "border-white/15 bg-ink-2 text-body-soft group-hover:border-white/30"
                    )}
                  >
                    {done ? <Check className="h-5 w-5" aria-hidden /> : lvl.n}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-sky-dim">
                        Level {lvl.n} · {lvl.label}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "mt-1 block font-display text-[1.05rem] font-bold leading-snug transition-colors",
                        isActive ? "text-white" : "text-body"
                      )}
                    >
                      {lvl.blurb}
                    </span>
                    <span className="mt-1.5 block truncate text-sm text-sky-dim">{names.join(" · ")}</span>
                    {/* auto-advance progress */}
                    <span className="mt-3 block h-0.5 w-full overflow-hidden rounded-full bg-white/8">
                      {isActive && auto && !reduce && (
                        <motion.span
                          key={`p-${active}-${paused}`}
                          className="block h-full bg-accent"
                          initial={{ width: "0%" }}
                          animate={{ width: paused ? "0%" : "100%" }}
                          transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
                        />
                      )}
                      {isActive && (!auto || reduce) && <span className="block h-full w-full bg-accent" />}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Panel */}
      <div className="lg:col-span-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.985 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="fx-motion border-gradient relative h-full overflow-hidden rounded-3xl bg-ink-2/70 shadow-card-lg"
          >
            <div className="grid h-full md:grid-cols-[0.95fr_1.25fr]">
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[26rem]">
                <Image
                  src={lead.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                  priority={active === 1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-ink-2/10 md:to-ink-2" />
                <div className="absolute left-4 top-4 flex gap-2">
                  <Chip active>{lead.code}</Chip>
                  <Chip>{lead.syllabus.length} modules</Chip>
                </div>
              </div>
              <div className="flex flex-col p-6 md:p-8">
                <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  Level {active} of 4
                </p>
                <h3 className="font-display mt-3 text-balance text-2xl font-bold leading-tight text-white md:text-[1.7rem]">
                  {lead.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-body-soft">{lead.short}</p>

                <ul className="mt-5 space-y-2">
                  {lead.outcomes.slice(0, 3).map((o) => (
                    <li key={o} className="flex gap-2.5 text-sm text-body">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {o}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {lead.roles.map((r) => (
                    <span
                      key={r}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-body-soft"
                    >
                      {r}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7">
                  <Link
                    href={`/courses/${lead.slug}`}
                    className="group/link inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-accent"
                  >
                    View program
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" aria-hidden />
                  </Link>
                  {others.map((o) => (
                    <Link
                      key={o.slug}
                      href={`/courses/${o.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-sky-dim transition-colors hover:text-white"
                    >
                      Also at this level: <span className="font-medium text-body">{o.shortName}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
