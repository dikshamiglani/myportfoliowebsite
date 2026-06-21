
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import imageData from "@/app/lib/placeholder-images.json";

export function HeroImage() {
  const [showGhibli, setShowGhibli] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initial sequence: 
    // 1. Show normal for 2s
    // 2. Change to Ghibli for 5s
    // 3. Change back to normal
    const timer1 = setTimeout(() => {
      setShowGhibli(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowGhibli(false);
    }, 7000); // 2s + 5s

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Show Ghibli if either the timer is active OR the user is hovering
  const effectivelyGhibli = isHovered || showGhibli;

  return (
    <div 
      className="relative w-[300px] h-[300px] mx-auto mb-8 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-4 border-card transition-all duration-500 transform group-hover:scale-105">
        {/* Normal Image */}
        <Image
          src={imageData.hero.normal.src}
          alt={imageData.hero.normal.alt}
          width={imageData.hero.normal.width}
          height={imageData.hero.normal.height}
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
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
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
            effectivelyGhibli ? "opacity-100" : "opacity-0"
          }`}
          data-ai-hint={imageData.hero.ghibli.aiHint}
        />
      </div>
    </div>
  );
}
