import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, KineticHeading, ScrambleText } from "@/components/motion";
import { Tilt } from "@/components/interactions";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — The Lab Notebook | FutureX AI Lab",
  description:
    "Notes from FutureX AI Lab on AI literacy, careers, RAG systems, Socratic AI, and the technologies shaping education.",
};

const dateFmt = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export default function BlogPage() {
  const [lead, ...rest] = articles;
  return (
    <main className="min-h-screen bg-ink text-white pt-[100px] pb-32 overflow-hidden selection:bg-accent selection:text-ink">
      
      {/* HUD HEADER */}
      <section className="relative w-full border-b border-sky/20 px-5 pb-20 pt-10 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-[1px] w-12 bg-accent/80" />
                  <p className="font-mono text-xs tracking-[0.3em] text-accent">
                    <ScrambleText text="SYS.BLOG // INDEX" />
                  </p>
                </div>
              </Reveal>
              <KineticHeading 
                as="h1" 
                text="THE LAB NOTEBOOK."
                className="font-display text-5xl md:text-7xl xl:text-8xl font-black uppercase leading-[0.85] tracking-tight"
              />
              <Reveal delay={0.2} className="mt-10 max-w-xl">
                <p className="text-sky-dim text-lg leading-relaxed font-mono text-sm">
                  What we're learning about AI education, careers, and the systems behind it all — written for learners, parents, and educators.
                </p>
              </Reveal>
            </div>
            
            <div className="md:col-span-4 flex flex-col justify-end border-l border-sky/20 pl-8 hidden md:flex">
                <div className="space-y-8 font-mono text-xs text-sky-dim">
                    <Reveal delay={0.3}>
                        <p className="tracking-[0.2em]">[ TOPIC.01 ] <br/> <span className="text-white text-xl font-bold tracking-normal">AI LITERACY</span></p>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="tracking-[0.2em]">[ TOPIC.02 ] <br/> <span className="text-white text-xl font-bold tracking-normal">CAREERS</span></p>
                    </Reveal>
                    <Reveal delay={0.5}>
                        <p className="tracking-[0.2em]">[ TOPIC.03 ] <br/> <span className="text-white text-xl font-bold tracking-normal">TECHNOLOGY</span></p>
                    </Reveal>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST ENTRY */}
      <section className="relative w-full py-24 border-b border-sky/20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
             <p className="font-mono text-xs tracking-[0.3em] text-accent/80 mb-8">
               [ LATEST ENTRY ]
             </p>
             <Link
               href={`/blog/${lead.slug}`}
               className="group relative block w-full border border-sky/20 rounded-2xl overflow-hidden bg-ink/70 p-8 md:p-14 hover:border-accent/50 transition-colors"
             >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
                   {/* Meta Sidebar */}
                   <div className="flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-sky/20 pb-8 lg:pb-0 lg:pr-12">
                      <div className="space-y-6 font-mono text-xs">
                         <div>
                           <p className="text-sky-dim tracking-[0.2em] mb-1">DATE</p>
                           <p className="text-white tracking-widest">{dateFmt.format(new Date(lead.date)).toUpperCase()}</p>
                         </div>
                         <div>
                           <p className="text-sky-dim tracking-[0.2em] mb-1">READ TIME</p>
                           <p className="text-white tracking-widest">{lead.readMinutes} MIN</p>
                         </div>
                         <div>
                           <p className="text-sky-dim tracking-[0.2em] mb-1">CATEGORY</p>
                           <p className="text-accent tracking-widest bg-accent/10 border border-accent/20 inline-block px-2 py-1">{lead.tag.toUpperCase()}</p>
                         </div>
                      </div>
                   </div>
                   
                   {/* Content Area */}
                   <div className="flex flex-col justify-center">
                      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tight text-white mb-6 group-hover:text-accent transition-colors">
                        {lead.title}
                      </h2>
                      <p className="font-mono text-[0.85rem] text-sky-dim leading-relaxed max-w-2xl mb-8">
                        {lead.excerpt}
                      </p>
                      
                      <div className="inline-flex items-center gap-3 font-mono text-xs font-bold tracking-[0.2em] text-sky group-hover:text-accent transition-colors uppercase">
                        Read the entry 
                        <span aria-hidden className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                   </div>
                </div>
             </Link>
          </Reveal>
        </div>
      </section>

      {/* ARCHIVE GRID */}
      <section className="relative w-full py-24">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-5 relative z-10">
          <Reveal className="mb-12">
             <p className="font-mono text-xs tracking-[0.3em] text-accent/80">
               [ ARCHIVE ]
             </p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.1}>
                <Tilt className="h-full" max={5}>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="group relative block h-full border border-sky/20 rounded-2xl overflow-hidden bg-ink/50 backdrop-blur-sm p-8 transition-colors hover:border-accent/40 hover:bg-ink"
                  >
                    
                    <div className="flex items-center justify-between font-mono text-[0.65rem] tracking-[0.2em] mb-6">
                      <span className="text-sky group-hover:text-accent transition-colors">
                        {a.tag.toUpperCase()}
                      </span>
                      <span className="text-sky-dim">
                        {a.readMinutes} MIN
                      </span>
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold uppercase text-white mb-4 group-hover:text-accent transition-colors leading-[1.1]">
                      {a.title}
                    </h3>
                    
                    <p className="font-mono text-[0.8rem] leading-relaxed text-sky-dim mb-8">
                      {a.excerpt}
                    </p>
                    
                    <p className="mt-auto pt-4 border-t border-sky/10 font-mono text-[0.65rem] tracking-[0.15em] text-sky-dim/70">
                      {dateFmt.format(new Date(a.date)).toUpperCase()}
                    </p>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
