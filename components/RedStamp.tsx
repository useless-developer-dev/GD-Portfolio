"use client";

import Image from "next/image";

interface StampProps {
  type?: "approved" | "star" | "diamond" | "wax";
  className?: string;
  size?: number;
  text?: string;
}

export function ApprovedStamp({ className = "", size = 96 }: { className?: string; size?: number }) {
  return (
    <div
      className={`relative select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-[#121212] opacity-70 group-hover:opacity-100 transition-opacity"
      >
        {/* Outer dashed/solid rings */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle
          cx="50"
          cy="50"
          r="41"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="2 2"
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        
        {/* Curving Text Path */}
        <path
          id="textPathUpper"
          d="M 16 50 A 34 34 0 1 1 84 50"
          fill="none"
        />
        <path
          id="textPathLower"
          d="M 84 50 A 34 34 0 1 1 16 50"
          fill="none"
        />

        <text className="text-[7.5px] uppercase tracking-[0.18em] font-mono fill-current">
          <textPath href="#textPathUpper" startOffset="50%" textAnchor="middle">
            • PORTFOLIO 2026 •
          </textPath>
        </text>
        <text className="text-[7.5px] uppercase tracking-[0.16em] font-mono fill-current">
          <textPath href="#textPathLower" startOffset="50%" textAnchor="middle">
            • HCMC • NATNYSE •
          </textPath>
        </text>

        {/* Center Box with APPROVED */}
        <rect
          x="24"
          y="44"
          width="52"
          height="12"
          rx="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <text
          x="50"
          y="52.5"
          textAnchor="middle"
          className="text-[7.5px] font-bold tracking-[0.12em] fill-current uppercase font-sans"
        >
          APPROVED
        </text>
      </svg>
    </div>
  );
}

export function WaxSeal({
  size = 72,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-block transition-transform duration-300 hover:scale-105 select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/wax_seal.jpg"
        alt="Red Wax Seal"
        width={size}
        height={size}
        className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(215,25,32,0.35)] mix-blend-multiply"
      />
    </div>
  );
}

export function DiamondBadge({ text = "GRAPHIC DESIGNER", className = "" }: { text?: string; className?: string }) {
  return (
    <div
      className={`inline-flex items-center justify-center px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#D71920] border border-[#D71920] rounded-full transform -rotate-3 hover:rotate-0 transition-transform duration-300 bg-[#F4F0E8]/80 backdrop-blur-sm ${className}`}
    >
      <span>{text}</span>
    </div>
  );
}

export function StarSpark({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`text-[#D71920] inline-block ${className}`}
    >
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}

export function SectionLabel({
  number,
  title,
  subtitle,
  dark = false,
}: {
  number: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-mono">
      <span className="text-[#D71920] font-bold">{number}</span>
      <span className={dark ? "text-white/40" : "text-[#121212]/40"}>/</span>
      <span className={dark ? "text-white/80 font-medium" : "text-[#121212] font-semibold"}>
        {title}
      </span>
      {subtitle && (
        <>
          <span className={dark ? "text-white/20" : "text-[#121212]/20"}>—</span>
          <span className={dark ? "text-white/50" : "text-[#121212]/60"}>{subtitle}</span>
        </>
      )}
    </div>
  );
}
