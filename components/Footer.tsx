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
    <footer className="dark-zone relative overflow-hidden bg-ink text-lite">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[70%] -translate-x-1/2 rounded-[100%] bg-blue/15 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        {/* CTA band */}
        <div className="flex flex-col items-start justify-between gap-7 border-b border-sky/12 pb-10 md:pb-14 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.22em] text-accent">
              START YOUR ASCENT
            </p>
            <h2 className="font-display mt-4 max-w-xl text-balance text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
              Let&apos;s build the future — together.
            </h2>
          </div>
          <Link
            href="/contact"
            className="btn-sweep group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-[1rem] font-bold text-ink transition hover:bg-accent-deep"
          >
            Enquire now
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-11 md:grid-cols-[1.6fr_1fr_1fr] md:gap-10 md:py-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/img/logo-white.png"
              alt="FutureX — G-TEC AI Lab"
              width={180}
              height={50}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-xs text-[0.92rem] leading-relaxed text-sky-dim">
              An initiative of G-TEC EDUCATION — making AI education accessible,
              practical, and career-focused for every learner.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.16em] text-sky/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-accent/50" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>
              MISSION STATUS · ASCENDING
            </p>

            {/* Socials — emoji pills */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-sky/20 bg-ink-2 px-4 py-2 text-[0.85rem] font-medium text-lite/85 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <span className="text-sky transition-colors group-hover:text-accent">
                    <SocialIcon name={s.icon} />
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="EXPLORE">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="PROGRAMS">
            {courses.map((c) => (
              <FooterLink key={c.slug} href={`/courses/${c.slug}`}>
                <span className="font-mono text-[0.72rem] text-sky/70">L{c.level}</span>{" "}
                {c.shortName}
              </FooterLink>
            ))}
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-sky/12 py-7 text-[0.82rem] text-sky-dim sm:flex-row sm:items-center">
          <p>© 2026 FutureX AI Lab. All rights reserved.</p>
          <p className="font-mono text-[0.72rem] tracking-[0.14em]">
            AN INITIATIVE OF G-TEC EDUCATION
          </p>
        </div>
      </div>

      {/* Giant brand wordmark — desktop flourish */}
      <div aria-hidden className="pointer-events-none relative z-0 hidden select-none overflow-hidden sm:block">
        <p className="font-display translate-y-[0.16em] text-center text-[24vw] font-extrabold leading-[0.72] tracking-[-0.04em] text-white/[0.04]">
          Future<span className="text-blue/[0.07]">X</span>
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-[0.7rem] tracking-[0.18em] text-sky">{title}</h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 text-[0.92rem] text-lite/80 transition hover:text-accent"
      >
        {children}
        <span
          aria-hidden
          className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
        >
          →
        </span>
      </Link>
    </li>
  );
}
