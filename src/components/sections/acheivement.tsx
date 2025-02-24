"use client";

import { motion } from "framer-motion";

const acheivements = [
  {
    title: "150+ completed projects",
    description:
      "With over 150 successful projects under our belt, we have a proven track record of turning ideas into remarkable designs.",
  },
  {
    title: "9 main team members",
    description:
      "Our core team of nine talented individuals is the creative force behind our agency, bringing diverse skills and expertise to every project.",
  },
  {
    title: "100+ creative freelancers",
    description:
      "We collaborate with a vast network of 100+ skilled freelancers, ensuring that every project benefits from a wealth of creative talent.",
  },
  {
    title: "10+ years experience",
    description:
      "With a decade of experience, we've honed our craft, delivering exceptional design solutions that stand the test of time.",
  },
  {
    title: "$10M+ revenue",
    description:
      "Our impact is far-reaching, having contributed to the generation of over $10 million in revenue for our clients.",
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
