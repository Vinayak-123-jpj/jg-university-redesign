"use client";

import { motion, useInView } from "framer-motion";
import { Users, GraduationCap, Trophy, Globe } from "lucide-react";
import Counter from "@/components/Counter";
import { useRef } from "react";

const stats = [
  {
    icon: Users,
    end: 15,
    suffix: "K+",
    label: "Students Enrolled",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: GraduationCap,
    end: 120,
    suffix: "+",
    label: "Programs Offered",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Trophy,
    end: 92,
    suffix: "%",
    label: "Placement Success",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: Globe,
    end: 35,
    suffix: "+",
    label: "Global Collaborations",
    color: "from-sky-500 to-cyan-500",
  },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative overflow-hidden bg-[#081b31] py-24">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-[1px] bg-blue-400"
            style={{ left: `${i * 11}%` }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute right-[-10%] bottom-[-20%] h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[100px]"
      />

      <div ref={ref} className="container-custom relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300"
          >
            Trusted By Thousands
          </motion.p>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Empowering Students With
            <span className="block text-blue-400">Innovation & Excellence</span>
          </h2>
        </motion.div>

        {/* STATS GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative cursor-default overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30 hover:bg-white/8 hover:shadow-[0_20px_60px_rgba(37,99,235,0.2)]"
              >
                {/* Glow on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-[28px]"
                  style={{
                    background:
                      "radial-gradient(circle at top right, rgba(37,99,235,0.15), transparent 70%)",
                  }}
                />

                {/* Animated ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20 + index * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-blue-500/10"
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                  >
                    <Icon size={30} />
                  </motion.div>

                  <h3 className="mb-2 text-4xl font-bold text-white">
                    {inView ? (
                      <Counter end={item.end} suffix={item.suffix} />
                    ) : (
                      `0${item.suffix}`
                    )}
                  </h3>

                  <p className="text-slate-300">{item.label}</p>

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r ${item.color}`}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
