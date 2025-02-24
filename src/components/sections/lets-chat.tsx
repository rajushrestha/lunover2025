"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ArrowUpRight from "../icons/arrow-up-right";

export default function LetsChat() {
  return (
    <section className="flex flex-col md:flex-row md:gap-10 xl:gap-20 items-center justify-between py-8 md:py-16 lg:py-24 xl:py-32 border-b border-border/40 dark:border-border">
      <div className="mb-12 max-w-5xl">
        <h2 className="text-5xl sm:text-6xl md:text-[7vw] font-normal leading-[1.05] tracking-tight sm:-mx-2 mb-4">
          Let{"'"}s talk today, and turn your ideas into digital masterpieces.
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full md:w-auto flex md:justify-end flex-shrink-0"
      >
        <Link
          href="/contact"
          className="px-8 py-5 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full bg-white text-black hover:bg-gray-100 transition-colors group items-center text-xl md:text-4xl lg:text-5xl xl:text-6xl text-center tracking-wider font-bold uppercase inline-flex flex-shrink-0 relative"
        >
          <span>Get in Touch</span>
          <motion.div className="md:absolute md:left-1/2 md:bottom-6 xl:bottom-6 2xl:bottom-10 ml-2 md:-ml-6 lg:-ml-8 xl:-ml-12 md:opacity-0 md:translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-45 transition-all duration-300">
            <ArrowUpRight className="w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
