"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const SEQUENCE = [
  "OBSERVE",
  "ANALYZE",
  "LEARN",
  "ADAPT",
  "EVOLVE",
  "FUTUREX"
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Mouse tracking for massive glowing orb
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    let currentWord = 0;
    const wordInterval = setInterval(() => {
      currentWord++;
      if (currentWord >= SEQUENCE.length) {
        clearInterval(wordInterval);
        setTimeout(() => setIsLoaded(true), 400); // slight pause on final word
      } else {
        setIndex(currentWord);
      }
    }, 350); // Flash every 350ms

    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += (100 - currentProgress) * 0.05; // smooth ease out
      if (currentProgress >= 99) {
        currentProgress = 100;
        clearInterval(progressInterval);
      }
      setProgress(currentProgress);
    }, 20); // Fast fluid updates

    return () => clearInterval(progressInterval);
  }, []);

  const COLUMNS = 5;

  return (
    <>
      <AnimatePresence>
        {!isLoaded && (
          <div className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden">
            
            {/* The Shutter Columns Background */}
            <div className="absolute inset-0 flex">
              {Array.from({ length: COLUMNS }).map((_, i) => (
                <motion.div
                  key={`col-${i}`}
                  initial={{ y: "0%" }}
                  exit={{ 
                    y: i % 2 === 0 ? "-100%" : "100%", 
                    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: i * 0.05 } 
                  }}
                  className="h-full flex-1 bg-ink"
                />
              ))}
            </div>

            {/* Mouse-Following Giant Gradient Orb */}
            <motion.div
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              className="absolute left-0 top-0 h-[800px] w-[800px] rounded-full pointer-events-none mix-blend-screen opacity-60"
              style={{
                background: "radial-gradient(circle, rgba(34,193,245,0.4) 0%, rgba(34,193,245,0) 70%)",
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%",
              }}
            />

            {/* Kinetic Typography Layer */}
            <motion.div 
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.6 } }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-difference"
            >
              {/* Force React to re-mount the h1 to trigger the glitch/scale animation per word */}
              <motion.h1
                key={index}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="font-display text-[15vw] font-black uppercase leading-none tracking-tighter text-white"
              >
                {SEQUENCE[index]}
              </motion.h1>
            </motion.div>

            {/* Small HUD Loading Indicator & Progress Bar */}
            <motion.div 
              exit={{ opacity: 0 }}
              className="absolute bottom-8 left-8 right-8 flex items-end justify-between font-mono text-[10px] tracking-[0.2em] text-accent pointer-events-none"
            >
              <div className="flex w-1/3 max-w-sm flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="flex gap-1">
                    <motion.span 
                      animate={{ scaleY: [1, 2, 1] }} 
                      transition={{ repeat: Infinity, duration: 0.5, delay: 0 }} 
                      className="block h-2 w-1 origin-bottom bg-accent"
                    />
                    <motion.span 
                      animate={{ scaleY: [1, 3, 1] }} 
                      transition={{ repeat: Infinity, duration: 0.5, delay: 0.1 }} 
                      className="block h-2 w-1 origin-bottom bg-accent"
                    />
                    <motion.span 
                      animate={{ scaleY: [1, 1.5, 1] }} 
                      transition={{ repeat: Infinity, duration: 0.5, delay: 0.2 }} 
                      className="block h-2 w-1 origin-bottom bg-accent"
                    />
                  </span>
                  <span>SEQUENCE {String(index + 1).padStart(2, '0')} / 06</span>
                </div>
                {/* Thin loading bar */}
                <div className="h-[2px] w-full bg-white/10">
                  <motion.div 
                    className="h-full bg-accent"
                    style={{ width: `${Math.floor(progress)}%` }}
                  />
                </div>
              </div>
              
              <div className="text-3xl font-black text-white sm:text-5xl">
                {Math.floor(progress)}%
              </div>
            </motion.div>
            
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
