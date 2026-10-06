"use client";

import Link from "next/link";
import { courses } from "@/lib/data";
import { Reveal, KineticHeading, ScrambleText } from "@/components/motion";
import Atmosphere from "@/components/Atmosphere";

export default function Trajectory() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 md:py-48 border-t border-sky/10">
      <Atmosphere opacity={0.1} />
      
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,193,245,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,193,245,0.02)_1px,transparent_1px)] bg-[size:20px_20px] mix-blend-overlay pointer-events-none" />

      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8">
        
        {/* Header Block */}
        <div className="mb-24">
          <div>
            <Reveal>
              <div className="mb-12 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                <span className="block h-2 w-2 bg-accent animate-pulse" />
                <ScrambleText text="THE CERTIFICATION LADDER" />
              </div>
            </Reveal>
            <KineticHeading
              as="h2"
              text="Four levels. One trajectory."
              className="font-display mt-4 max-w-2xl text-4xl font-black tracking-tighter text-white md:text-6xl xl:text-7xl leading-[0.9]"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl font-mono text-[12px] leading-relaxed text-sky-dim/70">
              EVERY PROGRAM HANDS OFF TO THE NEXT. EACH LEVEL MAPS DIRECTLY TO JOB ROLES ACTIVELY HIRING IN THE AI SECTOR.
            </p>
          </Reveal>
        </div>

        {/* The Accordion Panels (Desktop) / Stack (Mobile) */}
        <div className="flex flex-col md:flex-row h-auto md:h-[70vh] min-h-[500px] border border-sky/10 rounded-2xl overflow-hidden bg-ink-2/30">
          {[1, 2, 3, 4].map((level) => {
            const levelCourses = courses.filter((c) => c.level === level);
            return (
              <div 
                key={level}
                className="group relative flex-1 border-b md:border-b-0 md:border-r border-sky/10 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] hover:flex-[2] overflow-hidden bg-ink"
              >
                {/* Background Hover State */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Massive Level Number Background */}
                <div className="absolute -bottom-10 -right-10 font-display text-[15rem] font-black leading-none text-white/[0.02] transition-colors duration-500 group-hover:text-accent/[0.05] pointer-events-none">
                  {level}
                </div>

                <div className="relative flex h-full flex-col p-6 md:p-8">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-sky/10 pb-4">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-accent font-bold">
                      LEVEL // 0{level}
                    </span>
                    <div className="h-2 w-2 border border-accent transition-all duration-300 group-hover:bg-accent" />
                  </div>

                  {/* Course Content */}
                  <div className="mt-12 flex-1 flex flex-col gap-10 opacity-70 transition-opacity duration-500 group-hover:opacity-100">
                    {levelCourses.map((c) => (
                      <Link key={c.slug} href={`/courses/${c.slug}`} className="flex flex-col group/link">
                        <h3 className="font-display text-3xl md:text-4xl font-bold leading-snug text-white transition-colors group-hover/link:text-accent">
                          {c.title}
                        </h3>
                        {/* 
                          We use line-clamp-3 so when the panel is squished it doesn't overflow wildly,
                          but when hovered and expanded, there is plenty of room to read.
                        */}
                        <p className="mt-4 font-mono text-[11px] leading-relaxed text-sky-dim line-clamp-3 md:line-clamp-none md:max-w-md">
                          {c.short}
                        </p>
                        
                        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                          <span className="font-mono text-[9px] tracking-[0.2em] text-sky">
                            {c.code} · {c.syllabus.length} MODULES
                          </span>
                          <span className="font-mono text-[9px] tracking-[0.2em] text-accent opacity-0 transition-all duration-300 transform translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0">
                            [ ACCESS ]
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
