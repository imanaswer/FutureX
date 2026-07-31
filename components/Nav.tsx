"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/data";
import { Magnetic } from "@/components/interactions";

function Wordmark() {
  return (
    <Magnetic strength={0.35} className="shrink-0">
      <Link href="/" className="block" aria-label="FutureX AI Lab — home">
        <Image
          src="/img/logo-white.png"
          alt="FutureX — G-TEC AI Lab"
          width={170}
          height={48}
          priority
          className="h-9 w-auto md:h-10"
        />
      </Link>
    </Magnetic>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`dark-zone fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-ink/85 backdrop-blur-md shadow-[0_1px_0_rgba(126,178,255,0.14)]" : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px]">
        <Wordmark />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-[0.9rem] font-medium transition-colors ${
                  active ? "text-white" : "text-sky-dim hover:text-white"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span className={`h-[2px] w-5 rounded bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-5 rounded bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-5 rounded bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-sky/10 bg-ink/95 px-5 pb-6 pt-3 backdrop-blur-md md:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border-b border-sky/10 py-3.5 text-[1.05rem] font-medium text-lite"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
