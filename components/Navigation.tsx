"use client";

import { useEffect, useState } from "react";
import { Sparkles, Menu, X, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { StarSpark } from "./RedStamp";

interface NavigationProps {
  onOpenResume: () => void;
}

export default function Navigation({ onOpenResume }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);

      if (scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check active section
      const sections = ["hero", "manifesto", "about", "experience", "work", "casestudy", "spatial", "archive", "contact"];
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "WORK", href: "#work", id: "work" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "EXPERIENCE", href: "#experience", id: "experience" },
    { label: "CASE STUDY", href: "#casestudy", id: "casestudy" },
    { label: "3D SPATIAL", href: "#spatial", id: "spatial" },
    { label: "ARCHIVE", href: "#archive", id: "archive" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-black/5 pointer-events-none">
        <div
          className="h-full bg-[#D71920] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Editorial Sticky Nav */}
      <header
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-5xl transition-all duration-500 ease-out ${
          scrolled
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="relative flex items-center justify-between px-5 md:px-8 py-3 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md border border-black/10 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)]">
          {/* Brand Signature */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase hover:text-[#D71920] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#D71920]" />
            <span className="hidden sm:inline">{PERSONAL_INFO.preferredName}</span>
            <span className="text-[#121212]/40 font-normal hidden sm:inline">•</span>
            <span className="text-[#121212]/60 font-normal">2026</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-[11px] font-mono tracking-[0.16em] uppercase">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors relative py-1 hover:text-[#D71920] ${
                  activeSection === link.id
                    ? "text-[#D71920] font-bold"
                    : "text-[#121212]/75 hover:text-[#D71920]"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D71920]" />
                )}
              </a>
            ))}
          </div>

          {/* Actions: Resume & Say Hello */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider border border-black/15 hover:border-[#D71920] hover:text-[#D71920] transition-colors bg-white/70"
            >
              <FileText className="w-3 h-3 text-[#D71920]" />
              <span className="hidden sm:inline">Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-1 px-4 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-[#D71920] text-white hover:bg-[#A91418] transition-colors shadow-xs"
            >
              <span>Say Hello</span>
              <StarSpark size={10} className="text-white" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-black/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-40 bg-[#121212]/70 backdrop-blur-sm lg:hidden flex flex-col justify-end"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#FAF8F5] rounded-t-3xl p-6 border-t border-black/10 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-black/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D71920] font-bold">
                NAVIGATION
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full hover:bg-black/5"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl bg-white border border-black/5 text-xs font-mono uppercase tracking-wider text-[#121212] hover:text-[#D71920] hover:border-[#D71920]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-black/10 flex gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 py-2.5 rounded-full border border-black/20 text-xs font-mono uppercase tracking-wider text-center"
              >
                View Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2.5 rounded-full bg-[#D71920] text-white text-xs font-mono uppercase tracking-wider text-center"
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
