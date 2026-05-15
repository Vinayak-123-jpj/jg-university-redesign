"use client";
import Parallax from "@/components/Parallax";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Cpu, Globe } from "lucide-react";

export default function Future() {
  return (
    <section className="relative overflow-hidden bg-[#07111F] py-40">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="container-custom relative z-10">
        {/* TOP TEXT */}
        <Parallax offset={120}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl text-center"
          >
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-blue-200 backdrop-blur-xl">
              <Sparkles size={16} />
              The Future Starts Here
            </p>

            <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-8xl">
              Build Beyond
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Imagination
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
              Empowering students with innovation, creativity, technology, and
              real-world experiences designed for tomorrow’s leaders.
            </p>
          </motion.div>
        </Parallax>

        {/* FLOATING CARDS */}
        <div className="relative mt-28">
          {/* MAIN PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
          >
            {/* GRID */}
            <div className="grid gap-8 lg:grid-cols-3">
              {/* CARD 1 */}
              <motion.div
                whileHover={{ y: -10 }}
                className="group rounded-[32px] bg-[#0D1B2A] p-8 transition-all duration-500 hover:shadow-[0_20px_80px_rgba(37,99,235,0.25)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Cpu size={30} />
                </div>

                <h3 className="mb-4 text-3xl font-bold text-white">
                  AI Powered
                </h3>

                <p className="leading-relaxed text-slate-300">
                  Experience future-ready education enhanced with smart
                  technologies and innovation-driven learning.
                </p>

                <div className="mt-10 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Innovation First
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </div>
              </motion.div>

              {/* CENTER CARD */}
              <motion.div
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 to-cyan-500 p-8"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />

                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.25em] text-blue-100">
                    Student Success
                  </p>

                  <h3 className="mt-6 text-7xl font-black text-white">98%</h3>

                  <p className="mt-4 max-w-xs text-blue-100">
                    Students successfully transition into careers, startups, and
                    global opportunities.
                  </p>
                </div>
              </motion.div>

              {/* CARD 3 */}
              <motion.div
                whileHover={{ y: -10 }}
                className="group rounded-[32px] bg-[#0D1B2A] p-8 transition-all duration-500 hover:shadow-[0_20px_80px_rgba(37,99,235,0.25)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Globe size={30} />
                </div>

                <h3 className="mb-4 text-3xl font-bold text-white">
                  Global Network
                </h3>

                <p className="leading-relaxed text-slate-300">
                  Connect with students, mentors, and opportunities across the
                  world through collaborative experiences.
                </p>

                <div className="mt-10 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Worldwide Reach
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* FLOATING MINI CARD */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-10 left-10 rounded-3xl border border-white/10 bg-[#0D1B2A]/90 p-6 backdrop-blur-xl"
            >
              <p className="text-sm text-slate-400">
                Creative Learning Environment
              </p>

              <h4 className="mt-2 text-4xl font-bold text-white">Next Gen</h4>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
