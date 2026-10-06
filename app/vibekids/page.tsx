import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, KineticHeading, ScrambleText } from "@/components/motion";
import { Tilt } from "@/components/interactions";

export const metadata: Metadata = {
  title: "VibeKids — Socratic AI Learning for Grades 3–12",
  description:
    "VibeKids is an AI-powered interactive learning system for grades 3–12. Vibey, its Socratic AI engine, guides reasoning instead of giving answers.",
};

const features = [
  {
    title: "COGNITIVE DIAGNOSTICS",
    body: "Vibey monitors reasoning habits in real time and pinpoints the foundational gap — often from an earlier grade — that's actually blocking today's concept.",
    mono: "REAL-TIME MAPPING",
  },
  {
    title: "MULTI-DASHBOARD ANALYTICS",
    body: "Separate views for school leadership, teachers, and parents — performance, progress, and early-warning signals for every learner.",
    mono: "LEADERSHIP · TEACHER · PARENT",
  },
  {
    title: "AI LITERACY TRAINING",
    body: "Age-appropriate modules on spotting hallucinations, recognizing bias, and writing effective prompts — literacy for the AI era, not just screen time.",
    mono: "HALLUCINATIONS · BIAS",
  },
  {
    title: "VIRTUAL STEM LABS",
    body: "Digital simulations across physics, mathematics, financial literacy, and robotics — with connectivity to physical STEM kits in the classroom.",
    mono: "PHYSICS · MATH · ROBOTICS",
  },
];

const stakeholders = [
  {
    who: "SCHOOLS",
    points: ["CBSE compliance out of the box", "Differentiation that scales", "Performance analytics per class"],
  },
  {
    who: "TEACHERS",
    points: ["Automated grading", "Early learning-blocker ID", "Lesson-planning support"],
  },
  {
    who: "STUDENTS",
    points: ["Personalized Socratic guidance", "Gamified progress", "Critical-thinking development"],
  },
  {
    who: "PARENTS",
    points: ["Weekly progress reports", "Clear performance visibility", "Less homework supervision"],
  },
];

