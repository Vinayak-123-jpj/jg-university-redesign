"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 150,
    damping: 15,
  });

  const smoothY = useSpring(y, {
    stiffness: 150,
    damping: 15,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const newX = e.clientX - rect.left - rect.width / 2;

    const newY = e.clientY - rect.top - rect.height / 2;

    x.set(newX * 0.2);
    y.set(newY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
