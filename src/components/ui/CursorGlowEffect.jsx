"use client";

import { useEffect } from "react";

export default function CursorGlowEffect() {
  useEffect(() => {
    let x = 0;
    let y = 0;
    let raf;

    const handleMouseMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--cursor-x", `${x}px`);
        document.documentElement.style.setProperty("--cursor-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1]">
      <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(600px_circle_at_var(--cursor-x)_var(--cursor-y),rgba(0,255,255,0.04),transparent_60%)] before:mix-blend-screen" />
    </div>
  );
}
