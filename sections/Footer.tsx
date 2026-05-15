"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050B14] pt-32 pb-14">
      {/* GLOW */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* TOP AREA */}
        <div className="grid gap-16 border-b border-white/10 pb-20 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-blue-300">
              JG University
            </p>

            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl">
              The Future
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Starts Now
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400">
              Empowering the next generation with innovation, creativity,
              leadership, and future-focused learning experiences.
            </p>

            {/* SOCIALS */}
            <div className="mt-10 flex gap-5">
              {["IG", "IN", "TW"].map((item, index) => (
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  key={index}
                  className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="grid gap-10 sm:grid-cols-3">
            {/* COLUMN */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-white">
                Navigation
              </h3>

              <div className="space-y-4">
                {["Home", "Programs", "Campus", "Admissions"].map(
                  (item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block text-slate-400 transition hover:text-white"
                    >
                      {item}
                    </a>
                  ),
                )}
              </div>
            </div>

            {/* COLUMN */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-white">
                Programs
              </h3>

              <div className="space-y-4">
                {[
                  "Computer Science",
                  "Business",
                  "Design",
                  "AI & Innovation",
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-slate-400 transition hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* COLUMN */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-white">Contact</h3>

              <div className="space-y-4 text-slate-400">
                <p>Ahmedabad, India</p>
                <p>info@jguni.edu</p>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-6 pt-10 md:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 JG University. All rights reserved.
          </p>

          <motion.button
            whileHover={{
              y: -4,
            }}
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
          >
            Back To Top
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
