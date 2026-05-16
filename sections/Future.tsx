"use client";
import Parallax from "@/components/Parallax";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, Cpu, Globe } from "lucide-react";
import { useRef } from "react";

const cards = [
  {
    icon: Cpu,
    title: "AI Powered",
    desc: "Experience future-ready education enhanced with smart technologies and innovation-driven learning.",
    footer: "Innovation First",
  },
  {
    icon: Globe,
    title: "Global Network",
    desc: "Connect with students, mentors, and opportunities across the world through collaborative experiences.",
    footer: "Worldwide Reach",
  },
];

export default function Future() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07111F] py-40"
    >
      {/* ANIMATED BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
          className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[100px]"
        />
      </motion.div>

      {/* Animated dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* TOP TEXT */}
        <Parallax offset={80}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl text-center"
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-blue-200 backdrop-blur-xl"
            >
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles size={16} />
              </motion.span>
              The Future Starts Here
            </motion.p>

            <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-8xl">
              Build Beyond
              <motion.span
                className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                style={{ backgroundSize: "200%" }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Imagination
              </motion.span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
              Empowering students with innovation, creativity, technology, and
              real-world experiences designed for tomorrow's leaders.
            </p>
          </motion.div>
        </Parallax>

        {/* FLOATING CARDS */}
        <div className="relative mt-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[44px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl"
          >
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-[44px] bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

            <div className="relative grid gap-8 lg:grid-cols-3">
              {/* CARD 1 & 3 */}
              {cards
                .map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.15 }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -14,
                        boxShadow: "0 30px 80px rgba(37,99,235,0.3)",
                      }}
                      className="group cursor-default rounded-[32px] bg-[#0D1B2A] p-8 transition-all duration-500"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 8 }}
                        className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400"
                      >
                        <Icon size={30} />
                      </motion.div>

                      <h3 className="mb-4 text-3xl font-bold text-white">
                        {card.title}
                      </h3>
                      <p className="leading-relaxed text-slate-300">
                        {card.desc}
                      </p>

                      <div className="mt-10 flex items-center justify-between">
                        <span className="text-sm text-slate-400">
                          {card.footer}
                        </span>
                        <motion.div
                          whileHover={{ rotate: 45, scale: 1.15 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
                        >
                          <ArrowUpRight size={18} />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })
                .reduce((acc: React.ReactNode[], el, i) => {
                  acc.push(el);
                  if (i === 0) {
                    // Insert center card between
                    acc.push(
                      <motion.div
                        key="center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -14 }}
                        className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 to-cyan-500 p-8 cursor-default"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/20 blur-3xl"
                        />

                        <div className="relative z-10">
                          <p className="text-sm uppercase tracking-[0.25em] text-blue-100">
                            Student Success
                          </p>
                          <motion.h3
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              delay: 0.2,
                            }}
                            viewport={{ once: true }}
                            className="mt-6 text-7xl font-black text-white"
                          >
                            98%
                          </motion.h3>
                          <p className="mt-4 max-w-xs text-blue-100">
                            Students successfully transition into careers,
                            startups, and global opportunities.
                          </p>

                          {/* Animated bar */}
                          <div className="mt-8 h-2 rounded-full bg-white/20 overflow-hidden">
                            <motion.div
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 0.98 }}
                              transition={{ duration: 1.2, delay: 0.5 }}
                              viewport={{ once: true }}
                              className="h-full rounded-full bg-white"
                              style={{ transformOrigin: "left" }}
                            />
                          </div>
                        </div>
                      </motion.div>,
                    );
                  }
                  return acc;
                }, [])}
            </div>

            {/* FLOATING MINI CARD */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 left-10 rounded-3xl border border-white/10 bg-[#0D1B2A]/95 p-6 backdrop-blur-xl shadow-2xl"
            >
              <p className="text-sm text-slate-400">
                Creative Learning Environment
              </p>
              <h4 className="mt-2 text-4xl font-bold text-white">Next Gen</h4>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
