"use client";

import { useEffect, useRef } from "react";
import { MARQUEE_ITEMS, PERSONAL_INFO } from "@/data/portfolioData";
import { WaxSeal, StarSpark } from "@/components/RedStamp";
import { initGSAP } from "@/lib/gsap";

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const envelopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();
    if (!sectionRef.current || !letterRef.current) return;

    const ctx = gsap.context(() => {
      // Letter sliding up out of the envelope as user scrolls into this section
      gsap.fromTo(
        letterRef.current,
        {
          y: 80,
          opacity: 0.8,
          scale: 0.94,
        },
        {
          y: -40,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "center center",
            scrub: 1.2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#D71920] text-white flex flex-col justify-between py-12 md:py-16 overflow-hidden select-none"
    >
      {/* Subtle Grain Overlay on Red */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:16px_16px] pointer-events-none" />

      {/* Top Editorial Bar */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 flex items-center justify-between text-xs font-mono tracking-widest uppercase text-white/90">
        <div>
          <p className="font-bold">Welcome to my</p>
          <p className="text-white/70">Visual Diary</p>
        </div>

        {/* Center Vertical Rule */}
        <div className="hidden md:block w-[1px] h-10 bg-white/30" />

        <div className="text-right">
          <p className="font-bold">2026</p>
          <p className="text-white/70">EDITION</p>
        </div>
      </div>

      {/* Center Envelope & Manifesto Letter Composition (Reference 3) */}
      <div className="relative z-10 max-w-3xl w-full mx-auto px-4 my-8 flex flex-col items-center">
        <div
          ref={envelopeRef}
          className="relative w-full max-w-2xl bg-[#EBE5D8] rounded-2xl shadow-2xl p-4 md:p-8 border border-white/20"
        >
          {/* Envelope Top Flap Shadow Decor */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/5 to-transparent pointer-events-none rounded-t-2xl" />

          {/* Sliding Manifesto Letter Card */}
          <div
            ref={letterRef}
            className="relative bg-[#FAF8F5] text-[#D71920] rounded-xl p-8 md:p-14 shadow-xl border border-black/5 text-center transform transition-transform"
          >
            {/* Lead Statement */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif leading-[1.3] tracking-tight mb-6 font-normal">
              A young designer who&apos;s passionate about{" "}
              <span className="italic font-medium">beauty, films, music</span> and the quiet poetry of everyday life.
            </p>

            {/* Editorial Divider */}
            <div className="w-10 h-[1.5px] bg-[#D71920]/40 mx-auto my-6" />

            {/* Body Statement */}
            <p className="text-lg sm:text-xl md:text-2xl font-serif leading-[1.4] text-[#D71920]/90 font-normal">
              For me, graphic design is more than an aesthetics. — it&apos;s about creating meaning through visual, ideas that make people feel and remember it.
            </p>

            {/* Small red star footer icon */}
            <div className="mt-8 flex justify-center items-center gap-2 text-xs font-mono text-[#D71920]/60 uppercase tracking-widest">
              <span>✦</span>
              <span>VISUAL DIARY MANIFESTO</span>
              <span>✦</span>
            </div>
          </div>

          {/* Envelope Bottom Seal Placement */}
          <div className="relative -mt-6 flex justify-center z-20">
            <WaxSeal size={84} />
          </div>
        </div>
      </div>

      {/* BOTTOM CONTINUOUS TICKER / MARQUEE (Reference 3) */}
      <div className="relative z-10 w-full bg-[#B81218] border-t border-b border-white/20 py-3 overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs md:text-sm font-mono font-bold tracking-[0.22em] text-white">
          {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span>{item}</span>
              <StarSpark size={14} className="text-white" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
