"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 1,
        delay: 1.5,
      }}
      className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-[#07111F]"
    >
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="text-center"
      >
        <h1 className="text-6xl font-black tracking-tight text-white">
          JG
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            .
          </span>
        </h1>

        <div className="mx-auto mt-6 h-[3px] w-32 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "100%",
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-cyan-400"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
