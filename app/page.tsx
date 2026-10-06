import Link from "next/link";
import Hero from "@/components/Hero";
import Trajectory from "@/components/Trajectory";
import PosterWall from "@/components/PosterWall";
import VideoBand from "@/components/VideoBand";
import { Reveal, KineticHeading, ScrambleText } from "@/components/motion";
import { Tilt, Magnetic } from "@/components/interactions";
import Atmosphere from "@/components/Atmosphere";
import { services } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services - Redesigned as a Brutalist Row Stack */}
      <section className="relative overflow-hidden bg-ink py-32 md:py-48 border-t border-sky/10">
        <Atmosphere opacity={0.1} />
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,193,245,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,193,245,0.02)_1px,transparent_1px)] bg-[size:60px_60px] mix-blend-overlay" />

        <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-sky/20 pb-12 mb-20">
            <div>
              <Reveal>
                <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  <span className="block h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <ScrambleText text="OPERATIONAL DIRECTIVES" />
                </div>
              </Reveal>
              <KineticHeading
                as="h2"
                text="Select your trajectory."
                className="font-display max-w-3xl text-4xl font-black tracking-tighter text-white md:text-6xl xl:text-[5rem] leading-[0.9]"
              />
            </div>
            <Reveal delay={0.2} className="mt-6 md:mt-0 font-mono text-[10px] tracking-[0.2em] text-sky-dim max-w-xs text-right hidden md:block">
              SYSTEM REQUIRES MANUAL OVERRIDE TO INITIATE LEARNING SEQUENCES. SELECT A MODULE TO PROCEED.
            </Reveal>
          </div>

          <div className="flex flex-col w-full">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <Link
                  href={s.title.startsWith("AI Training") ? "/courses" : "/about"}
                  className="group relative flex flex-col md:flex-row items-start md:items-center justify-between border-b border-sky/10 py-16 md:py-24 transition-all hover:bg-ink-2/50 hover:pl-8 hover:pr-4"
                >
                  {/* Left: Massive Number */}
                  <div className="font-display text-5xl md:text-8xl font-black text-transparent [-webkit-text-stroke:1px_rgba(34,193,245,0.2)] transition-all group-hover:[-webkit-text-stroke:1px_rgba(34,193,245,1)] group-hover:text-accent w-32">
                    0{i + 1}
                  </div>

                  {/* Center: Huge Title & Small Desc */}
                  <div className="flex-1 max-w-4xl mt-6 md:mt-0">
                    <h3 className="font-display text-3xl md:text-5xl font-black tracking-tighter text-white transition-colors group-hover:text-accent">
                      {s.title}
                    </h3>
                    <p className="mt-4 font-mono text-[12px] leading-relaxed text-sky-dim/70 max-w-2xl transition-colors group-hover:text-white">
                      {s.body}
                    </p>
                  </div>

                  {/* Right: Technical Button */}
                  <div className="mt-8 md:mt-0 font-mono text-[10px] font-bold tracking-[0.3em] text-sky-dim transition-colors group-hover:text-white flex items-center gap-4">
                    [ INITIATE ]
                    <div className="relative h-10 w-10 border border-sky/20 flex items-center justify-center transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                      <span className="text-lg leading-none">+</span>
                    </div>
                  </div>

                  {/* Hover Scanline */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Trajectory />

      <PosterWall />

      {/* VibeKids teaser — Advanced Mock IDE / Terminal */}
      <section className="dark-zone relative overflow-hidden bg-ink py-32 md:py-48 border-t border-sky/10">
        <Atmosphere opacity={0.15} from="8%" to="-8%" />
        <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Left: Content */}
            <div className="flex-1 max-w-2xl">
              <Reveal>
                <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  <span className="block h-2 w-2 bg-accent animate-pulse" />
                  <ScrambleText text="DEPLOYMENT: GRADES 3–12" />
                </div>
              </Reveal>
              <KineticHeading
                as="h2"
                text="The Socratic AI engine."
                className="font-display text-4xl font-black tracking-tighter text-white md:text-6xl xl:text-[4.5rem] leading-[0.9]"
              />
              <Reveal delay={0.1}>
                <p className="mt-8 font-mono text-[12px] leading-relaxed text-sky-dim/80">
                  Vibey guides students through reasoning step by step — mapping cognitive
                  pathways, closing foundational gaps, and building real AI literacy.
                  Aligned with CBSE Circular Acad-15/2026, NEP 2020, and NCF-SE 2023.
                </p>
              </Reveal>
              <div className="mt-10">
                <Link
                  href="/vibekids"
                  className="group relative inline-flex items-center gap-4 border border-accent bg-accent/5 px-8 py-4 font-mono text-[10px] font-bold tracking-[0.3em] text-accent transition-all hover:bg-accent hover:text-ink"
                >
                  <span className="block h-2 w-2 bg-accent group-hover:bg-ink" />
                  [ INITIATE VIBEY ]
                </Link>
              </div>
            </div>

            {/* Right: The Advanced Terminal UI */}
            <div className="flex-[1.5] w-full flex flex-col rounded-2xl overflow-hidden border border-sky/20 bg-[#04080F] shadow-[0_0_50px_rgba(34,193,245,0.05)] h-[450px]">
              {/* Terminal Top Bar */}
              <div className="flex w-full items-center justify-between border-b border-sky/20 bg-ink-2 px-4 py-3">
                <p className="text-[10px] font-mono tracking-[0.3em] text-accent font-bold">
                  VIBEY_CORE // INTERACTIVE_CONSOLE
                </p>
                <div className="flex gap-2">
                  <span className="block h-2 w-2 bg-sky/20" />
                  <span className="block h-2 w-2 bg-sky/20" />
                  <span className="block h-2 w-2 bg-accent" />
                </div>
              </div>
              
              <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar: System Logs */}
                <div className="hidden md:flex flex-col w-48 border-r border-sky/10 bg-ink-3/30 p-4 font-mono text-[9px] tracking-[0.1em] text-sky-dim/60 gap-3">
                  <div className="text-accent mb-2 tracking-[0.2em]">SYS_PROCESSES</div>
                  <div className="flex justify-between"><span>cognitive_map</span> <span className="text-accent">OK</span></div>
                  <div className="flex justify-between"><span>logic_engine</span> <span className="text-accent">OK</span></div>
                  <div className="flex justify-between"><span>socratic_routing</span> <span className="text-accent">OK</span></div>
                  <div className="flex justify-between"><span>user_auth</span> <span className="text-sky/40">WAIT</span></div>
                  
                  <div className="text-accent mt-4 mb-2 tracking-[0.2em]">MEMORY_NODES</div>
                  <div className="flex items-center gap-2"><span className="h-1 w-1 bg-accent" /> FRACTIONS</div>
                  <div className="flex items-center gap-2"><span className="h-1 w-1 bg-sky/30" /> MULTIPLICATION</div>
                  <div className="flex items-center gap-2"><span className="h-1 w-1 bg-sky/30" /> DIVISION</div>
                </div>

                {/* Main Chat Pane */}
                <div className="flex-1 flex flex-col p-6 font-mono text-[11px] leading-relaxed text-sky-dim overflow-y-auto">
                  <div className="flex gap-4 mb-6">
                    <span className="text-white/30 shrink-0">&gt; USER:</span>
                    <p className="text-white">What's 3/4 of 240?</p>
                  </div>
                  
                  <div className="flex gap-4 mb-6 border-l-2 border-accent pl-4 bg-accent/[0.02] py-2">
                    <span className="text-accent font-bold shrink-0">[VIBEY]:</span>
                    <p className="text-accent">Before we execute — what is 1/4 of 240? What divisor applies?</p>
                  </div>
                  
                  <div className="flex gap-4 mb-6">
                    <span className="text-white/30 shrink-0">&gt; USER:</span>
                    <p className="text-white">240 / 4... that evaluates to 60.</p>
                  </div>
                  
                  <div className="flex gap-4 mb-6 border-l-2 border-accent pl-4 bg-accent/[0.02] py-2">
                    <span className="text-accent font-bold shrink-0">[VIBEY]:</span>
                    <p className="text-accent">Confirmed. If a single quarter evaluates to 60, calculate the sum of three quarters.</p>
                  </div>

                  <div className="mt-auto flex items-center gap-2 text-white/50 border-t border-sky/10 pt-4">
                    <span className="text-accent">&gt;</span> <span className="animate-pulse block h-3 w-2 bg-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — Redesigned Brutalist Split */}
      <section className="dark-zone relative overflow-hidden bg-ink py-32 md:py-48 border-t border-sky/10">
        <Atmosphere opacity={0.2} />
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,193,245,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,193,245,0.02)_1px,transparent_1px)] bg-[size:60px_60px] mix-blend-overlay" />

        <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8 flex flex-col md:flex-row items-center gap-16">
          
          {/* Left: Content */}
          <div className="flex-1">
            <Reveal>
              <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                <span className="block h-2 w-2 bg-accent animate-pulse" />
                <ScrambleText text="YOUR JOURNEY STARTS HERE" />
              </div>
            </Reveal>
            
            <KineticHeading
              as="h2"
              text="Ready to build the future?"
              className="font-display text-5xl font-black tracking-tighter text-white md:text-7xl xl:text-[5.5rem] leading-[0.9]"
            />
            
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md font-mono text-[12px] leading-relaxed text-sky-dim/80 uppercase">
                Tell us where you are — student, professional, or school — and we will map your exact route up the ladder.
              </p>
            </Reveal>
            
            <div className="mt-12 flex items-center gap-6">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-4 border border-accent bg-accent/5 px-8 py-5 font-mono text-[10px] font-bold tracking-[0.3em] text-accent transition-all hover:bg-accent hover:text-ink"
              >
                <span className="block h-2 w-2 bg-accent group-hover:bg-ink" />
                [ START THE CONVERSATION ]
              </Link>
              
              <div className="hidden md:flex flex-col font-mono text-[8px] tracking-[0.2em] text-sky-dim">
                <span><ScrambleText text="SYSTEM STATUS:" /> <span className="text-accent animate-pulse">ONLINE</span></span>
                <ScrambleText text="AWAITING_INPUT" delay={0.5} />
              </div>
            </div>
          </div>

          {/* Right: The Video Monitor */}
          <div className="flex-1 w-full max-w-xl relative">
            {/* Viewfinder Frame */}
            <div className="absolute -inset-4 border border-sky/10 pointer-events-none" />
            <div className="absolute -inset-4 border border-white/5 pointer-events-none scale-[1.02]" />
            
            {/* Corner Accents */}
            <div className="absolute -top-4 -left-4 w-4 h-4 border-t-2 border-l-2 border-accent" />
            <div className="absolute -top-4 -right-4 w-4 h-4 border-t-2 border-r-2 border-accent" />
            <div className="absolute -bottom-4 -left-4 w-4 h-4 border-b-2 border-l-2 border-accent" />
            <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b-2 border-r-2 border-accent" />

            <div className="relative aspect-video md:aspect-square w-full bg-ink-3 rounded-2xl overflow-hidden border border-sky/20">
              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none z-10" />
              
              <video
                src="/video/futurex-final.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-screen"
              />
              
              {/* Overlay Terminal Text */}
              <div className="absolute bottom-4 left-4 z-20 font-mono text-[9px] tracking-[0.2em] text-accent/80">
                <span className="animate-pulse text-accent">REC</span> // FX_CORE_RENDER
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
