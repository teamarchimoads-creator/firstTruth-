"use client";

import React, { useState } from "react";
import Image from "next/image";

interface MascotCardProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  badgeText?: string;
  className?: string;
  imageClassName?: string;
}

export default function MascotCard({
  src,
  alt,
  width = 280,
  height = 420,
  badgeText = "Truth-First Guide",
  className = "",
  imageClassName = "",
}: MascotCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className={`relative flex flex-col items-center justify-center select-none perspective-1000 ${className}`}
    >
      <div
        className="relative w-full flex items-center justify-center transform-style-3d transition-transform duration-300 ease-out"
        style={{
          transform: isHovered
            ? `rotateY(${mousePos.x * 7}deg) rotateX(${-mousePos.y * 7}deg)`
            : "rotateY(0deg) rotateX(0deg)",
        }}
      >
        {/* Ambient Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400/20 via-sky-400/15 to-transparent blur-2xl animate-pulse-glow pointer-events-none" />

        {/* Pedestal Shadow */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-3 rounded-[100%] bg-slate-900/15 blur-sm animate-pedestal-shadow pointer-events-none" />

        {/* Mascot Image with Float Animation */}
        <div className="relative z-10 animate-float-robot w-full flex items-center justify-center">
          <div className="relative">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              priority
              unoptimized
              className={`w-40 sm:w-52 h-auto object-contain drop-shadow-[0_16px_30px_rgba(11,27,61,0.18)] transition-transform duration-300 ${
                isHovered ? "scale-103" : "scale-100"
              } ${imageClassName}`}
            />
          </div>
        </div>

        {/* Interactive Guide Badge */}
        {badgeText && (
          <div className="absolute -top-3 right-0 sm:right-2 z-20 animate-float-badge-2 pointer-events-none">
            <div className="px-2.5 py-1 rounded-full bg-white/95 border border-orange-200/90 shadow-md text-[10.5px] font-bold text-[#0B1B3D] flex items-center gap-1.5 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
              <span>{badgeText}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
