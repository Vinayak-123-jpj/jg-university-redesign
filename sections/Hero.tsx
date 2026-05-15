"use client";

import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import { ArrowRight, Globe, GraduationCap, Sparkles } from "lucide-react";

import Counter from "@/components/Counter";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFF] pt-44 pb-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#dbeafe_0%,#F8FBFF_45%,#F8FBFF_100%)]" />

      <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-blue-300/20 blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <Reveal>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* TAG */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-5 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-xl">
                <Sparkles size={16} />
                Future-Ready Learning Experience
              </div>

              {/* HEADING */}
              <h1 className="text-5xl font-black leading-[1] tracking-tight text-[#07111F] sm:text-6xl md:text-7xl">
                Shape Your
                <span className="mt-2 block bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                  Future With Innovation
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Discover a modern university experience focused on innovation,
                creativity, technology, and real-world learning that prepares
                students for tomorrow.
              </p>

              {/* BUTTONS */}
              <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                {/* PRIMARY */}
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-9 py-4 text-lg font-semibold text-white shadow-[0_15px_40px_rgba(37,99,235,0.35)] transition-all duration-500"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Explore Programs
                    <ArrowRight
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      size={20}
                    />
                  </span>

                  <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.button>

                {/* SECONDARY */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="rounded-full border border-white/40 bg-white/70 px-9 py-4 text-lg font-medium text-slate-700 backdrop-blur-xl transition-all duration-500 hover:border-blue-200 hover:bg-white hover:shadow-[0_15px_40px_rgba(15,23,42,0.12)]"
                >
                  Campus Tour
                </motion.button>
              </div>

              {/* STATS */}
              <div className="mt-16 flex flex-wrap gap-10 sm:gap-14">
                <div>
                  <h3 className="text-5xl font-black text-[#07111F]">
                    <Counter end={15} suffix="K+" />
                  </h3>

                  <p className="mt-2 text-lg text-slate-500">Active Students</p>
                </div>

                <div>
                  <h3 className="text-5xl font-black text-[#07111F]">
                    <Counter end={120} suffix="+" />
                  </h3>

                  <p className="mt-2 text-lg text-slate-500">Programs</p>
                </div>

                <div>
                  <h3 className="text-5xl font-black text-[#07111F]">
                    <Counter end={92} suffix="%" />
                  </h3>

                  <p className="mt-2 text-lg text-slate-500">Placements</p>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* RIGHT SIDE */}
          <Reveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              {/* MAIN PANEL */}
              <div className="relative overflow-hidden rounded-[42px] bg-[#07111F] p-8 shadow-[0_40px_120px_rgba(15,23,42,0.25)]">
                {/* GLOW */}
                <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-blue-500/20 blur-[100px]" />

                <div className="relative z-10">
                  {/* TOP BADGE */}
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 shadow-lg"
                  >
                    <Globe size={18} className="text-blue-600" />

                    <span className="font-medium text-slate-700">
                      Global Learning
                    </span>
                  </motion.div>

                  {/* TITLE */}
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

                  {/* GRID */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* CARD */}
                    <motion.div
                      whileHover={{
                        y: -10,
                      }}
                      className="rounded-[30px] bg-white p-7 shadow-xl transition-all duration-500"
                    >
                      <GraduationCap size={34} className="mb-6 text-blue-600" />

                      <h3 className="text-5xl font-black text-[#07111F]">
                        <Counter end={15} suffix="K+" />
                      </h3>

                      <p className="mt-2 text-lg text-slate-500">
                        Active Students
                      </p>
                    </motion.div>

                    {/* CARD */}
                    <motion.div
                      whileHover={{
                        y: -10,
                      }}
                      className="rounded-[30px] bg-gradient-to-br from-blue-600 to-cyan-500 p-7 shadow-xl transition-all duration-500"
                    >
                      <Sparkles size={34} className="mb-6 text-white" />

                      <h3 className="text-5xl font-black text-white">
                        <Counter end={120} suffix="+" />
                      </h3>

                      <p className="mt-2 text-lg text-blue-100">Programs</p>
                    </motion.div>
                  </div>

                  {/* FLOATING CARD */}
                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="absolute -bottom-10 left-10 rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)]"
                  >
                    <p className="text-sm text-slate-500">Placement Success</p>

                    <h3 className="mt-2 text-5xl font-black text-[#07111F]">
                      <Counter end={92} suffix="%" />
                    </h3>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
