"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instrument_Sans } from "next/font/google";
import { ArrowRight } from "lucide-react";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  // Growth stats that highlight business results
  const stats = [
    { value: "156", label: "Traffic Increase", suffix: "%" },
    { value: "2.4", label: "Conversion Rate", suffix: "×" },
    { value: "43", label: "Cost Reduction", suffix: "%" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  return (
    <section className="min-h-[90vh] flex flex-col lg:flex-row items-stretch bg-white w-full max-w-[94rem] mx-auto">
      {/* Left content side */}
      <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-16 xl:p-20 flex flex-col justify-center 2xl:pl-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.h2
            variants={itemVariants}
            className={`text-lg md:text-xl text-neutral-500 font-medium ${instrumentSans.className}`}
          >
            Growth-Driven Digital Agency
          </motion.h2>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight"
          >
            <span className="inline-block text-neutral-900">
              Build Websites
            </span>{" "}
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500 font-bold">
              for Growth
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-neutral-700 max-w-xl"
          >
            We build websites that attract visitors, keep them engaged, and turn
            them into customers—driving measurable business results.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link
              href="/contact"
              className="bg-neutral-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-800 transition-all group flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="border-2 border-neutral-300 px-8 py-4 rounded-full text-lg font-medium hover:border-neutral-900 transition-all"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="grid grid-cols-3 gap-6 mt-16 border-t border-neutral-200 pt-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold flex items-baseline">
                {stat.value}
                <span className="text-xl ml-0.5">{stat.suffix}</span>
              </p>
              <p className="text-sm text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right visual side with floating elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 bg-neutral-100 relative overflow-hidden min-h-[50vh] lg:min-h-[90vh]"
      >
        {/* Main dashboard mockup - using gradient placeholder instead of image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 flex items-center justify-center p-6 md:p-12"
        >
          <div className="relative w-full max-w-2xl h-auto aspect-[16/10] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-neutral-100 to-neutral-200">
              {/* Dashboard UI elements */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-white border-b border-neutral-200 flex items-center px-4">
                <div className="w-24 h-4 bg-neutral-300 rounded-full"></div>
                <div className="ml-auto flex space-x-2">
                  <div className="w-8 h-8 bg-neutral-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-neutral-200 rounded-full"></div>
                </div>
              </div>

              <div className="absolute top-16 left-4 right-4 grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm h-24">
                  <div className="w-12 h-2 bg-blue-400 rounded-full mb-2"></div>
                  <div className="w-16 h-6 bg-neutral-800 rounded-sm"></div>
                  <div className="w-12 h-2 bg-neutral-300 rounded-full mt-2"></div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm h-24">
                  <div className="w-12 h-2 bg-green-400 rounded-full mb-2"></div>
                  <div className="w-16 h-6 bg-neutral-800 rounded-sm"></div>
                  <div className="w-12 h-2 bg-neutral-300 rounded-full mt-2"></div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm h-24">
                  <div className="w-12 h-2 bg-purple-400 rounded-full mb-2"></div>
                  <div className="w-16 h-6 bg-neutral-800 rounded-sm"></div>
                  <div className="w-12 h-2 bg-neutral-300 rounded-full mt-2"></div>
                </div>
              </div>

              <div className="absolute top-48 left-4 right-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-20 h-3 bg-neutral-300 rounded-full mb-4"></div>
                <div className="w-full h-32 bg-neutral-100 rounded-md flex items-end p-2">
                  <div className="w-[10%] h-[20%] bg-blue-400 rounded-sm"></div>
                  <div className="w-[10%] h-[40%] bg-blue-400 rounded-sm ml-2"></div>
                  <div className="w-[10%] h-[70%] bg-blue-400 rounded-sm ml-2"></div>
                  <div className="w-[10%] h-[50%] bg-blue-400 rounded-sm ml-2"></div>
                  <div className="w-[10%] h-[90%] bg-blue-400 rounded-sm ml-2"></div>
                  <div className="w-[10%] h-[60%] bg-blue-400 rounded-sm ml-2"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          initial={{ x: 50, y: -20, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-1/4 right-4 md:right-12 p-3 md:p-4 bg-white rounded-lg shadow-md max-w-[150px] md:max-w-[200px]"
        >
          <div className="h-1 w-10 bg-green-500 rounded-full mb-2"></div>
          <p className="text-xs md:text-sm font-medium">
            Traffic increased by 156% in 90 days
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -50, y: 20, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-1/4 left-4 md:left-12 p-3 md:p-4 bg-white rounded-lg shadow-md max-w-[150px] md:max-w-[200px]"
        >
          <div className="h-1 w-10 bg-blue-500 rounded-full mb-2"></div>
          <p className="text-xs md:text-sm font-medium">
            Conversion rate doubled after redesign
          </p>
        </motion.div>

        {/* Background shapes */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-neutral-200 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-neutral-200 rounded-full opacity-60 blur-3xl"></div>
      </motion.div>
    </section>
  );
}
