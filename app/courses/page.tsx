import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, KineticHeading, ScrambleText } from "@/components/motion";
import { courses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Courses | FutureX AI Lab",
  description:
    "The FutureX four-level AI certification ladder: generative AI foundations, RAG systems, AI agents & deployment, foundation models & FMOps, and AWS AI practitioner readiness.",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-ink text-white pt-[100px] pb-24 overflow-hidden selection:bg-accent selection:text-ink">
      
      {/* HUD HEADER */}
      <section className="relative w-full border-b border-sky/20 px-5 pb-20 pt-10 md:pt-20 overflow-hidden">
        {/* Massive Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none opacity-[0.03] z-0">
           <span className="font-display text-[25vw] font-black tracking-tighter leading-none text-white whitespace-nowrap select-none">COURSES</span>
        </div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-[1px] w-12 bg-accent/80" />
                  <p className="font-mono text-xs tracking-[0.3em] text-accent">
                    <ScrambleText text="SYS.COURSES // INDEX" />
                  </p>
                </div>
              </Reveal>
              <KineticHeading 
                as="h1" 
                text="THE CERTIFICATION LADDER."
                className="font-display text-5xl md:text-7xl xl:text-8xl font-black uppercase leading-[0.85] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50"
              />
              <Reveal delay={0.2} className="mt-10 max-w-xl">
                <p className="text-sky-dim text-lg leading-relaxed font-mono text-sm">
                  Five programs. Four levels. One ascent. Each level hands off to the next — start where you are, climb to production. Every program includes hands-on labs, a capstone, and career support.
                </p>
              </Reveal>
            </div>
            
            <div className="md:col-span-4 flex flex-col justify-end border-l border-sky/20 pl-8 hidden md:flex">
                <div className="space-y-8 font-mono text-xs text-sky-dim">
                    <Reveal delay={0.3}>
                        <p className="tracking-[0.2em]">[ DATA.01 ] <br/> <span className="text-white text-xl font-bold tracking-normal">5 PROGRAMS</span></p>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="tracking-[0.2em]">[ DATA.02 ] <br/> <span className="text-white text-xl font-bold tracking-normal">4 LEVELS</span></p>
                    </Reveal>
                    <Reveal delay={0.5}>
                        <p className="tracking-[0.2em]">[ DATA.03 ] <br/> <span className="text-white text-xl font-bold tracking-normal">LABS + CAPSTONE</span></p>
                    </Reveal>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLE-STYLE BENTO GRID */}
      <section className="relative w-full py-24 bg-ink overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(280px,auto)]">
             {courses.map((c, i) => {
                // Determine interlocking grid spans based on index (5 items total)
                let bentoClass = "";
                let titleSize = "text-2xl md:text-3xl";
                
                if (i === 0) {
                   bentoClass = "md:col-span-2 md:row-span-2 flex flex-col justify-between";
                   titleSize = "text-4xl md:text-5xl";
                } else if (i === 1) {
                   bentoClass = "md:col-span-2 md:row-span-1 flex flex-col justify-between";
                } else if (i === 2) {
                   bentoClass = "md:col-span-1 md:row-span-1 flex flex-col justify-between";
                } else if (i === 3) {
                   bentoClass = "md:col-span-1 md:row-span-1 flex flex-col justify-between";
                } else if (i === 4) {
                   bentoClass = "md:col-span-4 md:row-span-1 flex flex-col md:flex-row md:items-center justify-between gap-8";
                }

                return (
                  <Link
                    key={c.slug}
                    href={`/courses/${c.slug}`}
                    className={`group relative border border-white/10 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl p-8 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden hover:scale-[1.01] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${bentoClass}`}
                  >
                     {/* Soft Hover Gradient inside card */}
                     <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-colors duration-700 pointer-events-none" />
                     
                     {/* ABSTRACT CSS VISUALS based on the course */}
                     <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                        {i === 0 && (
                          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(34,193,245,0.4)_0,transparent_60%)] rounded-full mix-blend-screen group-hover:scale-125 transition-transform duration-[2000ms]" />
                        )}
                        {i === 1 && (
                          <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_100%_100%_at_100%_0%,#000_10%,transparent_80%)]" />
                        )}
                        {i === 2 && (
                          <div className="absolute bottom-0 right-0 p-8 flex gap-2">
                             {[...Array(3)].map((_, j) => (
                               <div key={j} className="w-8 h-8 rounded-md border border-white/20 bg-white/5 shadow-inner" style={{ transform: `translateY(${j * -10}px)` }} />
                             ))}
                          </div>
                        )}
                        {i === 3 && (
                          <div className="absolute top-1/2 right-10 -translate-y-1/2 flex flex-col gap-2">
                             {[...Array(5)].map((_, j) => (
                               <div key={j} className="h-1 w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                             ))}
                          </div>
                        )}
                        {i === 4 && (
                          <div className="absolute right-0 bottom-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,153,0,0.15)_0,transparent_60%)]" />
                        )}
                     </div>
                     
                     <div className={`relative z-10 ${i === 4 ? "md:w-1/2" : ""}`}>
                         <div className="flex items-center gap-3 mb-6">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 font-mono text-[0.65rem] font-bold text-white group-hover:bg-accent group-hover:text-ink transition-colors">
                               L{c.level}
                            </span>
                            <span className="font-mono text-[0.65rem] tracking-widest text-sky-dim uppercase group-hover:text-sky transition-colors">
                               {c.code}
                            </span>
                         </div>
                         
                         <h2 className={`font-display font-bold text-white tracking-tight leading-tight mb-4 group-hover:text-accent transition-colors duration-300 ${titleSize}`}>
                           {i === 4 || i === 0 ? c.title : c.shortName}
                         </h2>
                         
                         <p className="font-sans text-sm text-sky-dim leading-relaxed max-w-xl group-hover:text-white/80 transition-colors duration-300">
                           {i === 0 ? c.summary : c.short}
                         </p>
                     </div>

                     <div className={`relative z-10 ${i === 4 ? "md:w-1/2 flex flex-col items-start md:items-end" : "mt-8"}`}>
                         <div className={`flex flex-wrap gap-2 ${i === 4 ? "md:justify-end" : ""} mb-6`}>
                           {c.roles.slice(0, i === 0 || i === 4 ? 3 : 2).map((r) => (
                             <span key={r} className="border border-white/10 rounded-full bg-white/[0.03] px-3 py-1.5 font-mono text-[0.6rem] tracking-widest text-white/60 uppercase group-hover:border-white/30 transition-colors">
                               {r}
                             </span>
                           ))}
                         </div>
                         
                         <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] font-bold tracking-[0.1em] text-white/50 group-hover:text-white transition-colors uppercase">
                           Explore Program 
                           <span aria-hidden className="transform group-hover:translate-x-1 transition-transform bg-white/10 rounded-full w-6 h-6 flex items-center justify-center group-hover:bg-white group-hover:text-ink">→</span>
                         </div>
                     </div>
                  </Link>
                );
             })}
           </div>
        </div>
      </section>

      {/* PLACEMENT / CONTACT */}
      <section className="relative w-full border-t border-sky/20 py-24 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-accent mb-6">
              <ScrambleText text="QUERY // PLACEMENT" />
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
              NOT SURE WHICH LEVEL FITS?
            </h2>
            <p className="font-mono text-sm text-sky-dim leading-relaxed mb-10">
              Tell us your background and goals — we'll place you on the right rung.
            </p>
            <Link
               href="/contact"
               className="inline-flex items-center justify-center gap-4 border border-accent rounded-full bg-accent/10 px-10 py-5 font-mono text-xs font-bold tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-ink uppercase group"
             >
               Get Placement Guidance
               <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
