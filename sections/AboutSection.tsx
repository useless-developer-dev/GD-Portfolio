"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ApprovedStamp, WaxSeal, SectionLabel } from "@/components/RedStamp";
import { initGSAP } from "@/lib/gsap";

interface AboutSectionProps {
  onOpenResume: () => void;
}

export default function AboutSection({ onOpenResume }: AboutSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();
    if (!sectionRef.current || !cardRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(textRef.current, {
        x: 40,
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
      id="about"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#F4F0E8] py-20 md:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden flex items-center"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Top Section Label */}
        <div className="mb-12">
          <SectionLabel number="03" title="ABOUT / IDENTITY" subtitle="PERSONAL SPREAD" />
        </div>

        {/* Magazine Asymmetric 2-Column Spread (Reference 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Polaroid / ID Card Composition with Red Backing */}
          <div ref={cardRef} className="lg:col-span-5 relative flex justify-center">
            {/* Layer 1: Red Angled Paper Rectangle */}
            <div className="absolute inset-0 bg-[#D71920] rounded-xl transform -rotate-3 translate-x-3 translate-y-3 shadow-xl" />

            {/* Layer 2: Main Polaroid / Passport Card */}
            <div className="relative z-10 w-full max-w-[390px] bg-[#FAF8F5] p-5 sm:p-6 rounded-xl shadow-2xl border border-black/10">
              
              {/* Pinned Red Wax Seal on top center */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20">
                <WaxSeal size={68} />
              </div>

              {/* Photo Frame */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-black/10 mt-3 shadow-inner bg-[#EBE5D8]">
                <Image
                  src="/images/portrait.jpg"
                  alt="Huynh Yen Nhi portrait"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 360px"
                  priority
                />
              </div>

              {/* "Hi! It's Nhi here" Script Tagline */}
              <div className="mt-4 pb-2 border-b border-dashed border-[#D71920]/40">
                <h3 className="text-2xl sm:text-3xl font-serif italic text-[#D71920] font-medium tracking-tight">
                  {PERSONAL_INFO.bioIntro}
                </h3>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-mono text-[#121212] my-4 pt-1">
                <div>
                  <span className="text-[#5A5751]">Birthday:</span>{" "}
                  <span className="font-semibold">{PERSONAL_INFO.birthday}</span>
                </div>
                <div>
                  <span className="text-[#5A5751]">Zodiac:</span>{" "}
                  <span className="font-semibold">{PERSONAL_INFO.zodiac}</span>
                </div>
                <div>
                  <span className="text-[#5A5751]">MBTI:</span>{" "}
                  <span className="font-semibold text-[#D71920]">{PERSONAL_INFO.mbti}</span>
                </div>
                <div>
                  <span className="text-[#5A5751]">Location:</span>{" "}
                  <span className="font-semibold">{PERSONAL_INFO.shortLocation}</span>
                </div>
              </div>

              {/* Languages & Approved Circular Seal */}
              <div className="pt-3 border-t border-black/10 flex items-end justify-between">
                <div>
                  <h4 className="text-lg font-serif italic text-[#D71920] font-medium mb-1">
                    Languages
                  </h4>
                  <ul className="text-xs font-sans text-[#121212] space-y-0.5">
                    {PERSONAL_INFO.languages.map((lang) => (
                      <li key={lang.name} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                        <span>
                          <strong>{lang.name}</strong> — {lang.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Approved Stamp */}
                <div className="shrink-0">
                  <ApprovedStamp size={76} />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Editorial Typography & Bio Narrative */}
          <div ref={textRef} className="lg:col-span-7 space-y-6">
            
            {/* Flourishing Script "ABOUT (ME)" Title */}
            <div className="relative">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#D71920] font-normal tracking-tight leading-[0.9]">
                <span className="italic font-serif">A</span>
                <span className="uppercase font-serif-display font-bold">bout </span>
                <span className="font-serif italic text-[#D71920]">(ME)</span>
              </h2>
            </div>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg md:text-xl text-[#121212] font-sans leading-relaxed">
              {PERSONAL_INFO.bioParagraph1}
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-[#5A5751] font-sans leading-relaxed">
              {PERSONAL_INFO.bioParagraph2}
            </p>

            {/* Closing Quote in Italic Serif */}
            <div className="pt-4 pb-2">
              <p className="text-2xl sm:text-3xl font-serif italic text-[#121212]/90 font-medium">
                Thanks for taking time to visit my portfolio!
              </p>
            </div>

            {/* Interactive (resume) >> link trigger */}
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="group inline-flex items-center gap-2 text-sm md:text-base font-mono font-bold tracking-widest text-[#121212] hover:text-[#D71920] transition-colors uppercase"
              >
                <span>( resume )</span>
                <span className="text-[#D71920] group-hover:translate-x-1.5 transition-transform">
                  ▶▶
                </span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
