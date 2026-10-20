"use client";

import { useEffect } from "react";
import { X, Download, Mail, Sparkles, GraduationCap, Briefcase, Award } from "lucide-react";
import {
  PERSONAL_INFO,
  TIMELINE_EXPERIENCE,
  TIMELINE_EDUCATION,
  SKILL_CATEGORIES,
  SOFTWARE_TOOLS,
  AI_TOOLS,
} from "@/data/portfolioData";
import { ApprovedStamp, WaxSeal } from "./RedStamp";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Designer Curriculum Vitae"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-[#121212]/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FAF7F0] text-[#121212] rounded-2xl shadow-2xl border border-black/10 p-6 md:p-12 my-8 overflow-hidden font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D71920]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#121212]/60">
              OFFICIAL CURRICULUM VITAE • 2026
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EBE5D8] hover:bg-[#D71920] hover:text-white transition-colors text-xs font-mono tracking-wider uppercase"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#EBE5D8] hover:bg-[#D71920] hover:text-white transition-colors flex items-center justify-center"
              aria-label="Close resume modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-8 border-b border-black/10 relative">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#D71920] font-bold">
              {PERSONAL_INFO.role}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif-display font-bold text-[#121212] tracking-tight mt-1">
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-sm font-sans text-[#5A5751] mt-2 max-w-lg">
              {PERSONAL_INFO.tagline} • Based in {PERSONAL_INFO.location}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <ApprovedStamp size={80} />
            <WaxSeal size={60} />
          </div>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Education & Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="flex items-center gap-2 text-xl font-serif font-bold text-[#121212] mb-4">
                <GraduationCap className="w-4 h-4 text-[#D71920]" />
                Education
              </h3>
              <div className="space-y-4">
                {TIMELINE_EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative pl-3 border-l-2 border-[#D71920]">
                    <span className="text-[10px] font-mono text-[#D71920] font-bold uppercase tracking-wider block">
                      {edu.period}
                    </span>
                    <h4 className="text-xs font-bold text-[#121212] uppercase font-mono">
                      {edu.institution}
                    </h4>
                    <p className="text-xs text-[#5A5751]">{edu.degree}</p>
                    <p className="text-[11px] text-[#8E8A82] mt-0.5 leading-snug">{edu.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-xl font-serif font-bold text-[#121212] mb-4">
                <Sparkles className="w-4 h-4 text-[#D71920]" />
                Core Skills
              </h3>
              <div className="space-y-3">
                {SKILL_CATEGORIES.map((skill, idx) => (
                  <div key={idx} className="bg-white/60 p-2.5 rounded-lg border border-black/5">
                    <h4 className="text-xs font-bold text-[#D71920] uppercase font-mono">
                      • {skill.title}
                    </h4>
                    <p className="text-[11px] text-[#5A5751] mt-0.5">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Work Experience */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-xl font-serif font-bold text-[#121212] mb-4">
              <Briefcase className="w-4 h-4 text-[#D71920]" />
              Work Experience
            </h3>
            <div className="space-y-4">
              {TIMELINE_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative pl-3 border-l-2 border-[#D71920]">
                  <span className="text-[10px] font-mono text-[#D71920] font-bold uppercase tracking-wider block">
                    {exp.period}
                  </span>
                  <h4 className="text-xs font-bold text-[#121212] uppercase font-mono">
                    {exp.organization}
                  </h4>
                  <p className="text-xs font-semibold text-[#121212]/80">{exp.role}</p>
                  <p className="text-[11px] text-[#5A5751] mt-1 leading-snug">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Featured, Softwares & Contact */}
          <div className="space-y-8">
            <div>
              <h3 className="flex items-center gap-2 text-xl font-serif font-bold text-[#121212] mb-4">
                <Award className="w-4 h-4 text-[#D71920]" />
                Featured & Recognition
              </h3>
              <div className="p-3 bg-[#D71920]/5 border border-[#D71920]/20 rounded-xl">
                <span className="text-[10px] font-mono text-[#D71920] font-bold uppercase">
                  2024 — 2025
                </span>
                <h4 className="text-xs font-bold text-[#121212] mt-0.5">WORLD BRAND DESIGN</h4>
                <p className="text-[11px] text-[#5A5751] mt-1 leading-snug">
                  Working with team to design the cultural event branding & packaging &quot;CỬU HOA SỬ HỌA&quot;, featured on WORLD BRAND DESIGN.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-[#121212] mb-3">Softwares</h3>
              <div className="grid grid-cols-4 gap-2">
                {SOFTWARE_TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center justify-center p-2 rounded bg-white border border-black/5 text-center shadow-xs"
                  >
                    <span className="text-xs font-bold font-mono text-[#121212]">{tool.icon}</span>
                    <span className="text-[9px] text-[#8E8A82] truncate max-w-full">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-[#121212] mb-3">Creative AI Tools</h3>
              <div className="flex flex-wrap gap-1.5">
                {AI_TOOLS.map((ai) => (
                  <span
                    key={ai.name}
                    className="text-[10px] font-mono px-2 py-1 rounded bg-[#EBE5D8] text-[#121212]"
                  >
                    ✦ {ai.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-black/10">
              <h3 className="text-lg font-serif font-bold text-[#121212] mb-2">Let&apos;s Contact</h3>
              <p className="text-xs text-[#5A5751] font-mono">{PERSONAL_INFO.email}</p>
              <p className="text-xs text-[#5A5751] font-mono">{PERSONAL_INFO.phone}</p>
              <p className="text-xs text-[#5A5751] font-mono">Instagram: {PERSONAL_INFO.instagram}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
