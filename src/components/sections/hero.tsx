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
          <h1
            className={`text-4xl sm:text-6xl md:text-[7vw] font-normal leading-tight tracking-tight sm:-mx-2 xl:text-[7rem] `}
          >
            Build Websites for Growth—Traffic, Engagement & Sales.
          </h1>
          <p className="text-xl md:mt-4 md:text-2xl lg:text-4xl xl:text-6xl max-w-6xl md:float-right pt-4">
            We build websites that attract visitors, keep them engaged, and turn
            them into customers. With modern design, seamless user experience,
            and SEO-driven strategies, we help your business grow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
