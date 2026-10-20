"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ARCHIVE_ITEMS, ArchiveItem } from "@/data/portfolioData";
import { SectionLabel } from "@/components/RedStamp";
import { initGSAP } from "@/lib/gsap";
import { Eye, Filter } from "lucide-react";

interface VisualArchiveProps {
  onSelectItem: (item: ArchiveItem) => void;
}

const CATEGORIES = ["All", "Posters", "Branding", "Typography", "3D Renders", "Experimental"] as const;

export default function VisualArchiveSection({ onSelectItem }: VisualArchiveProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredItems =
    activeFilter === "All"
      ? ARCHIVE_ITEMS
      : ARCHIVE_ITEMS.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const { gsap } = initGSAP();
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".archive-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section
      id="archive"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#F4F0E8] py-24 md:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto space-y-12">
        
        {/* Header and Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
          <div>
            <SectionLabel number="08" title="VISUAL ARCHIVE" subtitle="EXPERIMENTAL VAULT" />
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-bold text-[#121212] tracking-tight mt-3">
              The Physical Archive
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#5A5751] mt-1 max-w-lg">
              A curated collection of poster prints, type specimens, packaging sketches, and spatial renders from my personal vault.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeFilter === cat
                    ? "bg-[#D71920] text-white font-bold shadow-xs"
                    : "bg-[#EAE5D9] text-[#121212]/70 hover:bg-[#D71920]/10 hover:text-[#D71920]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style Archive Grid with dynamic rotations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              data-cursor-text="INSPECT"
              className={`archive-item group cursor-pointer relative bg-[#FAF8F5] p-3 rounded-2xl border border-black/10 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:rotate-0 ${
                item.rotation || ""
              }`}
            >
              <div className={`relative ${item.aspect} w-full rounded-xl overflow-hidden bg-[#EBE5D8] flex items-center justify-center`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#D71920]/0 group-hover:bg-[#D71920]/10 transition-colors pointer-events-none" />
                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5 text-[#D71920]" />
                </div>
              </div>

              <div className="pt-3 pb-1 px-1 space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#D71920]">
                  <span>{item.category}</span>
                  <span className="text-[#5A5751]">{item.year}</span>
                </div>
                <h4 className="text-sm font-serif-display font-bold text-[#121212] group-hover:text-[#D71920] transition-colors truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#5A5751] font-sans truncate">{item.note}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
