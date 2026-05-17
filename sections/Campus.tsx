"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Globe2,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  Users,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const features = [
  {
    title: "Global Exposure",
    description:
      "Collaborate with international programs and future-ready opportunities.",
    icon: Globe2,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Innovation Labs",
    description:
      "Hands-on learning spaces designed for creativity and experimentation.",
    icon: Sparkles,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    title: "Career Support",
    description:
      "Industry mentorship, internships, and placement-focused guidance.",
    icon: ShieldCheck,
    color: "bg-indigo-50 text-indigo-600",
  },
];

// Campus image mosaic
const mosaicImages = [
  {
    src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80&fit=crop",
    alt: "Campus building",
    col: "col-span-2",
    h: "h-56",
  },
  {
    src: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&q=80&fit=crop",
    alt: "Library",
    col: "col-span-1",
    h: "h-56",
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80&fit=crop",
    alt: "Lab",
    col: "col-span-1",
    h: "h-48",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80&fit=crop",
    alt: "Students",
    col: "col-span-2",
    h: "h-48",
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
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[100px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-100/40 blur-[80px]"
      />

      <div className="container-custom relative z-10">
        {/* ── TOP — Headline + Image Mosaic ── */}
        <div className="mb-24 grid items-start gap-16 lg:grid-cols-2">
          {/* LEFT text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
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
              <span className="block text-blue-600">Next Generation</span>
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600 mb-8">
              Experience an innovative campus environment where technology,
              creativity, and collaboration come together to shape future
              leaders.
            </p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 mb-8"
              style={{ transformOrigin: "left" }}
            />

            {/* QUICK STATS */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Users,
                  value: "15K+",
                  label: "Students",
                  color: "bg-blue-600",
                },
                {
                  icon: Trophy,
                  value: "50+",
                  label: "Innovation Labs",
                  color: "bg-cyan-600",
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.color} text-white`}
                  >
                    <s.icon size={18} />
                  </div>
                  <div>
                    <p className="text-lg font-black text-slate-900">
                      {s.value}
                    </p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — IMAGE MOSAIC */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-3 gap-3"
          >
            {mosaicImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, zIndex: 10 }}
                className={`relative ${img.col} ${img.h} overflow-hidden rounded-2xl shadow-md cursor-pointer`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#07111F]/10 hover:bg-[#07111F]/0 transition-all duration-500" />
              </motion.div>
            ))}

            {/* Floating engagement card over mosaic */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-4 shadow-xl border border-white z-20"
            >
              <p className="text-xs text-slate-500">Student Engagement</p>
              <p className="text-2xl font-black text-slate-900">96%</p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── FEATURE CARDS ── */}
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
                className="group rounded-[32px] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-[0_20px_60px_rgba(37,99,235,0.13)]"
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
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600"
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
