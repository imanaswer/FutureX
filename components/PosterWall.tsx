"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, KineticHeading, ScrambleText } from "@/components/motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const posters = [
  {
    src: "/posters/tomorrow-is-futurex.jpeg",
    alt: "Tomorrow is FutureX",
    caption: "HUMAN // MACHINE",
  },
  {
    src: "/posters/building-the-future.jpeg",
    alt: "The future isn't just coming; we're building it",
    caption: "ARCHITECTURES",
  },
  {
    src: "/posters/learn-ai-the-right-way.jpeg",
    alt: "Learn AI the Right Way",
    caption: "DATA STREAMS",
  },
  {
    src: "/posters/tomorrow-is-loading.jpeg",
    alt: "Tomorrow is Loading",
    caption: "AUTONOMY",
  },
];

export default function PosterWall() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-ink py-32 md:py-48 border-t border-sky/10">
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,193,245,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,193,245,0.02)_1px,transparent_1px)] bg-[size:60px_60px] mix-blend-overlay pointer-events-none" />

      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-sky/20 pb-12 mb-20">
          <div>
            <Reveal>
              <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                <span className="block h-2 w-2 bg-accent animate-pulse" />
                <ScrambleText text="THE FUTUREX VISION" />
              </div>
            </Reveal>
            <KineticHeading
              as="h2"
              text="Tomorrow, built by hand."
              className="font-display max-w-2xl text-4xl font-black tracking-tighter text-white md:text-6xl xl:text-7xl leading-[0.9]"
            />
          </div>
          <Reveal delay={0.2} className="mt-6 md:mt-0 font-mono text-[10px] tracking-[0.2em] text-sky-dim max-w-sm text-right hidden md:block">
            WE DO NOT WAIT FOR THE FUTURE TO ARRIVE. WE TEACH THE ARCHITECTS WHO BUILD IT. 
            SCANNING PRIMARY VISUAL DATABASES...
          </Reveal>
        </div>

        {/* Viewfinder Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 border border-sky/10 rounded-2xl overflow-hidden">
          {posters.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="group relative overflow-hidden border-b border-r border-sky/10 bg-ink-3 aspect-[3/4]"
            >
              {/* Image with Monochromatic Flash Effect */}
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover grayscale opacity-40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />

              {/* Viewfinder Target Crosshairs */}
              <div className="absolute inset-4 border border-white/10 opacity-0 scale-95 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:scale-100 pointer-events-none">
                <div className="absolute -left-1 top-4 h-px w-2 bg-accent" />
                <div className="absolute -left-1 bottom-4 h-px w-2 bg-accent" />
                <div className="absolute -right-1 top-4 h-px w-2 bg-accent" />
                <div className="absolute -right-1 bottom-4 h-px w-2 bg-accent" />
                <div className="absolute left-4 -top-1 h-2 w-px bg-accent" />
                <div className="absolute right-4 -top-1 h-2 w-px bg-accent" />
                <div className="absolute left-4 -bottom-1 h-2 w-px bg-accent" />
                <div className="absolute right-4 -bottom-1 h-2 w-px bg-accent" />
              </div>

              {/* Data Overlay */}
              <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start opacity-0 -translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="font-mono text-[9px] tracking-[0.3em] text-accent bg-ink/80 px-2 py-1 backdrop-blur-md border border-accent/20">
                  VIS // 0{i + 1}
                </span>
                <span className="h-2 w-2 bg-accent animate-pulse" />
              </div>

              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/80 to-transparent p-6 pt-12 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] tracking-[0.4em] text-white">
                    {p.caption}
                  </span>
                  <span className="font-mono text-[8px] tracking-widest text-accent">
                    STATUS: RENDERED
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

      </div>
    </section>
  );
}
