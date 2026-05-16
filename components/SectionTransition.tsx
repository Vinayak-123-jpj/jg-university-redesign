"use client";

import { motion } from "framer-motion";

export default function SectionTransition() {
  return (
    <div className="relative h-28 overflow-hidden">
      {/* TOP FADE */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/15 to-transparent" />

      {/* ANIMATED GLOW */}
      <motion.div
        animate={{ scaleX: [0.7, 1.1, 0.7], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-36 w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 blur-[100px]"
      />

      {/* LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-1/2 h-[1px] w-[40%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"
      />
    </div>
  );
}
