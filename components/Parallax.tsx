"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({
  children,
  offset = 100,
}: {
  children: React.ReactNode;
  offset?: number;
}) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 2000], [0, offset]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}
