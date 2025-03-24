"use client";

import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";

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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const particles = generateParticles(30); // Fewer particles for subpages

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  return (
    <motion.section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative h-[50vh] min-h-[32rem] flex items-end overflow-hidden ${
        background || "bg-[#0A0A0F]"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/10"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient orbs */}
        {Array.from({ length: 2 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[15rem] sm:w-[20rem] md:w-[25rem] h-[15rem] sm:h-[20rem] md:h-[25rem] rounded-full mix-blend-screen filter blur-[40px] sm:blur-[60px] md:blur-[80px]"
            style={{
              background: [
                "radial-gradient(circle, rgba(255,77,77,0.5) 0%, rgba(255,0,140,0.5) 50%, rgba(109,40,217,0.5) 100%)",
                "radial-gradient(circle, rgba(0,245,160,0.5) 0%, rgba(0,217,245,0.5) 50%, rgba(59,130,246,0.5) 100%)",
              ][i],
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
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
