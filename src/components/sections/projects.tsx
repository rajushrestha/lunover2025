"use client";

import { cn } from "@/lib/utils";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const projects = [
  {
    title: "Arkoevent",
    description: "Event management platform for event planners and organizers.",
    image: "/arkoevent-image.jpg",
    logo: "/arkoevent-logo.svg",
    tags: ["Event Management", "UX/UI Design", "Web App Development"],
  },
  {
    title: "Prebook App",
    description: "Modern scheduling app for modern businesses",
    image: "/prebook-image.jpg",
    logo: "/prebook-logo.svg",
    tags: ["Scheduling", "UX/UI Design", "Web App Development"],
  },
  {
    title: "LeadQuizzes",
    description: "Online Quiz Maker for Marketers and Small Businesses",
    image: "/leadquizzes-image.jpg",
    logo: "/leadquizzes-logo.svg",
    tags: ["Lead Generation", "Web App Development"],
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100 * (projects.length - 1)]
  );

  return (
    <section ref={containerRef} className={cn("relative", `h-[300vh]`)}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="h-full flex flex-row flex-nowrap w-auto"
          style={{ translateX: useTransform(translateX, (x) => `${x}vw`) }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="h-full w-[75vw] flex-shrink-0 flex items-end relative"
            >
              <div className="absolute top-0 left-0 w-full h-full z-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
                {/* Add a gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
              </div>

              <div className="relative z-10 p-8 sm:p-16 md:p-24 text-white">
                <h3 className="text-4xl md:text-6xl font-normal mb-4">{project.title}</h3>
                <p className="mb-8 text-lg sm:text-2xl max-w-lg">{project.description}</p>

                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2 bg-white/10 rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          <div className="h-full w-[75vw] text-center flex-shrink-0 flex flex-col items-center justify-center relative p-8 sm:p-16 bg-foreground text-background dark:bg-background dark:text-foreground">
            <span className="text-4xl sm:text-6xl md:text-8xl font-semibold mb-10">Want to see more?</span>
            <Link
              href="/projects"
              className="text-lg sm:text-2xl font-medium uppercase underline underline-offset-8 hover:no-underline"
            >
              See All Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
