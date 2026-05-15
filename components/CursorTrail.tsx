"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorTrail() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 12,
        y: position.y - 12,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      className="pointer-events-none fixed z-[999] hidden h-6 w-6 rounded-full border border-blue-400/40 bg-blue-400/10 backdrop-blur-xl md:block"
    />
  );
}
