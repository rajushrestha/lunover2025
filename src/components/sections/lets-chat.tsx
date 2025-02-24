"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ArrowUpRight from "../icons/arrow-up-right";

export default function LetsChat() {
  return (
    <section className="flex flex-col md:flex-row md:gap-10 items-center justify-between py-8 md:py-16 lg:py-24 xl:py-32 border-b border-border/40 dark:border-border">
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium mb-4">
          Let's Chat
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-2xl">
          Unleashing brand potential through creative design and innovation
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full md:w-auto flex md:justify-end"
      >
        <Link
          href="/contact"
          className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors group items-center gap-2 text-lg sm:text-xl lg:text-2xl font-medium inline-flex flex-shrink-0"
        >
          <span className="">Get in Touch</span>
          <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10 group-hover:rotate-45 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}
