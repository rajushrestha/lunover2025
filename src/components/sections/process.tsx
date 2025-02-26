"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  PenTool,
  Code,
  Zap,
  Rocket
} from "lucide-react";

// Process step data
const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We begin with a deep dive into your business objectives, target audience, and current challenges. This enables us to create a tailored strategy that aligns with your growth goals.",
    icon: <Search className="w-8 h-8 md:w-10 md:h-10" />,
    color: "from-blue-500 to-indigo-600"
  },
  {
    number: "02",
    title: "Planning & Design",
    description: "We create detailed project roadmaps and design frameworks based on data-driven insights. Every aspect is crafted with your target audience and business objectives in mind.",
    icon: <PenTool className="w-8 h-8 md:w-10 md:h-10" />,
    color: "from-indigo-600 to-purple-700"
  },
  {
    number: "03",
    title: "Development & Implementation",
    description: "Our expert team builds your solution using industry best practices and cutting-edge technologies. We implement with precision while maintaining constant communication throughout.",
    icon: <Code className="w-8 h-8 md:w-10 md:h-10" />,
    color: "from-purple-700 to-pink-600"
  },
  {
    number: "04",
    title: "Testing & Optimization",
    description: "We rigorously test all deliverables to ensure flawless performance and optimal user experience. Data-driven optimization ensures maximum effectiveness and ROI.",
    icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />,
    color: "from-pink-600 to-red-500"
  },
  {
    number: "05",
    title: "Launch & Ongoing Support",
    description: "We ensure a smooth deployment and provide comprehensive training and documentation. Our relationship continues with dedicated support and performance monitoring to drive continuous improvement.",
    icon: <Rocket className="w-8 h-8 md:w-10 md:h-10" />,
    color: "from-red-500 to-orange-500"
  }
];

type ProcessStepProps = {
  step: typeof processSteps[number];
  index: number;
};

const ProcessStep = ({ step, index }: ProcessStepProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative mb-8 md:mb-0"
    >
      {/* Connector line */}
      {index < processSteps.length - 1 && (
        <div className="hidden md:block absolute left-12 top-24 w-1 h-[calc(100%-4rem)] bg-gradient-to-b bg-gray-200 dark:bg-gray-800" />
      )}

      <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-start">
        {/* Step number and icon */}
        <div className="flex-shrink-0 relative z-10">
          <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
            {step.icon}
          </div>
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border-2 border-foreground flex items-center justify-center font-mono font-bold">
            {step.number.split('')[1]}
          </div>
        </div>

        {/* Step content */}
        <div className="md:pt-4">
          <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold mb-3">
            {step.title}
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-20 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium mb-6">
            Our Service Delivery Process
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            We follow a structured methodology to ensure exceptional results and client satisfaction.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="md:px-10 space-y-12 md:space-y-20">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
