"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex items-center pb-10 sm:pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-[7vw] font-normal leading-[1.05] tracking-tight sm:-mx-2">
            Digital Agency Based in Kathmandu, Nepal.
          </h1>
          <p className="text-xl md:text-2xl lg:text-4xl xl:text-6xl max-w-6xl md:float-right pt-4">
            We're more than just a design agency - we're your creative partners.
            Let's collaborate to bring your vision to life with innovation,
            modern aesthetics, and a touch of friendly expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
