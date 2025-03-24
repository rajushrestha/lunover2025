"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GetInTouch() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative text-4xl md:text-5xl lg:text-6xl font-normal text-black block mb-8 leading-tight"
        >
          Take Your Business to the Next Level
        </motion.span>

        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="relative text-2xl md:text-3xl lg:text-4xl text-black/80 leading-relaxed"
          >
            We build digital experiences that drive real growth. Our websites
            don&apos;t just look great—they perform. Through strategic design,
            seamless user experiences, and data-driven optimization, we help
            your business attract more visitors, boost engagement, and convert
            leads into loyal customers.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
