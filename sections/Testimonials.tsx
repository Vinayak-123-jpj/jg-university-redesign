"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Computer Science",
    year: "3rd Year",
    review:
      "The campus environment completely transformed my learning experience. The innovation-driven culture pushed me beyond my limits and opened doors I never imagined.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&q=80&fit=crop&crop=face",
    color: "from-blue-600 to-blue-700",
    bg: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=60&fit=crop",
  },
  {
    name: "Priya Mehta",
    role: "Design & Innovation",
    year: "2nd Year",
    review:
      "From creative labs to mentorship opportunities, everything felt modern, premium, and future-focused. I found my creative voice here.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&q=80&fit=crop&crop=face",
    color: "from-cyan-500 to-blue-600",
    bg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=60&fit=crop",
  },
  {
    name: "Rohan Verma",
    role: "Business Management",
    year: "Final Year",
    review:
      "The real-world exposure and industry-focused learning helped me gain confidence and practical skills that set me apart in interviews.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&q=80&fit=crop&crop=face",
    color: "from-blue-700 to-indigo-600",
    bg: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=60&fit=crop",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#F8FBFF] py-36">
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-[140px]"
      />

      <div className="container-custom relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-5 inline-block rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-medium text-blue-700"
          >
            Student Experiences
          </motion.p>
          <h2 className="text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
            Voices Of The
            <span className="block text-blue-600">Future Leaders</span>
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.13 }}
              viewport={{ once: true }}
              whileHover={{ y: -14, scale: 1.02 }}
              onClick={() => setActive(index)}
              className={`group relative cursor-pointer overflow-hidden rounded-[36px] border bg-white/90 p-8 shadow-md backdrop-blur-2xl transition-all duration-500 ${
                active === index
                  ? "border-blue-300 shadow-[0_20px_80px_rgba(37,99,235,0.2)]"
                  : "border-white/60 hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]"
              }`}
            >
              {/* Active top bar */}
              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    className="absolute top-0 left-0 h-1 w-full rounded-t-[36px] bg-gradient-to-r from-blue-600 to-cyan-400"
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </AnimatePresence>

              {/* BG image blur on hover */}
              <div className="absolute inset-0 overflow-hidden rounded-[36px] relative">
                <Image
                  src={item.bg}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700"
                />
              </div>

              <div className="relative z-10">
                {/* Quote icon */}
                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index }}
                  className="mb-4 text-blue-200"
                >
                  <Quote size={32} className="fill-current" />
                </motion.div>

                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -30 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.3 + i * 0.06 + index * 0.1,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                    >
                      <Star size={18} className="fill-blue-500 text-blue-500" />
                    </motion.div>
                  ))}
                </div>

                <p className="mb-10 leading-relaxed text-slate-600">
                  "{item.review}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 3 }}
                    className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-blue-100 ring-offset-2"
                  >
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {item.role} · {item.year}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DOT NAVIGATION */}
        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                width: active === i ? 28 : 12,
                backgroundColor: active === i ? "#2563eb" : "#cbd5e1",
              }}
              className="h-3 rounded-full"
            />
          ))}
        </div>

        {/* TRUST STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="mx-auto mt-16 max-w-2xl rounded-[36px] border border-blue-100 bg-white/90 p-8 text-center shadow-[0_20px_80px_rgba(37,99,235,0.12)] backdrop-blur-xl cursor-default"
        >
          <motion.h3
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-slate-900"
          >
            15K+
          </motion.h3>
          <p className="mt-3 text-lg text-slate-600">
            Students empowered through innovation-focused learning experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
