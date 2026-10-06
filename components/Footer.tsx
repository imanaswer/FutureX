import Link from "next/link";
import Image from "next/image";
import { nav, socials, courses } from "@/lib/data";

const socialLinks = [
  { label: "Instagram", href: socials.instagram, icon: "instagram" as const },
  { label: "LinkedIn", href: socials.linkedin, icon: "linkedin" as const },
  { label: "Facebook", href: socials.facebook, icon: "facebook" as const },
];

function SocialIcon({ name }: { name: "instagram" | "linkedin" | "facebook" }) {
  const common = { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, className: "h-[1.05rem] w-[1.05rem]" };
  if (name === "instagram")
    return (
      <svg {...common}>
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.35 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.38.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.12-.66-.66-1.33-1.08-2.12-1.38-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0z" />
        <path d="M12 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zM12 16a4 4 0 114-4 4 4 0 01-4 4z" />
        <circle cx="18.41" cy="5.59" r="1.44" />
      </svg>
    );
  if (name === "linkedin")
    return (
      <svg {...common}>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="dark-zone relative overflow-hidden bg-ink border-t border-sky/20 pt-16 md:pt-24 pb-8">
      
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,193,245,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,193,245,0.02)_1px,transparent_1px)] bg-[size:60px_60px] mix-blend-overlay pointer-events-none z-0" />

      {/* Giant brand wordmark — Absolute background behind everything */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 hidden select-none overflow-hidden sm:flex justify-center items-end opacity-60">
        <p className="font-display translate-y-[0.2em] text-center text-[28vw] font-black leading-[0.72] tracking-tighter text-white/[0.03]">
          Future<span className="text-accent/[0.04]">X</span>
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-[1920px] px-4 sm:px-8">
        
        {/* CTA band - Brutalist */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-sky/20 pb-12 md:pb-16 lg:flex-row lg:items-end">
          <div>
            <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              <span className="block h-2 w-2 bg-accent animate-pulse" />
              SYSTEM SHUTDOWN SEQUENCE
            </div>
            <h2 className="font-display max-w-3xl text-balance text-4xl font-black leading-[0.9] tracking-tighter text-white sm:text-5xl md:text-7xl xl:text-[5.5rem]">
              Let's build the future.
            </h2>
          </div>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-4 border border-accent rounded-full bg-accent/5 px-8 py-5 font-mono text-[10px] font-bold tracking-[0.3em] text-accent transition-all hover:bg-accent hover:text-ink backdrop-blur-md"
          >
            <span className="block h-2 w-2 bg-accent group-hover:bg-ink" />
            [ ENQUIRE NOW ]
          </Link>
        </div>

        {/* Columns - Clean Layout */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 my-20">
          
          {/* Brand & Socials Panel */}
          <div className="col-span-1 md:col-span-6 relative group">
            <Image
              src="/img/logo-white.png"
              alt="FutureX — G-TEC AI Lab"
              width={180}
              height={50}
              className="h-9 w-auto opacity-90"
            />
            
            <p className="mt-8 max-w-sm font-mono text-xs leading-relaxed text-sky-dim/70">
              AN INITIATIVE OF G-TEC EDUCATION — MAKING AI EDUCATION ACCESSIBLE,
              PRACTICAL, AND CAREER-FOCUSED FOR EVERY LEARNER.
            </p>
            
            <div className="mt-8 flex items-center gap-4 border border-sky/20 rounded-full bg-ink-2/50 px-4 py-3 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-accent/50" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.3em] text-accent font-bold">MISSION_STATUS: ASCENDING</span>
            </div>

            {/* Socials — Minimal HUD Icons */}
            <div className="mt-12 flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group relative flex h-12 w-12 items-center justify-center border border-sky/10 rounded-full bg-ink-2/30 text-sky-dim transition-all hover:border-accent/50 hover:bg-accent/[0.05] hover:text-accent"
                >
                  <span className="transition-transform group-hover:scale-110">
                    <SocialIcon name={s.icon} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Panel */}
          <div className="col-span-1 md:col-span-3 relative group">
            <FooterCol title="SYS_EXPLORE">
              {nav.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label.toUpperCase()}
                </FooterLink>
              ))}
            </FooterCol>
          </div>

          {/* Programs Panel */}
          <div className="col-span-1 md:col-span-3 relative group">
            <FooterCol title="SYS_PROGRAMS">
              {courses.map((c) => (
                <FooterLink key={c.slug} href={`/courses/${c.slug}`}>
                  <span className="text-accent opacity-50">L{c.level}_</span>{" "}
                  {c.shortName.toUpperCase()}
                </FooterLink>
              ))}
            </FooterCol>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-sky/20 pt-8 font-mono text-[10px] tracking-[0.2em] text-sky-dim/50 sm:flex-row sm:items-center">
          <p>© 2026 FUTUREX AI LAB. ALL RIGHTS RESERVED. // SYSTEM V1.0</p>
          <div className="flex gap-2 items-center">
            <span className="block h-1 w-1 bg-sky-dim/30" />
            <span className="block h-1 w-1 bg-sky-dim/30" />
            <span className="block h-1 w-3 bg-accent/50" />
            <p className="ml-2 text-accent/70">AN INITIATIVE OF G-TEC EDUCATION</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6 flex items-center gap-2 border-b border-sky/20 pb-4">
        <span className="block h-1.5 w-1.5 bg-accent/70" />
        <h3 className="font-mono text-xs font-bold tracking-[0.3em] text-accent">{title}</h3>
      </div>
      <ul className="flex-1 flex flex-col">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className="border-b border-sky/5 last:border-0">
      <Link
        href={href}
        className="group flex w-full items-center justify-between py-3 px-2 font-mono text-xs tracking-[0.2em] text-sky-dim/80 transition-all hover:bg-accent/[0.03] hover:text-accent"
      >
        <div className="flex items-center gap-4 transition-transform duration-300 group-hover:translate-x-2">
          <span className="font-mono text-[10px] text-sky/30 transition-colors group-hover:text-accent">&gt;</span>
          {children}
        </div>
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="h-[1px] w-0 bg-accent/50 transition-all duration-300 group-hover:w-8 hidden xl:block" />
          <span className="font-mono text-[9px] tracking-[0.3em] text-accent opacity-0 transition-all duration-300 group-hover:opacity-100 hidden xl:block translate-x-2 group-hover:translate-x-0">
            [EXEC]
          </span>
        </div>
      </Link>
    </li>
  );
}