export default function VibeKidsPage() {
  return (
    <main className="min-h-screen bg-ink text-white pt-[100px] overflow-hidden selection:bg-accent selection:text-ink">
      
      {/* HUD HEADER */}
      <section className="relative w-full border-b border-sky/20 px-5 pb-20 pt-10 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-[1px] w-12 bg-accent/80" />
                  <p className="font-mono text-xs tracking-[0.3em] text-accent">
                    <ScrambleText text="SYS.VIBEKIDS // ACTIVE" />
                  </p>
                </div>
              </Reveal>
              <KineticHeading 
                as="h1" 
                text="THE AI TUTOR THAT ASKS — NEVER TELLS."
                className="font-display text-5xl md:text-7xl xl:text-8xl font-black uppercase leading-[0.85] tracking-tight"
              />
              <Reveal delay={0.2} className="mt-10 max-w-xl">
                <p className="text-sky-dim text-lg leading-relaxed font-mono text-sm">
                  VibeKids is an AI-powered interactive learning system that integrates with school curricula, textbooks, and STEM kits. At its heart is Vibey, a Socratic AI engine built to guide reasoning step by step instead of handing over answers.
                </p>
              </Reveal>
              
              <Reveal delay={0.3} className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-4 border border-accent rounded-full bg-accent/10 px-8 py-4 font-mono text-xs font-bold tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-ink uppercase group"
                >
                  Book a School Demo
                  <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </Reveal>
            </div>
            
            <div className="md:col-span-4 flex flex-col justify-end border-l border-sky/20 pl-8 hidden md:flex">
                <div className="space-y-8 font-mono text-xs text-sky-dim">
                    <Reveal delay={0.3}>
                        <p className="tracking-[0.2em]">[ TARGET.01 ] <br/> <span className="text-white text-xl font-bold tracking-normal">GRADES 3–12</span></p>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="tracking-[0.2em]">[ COMPLIANCE ] <br/> <span className="text-white text-xl font-bold tracking-normal">CBSE ACAD-15/2026</span></p>
                    </Reveal>
                    <Reveal delay={0.5}>
                        <p className="tracking-[0.2em]">[ FRAMEWORK ] <br/> <span className="text-white text-xl font-bold tracking-normal">NEP 2020 & NCF-SE 2023</span></p>
                    </Reveal>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCRATIC ENGINE TERMINAL */}
      <section className="relative w-full border-b border-sky/20 py-24">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 relative z-10">
          <Reveal>
             <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-accent/50" />
                <p className="font-mono text-xs tracking-[0.3em] text-accent">
                  <ScrambleText text="THE VIBEY ENGINE" />
                </p>
             </div>
             <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tight text-white">
               ANSWER MACHINES CREATE COPY-PASTE LEARNERS.
             </h2>
             <div className="mt-8 space-y-6 font-mono text-sm text-sky-dim leading-relaxed border-l-2 border-accent/50 pl-6">
               <p>
                 Most AI tutors hand students the solution — and short-circuit the learning. Vibey is built around one constraint: it never gives the direct answer. It asks the next-smallest question, so the student takes the step themselves.
               </p>
               <p>
                 Behind the conversation, real-time cognitive mapping tracks how each child reasons — building a live map of strengths, gaps, and exactly what to close next.
               </p>
             </div>
          </Reveal>
          
          <Reveal delay={0.15}>
            {/* TERMINAL UI */}
            <div className="group relative border border-sky/30 rounded-2xl overflow-hidden bg-ink/80 backdrop-blur p-1 shadow-[0_0_30px_rgba(34,193,245,0.05)] hover:shadow-[0_0_40px_rgba(34,193,245,0.15)] transition-shadow">
               {/* Header */}
               <div className="flex items-center justify-between border-b border-sky/20 bg-sky/5 px-4 py-3">
                 <p className="font-mono text-[0.65rem] tracking-[0.2em] text-accent">SESSION.LOG // CLASS_6_MATHS</p>
                 <div className="flex gap-2">
                   <div className="h-2 w-2 rounded-full border border-sky/40" />
                   <div className="h-2 w-2 rounded-full border border-sky/40" />
                   <div className="h-2 w-2 rounded-full border border-accent bg-accent/20" />
                 </div>
               </div>
               {/* Body */}
               <div className="p-6 font-mono text-[0.85rem] leading-relaxed space-y-6">
                 <div>
                   <p className="text-sky-dim/50 mb-1 text-[0.65rem] tracking-widest">USER_INPUT</p>
                   <p className="text-white border-l-2 border-sky/30 pl-4">
                     {">"} I don't get how to find the area of a triangle.
                   </p>
                 </div>
                 
                 <div>
                   <p className="text-accent mb-1 text-[0.65rem] tracking-widest">VIBEY_AI</p>
                   <p className="text-sky border-l-2 border-accent pl-4">
                     Let's start somewhere you know. What's the area of a rectangle that's 6 cm by 4 cm?
                   </p>
                 </div>

                 <div>
                   <p className="text-sky-dim/50 mb-1 text-[0.65rem] tracking-widest">USER_INPUT</p>
                   <p className="text-white border-l-2 border-sky/30 pl-4">
                     {">"} 24 cm²!
                   </p>
                 </div>

                 <div>
                   <p className="text-accent mb-1 text-[0.65rem] tracking-widest">VIBEY_AI</p>
                   <p className="text-sky border-l-2 border-accent pl-4 relative">
                     Now imagine cutting that rectangle corner-to-corner. What do you get — and what happened to the area?
                     <span className="absolute -right-2 top-0 h-full w-[2px] bg-accent animate-pulse" />
                   </p>
                 </div>
               </div>
               
               {/* Footer Status */}
               <div className="border-t border-sky/20 bg-sky/5 px-4 py-2 font-mono text-[0.6rem] tracking-[0.15em] text-sky-dim flex justify-between">
                 <span>COGNITIVE_MAP: ACTIVE</span>
                 <span className="text-accent">RECTANGLES ✓ → TRIANGLES [ IN PROGRESS ]</span>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SYSTEM CAPABILITIES */}
      <section className="relative w-full border-b border-sky/20 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-accent/50" />
              <p className="font-mono text-xs tracking-[0.3em] text-accent">
                <ScrambleText text="SYS // CAPABILITIES" />
              </p>
            </div>
            <KineticHeading 
              as="h2" 
              text="BUILT FOR THE WHOLE CLASSROOM."
              className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tight"
            />
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 0.12}>
                <Tilt className="h-full" max={5}>
                  <div className="group relative h-full border border-sky/20 rounded-2xl overflow-hidden bg-ink/50 p-8 md:p-10 transition-colors hover:border-accent/40 hover:bg-sky/5">
                    
                    <p className="font-mono text-[0.65rem] tracking-[0.2em] text-accent/80 mb-4 group-hover:text-accent transition-colors">
                      [ {f.mono} ]
                    </p>
                    <h3 className="font-display text-2xl font-bold uppercase text-white mb-4 group-hover:text-accent transition-colors">
                      {f.title}
                    </h3>
                    <p className="font-mono text-[0.85rem] leading-relaxed text-sky-dim">
                      {f.body}
                    </p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ONE PLATFORM, FOUR WINS */}
      <section className="relative w-full border-b border-sky/20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x lg:divide-x divide-sky/20">
          {stakeholders.map((s, i) => (
            <div key={s.who} className="p-10 hover:bg-white/[0.02] transition-colors group relative">
              <Reveal delay={i * 0.1}>
                <p className="font-mono text-[0.65rem] tracking-[0.3em] text-accent/70 mb-6 group-hover:text-accent transition-colors">
                  [ {String(i + 1).padStart(2, "0")} ]
                </p>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white mb-6 group-hover:text-accent transition-colors">
                  {s.who}
                </h3>
                <ul className="space-y-4">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[0.8rem] leading-relaxed text-sky-dim font-mono">
                      <span aria-hidden className="text-accent/50 group-hover:text-accent transition-colors mt-[1px]">›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="relative w-full py-24 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-accent mb-6">
              <ScrambleText text="QUERY // INTEGRATION" />
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
              BRING VIBEKIDS TO YOUR SCHOOL.
            </h2>
            <p className="font-mono text-sm text-sky-dim leading-relaxed mb-10">
              We'll walk your leadership team through the platform, dashboards, and CBSE alignment — with your own textbooks and curriculum.
            </p>
            <Link
               href="/contact"
               className="inline-flex items-center justify-center gap-4 border border-accent rounded-full bg-accent/10 px-10 py-5 font-mono text-xs font-bold tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-ink uppercase group shadow-[0_0_20px_rgba(34,193,245,0.2)] hover:shadow-[0_0_30px_rgba(34,193,245,0.4)]"
             >
               Book a Demo
               <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
