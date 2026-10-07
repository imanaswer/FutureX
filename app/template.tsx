"use client";

import { motion } from "framer-motion";

/* Light route transition: incoming page fades and settles. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="fx-motion"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
