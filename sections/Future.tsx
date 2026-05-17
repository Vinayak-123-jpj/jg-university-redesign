"use client";

import Parallax from "@/components/Parallax";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, Cpu, Globe } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Future() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const bgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07111F] py-40"
    >
      {/* ANIMATED BACKGROUND GLOW */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[150px]"
        />
      </motion.div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* TOP TEXT */}
        <Parallax offset={80}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl text-center"
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-blue-200 backdrop-blur-xl"
            >
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles size={16} />
              </motion.span>
              The Future Starts Here
            </motion.p>

            <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-8xl">
              Build Beyond
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Imagination
              </span>
            </h2>
          </motion.div>
        </Parallax>

        {/* ── MAIN IMAGE + CARDS LAYOUT ── */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {/* LEFT — tall image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[36px] lg:row-span-2 min-h-[460px] group cursor-pointer"
          >
            <motion.div
              style={{ y: imgY }}
              className="absolute inset-[-10%] h-[120%] w-[120%] relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80&fit=crop"
                alt="Innovation lab"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/90 via-[#07111F]/30 to-transparent" />
            <motion.div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-500" />

            {/* Card content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 8 }}
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300 backdrop-blur-sm"
              >
                <Cpu size={26} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">
                AI Powered Learning
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Future-ready education enhanced with smart technologies.
              </p>
              <motion.div
                whileHover={{ rotate: 45, scale: 1.1 }}
                className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white cursor-pointer"
              >
                <ArrowUpRight size={16} />
              </motion.div>
            </div>
          </motion.div>

          {/* CENTER — big stat */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 to-cyan-500 p-8 cursor-default"
          >
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/20 blur-3xl"
            />
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.25em] text-blue-100">
                Student Success
              </p>
              <motion.h3
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-4 text-7xl font-black text-white"
              >
                98%
              </motion.h3>
              <p className="mt-3 text-blue-100 text-sm">
                Students transition into careers, startups & global
                opportunities.
              </p>
              <div className="mt-6 h-2 rounded-full bg-white/20 overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 0.98 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-white"
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — image card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative overflow-hidden rounded-[32px] group cursor-pointer min-h-[220px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&fit=crop"
              alt="Students together"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/80 via-[#07111F]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 8 }}
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm"
              >
                <Globe size={22} />
              </motion.div>
              <h3 className="text-xl font-bold text-white">Global Network</h3>
              <p className="mt-1 text-slate-300 text-sm">Connect worldwide</p>
            </div>
          </motion.div>

          {/* BOTTOM RIGHT — dark card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="rounded-[32px] bg-[#0D1B2A] p-8 cursor-default"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <p className="text-sm text-slate-400">Creative Environment</p>
              <h4 className="mt-2 text-4xl font-bold text-white">Next Gen</h4>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Learning that pushes boundaries and inspires innovation daily.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
