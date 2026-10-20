"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SPATIAL_3D_PROJECTS } from "@/data/portfolioData";
import { SectionLabel, StarSpark } from "@/components/RedStamp";
import { initGSAP } from "@/lib/gsap";
import { Box, Cpu, Eye, Sparkles } from "lucide-react";

export default function Spatial3DSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const { gsap } = initGSAP();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".spatial-panel", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="spatial"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#0D0D0F] text-white py-24 md:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background ambient red glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D71920]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <SectionLabel number="07" title="SPATIAL & 3D ART" subtitle="ENVIRONMENT DESIGN" dark />
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-bold text-white tracking-tight mt-3">
              Spatial Visualization <span className="text-[#D71920] font-serif italic">&amp;</span> Renders
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/60">
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5">
              Blender 4.2
            </span>
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5">
              Cinema 4D
            </span>
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5">
              Octane Render
            </span>
          </div>
        </div>

        {/* Main 3D Render Feature Showcase */}
        <div className="spatial-panel grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Visual Frame (8 Cols) */}
          <div className="lg:col-span-8 relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-[#16161A] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
            <Image
              src={SPATIAL_3D_PROJECTS[activeProject].image}
              alt={SPATIAL_3D_PROJECTS[activeProject].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            
            {/* Tech badges */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-[#D71920] border border-white/10 flex items-center gap-2">
              <Box className="w-3.5 h-3.5" />
              <span>{SPATIAL_3D_PROJECTS[activeProject].category}</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-xs font-mono text-white/80">
              <span>{SPATIAL_3D_PROJECTS[activeProject].polyCount}</span>
              <span className="text-[#D71920] font-bold">OCTANE 8K VOLUMETRIC</span>
            </div>
          </div>

          {/* Side Info & Project Switcher (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#D71920] uppercase tracking-widest font-bold block">
                RENDER SPECS &amp; PIPELINE
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-white">
                {SPATIAL_3D_PROJECTS[activeProject].title}
              </h3>
              <p className="text-xs font-mono text-white/50">
                Tools: {SPATIAL_3D_PROJECTS[activeProject].tools}
              </p>
              <p className="text-sm font-sans text-white/70 leading-relaxed">
                {SPATIAL_3D_PROJECTS[activeProject].description}
              </p>
            </div>

            {/* Switch between renders */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-white/40 block">
                SELECT 3D EXHIBITION:
              </span>
              <div className="grid grid-cols-2 gap-3">
                {SPATIAL_3D_PROJECTS.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProject(idx)}
                    className={`p-3 rounded-xl border text-left text-xs font-mono transition-all ${
                      activeProject === idx
                        ? "border-[#D71920] bg-[#D71920]/20 text-white shadow-lg"
                        : "border-white/10 bg-white/5 text-white/60 hover:text-white"
                    }`}
                  >
                    <span className="text-[10px] text-[#D71920] block font-bold">0{idx + 1}</span>
                    <span className="truncate block font-semibold">{proj.title}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
