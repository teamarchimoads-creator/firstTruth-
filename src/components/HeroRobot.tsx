"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface HeroRobotProps {
  onConsultClick?: () => void;
  isMobile?: boolean;
}

export default function HeroRobot({ onConsultClick, isMobile = false }: HeroRobotProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [greetingVisible, setGreetingVisible] = useState(false);

  const greetings = [
    "Namaste! Need loan advice? 👋",
    "100% Truth First • Rohtak ✨",
    "Zero False Commitments 🛡️",
    "Tailored EMI & Guidance 📈",
  ];

  useEffect(() => {
    // Show greeting bubble shortly after initial render
    const timer = setTimeout(() => {
      setGreetingVisible(true);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const handleNextGreeting = () => {
    setGreetingIndex((prev) => (prev + 1) % greetings.length);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  if (isMobile) {
    return (
      <div className="relative w-full max-w-[160px] xs:max-w-[180px] flex flex-col items-center justify-center select-none">
        {/* Ambient Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400/25 via-amber-300/15 to-sky-300/20 blur-xl" />
        {/* Pedestal Shadow */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 xs:w-24 h-2 rounded-[100%] bg-slate-900/15 blur-sm animate-pedestal-shadow" />

        {/* Mobile Greeting Badge */}
        {greetingVisible && (
          <div
            onClick={handleNextGreeting}
            className="absolute -top-7 left-1/2 -translate-x-1/2 z-20 cursor-pointer animate-greeting-pop"
          >
            <div className="px-2.5 py-1 rounded-full bg-white/95 border border-orange-200/90 shadow-md text-[10px] font-bold text-[#0B1B3D] whitespace-nowrap flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
              <span>{greetings[greetingIndex]}</span>
            </div>
          </div>
        )}

        {/* Floating Mascot */}
        <div className="relative z-10 animate-float-robot w-full flex items-center justify-center">
          <div className="relative">
            <Image
              src="/hero-robo.png"
              alt="First Truth Mascot"
              width={320}
              height={460}
              priority
              unoptimized
              className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(11,27,61,0.2)]"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className="relative w-full max-w-[390px] sm:max-w-[430px] xl:max-w-[470px] flex flex-col items-center justify-center cursor-pointer select-none perspective-1000 py-6"
    >
      <div
        className="relative w-full flex items-center justify-center transform-style-3d transition-transform duration-300 ease-out"
        style={{
          transform: isHovered
            ? `rotateY(${mousePos.x * 9}deg) rotateX(${-mousePos.y * 9}deg)`
            : "rotateY(0deg) rotateX(0deg)",
        }}
      >
        {/* Ambient Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[340px] sm:w-[400px] h-[340px] sm:h-[400px] rounded-full bg-gradient-to-tr from-amber-100/50 via-orange-100/35 to-sky-100/40 blur-3xl animate-pulse-glow" />
        </div>

        {/* Ground Pedestal Shadow */}
        <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none z-0">
          <div className="w-52 sm:w-60 h-4 sm:h-5 rounded-[100%] bg-slate-800/15 blur-md animate-pedestal-shadow" />
        </div>

        {/* Interactive Robot Greeting Speech Bubble */}
        {greetingVisible && (
          <div
            onClick={handleNextGreeting}
            className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 z-30 transition-transform duration-300 hover:scale-105 active:scale-95 animate-greeting-pop cursor-pointer"
          >
            <div className="relative bg-white/95 backdrop-blur-md rounded-2xl border border-orange-200/90 shadow-xl px-4 py-2 flex items-center gap-2 group">
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-bold text-[#0B1B3D] whitespace-nowrap">
                {greetings[greetingIndex]}
              </span>
              <span className="text-[10px] text-[#F97316] font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                (click me)
              </span>

              {/* Speech Bubble Tail */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-white" />
            </div>
          </div>
        )}

        {/* Mascot Image with Visor Blinking & Welcoming Hover Animation */}
        <div
          className={`relative z-10 w-full flex items-center justify-center animate-float-robot transition-all duration-300 ${
            isHovered ? "scale-[1.02]" : "scale-100"
          }`}
          onClick={handleNextGreeting}
        >
          <div className="relative">
            <Image
              src="/hero-robo.png"
              alt="First Truth Finance Mascot"
              width={520}
              height={780}
              priority
              unoptimized
              className="w-[310px] sm:w-[350px] xl:w-[390px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(11,27,61,0.16)] select-none"
            />

            {/* Subtle Thumbs-Up Aura on Hover */}
            <div
              className={`absolute top-[28%] left-[17%] w-10 h-10 rounded-full bg-orange-400/20 blur-md pointer-events-none transition-opacity duration-300 ${
                isHovered ? "opacity-100 animate-ping" : "opacity-0"
              }`}
            />
          </div>
        </div>

        {/* Floating Badge 1: Truth First (Lower Left) */}
        <div
          className="absolute -left-2 sm:-left-6 bottom-12 sm:bottom-16 z-20 pointer-events-auto select-none animate-float-badge-2 transition-transform duration-300 hover:scale-105"
          style={{
            transform: `translate3d(${mousePos.x * -12}px, ${mousePos.y * -12}px, 0)`,
          }}
          onClick={onConsultClick}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-xl px-3.5 py-2.5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#F97316] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <span className="text-xs sm:text-[13px] font-bold text-[#0B1B3D] block leading-tight">
                Truth First
              </span>
              <span className="text-[10px] text-slate-500 font-medium mt-0.5 block">
                Zero False Commitments
              </span>
            </div>
          </div>
        </div>

        {/* Floating Badge 2: Founder FTFC (Right Side, below face) */}
        <div
          className="absolute -right-2 sm:-right-6 xl:-right-8 top-52 sm:top-56 xl:top-60 z-20 pointer-events-auto select-none animate-float-badge-3 transition-transform duration-300 hover:scale-105"
          style={{
            transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * 14}px, 0)`,
          }}
          onClick={onConsultClick}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-xl px-3.5 py-2.5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-600 flex-shrink-0 font-bold text-xs">
              FTFC
            </div>
            <div>
              <span className="text-xs sm:text-[13px] font-bold text-[#0B1B3D] block leading-tight">
                Led by Shubham Jain
              </span>
              <span className="text-[10px] text-slate-500 font-medium mt-0.5 block">
                Rohtak, Haryana
              </span>
            </div>
          </div>
        </div>

        {/* Floating Badge 3: 100% Transparent Pill (Lower Right) */}
        <div
          className="absolute right-0 sm:right-2 bottom-6 z-20 pointer-events-auto select-none animate-float-badge-4 transition-transform duration-300 hover:scale-105"
          style={{
            transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 0)`,
          }}
        >
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-full border border-orange-200/90 shadow-lg px-3 py-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold text-[#0B1B3D]">
              100% Transparent
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
