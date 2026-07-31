import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/motion";
import { socials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with FutureX AI Lab — course enquiries, VibeKids school demos, and partnerships.",
};

const channels = [
  { label: "Facebook", href: socials.facebook, handle: "/FutureXAI" },
  { label: "Instagram", href: socials.instagram, handle: "@futurexailab" },
  { label: "LinkedIn", href: socials.linkedin, handle: "gtec-futurex" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        bg="/img/contact-signal.png"
        meta={["Course enquiries", "VibeKids school demos", "Partnerships"]}
        kicker="MISSION CONTROL · CONTACT"
        title="Tell us where you're headed."
        lede="Course enquiries, VibeKids school demos, partnerships — send a transmission and our team will chart your route."
      />

      <section className="paper-grid bg-paper py-16 md:py-20 xl:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.12}>
              <div className="dark-zone rounded-2xl bg-ink p-7">
                <p className="font-mono text-[0.65rem] tracking-[0.18em] text-accent">
                  DIRECT CHANNELS
                </p>
                <ul className="mt-5 space-y-4">
                  {channels.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-sky/15 px-4 py-3.5 transition hover:border-accent/50"
                      >
                        <span className="font-medium text-lite">{c.label}</span>
                        <span className="font-mono text-[0.72rem] text-sky group-hover:text-accent">
                          {c.handle}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl bg-paper-2 p-7 shadow-card">
                <p className="font-mono text-[0.65rem] tracking-[0.18em] text-cyan">
                  AN INITIATIVE OF
                </p>
                <p className="font-display mt-3 text-xl font-bold text-body">G-TEC Education</p>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-body-soft">
                  FutureX AI Lab is backed by G-TEC's education network —
                  bringing AI programs to students, professionals, and schools.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
