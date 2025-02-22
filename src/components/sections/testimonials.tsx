"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-xl sm:text-2xl/tight md:text-3xl/tight lg:text-4xl/tight xl:text-5xl/tight mb-8 md:mb-12">
            I had the pleasure of working with Ivan on a recent project, and I
            was blown away by their creativity and attention to detail. I highly
            recommend Lunover for anyone looking for a talented and professional
            designer.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300" />
            <div className="text-center flex flex-col sm:flex-row items-center text-lg sm:text-xl md:text-2xl lg:text-3xl sm:gap-2">
              <span className="font-medium">
                Mikael Svensson<span className="hidden sm:inline">,</span>
              </span>
              <span className="text-muted-foreground">
                Founder at Pigment AB
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
