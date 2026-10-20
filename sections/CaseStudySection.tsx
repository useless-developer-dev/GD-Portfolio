"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CASE_STUDY } from "@/data/portfolioData";
import { SectionLabel, ApprovedStamp, WaxSeal } from "@/components/RedStamp";
import { initGSAP } from "@/lib/gsap";
import { Award, Layers, Sparkles } from "lucide-react";

export default function CaseStudySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const { gsap } = initGSAP();
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".case-study-hero", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="casestudy"
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#EFEAE1] py-24 md:py-32 px-4 sm:px-8 lg:px-16 border-t border-b border-black/10 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto space-y-16">
        
        {/* Section Label & Award Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
          <div>
            <SectionLabel number="06" title="FEATURED CASE STUDY" subtitle="DEEP DIVE" />
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-bold text-[#121212] tracking-tight mt-3">
              {CASE_STUDY.title}
            </h2>
            <p className="text-xl sm:text-2xl font-serif italic text-[#D71920] mt-1">
              {CASE_STUDY.englishTitle}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-black/10 shadow-xs">
            <Award className="w-6 h-6 text-[#D71920] shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D71920] font-bold block">
                RECOGNITION
              </span>
              <p className="text-xs font-bold text-[#121212]">{CASE_STUDY.award}</p>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup Flatlay (Reference 5 & cuu_hoa.jpg) */}
        <div className="case-study-hero relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-[#FAF8F5] border border-black/10 shadow-2xl">
          <Image
            src={CASE_STUDY.heroImage}
            alt={CASE_STUDY.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          
          {/* Metadata badges positioned like Reference 5 */}
          <div className="absolute top-6 left-6 bg-[#FAF8F5]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-[#121212] border border-black/10">
            [ TEA PACKAGING &amp; IDENTITY ]
          </div>
          
          <div className="absolute top-6 right-6 bg-[#FAF8F5]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-[#121212] border border-black/10">
            [ APPLICATION &amp; STATIONERY ]
          </div>

          <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#121212]/80 backdrop-blur-md text-white flex flex-col md:flex-row md:items-center justify-between gap-4 border border-white/10">
            <p className="text-xs md:text-sm font-sans max-w-2xl leading-relaxed text-white/90">
              {CASE_STUDY.overview}
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono tracking-wider text-[#D71920] bg-white px-3 py-1 rounded-full font-bold">
                {CASE_STUDY.year}
              </span>
            </div>
          </div>
        </div>

        {/* Interactive 4-Chapter Breakdown Tab / Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Chapter Navigation Selector (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono text-[#5A5751] uppercase tracking-widest block mb-2">
              EXPLORE CASE CHAPTERS:
            </span>
            {CASE_STUDY.chapters.map((chap, idx) => (
              <button
                key={chap.step}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                  activeTab === idx
                    ? "bg-[#D71920] text-white border-[#D71920] shadow-lg translate-x-2"
                    : "bg-[#FAF8F5] text-[#121212] border-black/10 hover:border-[#D71920]/40"
                }`}
              >
                <span className={`text-xs font-mono font-bold ${activeTab === idx ? "text-white" : "text-[#D71920]"}`}>
                  {chap.step}
                </span>
                <div>
                  <h4 className="text-sm font-serif-display font-bold">{chap.title}</h4>
                  <p className={`text-xs mt-0.5 ${activeTab === idx ? "text-white/80" : "text-[#5A5751]"}`}>
                    {chap.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Chapter Details Display (8 Cols) */}
          <div className="lg:col-span-8 bg-[#FAF8F5] p-6 sm:p-10 rounded-3xl border border-black/10 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <span className="text-xs font-mono text-[#D71920] font-bold tracking-widest uppercase">
                {CASE_STUDY.chapters[activeTab].tag}
              </span>
              <span className="text-xs font-mono text-[#5A5751]">
                CHAPTER {CASE_STUDY.chapters[activeTab].step} / 04
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#121212]">
                {CASE_STUDY.chapters[activeTab].title}
              </h3>
              <p className="text-base text-[#5A5751] font-sans leading-relaxed">
                {CASE_STUDY.chapters[activeTab].description}
              </p>
            </div>

            {/* Key Deliverables Bullet List */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#121212] font-bold block">
                Deliverables &amp; Craft Details:
              </span>
              <ul className="space-y-2">
                {CASE_STUDY.chapters[activeTab].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#121212]/80 font-sans">
                    <span className="text-[#D71920] mt-0.5">✦</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono text-[#8E8A82]">
              <span>CUU HOA SU HOA • CULTURAL IDENTITY</span>
              <span className="text-[#D71920] font-bold">WORLD BRAND DESIGN 2025</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
