"use client";

import Counter from "@/components/Counter";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#07111F] py-40">
      {/* GLOW ORBS */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[52px] border border-white/10 px-8 py-20 text-center"
        >
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 relative">
            <Image
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1400&q=70&fit=crop"
              alt="University campus"
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              className="object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#07111F]/70 via-[#07111F]/60 to-[#07111F]/70" />
          </div>

          {/* Glass layer */}
          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-sm" />

          {/* Inner glow */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]"
          />

          {/* Animated border rings */}
          {[1, 0.6, 0.3].map((opacity, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
              className="absolute inset-0 rounded-[52px] border border-white/10"
              style={{ opacity }}
            />
          ))}

          <div className="relative z-10">
            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-blue-200 backdrop-blur-xl"
            >
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles size={16} />
              </motion.span>
              Admissions Open 2026
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="mx-auto max-w-5xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl"
            >
              Shape The Future
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                With Innovation
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              viewport={{ once: true }}
              className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300"
            >
              Join a new generation of learners building tomorrow through
              creativity, technology, leadership, and innovation-driven
              experiences.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
            >
              <motion.button
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 20px 60px rgba(37,99,235,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-4 text-lg font-semibold text-white shadow-[0_10px_40px_rgba(37,99,235,0.4)]"
              >
                Apply Now
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.04,
                  backgroundColor: "rgba(255,255,255,0.12)",
                }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-white/15 bg-white/5 px-10 py-4 text-lg font-medium text-white backdrop-blur-xl"
              >
                Explore Campus
              </motion.button>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3"
            >
              {[
                { end: 15, suffix: "K+", label: "Active Students" },
                { end: 120, suffix: "+", label: "Programs Offered" },
                { value: "98%", label: "Student Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="cursor-default"
                >
                  <h3 className="text-4xl font-black text-white">
                    {"end" in stat ? (
                      <Counter
                        end={(stat as any).end}
                        suffix={(stat as any).suffix}
                      />
                    ) : (
                      stat.value
                    )}
                  </h3>
                  <p className="mt-2 text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
