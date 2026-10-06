"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Scroll parallax for elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  
  // Parallax transforms
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[120svh] w-full bg-ink overflow-hidden"
    >
      {/* 
        LAYER 1: The Background Video
        Static background video, darkened for text contrast.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          src="/video/futurex-loop.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-accent/10 mix-blend-color" />
        <div className="absolute inset-0 bg-ink/70" />
      </div>

      {/* 
        LAYER 2: Massive Kinetic Typography
      */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
      >
        <h1 className="font-display text-[18vw] font-black uppercase leading-[0.8] tracking-tighter text-white/90">
          FUTUREX
        </h1>
        <h1 className="font-display text-[18vw] font-black uppercase leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.7)]">
          LABS
        </h1>
      </motion.div>

      {/* 
        LAYER 3: Floating HUD Parallax Elements
        These sit on top and move independently.
      */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]) }}
        className="absolute top-[20%] left-[10%] z-20 font-mono text-[10px] tracking-[0.2em] text-sky-dim/30 hidden md:block"
      >
        <div className="flex flex-col gap-1">
          <span className="text-accent">[ X: 45.991 // Y: -12.001 ]</span>
          <span>CALIBRATING SENSORS...</span>
        </div>
        <div className="mt-4 h-16 w-[1px] bg-sky-dim/30" />
      </motion.div>

      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]) }}
        className="absolute bottom-[25%] right-[10%] z-20 font-mono text-[10px] tracking-[0.2em] text-sky-dim/30 hidden md:block text-right"
      >
        <div className="flex flex-col gap-1 items-end">
          <span className="text-white">AI DEPLOYMENT FRAMEWORK</span>
          <span>V 2.0.4 - OPERATIONAL</span>
        </div>
        <div className="mt-4 h-[1px] w-16 bg-sky-dim/30 ml-auto" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity: textOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-accent">
          Scroll to Ascend
        </span>
        <div className="h-16 w-[1px] bg-white/10 overflow-hidden relative">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 bg-accent h-1/3"
          />
        </div>
      </motion.div>

    </section>
  );
}
