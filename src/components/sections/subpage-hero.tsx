"use client";

import { motion } from "framer-motion";
import { useRef, useMemo } from "react";

// Create deterministic particle positions using a seed
const generateParticles = (count: number) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    const seed = i * 7919;
    particles.push({
      left: `${seed % 100}%`,
      top: `${(seed * 7919) % 100}%`,
      duration: 3 + (seed % 2),
      delay: seed % 2,
    });
  }
  return particles;
};

interface SubpageHeroProps {
  title: string;
  description?: string;
  background?: string;
}

export default function SubpageHero({
  title,
  description,
  background,
}: SubpageHeroProps) {
  const containerRef = useRef<HTMLElement>(null);

  // Memoize particles to prevent recalculation on every render
  const particles = useMemo(() => generateParticles(15), []); // Further reduced particles

  return (
    <motion.section
      ref={containerRef}
      className={`relative h-[50vh] min-h-[32rem] flex items-end overflow-hidden ${
        background || "bg-[#0A0A0F]"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs - using a single container with multiple backgrounds */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-[rgba(255,77,77,0.3)] via-[rgba(255,0,140,0.3)] to-[rgba(109,40,217,0.3)] animate-float-slow" />
          <div
            className="absolute inset-0 bg-gradient-radial from-[rgba(0,245,160,0.3)] via-[rgba(0,217,245,0.3)] to-[rgba(59,130,246,0.3)] animate-float-slow"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Dynamic particles - using a single container with multiple pseudo-elements */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/5 animate-pulse-slow"
              style={{
                left: particle.left,
                top: particle.top,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 pb-16 md:pb-24">
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          {/* Main Heading */}
          <motion.h1
            className="text-[clamp(2rem,8vw,5rem)]/[1.15] font-bold bg-gradient-to-r from-[#FF4D4D] via-[#FFC837] to-[#00F5A0] bg-clip-text text-transparent tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              className="text-lg sm:text-xl text-white/60 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4,
              }}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </motion.section>
  );
}
