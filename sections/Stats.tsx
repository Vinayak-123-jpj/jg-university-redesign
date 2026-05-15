"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Trophy, Globe } from "lucide-react";
import Counter from "@/components/Counter";

const stats = [
  {
    icon: Users,
    number: <Counter end={15} suffix="K+" />,
    label: "Students Enrolled",
  },
  {
    icon: GraduationCap,
    number: "<Counter end={120} suffix=" + " />",
    label: "Programs Offered",
  },
  {
    icon: Trophy,
    number: <Counter end={92} suffix="%" />,
    label: "Placement Success",
  },
  {
    icon: Globe,
    number: "35+",
    label: "Global Collaborations",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#081b31] py-24">
      <div className="container-custom">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Trusted By Thousands
          </p>

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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Icon size={32} />
                  </div>

                  <h3 className="mb-2 text-4xl font-bold text-white">
                    {item.number}
                  </h3>

                  <p className="text-slate-300">{item.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
