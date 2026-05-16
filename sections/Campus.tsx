"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Globe2, Sparkles, ShieldCheck, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    title: "Global Exposure",
    description:
      "Collaborate with international programs and future-ready opportunities.",
    icon: Globe2,
    color: "bg-blue-50 text-blue-600",
    hoverGlow: "hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]",
  },
  {
    title: "Innovation Labs",
    description:
      "Hands-on learning spaces designed for creativity and experimentation.",
    icon: Sparkles,
    color: "bg-cyan-50 text-cyan-600",
    hoverGlow: "hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]",
  },
  {
    title: "Career Support",
    description:
      "Industry mentorship, internships, and placement-focused guidance.",
    icon: ShieldCheck,
    color: "bg-indigo-50 text-indigo-600",
    hoverGlow: "hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]",
  },
];

export default function Campus() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8fbff] py-32"
    >
      {/* Background layers */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[100px] opacity-60"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-100/30 blur-[80px] opacity-40"
      />

      <div className="container-custom relative z-10">
        {/* TOP CONTENT */}
        <div className="mb-20 grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-block rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700"
            >
              Campus Experience
            </motion.p>

            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900">
              Designed For The
              <motion.span
                className="block text-blue-600"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Next Generation
              </motion.span>
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Experience an innovative campus environment where technology,
              creativity, and collaboration come together to shape future
              leaders.
            </p>

            {/* Animated divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
              style={{ transformOrigin: "left" }}
            />
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* MAIN CARD */}
            <div className="relative overflow-hidden rounded-[40px] bg-[#0A2540] p-10 shadow-[0_30px_90px_rgba(10,37,64,0.35)]">
              {/* Animated glow */}
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-blue-500/30 blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 7, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl"
              />

              <div className="relative z-10">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-200">
                  Smart Campus
                </p>

                <h3 className="mb-10 text-4xl font-bold text-white leading-snug">
                  Future-Focused Learning Environment
                </h3>

                {/* GRID */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl cursor-default"
                  >
                    <motion.h4
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-3xl font-bold text-white"
                    >
                      50+
                    </motion.h4>
                    <p className="mt-2 text-slate-300">Innovation Labs</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="rounded-3xl bg-blue-600 p-6 cursor-default"
                  >
                    <h4 className="text-3xl font-bold text-white">24/7</h4>
                    <p className="mt-2 text-blue-100">Digital Access</p>
                  </motion.div>
                </div>
              </div>

              {/* FLOATING CARD */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 right-8 rounded-3xl bg-white p-5 shadow-[0_20px_60px_rgba(10,37,64,0.25)]"
              >
                <p className="text-sm text-slate-500">Student Engagement</p>
                <h4 className="mt-1 text-3xl font-bold text-slate-900">96%</h4>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -right-8 -top-8 h-24 w-24 rounded-full border-2 border-dashed border-blue-200/40"
            />
          </motion.div>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -14 }}
                className={`group rounded-[32px] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 ${feature.hoverGlow}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color}`}
                >
                  <Icon size={30} />
                </motion.div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mb-8 leading-relaxed text-slate-600">
                  {feature.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    Learn More
                  </span>

                  <motion.div
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-blue-600"
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
