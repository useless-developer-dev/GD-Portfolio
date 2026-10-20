"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import PaperTexture from "@/components/PaperTexture";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import ResumeModal from "@/components/ResumeModal";
import LightboxModal from "@/components/LightboxModal";

import HeroSection from "@/sections/HeroSection";
import ManifestoSection from "@/sections/ManifestoSection";
import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";
import SelectedWorkSection from "@/sections/SelectedWorkSection";
import CaseStudySection from "@/sections/CaseStudySection";
import Spatial3DSection from "@/sections/Spatial3DSection";
import VisualArchiveSection from "@/sections/VisualArchiveSection";
import ContactSection from "@/sections/ContactSection";

import { Project, ArchiveItem } from "@/data/portfolioData";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Project | ArchiveItem | null>(null);

  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#F4F0E8] text-[#121212]">
        {/* Paper Grain Texture & Custom Cursor */}
        <PaperTexture />
        <CustomCursor />

        {/* Sticky Editorial Navigation */}
        <Navigation onOpenResume={() => setResumeOpen(true)} />

        {/* SECTION 01 — HERO / COVER (Reference 2) */}
        <HeroSection />

        {/* SECTION 02 — VISUAL DIARY / MANIFESTO & CONTINUOUS MARQUEE (Reference 3) */}
        <ManifestoSection />

        {/* SECTION 03 — ABOUT / PERSONAL IDENTITY (Reference 1) */}
        <AboutSection onOpenResume={() => setResumeOpen(true)} />

        {/* SECTION 04 — EXPERIENCE & EDUCATION TIMELINE (Reference 4) */}
        <ExperienceSection />

        {/* SECTION 05 — SELECTED WORK (d1.png - d8.png Editorial Gallery) */}
        <SelectedWorkSection onSelectProject={(project) => setSelectedItem(project)} />

        {/* SECTION 06 — FEATURED CASE STUDY: CỬU HOA SỬ HỌA (Reference 5) */}
        <CaseStudySection />

        {/* SECTION 07 — 3D & SPATIAL DESIGN CHAPTER */}
        <Spatial3DSection />

        {/* SECTION 08 — VISUAL ARCHIVE / VAULT */}
        <VisualArchiveSection onSelectItem={(item) => setSelectedItem(item)} />

        {/* SECTION 09 — CONTACT & EDITORIAL OUTRO */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />

        {/* Modals */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
        <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </main>
    </SmoothScroll>
  );
}