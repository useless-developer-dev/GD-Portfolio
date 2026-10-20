"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { Project, ArchiveItem } from "@/data/portfolioData";

interface LightboxProps {
  item: Project | ArchiveItem | null;
  onClose: () => void;
}

export default function LightboxModal({ item, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const isProject = "description" in item;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title || "Project Details"}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#121212]/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#FAF8F5] text-[#121212] rounded-3xl overflow-hidden shadow-2xl border border-black/10 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 flex items-center justify-center hover:bg-[#D71920] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image side */}
        <div className="md:w-3/5 bg-[#EAE5D9] relative min-h-[360px] md:min-h-[520px] flex items-center justify-center p-6">
          <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain drop-shadow-xl"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>
        </div>

        {/* Info side */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D71920] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{item.category} • {item.year}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif-display font-bold text-[#121212] leading-tight mb-4">
              {item.title}
            </h3>

            {isProject && (
              <>
                <p className="text-xs uppercase font-mono tracking-wider text-[#121212]/60 mb-2">
                  Client: {(item as Project).client}
                </p>
                <p className="text-sm md:text-base text-[#5A5751] font-sans leading-relaxed mb-6">
                  {(item as Project).description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {(item as Project).tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-black/10 bg-white text-[#121212]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}

            {!isProject && (
              <p className="text-sm text-[#5A5751] font-sans leading-relaxed mb-6">
                {(item as ArchiveItem).note}
              </p>
            )}
          </div>

          <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono text-[#121212]/60">
            <span>HUYNH YEN NHI / PORTFOLIO</span>
            <span className="text-[#D71920] flex items-center gap-1">
              SELECTED WORK <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
