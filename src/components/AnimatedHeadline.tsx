"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedHeadlineProps {
  text?: string;
  accentWord?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  accentClassName?: string;
  delay?: number;
  showUnderline?: boolean;
}

export default function AnimatedHeadline({
  text,
  accentWord,
  as: Tag = "h1",
  className = "",
  accentClassName = "",
  delay = 100,
  showUnderline = true,
}: AnimatedHeadlineProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Check if headline is already in or near viewport on mount
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight + 80) {
        setIsVisible(true);
        return;
      }
    }

    // Scroll trigger observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (containerRef.current) {
              observer.unobserve(containerRef.current);
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px 60px 0px",
      }
    );

    const currentElem = containerRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, []);

  // Default hero headline if no custom text provided
  if (!text) {
    const firstPart = ["The", "Right", "Financial", "Guidance"];
    const secondPart = ["Starts", "with", "the"];

    return (
      <Tag
        ref={containerRef}
        className={`font-black text-[#0B1B3D] tracking-tight leading-[1.12] ${className}`}
      >
        <span className="inline-block">
          {firstPart.map((word, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden mr-[0.25em] align-top"
            >
              <span
                className={`inline-block transition-all duration-700 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[110%] opacity-0"
                }`}
                style={{
                  transitionDelay: `${i * 80 + delay}ms`,
                }}
              >
                {word}
              </span>
            </span>
          ))}
        </span>{" "}
        <span className="inline-block">
          {secondPart.map((word, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden mr-[0.25em] align-top"
            >
              <span
                className={`inline-block transition-all duration-700 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[110%] opacity-0"
                }`}
                style={{
                  transitionDelay: `${(firstPart.length + i) * 80 + delay}ms`,
                }}
              >
                {word}
              </span>
            </span>
          ))}
        </span>{" "}
        {/* Elegantly Revealed Handwritten "Truth." with Brush Underline */}
        <span className="relative inline-block align-top">
          <span
            className={`text-[#F97316] font-handwriting italic font-normal text-3xl sm:text-5xl lg:text-6xl xl:text-7xl inline-block -rotate-1 transition-all duration-800 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-4 opacity-0 scale-90"
            }`}
            style={{
              transitionDelay: `${(firstPart.length + secondPart.length) * 80 + delay + 50}ms`,
              textShadow: "0 4px 18px rgba(249, 115, 22, 0.22)",
            }}
          >
            Truth.
          </span>

          {/* Hand-drawn Animated SVG Underline */}
          {showUnderline && (
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 overflow-visible pointer-events-none"
              viewBox="0 0 200 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 11 C 45 4, 110 3, 196 9"
                stroke="#F97316"
                strokeWidth="3.5"
                strokeLinecap="round"
                className={`drop-shadow-[0_2px_4px_rgba(249,115,22,0.3)] ${
                  isVisible ? "animate-draw-underline" : "opacity-0"
                }`}
              />
            </svg>
          )}
        </span>
      </Tag>
    );
  }

  // Custom text with word-by-word reveal and optional accent word
  const words = text.split(" ");
  const cleanAccent = accentWord ? accentWord.toLowerCase().replace(/[^a-z0-9]/g, "") : null;

  return (
    <Tag
      ref={containerRef}
      className={`font-black text-[#0B1B3D] tracking-tight leading-[1.15] ${className}`}
    >
      {words.map((word, index) => {
        const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
        const isAccent = cleanAccent && cleanWord === cleanAccent;

        if (isAccent) {
          return (
            <span
              key={index}
              className="relative inline-block align-baseline mr-[0.22em]"
            >
              <span
                className={`text-[#F97316] font-handwriting italic font-normal text-[1.18em] inline-block -rotate-1 transition-all duration-700 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-3 opacity-0 scale-95"
                } ${accentClassName}`}
                style={{
                  transitionDelay: `${index * 70 + delay + 40}ms`,
                  textShadow: "0 3px 14px rgba(249, 115, 22, 0.18)",
                }}
              >
                {word}
              </span>

              {/* Hand-drawn Animated SVG Brush Underline */}
              {showUnderline && (
                <svg
                  className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 overflow-visible pointer-events-none"
                  viewBox="0 0 160 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9 C 35 3, 85 3, 155 8"
                    stroke="#F97316"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className={`drop-shadow-[0_2px_4px_rgba(249,115,22,0.25)] ${
                      isVisible ? "animate-draw-underline" : "opacity-0"
                    }`}
                  />
                </svg>
              )}
            </span>
          );
        }

        return (
          <span
            key={index}
            className="inline-block overflow-hidden mr-[0.24em] align-top"
          >
            <span
              className={`inline-block transition-all duration-600 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[110%] opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 60 + delay}ms`,
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
