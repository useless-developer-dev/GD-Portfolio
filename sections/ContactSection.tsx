"use client";

import { useEffect, useState, useRef } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionLabel, ApprovedStamp, WaxSeal, StarSpark } from "@/components/RedStamp";
import { InstagramIcon, LinkedinIcon, BehanceIcon } from "@/components/SocialIcons";
import { ArrowUp, Mail, Phone, Send, Check } from "lucide-react";
import { initGSAP } from "@/lib/gsap";

export default function ContactSection({ onOpenResume }: { onOpenResume: () => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hcmTime, setHcmTime] = useState("");
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", service: "Brand Identity" });

  useEffect(() => {
    // Live HCM City Time (UTC+7)
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setHcmTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: "", email: "", message: "", service: "Brand Identity" });
    }, 4000);
  };

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-[#FAF8F5] py-24 md:py-32 px-4 sm:px-8 lg:px-16 border-t border-black/10 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto space-y-20">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
          <div>
            <SectionLabel number="09" title="CONTACT &amp; COLLABORATION" subtitle="EDITORIAL CONCLUSION" />
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif-display font-bold text-[#121212] tracking-tight mt-4 leading-[0.95]">
              Let&apos;s make something <br />
              <span className="text-[#D71920] font-serif italic">worth remembering.</span>
            </h2>
          </div>

          {/* Live Ho Chi Minh City Time Clock */}
          <div className="flex items-center gap-3 p-4 bg-[#EBE5D8] rounded-2xl border border-black/10 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
            <div className="text-xs font-mono">
              <span className="text-[#5A5751] block uppercase tracking-wider">HCMC LOCAL TIME (UTC+7)</span>
              <span className="text-base font-bold text-[#121212] font-mono">{hcmTime || "12:00:00"}</span>
            </div>
          </div>
        </div>

        {/* 2-Column Contact Sheet Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Contact Channels & Editorial Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-base sm:text-lg text-[#5A5751] font-sans leading-relaxed">
              Available for select freelance commissions, full-time brand design roles, 3D spatial projects, and editorial collaborations worldwide.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-black/10 hover:border-[#D71920] hover:text-[#D71920] transition-colors group shadow-xs"
              >
                <div className="p-2 rounded-xl bg-[#D71920]/10 text-[#D71920] group-hover:bg-[#D71920] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A5751] block">DIRECT EMAIL</span>
                  <span className="text-sm font-mono font-bold text-[#121212] group-hover:text-[#D71920]">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-black/10 hover:border-[#D71920] hover:text-[#D71920] transition-colors group shadow-xs"
              >
                <div className="p-2 rounded-xl bg-[#D71920]/10 text-[#D71920] group-hover:bg-[#D71920] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A5751] block">DIRECT PHONE</span>
                  <span className="text-sm font-mono font-bold text-[#121212] group-hover:text-[#D71920]">{PERSONAL_INFO.phone}</span>
                </div>
              </a>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF8F5] border border-black/10 text-xs font-mono hover:text-[#D71920] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#D71920]" />
                <span className="truncate">{PERSONAL_INFO.instagram}</span>
              </a>

              <a
                href={PERSONAL_INFO.behanceUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF8F5] border border-black/10 text-xs font-mono hover:text-[#D71920] transition-colors"
              >
                <BehanceIcon className="w-4 h-4 text-[#D71920]" />
                <span className="truncate">Behance Portfolio</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF8F5] border border-black/10 text-xs font-mono hover:text-[#D71920] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#D71920]" />
                <span className="truncate">LinkedIn</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 p-3 rounded-xl bg-[#D71920]/10 border border-[#D71920]/30 text-xs font-mono text-[#D71920] font-bold hover:bg-[#D71920] hover:text-white transition-colors text-left"
              >
                <span>Curriculum Vitae</span>
                <span className="ml-auto">→</span>
              </button>
            </div>

            {/* Stamps and Authenticity */}
            <div className="flex items-center gap-6 pt-4">
              <ApprovedStamp size={78} />
              <WaxSeal size={62} />
            </div>

          </div>

          {/* RIGHT: Interactive Inquiry Letter Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-10 rounded-3xl border border-black/10 shadow-xl relative">
            <h3 className="text-2xl font-serif-display font-bold text-[#121212] mb-2">
              Send a Visual Inquiry
            </h3>
            <p className="text-xs font-mono uppercase tracking-widest text-[#5A5751] mb-6">
              LETTERS &amp; PROPOSALS • TYPICALLY REPLIES IN 24H
            </p>

            {formSent ? (
              <div className="p-8 text-center bg-[#D71920]/10 border border-[#D71920] rounded-2xl space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#D71920] text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#121212]">
                  Letter Dispatched Successfully
                </h4>
                <p className="text-xs font-mono text-[#5A5751]">
                  Thank you for reaching out! Nhi will review your inquiry promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#121212] font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-sm focus:outline-none focus:border-[#D71920]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#121212] font-semibold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-sm focus:outline-none focus:border-[#D71920]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#121212] font-semibold">
                    Project Focus
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-sm focus:outline-none focus:border-[#D71920]"
                  >
                    <option value="Brand Identity">Brand Identity &amp; Visual Systems</option>
                    <option value="Packaging Design">Packaging &amp; Print Craft</option>
                    <option value="3D Spatial Design">3D Event Space &amp; Spatial Visualization</option>
                    <option value="Editorial & Posters">Editorial Design &amp; Posters</option>
                    <option value="Full-time Opportunity">Full-time / Agency Opportunity</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#121212] font-semibold">
                    Message / Brief
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, and vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-sm focus:outline-none focus:border-[#D71920] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#D71920] hover:bg-[#A91418] text-white font-mono uppercase text-xs tracking-widest font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Seal &amp; Send Letter</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Oversized Footer Graphic Typography Treatment */}
        <div className="pt-16 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#5A5751]">
          <div className="flex items-center gap-2">
            <span className="text-[#D71920] font-bold">NHI HUYNH</span>
            <span>•</span>
            <span>DESIGN PORTFOLIO &copy; 2026</span>
            <span>•</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/15 hover:border-[#D71920] hover:text-[#D71920] transition-colors bg-white"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D71920]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
