"use client";

import Reveal from "@/components/Reveal";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Globe,
  GraduationCap,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import Counter from "@/components/Counter";
import { useEffect, useRef, useState } from "react";

const words = ["Innovation", "Excellence", "Tomorrow", "Greatness"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#F8FBFF] pt-44 pb-32"
    >
      {/* LAYERED BACKGROUNDS */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#dbeafe_0%,#F8FBFF_55%,#F8FBFF_100%)]" />
      <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-300/25 blur-[130px]" />
      <div className="absolute left-[-10%] top-[40%] h-[350px] w-[350px] rounded-full bg-cyan-200/20 blur-[100px]" />
      <div className="absolute right-[-5%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-[120px]" />

      {/* ANIMATED GRID LINES */}
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 0.04, scaleY: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
            className="absolute top-0 h-full w-[1px] bg-blue-900"
            style={{ left: `${(i + 1) * 12.5}%`, transformOrigin: "top" }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.04, scaleX: 1 }}
            transition={{ duration: 1.5, delay: i * 0.12, ease: "easeOut" }}
            className="absolute left-0 h-[1px] w-full bg-blue-900"
            style={{ top: `${(i + 1) * 16.6}%`, transformOrigin: "left" }}
          />
        ))}
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* ANIMATED TAG */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-5 py-2 text-sm font-medium text-blue-700 shadow-md backdrop-blur-xl"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              >
                <Sparkles size={16} />
              </motion.div>
              Future-Ready Learning Experience
            </motion.div>

            {/* HEADING with word cycle */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl font-black leading-[1.02] tracking-tight text-[#07111F] sm:text-6xl md:text-7xl"
            >
              Shape Your
              <br />
              <span className="block mt-1 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Future With{" "}
              </span>
              <span
                className="relative inline-block overflow-hidden"
                style={{ minWidth: 280 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: 60, opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -60, opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="block bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl"
            >
              Discover a modern university experience focused on innovation,
              creativity, technology, and real-world learning that prepares
              students for tomorrow.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 flex flex-col gap-5 sm:flex-row"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  boxShadow: "0 20px 50px rgba(37,99,235,0.45)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-9 py-4 text-lg font-semibold text-white shadow-[0_15px_40px_rgba(37,99,235,0.35)] transition-shadow duration-300"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 transition-opacity duration-500"
                  whileHover={{ opacity: 1 }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  Explore Programs
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </span>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  boxShadow: "0 15px 40px rgba(15,23,42,0.12)",
                }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-white/60 bg-white/80 px-9 py-4 text-lg font-medium text-slate-700 backdrop-blur-xl transition-all duration-300 hover:border-blue-200 hover:bg-white"
              >
                Campus Tour
              </motion.button>
            </motion.div>

            {/* STATS with stagger */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-16 flex flex-wrap gap-10 sm:gap-14"
            >
              {[
                { end: 15, suffix: "K+", label: "Active Students" },
                { end: 120, suffix: "+", label: "Programs" },
                { end: 92, suffix: "%", label: "Placements" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="cursor-default"
                >
                  <h3 className="text-5xl font-black text-[#07111F]">
                    <Counter end={stat.end} suffix={stat.suffix} />
                  </h3>
                  <p className="mt-2 text-lg text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* MAIN PANEL */}
            <div className="relative overflow-hidden rounded-[48px] bg-[#07111F] p-8 shadow-[0_40px_120px_rgba(15,23,42,0.3)]">
              {/* ANIMATED GLOW */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[-30px] top-[-30px] h-[300px] w-[300px] rounded-full bg-blue-500 blur-[100px]"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-[-20px] left-[-20px] h-[200px] w-[200px] rounded-full bg-cyan-500 blur-[80px]"
              />

              <div className="relative z-10">
                {/* TOP BADGE */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 shadow-xl"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Globe size={18} className="text-blue-600" />
                  </motion.div>
                  <span className="font-semibold text-slate-700">
                    Global Learning
                  </span>
                </motion.div>

                <div className="mb-10">
                  <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
                    Smart Campus
                  </p>
                  <h2 className="mt-4 text-5xl font-black leading-tight text-white">
                    Empowering
                    <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      Future Leaders
                    </span>
                  </h2>
                </div>

                {/* GRID CARDS */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="rounded-[30px] bg-white p-7 shadow-xl"
                  >
                    <motion.div
                      animate={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                    >
                      <GraduationCap size={34} className="mb-6 text-blue-600" />
                    </motion.div>
                    <h3 className="text-5xl font-black text-[#07111F]">
                      <Counter end={15} suffix="K+" />
                    </h3>
                    <p className="mt-2 text-lg text-slate-500">
                      Active Students
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="rounded-[30px] bg-gradient-to-br from-blue-600 to-cyan-500 p-7 shadow-xl"
                  >
                    <motion.div
                      animate={{ rotate: [0, 20, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    >
                      <Sparkles size={34} className="mb-6 text-white" />
                    </motion.div>
                    <h3 className="text-5xl font-black text-white">
                      <Counter end={120} suffix="+" />
                    </h3>
                    <p className="mt-2 text-lg text-blue-100">Programs</p>
                  </motion.div>
                </div>

                {/* FLOATING CARD */}
                <motion.div
                  animate={{ y: [0, -14, 0], rotate: [-1, 1, -1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-12 left-10 rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.28)]"
                >
                  <p className="text-sm text-slate-500">Placement Success</p>
                  <h3 className="mt-2 text-5xl font-black text-[#07111F]">
                    <Counter end={92} suffix="%" />
                  </h3>
                </motion.div>
              </div>
            </div>

            {/* DECORATIVE BLOBS */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full border-2 border-blue-200/50 bg-blue-50/50 blur-sm"
            />
            <motion.div
              animate={{ scale: [1, 0.9, 1], rotate: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute -left-8 bottom-20 h-16 w-16 rounded-full border-2 border-cyan-200/50 bg-cyan-50/50 blur-sm"
            />
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
