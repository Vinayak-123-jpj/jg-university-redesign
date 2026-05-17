"use client";

import { Code2, BriefcaseBusiness, Palette, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const programs = [
  {
    icon: Code2,
    title: "Computer Science",
    desc: "AI, cloud computing, software engineering and future-ready technologies.",
    tags: ["AI/ML", "Cloud", "DevOps"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80&fit=crop",
    gradient: "from-blue-900/80 via-blue-800/60 to-transparent",
    large: true,
    accent: "blue",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business & Strategy",
    desc: "Leadership, entrepreneurship and innovation for modern industries.",
    tags: ["MBA", "Finance", "Strategy"],
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80&fit=crop",
    gradient: "from-slate-900/70 to-transparent",
    large: false,
    accent: "slate",
  },
  {
    icon: Palette,
    title: "Creative Design",
    desc: "UI/UX, branding, motion graphics and visual storytelling.",
    tags: ["UI/UX", "Motion", "Brand"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&fit=crop",
    gradient: "from-blue-900/80 to-transparent",
    large: false,
    accent: "cyan",
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
            viewport={{ once: true }}
          >
            Programs
          </motion.span>
          <h2>
            Explore Future-Focused
            <br />
            <span>Learning Paths</span>
          </h2>
          <p>
            Designed for innovators, creators and future leaders ready to shape
            tomorrow.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="programs-grid">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                viewport={{ once: true }}
                className={`program-card ${program.large ? "large" : ""} dark relative group cursor-pointer overflow-hidden`}
                whileHover={{ y: -10 }}
              >
                {/* BACKGROUND IMAGE */}
                <motion.div
                  className="absolute inset-0 relative"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${program.gradient}`}
                  />
                  {/* Extra dark overlay for text readability */}
                  <div className="absolute inset-0 bg-[#07111F]/50 group-hover:bg-[#07111F]/40 transition-all duration-500" />
                </motion.div>

                {/* CONTENT */}
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    {/* Icon badge */}
                    <motion.div
                      whileHover={{ scale: 1.12, rotate: 5 }}
                      className="program-icon mb-6"
                    >
                      <Icon
                        size={program.large ? 34 : 28}
                        className="text-white"
                      />
                    </motion.div>

                    <div className="program-content">
                      <h3 className="!text-white">{program.title}</h3>
                      <p className="!text-slate-200">{program.desc}</p>

                      {/* TAGS */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {program.tags.map((tag, ti) => (
                          <motion.span
                            key={ti}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + ti * 0.07 }}
                            viewport={{ once: true }}
                            className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.97 }}
                    className="program-btn mt-6 !bg-white/10 !text-white hover:!bg-white/20"
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
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
