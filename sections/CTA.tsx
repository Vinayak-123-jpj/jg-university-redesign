"use client";
import Counter from "@/components/Counter";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#07111F] py-40">
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[48px] border border-white/10 bg-white/5 px-8 py-24 text-center backdrop-blur-2xl md:px-16"
        >
          {/* INNER GLOW */}
          <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="relative z-10">
            {/* TAG */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-blue-200 backdrop-blur-xl">
              <Sparkles size={16} />
              Admissions Open 2026
            </div>

            {/* TITLE */}
            <h2 className="mx-auto max-w-5xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl">
              Shape The Future
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                With Innovation
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
              Join a new generation of learners building tomorrow through
              creativity, technology, leadership, and innovation-driven
              experiences.
            </p>

            {/* BUTTONS */}
            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
              {/* PRIMARY BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all duration-300"
              >
                Apply Now
                <ArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </motion.button>

              {/* SECONDARY BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
              >
                Explore Campus
              </motion.button>
            </div>

            {/* STATS */}
            <div className="mt-20 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
              <div>
                <h3 className="text-4xl font-black text-white">
                  <Counter end={15} suffix="K+" />
                </h3>

                <p className="mt-2 text-slate-400">Active Students</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-white">
                  <Counter end={120} suffix="+" />
                </h3>

                <p className="mt-2 text-slate-400">Programs Offered</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-white">98%</h3>

                <p className="mt-2 text-slate-400">Student Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
