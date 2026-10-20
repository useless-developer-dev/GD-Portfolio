"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor-hover], input, textarea");
      const cursorTextEl = target.closest("[data-cursor-text]");

      if (interactive) {
        setHovered(true);
      } else {
        setHovered(false);
      }

      if (cursorTextEl) {
        setCursorText(cursorTextEl.getAttribute("data-cursor-text") || "");
      } else {
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animationFrameId: number;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };
    animationFrameId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pos, visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#D71920] -translate-x-1/2 -translate-y-1/2 transition-size duration-200 ease-out flex items-center justify-center ${
          hovered
            ? "w-14 h-14 bg-[#D71920]/10 backdrop-blur-[1px] border-[#D71920]/80"
            : cursorText
            ? "w-20 h-20 bg-[#D71920] text-white border-transparent"
            : "w-8 h-8 border-[#D71920]/60"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorText && (
          <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-white text-center px-2 leading-tight">
            {cursorText}
          </span>
        )}
      </div>

      {/* Inner Red Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#D71920] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}
