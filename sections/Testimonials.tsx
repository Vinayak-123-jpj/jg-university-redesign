"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Computer Science Student",
    review:
      "The campus environment completely transformed my learning experience. The innovation-driven culture pushed me beyond my limits.",
  },
  {
    name: "Priya Mehta",
    role: "Design & Innovation",
    review:
      "From creative labs to mentorship opportunities, everything felt modern, premium, and future-focused.",
  },
  {
    name: "Rohan Verma",
    role: "Business Management",
    review:
      "The real-world exposure and industry-focused learning helped me gain confidence and practical skills.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFF] py-36">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-4xl text-center"
        >
          <p className="mb-5 inline-block rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-medium text-blue-700">
            Student Experiences
          </p>

          <h2 className="text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
            Voices Of The
            <span className="block text-blue-600">Future Leaders</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600">
            Discover how students are shaping their future through innovation,
            creativity, and transformative learning experiences.
          </p>
        </motion.div>

        {/* TESTIMONIAL GRID */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="group relative overflow-hidden rounded-[36px] border border-white/40 bg-white/70 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_20px_80px_rgba(37,99,235,0.18)]"
            >
              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* STARS */}
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-blue-500 text-blue-500"
                    />
                  ))}
                </div>

                {/* REVIEW */}
                <p className="mb-10 leading-relaxed text-slate-600">
                  “{item.review}”
                </p>

                {/* PROFILE */}
                <div className="flex items-center gap-4">
                  {/* AVATAR */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 text-lg font-bold text-white shadow-lg">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {item.name}
                    </h4>

                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FLOATING TRUST CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-2xl rounded-[36px] border border-blue-100 bg-white/80 p-8 text-center shadow-[0_20px_80px_rgba(37,99,235,0.12)] backdrop-blur-xl"
        >
          <h3 className="text-4xl font-black text-slate-900">15K+</h3>

          <p className="mt-3 text-lg text-slate-600">
            Students empowered through innovation-focused learning experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
