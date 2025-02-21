"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Product Design",
    description:
      "Our product design services will turn your ideas into reality. We combine user research, interface design, and prototyping to create products that users love.",
  },
  {
    title: "Graphic Design",
    description:
      "From brand identity to marketing materials, our graphic design team creates visually stunning assets that capture attention and communicate effectively.",
  },
  {
    title: "Branding",
    description:
      "We help you build a strong, memorable brand identity that resonates with your audience and stands out in today's competitive market.",
  },
  {
    title: "Illustration",
    description:
      "Our custom illustrations bring your stories and concepts to life, adding a unique and personal touch to your digital presence.",
  },
  {
    title: "Web Development",
    description:
      "We build modern, responsive websites that not only look great but also perform exceptionally well across all devices.",
  },
  {
    title: "App Development",
    description:
      "From concept to launch, we develop native and cross-platform mobile applications that provide seamless user experiences.",
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-24 md:py-36">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-end mb-10">
          <div className="pb-4 md:pb-10 lg:pr-20 lg:pb-0">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-normal mb-4">Our Services</h2>
            <p className="mb-0 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Our services are more than just solutions, they're opportunities
              to transform your digital presence and achieve your business
              objectives. We're here to make your digital dreams a reality.
            </p>
          </div>

          <Link
            href="/services"
            className="text-lg sm:text-2xl font-medium inline-flex flex-shrink-0 uppercase underline underline-offset-8 hover:no-underline"
          >
            See All Services
          </Link>
        </div>

        <div className="divide-y divide-border">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col lg:flex-row w-full lg:items-center justify-between gap-2 sm:gap-4 group py-6 sm:py-10 md:py-16 lg:py-24 overflow-hidden"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal">
                {service.title}
              </h3>
              <p className="text-lg sm:text-2xl md:text-2xl text-muted-foreground leading-relaxed lg:w-1/2">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
