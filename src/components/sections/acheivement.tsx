"use client";

import { motion } from "framer-motion";

const acheivements = [
  {
    title: "10+ years experience",
    description:
      "With a decade of experience, we've honed our craft, delivering exceptional design solutions that stand the test of time.",
  },
  {
    title: "150+ completed projects",
    description:
      "With over 150 successful projects under our belt, we have a proven track record of turning ideas into remarkable designs.",
  },
  {
    title: "Exceptional Talent",
    description:
      "We're not just cost-optimized – we're precision artisans of the digital world. Our team delivers pixel-perfect designs and clean, efficient code that performs flawlessly across all devices. When it comes to quality, we never compromise.",
  },
  {
    title: "Ironclad Security",
    description:
      "When it comes to security, we make zero compromises. Every project includes rigorous security testing and follows industry best practices to protect your data and your users. We build digital fortresses, not just websites.",
  },
  {
    title: "30% cost reduction",
    description:
      "Our clients typically save 30% on their web development costs while getting better results. Who said you can't have your cake and eat it too? (Or should we say, have your website and spend less on it too?)",
  },
  {
    title: "45% average conversion increase",
    description:
      "Our strategic approach to web design and development has helped clients achieve an average 45% increase in conversion rates, directly impacting their bottom line.",
  },
];

export default function AchievementSection() {
  return (
    <section className="py-10 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-end mb-10 lg:mb-20">
          <div className="md:pb-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal">
              Our Achievements
            </h2>
          </div>
        </div>

        <div className="divide-y divide-border border-t">
          {acheivements.map((acheivement, index) => (
            <motion.div
              key={acheivement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col lg:flex-row w-full lg:items-center justify-between gap-2 sm:gap-4 group py-6 sm:py-10 md:py-16 lg:py-20 overflow-hidden"
            >
              <h3 className="text-2xl sm:text-3xl xl:text-4xl font-normal">
                {acheivement.title}
              </h3>
              <p className="text-lg sm:text-2xl md:text-2xl text-muted-foreground leading-relaxed lg:w-1/2">
                {acheivement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
