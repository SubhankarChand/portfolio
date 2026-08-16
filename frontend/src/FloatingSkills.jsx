import React from "react";
import { skillsData } from "./utils/skillsData";
import { skillsImage } from "./utils/skillsImage";

const FloatingSkills = () => {
  // Duplicate array for seamless infinite looping
  const duplicatedSkills = [...skillsData, ...skillsData, ...skillsData];

  return (
    <section id="skills-marquee" className="py-12 bg-[#0b1329] border-y border-slate-800/60 relative overflow-hidden my-8">
      
      {/* Optional Sub-heading / Badge */}
      <div className="text-center mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
          Core Tech Stack
        </span>
      </div>

      {/* Edge Blur / Gradient Overlays for smooth entry & exit */}
      <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-[#0b1329] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-[#0b1329] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee space-x-6 items-center">
        {duplicatedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-[#1e293b]/70 backdrop-blur-sm px-5 py-3 rounded-xl border border-slate-700/60 shadow-md hover:border-cyan-400/60 hover:scale-105 transition-all duration-300 min-w-[140px] cursor-pointer"
          >
            <img
              src={skillsImage(skill)}
              alt={skill}
              className="w-7 h-7 object-contain"
            />
            <span className="text-slate-200 font-medium text-sm whitespace-nowrap">
              {skill}
            </span>
          </div>
        ))}
      </div>

      {/* CSS Animation Logic */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marqueeScroll 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default FloatingSkills;