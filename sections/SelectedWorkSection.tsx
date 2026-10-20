"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { PROJECTS, Project } from "@/data/portfolioData";
import { SectionLabel, StarSpark } from "@/components/RedStamp";
import { initGSAP } from "@/lib/gsap";
import { Eye, ArrowUpRight } from "lucide-react";

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export default function SelectedWorkSection({ onSelectProject }: SelectedWorkProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".work-composition").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#F4F0E8] py-24 md:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto space-y-24 md:space-y-36">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
          <div>
            <SectionLabel number="05" title="SELECTED WORK" subtitle="PORTFOLIO INDEX" />
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-bold text-[#121212] tracking-tight mt-3">
              Curated Works <span className="text-[#D71920] font-serif italic">&amp;</span> Experiments
            </h2>
          </div>
          <p className="max-w-sm text-xs md:text-sm font-sans text-[#5A5751] leading-relaxed">
            A visual anthology spanning editorial print, brutalist typography, packaging systems, and experimental digital art.
          </p>
        </div>

        {/* ================= COMPOSITION 1: PROJECT 01 (Aesthetic Bullshit) ================= */}
        <div className="work-composition grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Project Image */}
          <div
            onClick={() => onSelectProject(PROJECTS[0])}
            data-cursor-text="INSPECT"
            className="lg:col-span-7 relative group cursor-pointer overflow-hidden rounded-2xl bg-[#EBE5D8] border border-black/10 shadow-lg tilt-card"
          >
            <div className="relative aspect-[3/4] max-h-[640px] w-full flex items-center justify-center p-6">
              <Image
                src={PROJECTS[0].image}
                alt={PROJECTS[0].title}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            <div className="absolute inset-0 bg-[#D71920]/0 group-hover:bg-[#D71920]/10 transition-colors pointer-events-none" />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-[#121212] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <Eye className="w-3.5 h-3.5 text-[#D71920]" />
              <span>Expand Visual</span>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono text-[#D71920] tracking-widest uppercase">
              <span className="font-bold text-base">{PROJECTS[0].number}</span>
              <span>/</span>
              <span>{PROJECTS[0].year}</span>
              <span>—</span>
              <span className="text-[#121212]/60">{PROJECTS[0].category}</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#121212] tracking-tight leading-none">
              {PROJECTS[0].title}
            </h3>

            <p className="text-sm sm:text-base font-serif italic text-[#D71920] font-medium">
              {PROJECTS[0].subtitle}
            </p>

            <p className="text-sm font-sans text-[#5A5751] leading-relaxed">
              {PROJECTS[0].description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {PROJECTS[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-3 py-1 rounded-full bg-white border border-black/10 text-[#121212]/80 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-black/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#8E8A82]">
                CONTEXT: {PROJECTS[0].client}
              </span>
              <button
                onClick={() => onSelectProject(PROJECTS[0])}
                className="flex items-center gap-1 text-xs font-mono text-[#D71920] font-bold uppercase hover:underline"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ================= COMPOSITION 2: ASYMMETRIC DUO (Project 02 & 03) ================= */}
        <div className="work-composition grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Project 02: Heritage in Geometry (5 Cols) */}
          <div
            onClick={() => onSelectProject(PROJECTS[1])}
            data-cursor-text="INSPECT"
            className="md:col-span-5 group cursor-pointer space-y-4"
          >
            <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden bg-[#EBE5D8] border border-black/10 shadow-lg tilt-card">
              <Image
                src={PROJECTS[1].image}
                alt={PROJECTS[1].title}
                fill
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D71920] uppercase">
                <span>{PROJECTS[1].number}</span>
                <span>•</span>
                <span>{PROJECTS[1].category}</span>
              </div>
              <h4 className="text-2xl font-serif-display font-bold text-[#121212] group-hover:text-[#D71920] transition-colors">
                {PROJECTS[1].title}
              </h4>
              <p className="text-xs text-[#5A5751] font-sans leading-relaxed">
                {PROJECTS[1].description}
              </p>
            </div>
          </div>

          {/* Project 03: Indigo Shapes (7 Cols, offset down) */}
          <div
            onClick={() => onSelectProject(PROJECTS[2])}
            data-cursor-text="INSPECT"
            className="md:col-span-7 group cursor-pointer space-y-4 md:pt-16"
          >
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#EBE5D8] border border-black/10 shadow-lg tilt-card">
              <Image
                src={PROJECTS[2].image}
                alt={PROJECTS[2].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D71920] uppercase">
                <span>{PROJECTS[2].number}</span>
                <span>•</span>
                <span>{PROJECTS[2].category}</span>
              </div>
              <h4 className="text-2xl font-serif-display font-bold text-[#121212] group-hover:text-[#D71920] transition-colors">
                {PROJECTS[2].title}
              </h4>
              <p className="text-xs text-[#5A5751] font-sans leading-relaxed">
                {PROJECTS[2].description}
              </p>
            </div>
          </div>

        </div>

        {/* ================= COMPOSITION 3: CINEMA DOUBLE-FEATURE (Project 04 & 05) ================= */}
        <div className="work-composition bg-[#FAF8F5] p-6 md:p-12 rounded-3xl border border-black/10 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/10 pb-4">
            <div>
              <span className="text-xs font-mono text-[#D71920] uppercase tracking-widest font-bold">
                POSTER DIPTYCH • CINEMA SERIES
              </span>
              <h3 className="text-3xl font-serif-display font-bold text-[#121212]">
                Screenprint Typographic Tributes
              </h3>
            </div>
            <p className="text-xs font-mono text-[#5A5751] uppercase">
              Inglourious Basterds / Fight Club
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Poster 04 */}
            <div
              onClick={() => onSelectProject(PROJECTS[3])}
              data-cursor-text="INSPECT"
              className="group cursor-pointer space-y-4"
            >
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-orange-950/5 border border-black/10 shadow-md">
                <Image
                  src={PROJECTS[3].image}
                  alt={PROJECTS[3].title}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
              <div>
                <span className="text-xs font-mono text-[#D71920] font-bold">04 / 2024</span>
                <h4 className="text-xl font-serif-display font-bold text-[#121212] group-hover:text-[#D71920]">
                  {PROJECTS[3].title}
                </h4>
                <p className="text-xs text-[#5A5751] mt-1">{PROJECTS[3].description}</p>
              </div>
            </div>

            {/* Poster 05 */}
            <div
              onClick={() => onSelectProject(PROJECTS[4])}
              data-cursor-text="INSPECT"
              className="group cursor-pointer space-y-4"
            >
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-yellow-950/5 border border-black/10 shadow-md">
                <Image
                  src={PROJECTS[4].image}
                  alt={PROJECTS[4].title}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
              <div>
                <span className="text-xs font-mono text-[#D71920] font-bold">05 / 2025</span>
                <h4 className="text-xl font-serif-display font-bold text-[#121212] group-hover:text-[#D71920]">
                  {PROJECTS[4].title}
                </h4>
                <p className="text-xs text-[#5A5751] mt-1">{PROJECTS[4].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= COMPOSITION 4: CRIMSON TENSION & DIECAST KINETICS (Project 06 & 08) ================= */}
        <div className="work-composition grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Project 06: American Psycho (5 Cols) */}
          <div
            onClick={() => onSelectProject(PROJECTS[5])}
            data-cursor-text="INSPECT"
            className="md:col-span-5 group cursor-pointer space-y-4"
          >
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#7F1D1D]/10 border border-black/10 shadow-lg tilt-card">
              <Image
                src={PROJECTS[5].image}
                alt={PROJECTS[5].title}
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div>
              <span className="text-xs font-mono text-[#D71920] font-bold">06 / 2025</span>
              <h4 className="text-2xl font-serif-display font-bold text-[#121212] group-hover:text-[#D71920]">
                {PROJECTS[5].title}
              </h4>
              <p className="text-xs text-[#5A5751] mt-1">{PROJECTS[5].description}</p>
            </div>
          </div>

          {/* Project 08: FAST 3D Speed (7 Cols) */}
          <div
            onClick={() => onSelectProject(PROJECTS[7])}
            data-cursor-text="INSPECT"
            className="md:col-span-7 group cursor-pointer space-y-4"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#FAF8F5] border border-black/10 shadow-lg tilt-card">
              <Image
                src={PROJECTS[7].image}
                alt={PROJECTS[7].title}
                fill
                className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
            <div>
              <span className="text-xs font-mono text-[#D71920] font-bold">08 / 2025</span>
              <h4 className="text-2xl font-serif-display font-bold text-[#121212] group-hover:text-[#D71920]">
                {PROJECTS[7].title}
              </h4>
              <p className="text-xs text-[#5A5751] mt-1">{PROJECTS[7].description}</p>
            </div>
          </div>
        </div>

        {/* ================= COMPOSITION 5: FULL-WIDTH BILLBOARD (Project 07) ================= */}
        <div
          onClick={() => onSelectProject(PROJECTS[6])}
          data-cursor-text="INSPECT"
          className="work-composition group cursor-pointer space-y-6"
        >
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden bg-[#EBE5D8] border border-black/10 shadow-2xl tilt-card">
            <Image
              src={PROJECTS[6].image}
              alt={PROJECTS[6].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-102"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between text-white gap-4">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#D71920] bg-white px-2.5 py-0.5 rounded font-bold uppercase">
                  07 • ENVIRONMENTAL BRANDING
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif-display font-bold mt-2">
                  {PROJECTS[6].title}
                </h3>
              </div>
              <p className="text-xs md:text-sm font-sans max-w-md text-white/90">
                {PROJECTS[6].description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
