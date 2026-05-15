"use client";

import { motion } from "framer-motion";
import { Globe2, Sparkles, ShieldCheck, ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "Global Exposure",
    description:
      "Collaborate with international programs and future-ready opportunities.",
    icon: Globe2,
  },
  {
    title: "Innovation Labs",
    description:
      "Hands-on learning spaces designed for creativity and experimentation.",
    icon: Sparkles,
  },
  {
    title: "Career Support",
    description:
      "Industry mentorship, internships, and placement-focused guidance.",
    icon: ShieldCheck,
  },
];

export default function Campus() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-32">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-200 blur-3xl opacity-20" />

      <div className="container-custom relative z-10">
        {/* TOP CONTENT */}
        <div className="mb-20 grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 inline-block rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700">
              Campus Experience
            </p>

            <h2 className="mb-6 text-5xl font-bold leading-tight text-slate-900">
              Designed For The
              <span className="block text-blue-600">Next Generation</span>
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Experience an innovative campus environment where technology,
              creativity, and collaboration come together to shape future
              leaders.
            </p>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* MAIN CARD */}
            <div className="relative overflow-hidden rounded-[40px] bg-[#0A2540] p-10 shadow-[0_20px_80px_rgba(15,23,42,0.25)]">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative z-10">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-200">
                  Smart Campus
                </p>

                <h3 className="mb-10 text-4xl font-bold text-white">
                  Future-Focused Learning Environment
                </h3>

                {/* GRID */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl">
                    <h4 className="text-3xl font-bold text-white">50+</h4>

                    <p className="mt-2 text-slate-300">Innovation Labs</p>
                  </div>

                  <div className="rounded-3xl bg-blue-600 p-6">
                    <h4 className="text-3xl font-bold text-white">24/7</h4>

                    <p className="mt-2 text-blue-100">Digital Access</p>
                  </div>
                </div>
              </div>

              {/* FLOATING CARD */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -bottom-8 right-8 rounded-3xl bg-white p-5 shadow-2xl"
              >
                <p className="text-sm text-slate-500">Student Engagement</p>

                <h4 className="mt-1 text-3xl font-bold text-slate-900">96%</h4>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={30} />
                </div>

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

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
