"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  size: number;
  left: number;
  top: number;
  duration: number;
};

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const data: Particle[] = Array.from({ length: 18 }).map(() => ({
      size: Math.random() * 6 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(data);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -120, 0],
            x: [0, 40, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-blue-400/30 blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        />
      ))}
    </div>
  );
}
