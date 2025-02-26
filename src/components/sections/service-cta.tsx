"use client";

import Link from "next/link";
import ArrowButtonLink from "../ui/arrow-button";
import { motion } from "framer-motion";

interface ServiceCtaProps {
  title: string;
  description: string;
}

export default function ServiceCta({
  title,
  description,
}: ServiceCtaProps) {
  return (
    <section className="py-16 md:py-24 lg:py-32 xl:py-40 relative overflow-hidden">
      {/* Animated decorative elements with Framer Motion */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-blue-700/15 dark:bg-blue-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          y: [0, -15, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-64 h-64 bg-purple-700/15 dark:bg-purple-200/20 rounded-full blur-3xl"
        animate={{
          y: [0, -25, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Additional elements with more distinct positioning */}
      <motion.div
        className="absolute top-1/2 left-20 w-48 h-48 bg-pink-700/10 dark:bg-pink-200/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <motion.div
        className="absolute top-20 left-1/2 w-56 h-56 bg-indigo-700/10 dark:bg-indigo-200/15 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0]
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>

      {/* Content */}
      <div className="container relative mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-6 text-foreground">
            {title}
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 mx-auto max-w-2xl">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <ArrowButtonLink variant="inverse" href="/contact">LETS TALK</ArrowButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
