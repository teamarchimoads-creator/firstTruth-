"use client";

import React, { useEffect, useState } from "react";

export default function FinanceCanvas() {
  const [mounted, setMounted] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Subtle dampening for mouse parallax
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Delicate Geometric Finance Dot Matrix */}
      <div
        className="absolute inset-0 bg-finance-grid opacity-35 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px, 0)`,
        }}
      />

      {/* Subtle Floating Financial Glyphs (Restrained, Premium) */}
      <div
        className="absolute top-[18%] left-[7%] text-2xl font-black text-slate-300/40 transition-transform duration-500 ease-out animate-float-badge-1"
        style={{
          transform: `translate3d(${mouseOffset.x * -1}px, ${mouseOffset.y * -1}px, 0)`,
        }}
      >
        ₹
      </div>

      <div
        className="absolute top-[32%] right-[9%] text-lg font-bold text-orange-300/35 transition-transform duration-500 ease-out animate-float-badge-3"
        style={{
          transform: `translate3d(${mouseOffset.x * 1.2}px, ${mouseOffset.y * 1.2}px, 0)`,
        }}
      >
        %
      </div>

      <div
        className="absolute top-[65%] left-[12%] text-xl font-bold text-slate-300/30 transition-transform duration-500 ease-out animate-float-badge-2"
        style={{
          transform: `translate3d(${mouseOffset.x * -0.8}px, ${mouseOffset.y * -0.8}px, 0)`,
        }}
      >
        ₹
      </div>

      <div
        className="absolute top-[80%] right-[14%] text-base font-extrabold text-orange-200/40 transition-transform duration-500 ease-out animate-float-badge-4"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.9}px, ${mouseOffset.y * 0.9}px, 0)`,
        }}
      >
        ↗
      </div>

      {/* Faint upward financial growth trend curve in background */}
      <svg
        className="absolute top-1/4 right-0 w-[500px] h-[300px] opacity-[0.035] pointer-events-none"
        viewBox="0 0 500 300"
        fill="none"
      >
        <path
          d="M0 250 C 150 240, 250 180, 350 90 C 420 30, 480 20, 500 15"
          stroke="#0B1B3D"
          strokeWidth="3"
          strokeDasharray="6 6"
        />
        <circle cx="350" cy="90" r="4" fill="#F97316" />
        <circle cx="480" cy="20" r="5" fill="#F97316" />
      </svg>
    </div>
  );
}
