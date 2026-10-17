"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "fade" | "mask" | "scale";
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if element is already in/near viewport on mount
    if (domRef.current) {
      const rect = domRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight + 100) {
        setIsVisible(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px 120px 0px",
      }
    );

    const currentDom = domRef.current;
    if (currentDom) {
      observer.observe(currentDom);
    }

    return () => {
      if (currentDom) observer.unobserve(currentDom);
    };
  }, []);

  const getTransitionStyle = () => {
    switch (direction) {
      case "mask":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6";
      case "scale":
        return isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 translate-y-6";
      case "fade":
        return isVisible ? "opacity-100" : "opacity-0";
      case "up":
      default:
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8";
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out will-change-transform ${getTransitionStyle()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
