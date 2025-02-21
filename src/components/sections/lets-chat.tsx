"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function LetsChat() {
  return (
    <section className="flex flex-col md:flex-row md:gap-10 items-center justify-between py-20 bg-black text-white">
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-medium mb-4">
          Let's Chat
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-2xl">
          Unleashing brand potential through creative design and innovation
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className=""
      >
        <Link
          href="/contact"
          className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors group flex items-center gap-2 text-lg sm:text-xl lg:text-2xl font-medium"
        >
          <span className="">Get in Touch</span>
          <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 xl:w-10 xl:h-10 group-hover:rotate-45 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}
