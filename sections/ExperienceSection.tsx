"use client";

import { useEffect, useRef, useState } from "react";
import {
  TIMELINE_EDUCATION,
  TIMELINE_EXPERIENCE,
  SKILL_CATEGORIES,
  SOFTWARE_TOOLS,
  AI_TOOLS,
  PERSONAL_INFO,
} from "@/data/portfolioData";
import { SectionLabel, StarSpark } from "@/components/RedStamp";
import { InstagramIcon, LinkedinIcon, BehanceIcon } from "@/components/SocialIcons";
import { initGSAP } from "@/lib/gsap";
import { Copy, Check, Mail, Globe } from "lucide-react";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const { gsap } = initGSAP();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".timeline-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#FAF8F5] py-20 md:py-28 px-4 sm:px-8 lg:px-16 border-t border-b border-black/10 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionLabel number="04" title="EXPERIENCE & EDUCATION" subtitle="TIMELINE" />
          <p className="text-xs font-mono uppercase tracking-widest text-[#5A5751]">
            Curriculum Vitae • 2021 — 2026
          </p>
        </div>

        {/* 3-Column Editorial Magazine Spread (Reference 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* COLUMN 1 (Left 4 cols): Education & Skills */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Education Block */}
            <div className="timeline-card">
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#121212] mb-6">
                Education
              </h3>
              <div className="space-y-6 relative pl-4 border-l dotted-line-v">
                {TIMELINE_EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Red bullet on the dotted line */}
                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#D71920] ring-4 ring-[#FAF8F5]" />
                    
                    <span className="text-[11px] font-mono text-[#D71920] font-bold tracking-wider uppercase block mb-0.5">
                      {edu.period}
                    </span>
                    <h4 className="text-sm font-bold font-mono text-[#D71920] uppercase leading-tight">
                      {edu.institution}
                    </h4>
                    <p className="text-xs font-semibold text-[#121212] mt-0.5">{edu.degree}</p>
                    <p className="text-xs text-[#5A5751] mt-1 leading-relaxed">{edu.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Block */}
            <div className="timeline-card">
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#121212] mb-6">
                Skills
              </h3>
              <div className="space-y-5 relative pl-4 border-l dotted-line-v">
                {SKILL_CATEGORIES.map((skill, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#D71920] ring-4 ring-[#FAF8F5]" />
                    <h4 className="text-xs font-bold font-mono text-[#D71920] uppercase tracking-wider">
                      {skill.title}
                    </h4>
                    <p className="text-xs text-[#5A5751] mt-0.5 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* COLUMN 2 (Middle 5 cols): Work Experience */}
          <div className="lg:col-span-5 space-y-6">
            <div className="timeline-card">
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#121212] mb-6">
                Work Experience
              </h3>
              <div className="space-y-7 relative pl-4 border-l dotted-line-v">
                {TIMELINE_EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#D71920] ring-4 ring-[#FAF8F5]" />
                    
                    <span className="text-[11px] font-mono text-[#D71920] font-bold tracking-wider uppercase block">
                      {exp.period} / <span className="text-[#121212]">{exp.role}</span>
                    </span>
                    <h4 className="text-sm font-bold font-mono text-[#D71920] uppercase tracking-wide mt-0.5">
                      {exp.organization}
                    </h4>
                    <p className="text-xs text-[#5A5751] mt-1.5 leading-relaxed font-sans">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 3 (Right 3 cols): Featured, Softwares, Contact */}
          <div className="lg:col-span-3 space-y-10">
            
            {/* Featured Section */}
            <div className="timeline-card">
              <h3 className="text-3xl font-serif font-bold text-[#121212] mb-4">Featured</h3>
              <div className="relative pl-3 border-l-2 border-[#D71920] bg-white p-3.5 rounded-r-xl border-y border-r border-black/5 shadow-xs">
                <span className="text-[10px] font-mono text-[#D71920] font-bold uppercase tracking-wider block">
                  • 2024 — 2025
                </span>
                <h4 className="text-xs font-bold text-[#D71920] font-mono uppercase mt-0.5">
                  WORLD BRAND DESIGN
                </h4>
                <p className="text-xs text-[#5A5751] mt-1.5 leading-snug">
                  Working with team design the event branding &quot;CUU HOA SU HOA&quot;, get featured on WORLD BRAND DESIGN.
                </p>
              </div>
            </div>

            {/* Softwares Grid */}
            <div className="timeline-card">
              <h3 className="text-3xl font-serif font-bold text-[#121212] mb-4">Softwares</h3>
              <div className="grid grid-cols-4 gap-2">
                {SOFTWARE_TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-black text-white text-center hover:bg-[#D71920] transition-colors shadow-xs group cursor-default"
                  >
                    <span className="text-xs font-bold font-mono tracking-wider">{tool.icon}</span>
                    <span className="text-[8px] opacity-70 mt-0.5 font-mono truncate max-w-full">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Other AI tools */}
              <div className="mt-4 pt-3 border-t border-black/10">
                <span className="text-[11px] font-serif italic text-[#5A5751] block mb-2">
                  Others tools
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-[#121212]">
                  {AI_TOOLS.map((tool) => (
                    <span
                      key={tool.name}
                      className="px-2 py-0.5 rounded bg-black/5 border border-black/10 text-[10px]"
                    >
                      ✦ {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Let's Contact Box */}
            <div className="timeline-card bg-[#D71920]/5 p-5 rounded-2xl border border-[#D71920]/20">
              <h3 className="text-2xl font-serif font-bold text-[#121212] mb-3">
                Let&apos;s Contact!
              </h3>
              <div className="space-y-2.5 text-xs font-mono">
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[#5A5751] hover:text-[#D71920] transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#D71920]" />
                  <span>{PERSONAL_INFO.instagram}</span>
                </a>

                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-2 text-[#5A5751] hover:text-[#D71920] transition-colors truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 text-[#5A5751] hover:text-[#D71920] transition-colors"
                    title="Copy Email"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[#5A5751] hover:text-[#D71920] transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#D71920]" />
                  <span className="truncate">yen-nhi-huynh</span>
                </a>

                <a
                  href={PERSONAL_INFO.behanceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[#5A5751] hover:text-[#D71920] transition-colors"
                >
                  <BehanceIcon className="w-3.5 h-3.5 text-[#D71920]" />
                  <span>{PERSONAL_INFO.behance}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
