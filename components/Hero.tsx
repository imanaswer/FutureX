"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { WordRotate } from "@/components/ui/text";
import { VideoFrame } from "@/components/ui/video-frame";
import { Aurora, GridPattern } from "@/components/ui/background";
import { EASE_OUT } from "@/lib/utils";

const facts = ["4 certification levels", "5 programs", "Labs, capstones & career support", "VibeKids for grades 3–12"];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const item = (delay: number) => ({
    className: "fx-motion blur-in",
    "data-in": mounted,
    style: { ["--d" as string]: `${delay}s` },
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE_OUT },
  });

  return (
    <section className="relative overflow-hidden bg-ink pt-36 md:pt-44">
      {/* Backdrop */}
      <div aria-hidden className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          src="/video/futurex-loop.mp4"
          poster="/img/atmosphere.png"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
        <Aurora intensity={0.9} />
        <GridPattern size={56} mask="radial-gradient(ellipse 60% 55% at 50% 10%, #000 20%, transparent 100%)" />
      </div>

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div {...item(0.05)}>
            <Badge dot icon={<Sparkles />}>
              An initiative of G-TEC Education
            </Badge>
          </motion.div>

          <motion.h1
            {...item(0.15)}
            className="fx-motion blur-in font-display mt-7 text-balance text-[2.75rem] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[5.4rem]"
          >
            Build real AI skills, from your first{" "}
            <WordRotate
              words={["prompt", "pipeline", "agent", "model"]}
              wordClassName="text-gradient animate-gradient-x"
            />{" "}
            to production.
          </motion.h1>

          <motion.p
            {...item(0.3)}
            className="fx-motion blur-in mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-body-soft md:text-xl"
          >
            FutureX AI Lab runs a four-level certification ladder in generative AI, RAG systems,
            AI agents, and foundation-model operations, alongside VibeKids, a Socratic AI tutor for
            school students.
          </motion.p>

          <motion.div {...item(0.42)} className="fx-motion blur-in mt-9 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/courses" size="lg" arrow="right">
              Explore programs
            </ButtonLink>
            <ButtonLink href="/vibekids" size="lg" variant="secondary">
              Meet VibeKids
            </ButtonLink>
          </motion.div>

          <motion.ul
            {...item(0.55)}
            className="fx-motion blur-in mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-sky-dim"
          >
            {facts.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {f}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.6, ease: EASE_OUT }}
          className="fx-motion relative mx-auto mt-16 max-w-5xl md:mt-20"
        >
          <VideoFrame src="/video/futurex-final.mp4" poster="/video/futurex-poster.jpg">
            {/* Floating facts */}
            <div className="pointer-events-none absolute -left-6 top-[18%] hidden animate-float lg:block xl:-left-16">
              <GlassCard label="Certification ladder" value="L1 → L4" sub="5 programs, one route" />
            </div>
            <div className="pointer-events-none absolute -right-6 bottom-[16%] hidden animate-float-slow lg:block xl:-right-16">
              <GlassCard label="VibeKids" value="Grades 3–12" sub="Socratic AI tutor" />
            </div>
          </VideoFrame>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="fx-motion relative mt-14 flex justify-center pb-8 text-sky-dim"
        aria-hidden
      >
        <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em]">
          Scroll <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </span>
      </motion.div>
    </section>
  );
}

function GlassCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="w-52 rounded-2xl border border-white/10 bg-ink-2/70 p-4 shadow-card-lg backdrop-blur-xl">
      <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-sky-dim">{label}</p>
      <p className="font-display mt-1 text-2xl font-bold text-white">{value}</p>
      <p className="mt-0.5 text-xs text-body-soft">{sub}</p>
    </div>
  );
}
