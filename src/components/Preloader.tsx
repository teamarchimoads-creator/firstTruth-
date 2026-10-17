"use client";

import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Check if user already saw the preloader in this session
    try {
      const hasLoaded = sessionStorage.getItem("ftfc_preloader_seen");
      if (hasLoaded) {
        setLoading(false);
        return;
      }
    } catch {
      // In case sessionStorage is blocked by browser privacy
    }

    const timer = setTimeout(() => {
      setExiting(true);
      const exitTimer = setTimeout(() => {
        setLoading(false);
        try {
          sessionStorage.setItem("ftfc_preloader_seen", "true");
        } catch {}
      }, 550);
      return () => clearTimeout(exitTimer);
    }, 1350);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-all duration-500 ease-out ${
        exiting ? "opacity-0 pointer-events-none -translate-y-4 scale-102" : "opacity-100"
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-orange-100/40 via-amber-50/30 to-sky-100/40 blur-3xl animate-pulse-glow" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Shield Logo SVG */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
          <svg
            viewBox="0 0 200 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_10px_25px_rgba(249,115,22,0.18)]"
          >
            <defs>
              <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0B1B3D" />
                <stop offset="70%" stopColor="#122855" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
              <linearGradient id="rupeeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FB923C" />
                <stop offset="100%" stopColor="#EA580C" />
              </linearGradient>
            </defs>

            {/* Outer Shield Contour */}
            <path
              d="M100 12 L172 40 C172 125 100 188 100 188 C100 188 28 125 28 40 L100 12 Z"
              stroke="url(#shieldGrad)"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-shield-draw"
            />

            {/* Inner Shield Fill - subtle reveal */}
            <path
              d="M100 24 L160 48 C160 118 100 170 100 170 C100 170 40 118 40 48 L100 24 Z"
              fill="#0B1B3D"
              className="opacity-95 transition-opacity duration-700 delay-300"
            />

            {/* Rupee Symbol Top Bar */}
            <path
              d="M68 62 H132"
              stroke="url(#rupeeGrad)"
              strokeWidth="7"
              strokeLinecap="round"
              className="animate-shield-draw"
              style={{ animationDelay: "0.2s" }}
            />

            {/* Rupee Symbol Second Bar */}
            <path
              d="M68 80 H118"
              stroke="url(#rupeeGrad)"
              strokeWidth="7"
              strokeLinecap="round"
              className="animate-shield-draw"
              style={{ animationDelay: "0.35s" }}
            />

            {/* Rupee Loop and Stem */}
            <path
              d="M86 62 C116 62 116 102 86 102 L70 102"
              stroke="url(#rupeeGrad)"
              strokeWidth="7"
              strokeLinecap="round"
              className="animate-shield-draw"
              style={{ animationDelay: "0.45s" }}
            />

            {/* Upward Growth Arrow (Fintech Growth Trajectory) */}
            <path
              d="M58 148 L86 118 L108 138 L142 94"
              stroke="#F97316"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-shield-draw"
              style={{ animationDelay: "0.55s" }}
            />
            {/* Arrow Head */}
            <path
              d="M124 94 H144 V114"
              stroke="#F97316"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-shield-draw"
              style={{ animationDelay: "0.65s" }}
            />
          </svg>
        </div>

        {/* Brand Typography Reveal */}
        <div className="mt-5 text-center select-none">
          <div className="text-xl sm:text-2xl font-black text-[#0B1B3D] tracking-[0.22em] uppercase leading-tight animate-greeting-pop">
            FIRST TRUTH
          </div>
          <div className="text-[10px] sm:text-xs font-bold text-[#F97316] tracking-[0.3em] uppercase mt-1">
            FINANCE CONSULTATIONS
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-ping" />
            <span className="text-[11px] font-medium text-slate-400 tracking-wider">
              Transparent Guidance • Rohtak, Haryana
            </span>
          </div>
        </div>

        {/* Subtle Bottom Progress Line */}
        <div className="mt-6 w-36 h-1 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#F97316] to-[#FB923C] rounded-full animate-draw-underline" />
        </div>
      </div>
    </div>
  );
}
