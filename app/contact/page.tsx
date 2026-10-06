import type { Metadata } from "next";
import { Reveal, KineticHeading, ScrambleText } from "@/components/motion";
import ContactForm from "@/components/ContactForm";
import { socials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | FutureX AI Lab",
  description:
    "Get in touch with FutureX AI Lab — course enquiries, VibeKids school demos, and partnerships.",
};

const channels = [
  { label: "FACEBOOK", href: socials.facebook, handle: "/FutureXAI" },
  { label: "INSTAGRAM", href: socials.instagram, handle: "@futurexailab" },
  { label: "LINKEDIN", href: socials.linkedin, handle: "gtec-futurex" },
];

export default function ContactPage() {
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
                    <ScrambleText text="SYS.CONTACT // TRANSMISSION" />
                  </p>
                </div>
              </Reveal>
              <KineticHeading 
                as="h1" 
                text="TELL US WHERE YOU'RE HEADED."
                className="font-display text-5xl md:text-7xl xl:text-8xl font-black uppercase leading-[0.85] tracking-tight"
              />
              <Reveal delay={0.2} className="mt-10 max-w-xl">
                <p className="text-sky-dim text-lg leading-relaxed font-mono text-sm">
                  Course enquiries, VibeKids school demos, partnerships — send a transmission and our team will chart your route.
                </p>
              </Reveal>
            </div>
            
            <div className="md:col-span-4 flex flex-col justify-end border-l border-sky/20 pl-8 hidden md:flex">
                <div className="space-y-8 font-mono text-xs text-sky-dim">
                    <Reveal delay={0.3}>
                        <p className="tracking-[0.2em]">[ ROUTE.01 ] <br/> <span className="text-white text-xl font-bold tracking-normal">ENQUIRIES</span></p>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="tracking-[0.2em]">[ ROUTE.02 ] <br/> <span className="text-white text-xl font-bold tracking-normal">SCHOOL DEMOS</span></p>
                    </Reveal>
                    <Reveal delay={0.5}>
                        <p className="tracking-[0.2em]">[ ROUTE.03 ] <br/> <span className="text-white text-xl font-bold tracking-normal">PARTNERSHIPS</span></p>
                    </Reveal>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM & SIDEBAR */}
      <section className="relative w-full py-24">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-5 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12">
            
            <Reveal>
              <ContactForm />
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.12}>
                <div className="group relative border border-sky/20 rounded-2xl overflow-hidden bg-ink p-8">
                  
                  <p className="font-mono text-[0.65rem] tracking-[0.2em] text-accent mb-6">
                    [ DIRECT CHANNELS ]
                  </p>
                  <ul className="space-y-4">
                    {channels.map((c) => (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center justify-between border border-sky/15 rounded-xl bg-sky/5 px-5 py-4 transition-colors hover:border-accent/50 hover:bg-accent/10"
                        >
                          <span className="font-mono text-[0.8rem] text-white group-hover/link:text-accent transition-colors">{c.label}</span>
                          <span className="font-mono text-[0.7rem] text-sky-dim group-hover/link:text-sky transition-colors">
                            {c.handle}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="group relative border border-sky/20 rounded-2xl overflow-hidden bg-ink p-8">
                  
                  <p className="font-mono text-[0.65rem] tracking-[0.2em] text-sky mb-4">
                    [ NETWORK ORIGIN ]
                  </p>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mb-4">
                    G-TEC EDUCATION
                  </h3>
                  <p className="font-mono text-[0.85rem] leading-relaxed text-sky-dim">
                    FutureX AI Lab is backed by G-TEC's education network — bringing AI programs to students, professionals, and schools.
                  </p>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
