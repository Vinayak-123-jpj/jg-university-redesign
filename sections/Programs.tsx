"use client";

import { Code2, BriefcaseBusiness, Palette, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import GlowCard from "@/components/GlowCard";

const programs = [
  {
    icon: <Code2 size={34} />,
    title: "Computer Science",
    desc: "AI, cloud computing, software engineering and future-ready technologies.",
    className: "large dark",
    accent: "#2563eb",
    tags: ["AI/ML", "Cloud", "DevOps"],
  },
  {
    icon: <BriefcaseBusiness size={28} />,
    title: "Business & Strategy",
    desc: "Leadership, entrepreneurship and innovation for modern industries.",
    className: "light",
    accent: "#0f172a",
    tags: ["MBA", "Finance", "Strategy"],
  },
  {
    icon: <Palette size={28} />,
    title: "Creative Design",
    desc: "UI/UX, branding, motion graphics and visual storytelling experiences.",
    className: "blue",
    accent: "#1d4ed8",
    tags: ["UI/UX", "Motion", "Brand"],
  },
];

export default function Programs() {
  return (
    <section className="programs-section">
      <div className="container-custom">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="programs-heading"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Programs
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Explore Future-Focused
            <br />
            <span>Learning Paths</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Designed for innovators, creators and future leaders ready to shape
            tomorrow.
          </motion.p>
        </motion.div>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <GlowCard className={`program-card ${program.className}`}>
                <div className="program-glow" />

                <div className="program-icon">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  >
                    {program.icon}
                  </motion.div>
                </div>

                <div className="program-content">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {program.title}
                  </motion.h3>
                  <p>{program.desc}</p>

                  {/* TAGS */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {program.tags.map((tag, ti) => (
                      <motion.span
                        key={ti}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + ti * 0.07 }}
                        viewport={{ once: true }}
                        className="inline-block rounded-full px-3 py-1 text-xs font-semibold opacity-70"
                        style={{
                          background: "rgba(255,255,255,0.12)",
                          border: "1px solid rgba(255,255,255,0.15)",
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.97 }}
                  className="program-btn"
                >
                  Explore
                  <motion.span
                    animate={{ rotate: [0, 45, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5 + 2,
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.span>
                </motion.button>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
