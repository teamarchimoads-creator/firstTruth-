"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 280);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      key={pathname}
      className={`flex-1 flex flex-col transition-all duration-300 ease-out ${
        isTransitioning ? "opacity-90 translate-y-1.5" : "opacity-100 translate-y-0"
      }`}
    >
      {children}
    </div>
  );
}
