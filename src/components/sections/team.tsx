"use client";

import { cn } from "@/lib/utils";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useCallback, useEffect } from "react";

export default function TeamSection() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    containerWidth: 0,
    translateDistance: 0,
  });
  const teamMembers = [
    {
      name: "Raju Shrestha",
      image: "/images/team/team-member-1.png",
      designation: "Founder",
    },
    {
      name: "Rajan Shrestha",
      image: "/images/team/team-member-1.png",
      designation: "CTO",
    },
    {
      name: "Prabin Koirala",
      image: "/images/team/team-member-1.png",
      designation: "CFO",
    },
    {
      name: "Krishna B. Chand",
      image: "/images/team/team-member-1.png",
      designation: "Team Lead",
    },
    {
      name: "Ritesh Shrestha",
      image: "/images/team/team-member-1.png",
      designation: "Senior Developer",
    },
    {
      name: "Ronash Dhakal",
      image: "/images/team/team-member-1.png",
      designation: "Senior Developer",
    },
    {
      name: "Ajay Khadka",
      image: "/images/team/team-member-1.png",
      designation: "Production Manager",
    },
    {
      name: "Sarfraz Hussen",
      image: "/images/team/team-member-1.png",
      designation: "Editor In Chief",
    },
  ];

  // Calculate dimensions based on current window size
  const updateDimensions = useCallback(() => {
    // Get responsive item width based on window width
    const getItemWidth = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 768) return 360; // md
      if (windowWidth >= 640) return 320; // sm
      return 280; // default
    };

    const itemWidth = typeof window !== "undefined" ? getItemWidth() : 280;
    const gapWidth = window.innerWidth >= 768 ? 32 : 16; // md:gap-8 or gap-4
    const containerPadding = 32;
    const maxContainerWidth = 1280;

    const totalWidth =
      teamMembers.length * itemWidth + (teamMembers.length - 1) * gapWidth;

    const currentContainerWidth =
      typeof window !== "undefined"
        ? Math.min(window.innerWidth - containerPadding * 2, maxContainerWidth)
        : 0;

    setDimensions({
      containerWidth: currentContainerWidth,
      translateDistance: Math.max(0, totalWidth - currentContainerWidth),
    });
  }, [teamMembers.length]);

  // Initialize and handle resize
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 128px", "end start"],
  });

  const overflow = useTransform(
    scrollYProgress,
    [0, 0.01, 0.9, 0.95], // Adjusted timing to spread over more scroll distance
    ["hidden", "visible", "visible", "clip"]
  );

  const translateX = useTransform(
    scrollYProgress,
    [0, 0.85], // Adjusted to complete translation later in the scroll
    [0, -dimensions.translateDistance]
  );

  // Add animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={containerRef}
      style={{ overflow }}
      className="relative py-10 md:py-16 lg:py-24"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-128px" }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight sm:-mx-2"
        >
          Our Squad
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-6 sm:py-8 md:py-10 lg:py-12"
        >
          <p className="text-2xl leading-normal lg:text-3xl/normal xl:text-4xl/normal font-normal tracking-tight max-w-3xl">
            Our team is a group of talented and passionate individuals who are
            dedicated to providing the best possible services to our clients.
          </p>
        </motion.div>

        <div ref={scrollRef} className="min-h-[400vh]">
          <motion.div className="sticky top-32">
            <motion.div
              className="flex flex-row flex-nowrap w-auto gap-4 md:gap-8"
              style={{ translateX: useTransform(translateX, (x) => `${x}px`) }}
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  className="w-full min-w-[280px] max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-[3/4] flex flex-col flex-shrink-0"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={384}
                      height={512}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-4">
                    <h3 className="text-2xl xl:text-3xl mb-1 font-medium">
                      {member.name}
                    </h3>
                    <p className="text-lg xl:text-2xl text-muted-foreground">
                      {member.designation}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 gap-4"
        >
          <span className="text-3xl sm:text-4xl md:text-5xl font-semibold inline-flex">
            Are you our next squad member?
          </span>
          <Link
            href="/careers"
            className="text-xl sm:text-2xl xl:text-3xl uppercase underline underline-offset-8 hover:no-underline"
          >
            See Open Positions
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
