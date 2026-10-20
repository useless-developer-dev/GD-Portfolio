"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { DiamondBadge, StarSpark } from "@/components/RedStamp";
import { initGSAP } from "@/lib/gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();
    if (!containerRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      // Intro entrance animation
      gsap.from(heroContentRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
      });

      // Scroll-driven parallax & separation
      gsap.to(titleRef.current, {
        yPercent: 40,
        scale: 0.96,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 20,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center p-3 md:p-6 lg:p-8 bg-[#F4F0E8] overflow-hidden"
    >
      {/* Outer CRT / Curved Frame Box (Reference 2) */}
      <div className="relative w-full h-[94vh] max-w-[1540px] crt-frame-border bg-[#F4F0E8] border border-black/10 flex flex-col justify-between p-6 md:p-10 lg:p-12 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)]">
        
        {/* Soft Meadow / Floral Field Background with scanlines */}
        <div
          ref={bgImageRef}
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        >
          <Image
            src="/images/meadow.jpg"
            alt="Soft floral meadow"
            fill
            className="object-cover opacity-60 filter blur-[1px] brightness-[1.02] saturate-[0.95]"
            priority
          />
          {/* Subtle Scanlines & Gradient Wash */}
          <div className="absolute inset-0 scanlines opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4F0E8] via-transparent to-[#F4F0E8]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F0E8]/40 via-transparent to-[#F4F0E8]/40" />
        </div>

        {/* TOP EDITORIAL METADATA BAR */}
        <div
          ref={heroContentRef}
          className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-start gap-4 text-xs font-mono tracking-wider text-[#121212]"
        >
          {/* Top Left: Designer Name & Role */}
          <div className="space-y-0.5">
            <p className="font-bold uppercase tracking-[0.14em] text-[#121212]">
              {PERSONAL_INFO.name}
            </p>
            <p className="text-[#5A5751] text-[11px] uppercase tracking-widest">
              (GRAPHIC DESIGN / 3D ARTIST)
            </p>
          </div>

          {/* Top Center: Phone & Instagram */}
          <div className="text-left md:text-center space-y-0.5">
            <p className="text-[#121212]">{PERSONAL_INFO.phone}</p>
            <p className="text-[#5A5751] text-[11px]">
              Instagram:{" "}
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-[#D71920] transition-colors"
              >
                {PERSONAL_INFO.instagram}
              </a>
            </p>
          </div>

          {/* Top Right: Say Hello / Email */}
          <div className="text-left md:text-right space-y-0.5">
            <p className="font-bold uppercase tracking-[0.14em] text-[#121212]">SAY HELLO</p>
            <p className="text-[#5A5751] text-[11px]">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-[#D71920] transition-colors"
              >
                ({PERSONAL_INFO.email})
              </a>
            </p>
          </div>
        </div>

        {/* CENTER TYPOGRAPHY / LOGOTYPE */}
        <div
          ref={titleRef}
          className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-8 select-none"
        >
          {/* "welcome to my" Script Prefix */}
          <div className="flex items-center gap-3 md:gap-4 mb-[-0.6em] md:mb-[-1em] z-20">
            <span className="text-2xl md:text-4xl lg:text-5xl font-serif italic text-[#D71920] font-normal tracking-wide">
              welcome to my
            </span>
          </div>

          {/* Giant "portfolio" Typography Composition */}
          <div className="relative inline-block">
            <h1 className="text-7xl sm:text-8xl md:text-[140px] lg:text-[190px] xl:text-[230px] font-serif-display font-bold tracking-[-0.04em] text-[#D71920] leading-[0.88] select-none lowercase">
              portfolio
            </h1>

            {/* Spark Star Ornament */}
            <div className="absolute -top-3 md:-top-6 right-2 sm:right-6 md:right-10 animate-pulse">
              <StarSpark size={36} className="text-[#D71920]" />
            </div>

            {/* Graphic Designer Badge */}
            <div className="absolute top-2 sm:top-4 md:top-8 -right-4 sm:-right-8 md:-right-16 z-30">
              <DiamondBadge text="GRAPHIC DESIGNER" />
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-end gap-4 text-xs font-mono tracking-wider text-[#121212] pt-4 border-t border-black/10">
          {/* Bottom Left: Portfolio Update */}
          <div className="space-y-0.5">
            <p className="font-bold uppercase tracking-[0.14em] text-[#121212]">PORTFOLIO</p>
            <p className="text-[#5A5751] text-[11px] uppercase tracking-widest">2026 UPDATE</p>
          </div>

          {/* Bottom Center: Tagline */}
          <div className="text-left md:text-center text-[11px] text-[#5A5751] font-sans">
            {PERSONAL_INFO.tagline}
          </div>

          {/* Bottom Right: Behance */}
          <div className="text-left md:text-right space-y-0.5">
            <p className="font-bold uppercase tracking-[0.14em] text-[#121212]">BEHANCE</p>
            <p className="text-[#5A5751] text-[11px]">
              <a
                href={PERSONAL_INFO.behanceUrl}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-[#D71920] transition-colors"
              >
                {PERSONAL_INFO.behance}
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
