import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, Counter, KineticHeading, ScrambleText } from "@/components/motion";
import { careerTracks } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | FutureX AI Lab",
  description: "Making AI education accessible, practical, and career-focused.",
};

const objectives = [
  {
    title: "WORLD-CLASS CURRICULUM",
    body: "AI education personalized for learners across school, college, and professional levels — one ladder, many entry points.",
  },
  {
    title: "CAREERS, NOT CERTIFICATES",
    body: "Certifications, hands-on internships, industry-focused projects, and placement assistance built into every program.",
  },
  {
    title: "INCLUSIVE BY DESIGN",
    body: "Accessible, affordable, and impactful AI education for both rural and urban learners.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ink text-white pt-[100px] overflow-hidden selection:bg-accent selection:text-ink">
      
      {/* HUD HEADER */}
      <section className="relative w-full border-b border-sky/20 px-5 pb-20 pt-10 md:pt-20 overflow-hidden">
        {/* Massive Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none opacity-[0.03] z-0">
           <span className="font-display text-[25vw] font-black tracking-tighter leading-none text-white whitespace-nowrap select-none">FUTUREX</span>
        </div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-[1px] w-12 bg-accent/80" />
                  <p className="font-mono text-xs tracking-[0.3em] text-accent">
                    <ScrambleText text="SYS.ABOUT // INITIATE" />
                  </p>
                </div>
              </Reveal>
              <KineticHeading 
                as="h1" 
                text="WE TRAIN THE NEXT GENERATION OF AI BUILDERS."
                className="font-display text-5xl md:text-7xl xl:text-8xl font-black uppercase leading-[0.85] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50"
              />
              <Reveal delay={0.2} className="mt-10 max-w-xl">
                <p className="text-sky-dim text-lg leading-relaxed font-mono text-sm border-l border-accent/30 pl-6">
                  FutureX AI Lab is an initiative of G-TEC Education. We train learners to design, build, and deploy AI-powered solutions — in generative AI, large language models, vision AI, and AI agents.
                </p>
              </Reveal>
            </div>
            
            <div className="md:col-span-4 flex flex-col justify-end border-l border-sky/20 pl-8 hidden md:flex">
                <div className="space-y-8 font-mono text-xs text-sky-dim">
                    <Reveal delay={0.3}>
                        <p className="tracking-[0.2em]">[ STAT.01 ] <br/> <span className="text-white text-xl font-bold tracking-normal">EST. 2024</span></p>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="tracking-[0.2em]">[ STAT.02 ] <br/> <span className="text-white text-xl font-bold tracking-normal">GLOBAL REACH</span></p>
                    </Reveal>
                    <Reveal delay={0.5}>
                        <p className="tracking-[0.2em]">[ STAT.03 ] <br/> <span className="text-white text-xl font-bold tracking-normal">INDUSTRY ALIGNED</span></p>
                    </Reveal>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE LOGIC / OBJECTIVES */}
      <section className="relative w-full border-b border-sky/20 bg-ink">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-sky/20">
          {objectives.map((o, i) => (
            <div key={o.title} className="p-10 hover:bg-sky/[0.02] transition-colors group relative overflow-hidden h-[350px] flex flex-col justify-end">
              {/* Massive background number */}
              <div className="absolute top-4 right-4 text-[120px] font-black leading-none text-sky/5 group-hover:text-accent/10 transition-colors pointer-events-none font-display">
                0{i + 1}
              </div>
              
              <Reveal delay={i * 0.1} className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-sky/20 flex items-center justify-center group-hover:border-accent transition-colors mb-8 bg-ink">
                   <div className="w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(34,193,245,0.8)]" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white mb-4 group-hover:text-accent transition-colors drop-shadow-md">
                  {o.title}
                </h3>
                <p className="font-mono text-[0.85rem] text-sky-dim leading-relaxed">
                  {o.body}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
      {/* MISSION & VISION TELEMETRY */}
      <section className="relative w-full border-b border-sky/20 py-24 overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-5 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <Reveal>
             <p className="font-mono text-xs tracking-[0.3em] text-accent mb-6">
                <ScrambleText text="MISSION & VISION" />
             </p>
             <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tight text-white">
               A HUB OF AI INNOVATION AND TALENT.
             </h2>
             <div className="mt-10 space-y-8 font-mono text-sm text-sky-dim leading-relaxed border-l-2 border-accent/50 pl-6">
               <p>
                 <span className="text-accent font-bold">OUR MISSION:</span> Deliver world-class AI education tailored to learners
                 at every stage — school, college, and professional — while
                 creating clear career pathways through certifications, hands-on
                 internships, industry-focused projects, and placement support.
               </p>
               <p>
                 <span className="text-accent font-bold">OUR VISION:</span> Position FutureX as a hub of AI innovation and talent,
                 where every student, professional, and organization can harness AI
                 to transform industries, communities, and lives.
               </p>
             </div>
          </Reveal>
          
          <div className="grid grid-cols-2 gap-[1px] bg-sky/20 border border-sky/20 p-[1px] shadow-[0_0_30px_rgba(34,193,245,0.1)] rounded-2xl overflow-hidden w-full">
             {[
               { n: 4, s: "", label: "CERTIFICATION LEVELS" },
               { n: 5, s: "", label: "INDUSTRY PROGRAMS" },
               { n: 26, s: "", label: "HANDS-ON MODULES" },
               { n: 12, s: "+", label: "CAREER PATHWAYS" },
             ].map((stat, i) => (
               <Reveal key={stat.label} delay={0.1 * i} className="h-full">
                 <div className="bg-ink p-10 h-full flex flex-col justify-center items-center text-center group hover:bg-accent/[0.03] transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,193,245,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,193,245,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                    <dd className="font-display text-5xl xl:text-7xl font-black text-white group-hover:text-accent transition-colors drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_20px_rgba(34,193,245,0.4)] relative z-10">
                      <Counter to={stat.n} suffix={stat.s} />
                    </dd>
                    <dt className="mt-5 font-mono text-[0.65rem] tracking-[0.2em] text-sky-dim relative z-10">{stat.label}</dt>
                 </div>
               </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* LAB INFRASTRUCTURE TERMINAL */}
      <section className="relative w-full border-b border-sky/20 bg-ink py-24">
         <div className="mx-auto max-w-7xl px-5 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
               <Reveal>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="h-[1px] w-12 bg-accent/50" />
                    <p className="font-mono text-xs tracking-[0.3em] text-accent">
                      <ScrambleText text="SYS.INFRA // ARCHITECTURE" />
                    </p>
                  </div>
                  <KineticHeading 
                    as="h2" 
                    text="BUILT FOR SCALE AND SPEED."
                    className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tight"
                  />
                  <p className="mt-8 font-mono text-sm text-sky-dim leading-relaxed">
                    Our ecosystem is designed like a production-grade AI pipeline. We don't just teach theory; we deploy environments where learners build, train, and break models in real-time.
                  </p>
               </Reveal>
            </div>
            <div className="lg:col-span-7">
               <Reveal delay={0.2} className="h-full">
                  <div className="h-full w-full rounded-2xl border border-sky/20 bg-black p-6 font-mono text-[0.65rem] md:text-xs text-sky-dim/70 shadow-[inset_0_0_50px_rgba(34,193,245,0.05)] overflow-hidden relative group">
                     <div className="absolute top-0 left-0 w-full h-8 border-b border-sky/20 bg-sky/5 flex items-center px-4 gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                        <span className="ml-4 tracking-widest text-[9px] text-sky-dim">root@futurex-core:~</span>
                     </div>
                     <div className="pt-8 flex flex-col gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                        <p><span className="text-accent">➜</span> <span className="text-white">~</span> ./initialize_lab_environment.sh</p>
                        <p className="text-sky-dim/50">[10:04:22] Mounting persistent volumes... OK</p>
                        <p className="text-sky-dim/50">[10:04:23] Allocating GPU clusters (NVIDIA H100 x 64)... OK</p>
                        <p className="text-sky-dim/50">[10:04:24] Loading LLM foundational weights [70B_param_v2]... OK</p>
                        <p className="text-sky-dim/50">[10:04:27] Establishing student neural-link gateways... 14,021 connected</p>
                        <p className="text-sky-dim/50">[10:04:28] Bootstrapping sandbox environments...</p>
                        <div className="pl-4 border-l border-sky/20 my-2 py-2 text-sky-dim">
                           <p>» Python 3.11 ......... READY</p>
                           <p>» PyTorch 2.2 ......... READY</p>
                           <p>» LangChain SDK ....... READY</p>
                           <p>» Vector DB (Milvus) .. READY</p>
                        </div>
                        <p className="text-accent animate-pulse mt-2">SYSTEM ONLINE. WAITING FOR INPUT_</p>
                     </div>
                  </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* PATHWAYS */}
      <section className="relative w-full py-24 pb-32">
        <div className="mx-auto max-w-7xl px-5">
           <Reveal className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-accent/50" />
                <p className="font-mono text-xs tracking-[0.3em] text-accent">
                  <ScrambleText text="PATHWAYS // OUTPUT" />
                </p>
              </div>
              <KineticHeading 
                as="h2" 
                text="WHERE THE LADDER LEADS"
                className="font-display text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight"
              />
           </Reveal>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {careerTracks.map((t, i) => (
               <Reveal key={t.title} delay={(i % 2) * 0.1}>
                 <div className="group relative border border-sky/20 rounded-2xl overflow-hidden bg-ink/50 p-8 hover:border-accent/50 transition-colors backdrop-blur-sm">
                    
                    <h3 className="font-display text-2xl font-bold uppercase text-white mb-3 group-hover:text-accent transition-colors">
                      {t.title}
                    </h3>
                    <p className="font-mono text-[0.85rem] text-sky-dim leading-relaxed mb-8 h-16">
                      {t.body}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {t.examples.map((e) => (
                        <span
                          key={e}
                          className="border border-sky/20 rounded-full bg-sky/5 px-3 py-1 font-mono text-[0.65rem] tracking-widest text-sky uppercase group-hover:border-accent/30 group-hover:text-accent transition-colors"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                 </div>
               </Reveal>
             ))}
           </div>
           
           <Reveal className="mt-20 text-center">
             <Link
               href="/courses"
               className="inline-flex items-center justify-center gap-4 border border-accent bg-accent/10 px-10 py-5 font-mono text-xs font-bold tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-ink uppercase group"
             >
               Explore Programs
               <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
             </Link>
           </Reveal>
        </div>
      </section>

    </main>
  );
}
