"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, KineticHeading } from "@/components/motion";
import { Tilt } from "@/components/interactions";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Finished brand posters — framed as a gallery with cinematic mask reveals. */
const posters = [
  {
    src: "/posters/tomorrow-is-futurex.jpeg",
    alt: "Tomorrow is FutureX — a human and a robotic hand reaching toward the FutureX mark.",
    caption: "Human + machine",
  },
  {
    src: "/posters/building-the-future.jpeg",
    alt: "The future isn't just coming; we're building it — a FutureX dome-city on a floating island.",
    caption: "We're building it",
  },
  {
    src: "/posters/learn-ai-the-right-way.jpeg",
    alt: "Learn AI the Right Way — building the next generation of AI professionals.",
    caption: "Learn it right",
  },
  {
    src: "/posters/tomorrow-is-loading.jpeg",
    alt: "Tomorrow is Loading — a humanoid AI presenting a glowing city and the FX mark.",
    caption: "Tomorrow is loading",
  },
];

export default function PosterWall() {
  const reduce = useReducedMotion();
  return (
    <section className="dark-zone relative overflow-hidden bg-ink py-16 md:py-20 xl:py-24">
      <div
        aria-hidden
        className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="font-mono text-[0.72rem] tracking-[0.22em] text-accent">
                THE FUTUREX VISION
              </p>
            </Reveal>
            <KineticHeading
              text="Tomorrow, built by hand."
              className="font-display mt-4 flex max-w-2xl flex-wrap text-balance text-4xl font-extrabold tracking-[-0.02em] text-white md:text-5xl xl:text-6xl"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-sky-dim">
              We don&apos;t wait for the future to arrive — we teach the people who
              build it. This is the world our learners step into.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {posters.map((p, i) => (
            <Tilt key={p.src} className="rounded-2xl" max={9}>
              <motion.figure
                initial={reduce ? false : { clipPath: "inset(0 0 100% 0)", opacity: 0.4 }}
                whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: i * 0.12, ease: EASE }}
                className="group relative overflow-hidden rounded-2xl border border-sky/15 bg-ink-2"
              >
                <motion.div
                  initial={reduce ? false : { scale: 1.18 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1.2, delay: i * 0.12, ease: EASE }}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={600}
                    height={800}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 22vw"
                  />
                </motion.div>
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-4 pt-10">
                  <span className="font-mono text-[0.68rem] tracking-[0.14em] text-sky">
                    {p.caption}
                  </span>
                </figcaption>
              </motion.figure>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
