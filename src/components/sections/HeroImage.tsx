
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import imageData from "@/app/lib/placeholder-images.json";

export function HeroImage() {
  const [showGhibli, setShowGhibli] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Sequence on load:
    // 1. Show normal for 2s
    const timer1 = setTimeout(() => {
      setShowGhibli(true);
    }, 2000);

    // 2. Keep Ghibli for 5s (total 7s)
    const timer2 = setTimeout(() => {
      setShowGhibli(false);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Show Ghibli if either the auto-timer is active OR the user is currently hovering
  const effectivelyGhibli = isHovered || showGhibli;

  return (
    <div 
      className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] mx-auto mb-8 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20 transition-all duration-700 transform group-hover:scale-105 group-hover:border-primary">
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
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
        AI Magic
      </div>
    </div>
  );
}
