"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <>
      {/* TOP LEFT */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed left-[-120px] top-[120px] z-0 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px]"
      />

      {/* CENTER */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed left-1/2 top-[40%] z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]"
      />

      {/* BOTTOM RIGHT */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed bottom-[-100px] right-[-100px] z-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[120px]"
      />
    </>
  );
}
