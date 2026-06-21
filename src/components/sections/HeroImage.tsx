
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import imageData from "@/app/lib/placeholder-images.json";

export function HeroImage() {
  const [showGhibli, setShowGhibli] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // 1. Initial delay: Show normal for 2 seconds, then switch to Ghibli
    const timer1 = setTimeout(() => {
      setShowGhibli(true);
    }, 2000);

    // 2. Keep Ghibli for 5 seconds (until 7s total), then back to normal
    const timer2 = setTimeout(() => {
      setShowGhibli(false);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Use Ghibli if either the auto-timer is active OR the user is currently hovering
  const effectivelyGhibli = isHovered || showGhibli;

  return (
    <div 
      className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] mx-auto mb-8 cursor-pointer group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-4 border-primary/10 transition-all duration-700 transform group-hover:scale-105 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.3)]">
        {/* Background Loading State */}
        <div className="absolute inset-0 bg-muted animate-pulse" />

        {/* Normal Image */}
        <Image
          src={imageData.hero.normal.src}
          alt={imageData.hero.normal.alt}
          width={imageData.hero.normal.width}
          height={imageData.hero.normal.height}
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out ${
            effectivelyGhibli ? "opacity-0" : "opacity-100"
          }`}
          data-ai-hint={imageData.hero.normal.aiHint}
          priority
        />

        {/* Ghibli Image */}
        <Image
          src={imageData.hero.ghibli.src}
          alt={imageData.hero.ghibli.alt}
          width={imageData.hero.ghibli.width}
          height={imageData.hero.ghibli.height}
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out ${
            effectivelyGhibli ? "opacity-100" : "opacity-0"
          }`}
          data-ai-hint={imageData.hero.ghibli.aiHint}
        />
      </div>
      
      {/* Subtle indicator hint */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold text-primary tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 shadow-sm border border-primary/10">
        AI Magic
      </div>
    </div>
  );
}
