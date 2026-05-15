"use client";

import { Code2, BriefcaseBusiness, Palette, ArrowUpRight } from "lucide-react";
import GlowCard from "@/components/GlowCard";
const programs = [
  {
    icon: <Code2 size={34} />,
    title: "Computer Science",
    desc: "AI, cloud computing, software engineering and future-ready technologies.",
    className: "large dark",
  },
  {
    icon: <BriefcaseBusiness size={28} />,
    title: "Business & Strategy",
    desc: "Leadership, entrepreneurship and innovation for modern industries.",
    className: "light",
  },
  {
    icon: <Palette size={28} />,
    title: "Creative Design",
    desc: "UI/UX, branding, motion graphics and visual storytelling experiences.",
    className: "blue",
  },
];

export default function Programs() {
  return (
    <section className="programs-section">
      <div className="container-custom">
        <div className="programs-heading">
          <span>Programs</span>

          <h2>
            Explore Future-Focused
            <br />
            <span>Learning Paths</span>
          </h2>

          <p>
            Designed for innovators, creators and future leaders ready to shape
            tomorrow.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <GlowCard
              key={index}
              className={`program-card ${program.className}`}
            >
              <div className="program-glow"></div>

              <div className="program-icon">{program.icon}</div>

              <div className="program-content">
                <h3>{program.title}</h3>

                <p>{program.desc}</p>
              </div>

              <button className="program-btn">
                Explore
                <ArrowUpRight size={18} />
              </button>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
