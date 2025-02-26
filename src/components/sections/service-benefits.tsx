"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

interface ServiceBenefitsProps {
  benefits: string[];
}

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="space-y-4">
        {benefits.map((benefit, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg md:text-xl">{benefit}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
