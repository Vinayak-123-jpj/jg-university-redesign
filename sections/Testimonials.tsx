"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Computer Science Student",
    review:
      "The campus environment completely transformed my learning experience. The innovation-driven culture pushed me beyond my limits.",
    year: "3rd Year",
    avatar: "A",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "Priya Mehta",
    role: "Design & Innovation",
    review:
      "From creative labs to mentorship opportunities, everything felt modern, premium, and future-focused.",
    year: "2nd Year",
    avatar: "P",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Rohan Verma",
    role: "Business Management",
    review:
      "The real-world exposure and industry-focused learning helped me gain confidence and practical skills.",
    year: "Final Year",
    avatar: "R",
    color: "from-blue-700 to-indigo-600",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#F8FBFF] py-36">
      {/* BACKGROUND */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-[140px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-100/40 blur-[100px]"
      />

      <div className="container-custom relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-4xl text-center"
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

        {/* TESTIMONIAL GRID */}
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
              className={`group relative cursor-pointer overflow-hidden rounded-[36px] border bg-white/80 p-8 shadow-md backdrop-blur-2xl transition-all duration-500 ${
                active === index
                  ? "border-blue-300 shadow-[0_20px_80px_rgba(37,99,235,0.2)]"
                  : "border-white/60 hover:shadow-[0_20px_80px_rgba(37,99,235,0.12)]"
              }`}
            >
              {/* Active indicator */}
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

              {/* GLOW */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100 blur-3xl"
              />

              <div className="relative z-10">
                {/* QUOTE ICON */}
                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index }}
                  className="mb-4 text-blue-200"
                >
                  <Quote size={32} className="fill-current" />
                </motion.div>

                {/* STARS */}
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

                {/* REVIEW */}
                <p className="mb-10 leading-relaxed text-slate-600">
                  "{item.review}"
                </p>

                {/* PROFILE */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-lg font-bold text-white shadow-lg`}
                  >
                    {item.avatar}
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

        {/* DOTS */}
        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`rounded-full transition-all duration-300 ${
                active === i ? "w-8 h-3 bg-blue-600" : "w-3 h-3 bg-slate-300"
              }`}
            />
          ))}
        </div>

        {/* FLOATING TRUST CARD */}
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
