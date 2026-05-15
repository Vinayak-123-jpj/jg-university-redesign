"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-1/2 top-5 z-50 w-[95%] max-w-[1600px] -translate-x-1/2 rounded-full border border-white/20 bg-white/70 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
    >
      <div className="flex items-center justify-between px-7 py-4">
        {/* LOGO */}
        <div className="text-2xl font-black tracking-tight text-[#0A2540]">
          JG<span className="text-blue-600">.</span>
        </div>

        {/* NAV LINKS */}
        <div className="hidden items-center gap-10 md:flex">
          {["Home", "Programs", "About", "Campus"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-sm font-medium text-slate-700 transition-all duration-300 hover:text-blue-600"
            >
              {item}
            </a>
          ))}
        </div>

        {/* BUTTON */}
        <button className="rounded-full bg-[#0A2540] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    </motion.nav>
  );
}
