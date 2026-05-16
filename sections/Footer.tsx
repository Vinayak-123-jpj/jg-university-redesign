"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Camera, Link, Share2 } from "lucide-react";

const socials = [
  { icon: Camera, label: "IG" }, // Instagram
  { icon: Link, label: "IN" }, // LinkedIn
  { icon: Share2, label: "TW" }, // Twitter
];
export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-[#050B14] pt-32 pb-14">
      {/* GLOW */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]"
      />

      {/* Animated dot grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* TOP AREA */}
        <div className="grid gap-16 border-b border-white/10 pb-20 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-5 text-sm uppercase tracking-[0.35em] text-blue-300"
            >
              JG University
            </motion.p>

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
            <div className="mt-10 flex gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/15 hover:text-blue-300"
                  >
                    <Icon size={18} />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              {
                title: "Navigation",
                links: ["Home", "Programs", "Campus", "Admissions"],
              },
              {
                title: "Programs",
                links: [
                  "Computer Science",
                  "Business",
                  "Design",
                  "AI & Innovation",
                ],
              },
              {
                title: "Contact",
                links: [
                  "Ahmedabad, India",
                  "info@jguni.edu",
                  "+91 98765 43210",
                ],
              },
            ].map((col, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: ci * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-6 text-lg font-semibold text-white">
                  {col.title}
                </h3>
                <div className="space-y-4">
                  {col.links.map((item, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: ci * 0.1 + i * 0.06 + 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4, color: "#60a5fa" }}
                      className="block text-slate-400 transition-colors duration-200"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-6 pt-10 md:flex-row">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-slate-500"
          >
            © 2026 JG University. All rights reserved.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToTop}
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
          >
            Back To Top
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
