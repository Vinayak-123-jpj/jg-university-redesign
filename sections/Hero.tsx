"use client";

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
  Play,
} from "lucide-react";
import Counter from "@/components/Counter";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const words = ["Innovation", "Excellence", "Tomorrow", "Greatness"];

// Hero background images - rotating
const heroImages = [
  "https://images.unsplash.com/photo-1562774053-701939374585?w=1400&q=85&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1400&q=85&fit=crop",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1400&q=80&fit=crop",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const wi = setInterval(
      () => setWordIndex((i) => (i + 1) % words.length),
      2600,
    );
    const bi = setInterval(
      () => setBgIndex((i) => (i + 1) % heroImages.length),
      5000,
    );
    return () => {
      clearInterval(wi);
      clearInterval(bi);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#F8FBFF] pt-44 pb-32"
    >
      {/* SOFT GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#dbeafe_0%,#F8FBFF_55%,#F8FBFF_100%)]" />
      <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-300/20 blur-[130px]" />

      {/* ANIMATED GRID */}
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 0.035, scaleY: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
            className="absolute top-0 h-full w-[1px] bg-blue-900"
            style={{ left: `${(i + 1) * 12.5}%`, transformOrigin: "top" }}
          />
        ))}
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ── LEFT CONTENT ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7 }}
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

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl font-black leading-[1.02] tracking-tight text-[#07111F] sm:text-6xl md:text-7xl"
            >
              Shape Your
              <br />
              <span className="block mt-1 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Future With{" "}
              </span>
              <span className="relative block" style={{ minHeight: "1.1em" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: 60, opacity: 0, filter: "blur(12px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -60, opacity: 0, filter: "blur(12px)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-16 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl"
            >
              Discover a modern university experience focused on innovation,
              creativity, technology, and real-world learning that prepares
              students for tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  boxShadow: "0 20px 50px rgba(37,99,235,0.45)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-9 py-4 text-lg font-semibold text-white shadow-[0_15px_40px_rgba(37,99,235,0.35)]"
              >
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
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-9 py-4 text-lg font-medium text-slate-700 backdrop-blur-xl transition-all hover:border-blue-200 hover:bg-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                  <Play size={14} fill="white" />
                </span>
                Watch Tour
              </motion.button>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-14 flex flex-wrap gap-10 sm:gap-12"
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
                  <h3 className="text-4xl font-black text-[#07111F]">
                    <Counter end={stat.end} suffix={stat.suffix} />
                  </h3>
                  <p className="mt-1 text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — IMAGE COLLAGE ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[580px]"
          >
            {/* MAIN large image */}
            <motion.div
              className="absolute right-0 top-0 h-[420px] w-[85%] overflow-hidden rounded-[36px] shadow-[0_30px_90px_rgba(10,37,64,0.22)]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={bgIndex}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="h-full w-full relative"
                >
                  <Image
                    src={heroImages[bgIndex]}
                    alt="Campus life"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/60 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Image dots */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroImages.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setBgIndex(i)}
                    animate={{
                      width: bgIndex === i ? 28 : 8,
                      backgroundColor:
                        bgIndex === i ? "#fff" : "rgba(255,255,255,0.4)",
                    }}
                    className="h-2 rounded-full"
                  />
                ))}
              </div>
            </motion.div>

            {/* BOTTOM LEFT smaller image */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="absolute bottom-0 left-0 h-[220px] w-[55%] overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(10,37,64,0.25)] border-4 border-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&fit=crop"
                alt="Students collaborating"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 to-transparent" />
            </motion.div>

            {/* FLOATING STAT CARD */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-4 bottom-8 rounded-[24px] bg-white px-6 py-4 shadow-[0_20px_60px_rgba(10,37,64,0.2)] border border-white/80 z-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400">
                  <GraduationCap size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    Placement
                  </p>
                  <p className="text-xl font-black text-[#07111F]">92%</p>
                </div>
              </div>
            </motion.div>

            {/* FLOATING GLOBAL BADGE */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-[20px] bg-gradient-to-br from-blue-600 to-cyan-500 px-5 py-3 shadow-xl text-white z-10"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Globe size={16} />
                </motion.div>
                <span className="text-sm font-semibold">Global Campus</span>
              </div>
            </motion.div>

            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full border-2 border-dashed border-blue-200/50"
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
