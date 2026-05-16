"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Programs", "About", "Campus"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (val) => {
    setScrolled(val > 40);
  });

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed left-1/2 top-5 z-50 w-[95%] max-w-[1600px] -translate-x-1/2 rounded-full border transition-all duration-500 ${
        scrolled
          ? "border-white/30 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-3xl"
          : "border-white/20 bg-white/70 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
      }`}
    >
      <div className="flex items-center justify-between px-7 py-4">
        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black tracking-tight text-[#0A2540] cursor-pointer"
        >
          JG
          <motion.span
            animate={{ color: ["#2563eb", "#06b6d4", "#2563eb"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-blue-600"
          >
            .
          </motion.span>
        </motion.div>

        {/* NAV LINKS - Desktop */}
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08 }}
              className="group relative text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-blue-600"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* BUTTON */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-[#0A2540] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
          >
            Apply Now
          </motion.button>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-slate-100"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <motion.div
        initial={false}
        animate={{
          height: mobileOpen ? "auto" : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden"
      >
        <div className="flex flex-col gap-4 px-7 pb-6">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ x: -20, opacity: 0 }}
              animate={
                mobileOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
              }
              transition={{ delay: index * 0.06 }}
              className="text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
