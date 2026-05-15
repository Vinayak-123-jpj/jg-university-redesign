"use client";

import { motion } from "framer-motion";

export default function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className={`group relative overflow-hidden ${className}`}
    >
      {/* GLOW */}
      <div className="absolute inset-0 rounded-[inherit] border border-blue-500/0 transition-all duration-500 group-hover:border-blue-500/30" />

      {/* HOVER LIGHT */}
      <div className="absolute -inset-[2px] rounded-[inherit] bg-gradient-to-r from-blue-500/0 via-cyan-400/20 to-blue-500/0 opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100" />

      {/* CONTENT */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
