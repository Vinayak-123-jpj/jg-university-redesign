"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <>
      {/* TOP LEFT */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed left-[-120px] top-[120px] z-0 h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[130px]"
      />

      {/* CENTER */}
      <motion.div
        animate={{
          y: [0, 60, 0],
          x: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed left-1/2 top-[40%] z-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-[150px]"
      />

      {/* BOTTOM RIGHT */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed bottom-[-100px] right-[-100px] z-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]"
      />

      {/* EXTRA - TOP RIGHT */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="pointer-events-none fixed right-[-60px] top-[30%] z-0 h-[280px] w-[280px] rounded-full bg-indigo-500/8 blur-[100px]"
      />
    </>
  );
}
