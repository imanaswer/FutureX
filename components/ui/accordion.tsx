"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn, EASE_OUT } from "@/lib/utils";

export type AccordionItem = {
  title: string;
  content: React.ReactNode;
  meta?: string;
};

export function Accordion({
  items,
  className,
  defaultOpen = 0,
  numbered = false,
}: {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: number | null;
  numbered?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={cn("divide-y divide-white/8 rounded-2xl border border-white/10 bg-white/[0.02]", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `acc-${i}`;
        return (
          <div key={item.title} className="group/acc">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${id}-panel`}
              id={`${id}-button`}
              onClick={() => setOpen(isOpen ? null : i)}
              className={cn(
                "flex w-full cursor-pointer items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-white/[0.03] sm:px-7",
                isOpen && "bg-white/[0.02]"
              )}
            >
              {numbered && (
                <span
                  className={cn(
                    "font-mono text-[0.72rem] font-semibold tabular-nums transition-colors",
                    isOpen ? "text-accent" : "text-sky-dim"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
              <span className="flex-1">
                <span
                  className={cn(
                    "block font-display text-[1.05rem] font-semibold leading-snug transition-colors md:text-lg",
                    isOpen ? "text-white" : "text-body group-hover/acc:text-white"
                  )}
                >
                  {item.title}
                </span>
                {item.meta && (
                  <span className="mt-1 block text-xs text-sky-dim">{item.meta}</span>
                )}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  isOpen
                    ? "rotate-45 border-accent/40 bg-accent/15 text-accent"
                    : "border-white/10 bg-white/[0.03] text-body-soft group-hover/acc:border-white/20 group-hover/acc:text-white"
                )}
              >
                <Plus className="h-4 w-4" aria-hidden />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-panel`}
                  role="region"
                  aria-labelledby={`${id}-button`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE_OUT }}
                  className="overflow-hidden"
                >
                  <div
                    className={cn(
                      "px-5 pb-6 text-[0.98rem] leading-relaxed text-body-soft sm:px-7",
                      numbered && "sm:pl-[4.1rem]"
                    )}
                  >
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
