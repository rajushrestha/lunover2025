"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useMemo, useCallback } from "react";

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
      size: 1 + (seed % 2),
    });
  }
  return particles;
};

// Memoize the particle component to prevent unnecessary re-renders
const Particle = ({
  particle,
}: {
  particle: ReturnType<typeof generateParticles>[0];
}) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{
      left: particle.left,
      top: particle.top,
      width: particle.size,
      height: particle.size,
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
);

// Memoize the gradient orb component
const GradientOrb = ({ index }: { index: number }) => (
  <motion.div
    className="absolute w-[20rem] sm:w-[30rem] md:w-[40rem] h-[20rem] sm:h-[30rem] md:h-[40rem] rounded-full mix-blend-screen filter blur-[60px] sm:blur-[90px] md:blur-[120px]"
    style={{
      background: [
        "radial-gradient(circle, rgba(255,77,77,0.7) 0%, rgba(255,0,140,0.7) 50%, rgba(109,40,217,0.7) 100%)",
        "radial-gradient(circle, rgba(0,245,160,0.7) 0%, rgba(0,217,245,0.7) 50%, rgba(59,130,246,0.7) 100%)",
        "radial-gradient(circle, rgba(255,200,55,0.7) 0%, rgba(255,128,8,0.7) 50%, rgba(255,77,77,0.7) 100%)",
      ][index],
      left: `${20 + index * 25}%`,
      top: `${10 + index * 20}%`,
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
      delay: index * 2,
    }}
  />
);

interface SubpageHeroProps {
  title: string;
  description?: string;
  background?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function SubpageHero({
  title,
  description,
  background,
  breadcrumb,
}: SubpageHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Memoize particles to prevent recalculation on every render
  const particles = useMemo(() => generateParticles(15), []);

  // Calculate mouse position relative to container
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);
      }
    },
    [mouseX, mouseY]
  );

  // Calculate gradient position based on mouse movement
  const gradientX = useTransform(mouseX, [0, window.innerWidth], [0, 100]);
  const gradientY = useTransform(mouseY, [0, window.innerHeight], [0, 100]);

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
          <Particle key={i} particle={particle} />
        ))}

        {/* Gradient orbs */}
        {Array.from({ length: 3 }).map((_, i) => (
          <GradientOrb key={i} index={i} />
        ))}

        {/* Mouse-following gradient */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[100px] opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
            x: gradientX,
            y: gradientY,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 pb-16 md:pb-24">
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          {/* Breadcrumb */}
          {breadcrumb && (
            <motion.div
              className="flex items-center gap-2 text-sm text-white/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
            >
              {breadcrumb.map((item, index) => (
                <div key={item.href} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </motion.div>
          )}

          {/* Main Heading */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          >
            <motion.h1
              className="text-[clamp(2rem,8vw,5rem)]/[1.15] font-bold bg-gradient-to-r from-[#FF4D4D] via-[#FFC837] to-[#00F5A0] bg-clip-text text-transparent tracking-tight"
              animate={{
                backgroundPosition: ["0%", "200%", "0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {title}
            </motion.h1>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-[#FF4D4D]/10 via-[#FFC837]/10 to-[#00F5A0]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>

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
