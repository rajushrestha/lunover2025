"use client";

import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

// Create deterministic particle positions using a seed
const generateParticles = (count: number) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    // Use a deterministic seed based on index
    const seed = i * 7919; // Using a prime number for better distribution
    particles.push({
      left: `${seed % 100}%`,
      top: `${(seed * 7919) % 100}%`,
      duration: 3 + (seed % 2),
      delay: seed % 2,
    });
  }
  return particles;
};

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  const particles = generateParticles(50);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      className="relative flex-col h-screen max-h-[45rem] min-h-min pt-[4rem] sm:pt-[6rem] md:pt-[8rem] lg:pt-[10rem] md:max-h-[1200px] flex items-center justify-center overflow-hidden bg-[#0A0A0F]"
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
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.5, 0.1],
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
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[20rem] sm:w-[30rem] md:w-[40rem] h-[20rem] sm:h-[30rem] md:h-[40rem] rounded-full mix-blend-screen filter blur-[60px] sm:blur-[90px] md:blur-[120px]"
            style={{
              background: [
                "radial-gradient(circle, rgba(255,77,77,0.7) 0%, rgba(255,0,140,0.7) 50%, rgba(109,40,217,0.7) 100%)",
                "radial-gradient(circle, rgba(0,245,160,0.7) 0%, rgba(0,217,245,0.7) 50%, rgba(59,130,246,0.7) 100%)",
                "radial-gradient(circle, rgba(255,200,55,0.7) 0%, rgba(255,128,8,0.7) 50%, rgba(255,77,77,0.7) 100%)",
              ][i],
              left: `${20 + i * 25}%`,
              top: `${10 + i * 20}%`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 pb-20 mt-auto">
        <div className="max-w-[90rem] mx-auto">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Main Heading */}
            <motion.h1
              className="text-[clamp(2.5rem,10vw,12rem)] font-bold bg-gradient-to-r from-[#FF4D4D] via-[#FFC837] to-[#00F5A0] bg-clip-text text-transparent tracking-tight leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
            >
              DIGITAL
              <br />
              EXCELLENCE
            </motion.h1>

            {/* Description and CTA */}
            <motion.div
              className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.6,
              }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
                We craft extraordinary digital experiences that push boundaries
                and redefine what&apos;s possible.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/contact"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 text-white text-base sm:text-lg rounded-full overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FF4D4D] via-[#FFC837] to-[#00F5A0]"
                    animate={{
                      backgroundPosition: isHovered ? ["0%", "200%"] : "0%",
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute inset-[2px] bg-[#0A0A0F] rounded-full"
                    animate={{
                      opacity: isHovered ? 0.8 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                    Start Creating
                    <motion.svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      animate={{ rotate: isHovered ? 45 : 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <path
                        d="M5 5L19 19M19 19V5M19 19H5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </span>
                </Link>

                <a
                  href="#work"
                  className="text-white/60 hover:text-white transition-colors duration-300 text-base sm:text-lg flex items-center gap-2"
                >
                  View Our Work
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
