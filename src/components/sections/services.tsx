"use client";

import { motion } from "framer-motion";
import ArrowButtonLink from "../ui/arrow-button";

const services = [
  {
    title: "Web Design & Development",
    description:
      "We create high-performance websites that drive business growth. Our end-to-end approach delivers visually stunning, technically excellent sites that attract visitors, boost engagement, and maximize conversions.",
  },
  {
    title: "AI Solutions",
    description:
      "Our advanced AI applications drive measurable growth through intelligent automation and enhanced customer experiences. From RAG chatbots to custom image generation, we implement AI that increases engagement while reducing costs.",
  },
  {
    title: "Branding & Identity",
    description:
      "We build brands engineered for growth. Our strategic branding connects with your target audience, differentiates you from competitors, and creates the foundation for increased traffic, engagement, and customer loyalty.",
  },
  {
    title: "SEO & Content Strategy",
    description:
      "We implement data-driven SEO and content strategies that increase your visibility, drive targeted traffic, and boost conversions. Our approach focuses on sustainable growth and measurable business results.",
  },
  {
    title: "Custom Application Development",
    description:
      "Our apps are built for user retention and business growth. From concept to launch, we develop mobile and web applications that keep users engaged, maximize conversions, and provide measurable ROI for your business.",
  },
  {
    title: "Team as a Service (TaaS)",
    description:
      "We provide dedicated teams focused on growing your business through increased traffic, engagement, and sales. Our specialists work as an extension of your organization with clear growth objectives.",
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-24 md:py-36">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-end mb-10">
          <div className="pb-4 md:pb-10 lg:pr-20 lg:pb-0">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-normal mb-4">
              Our Services
            </h2>
            <p className="mb-0 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              We provide growth-focused digital solutions that transform your
              online presence. Each service is strategically designed to attract
              visitors, increase engagement, and boost conversions—turning your
              website into a powerful business growth engine.
            </p>
          </div>
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
              <p className="text-lg sm:text-2xl md:text-2xl lg:text-3xl/normal text-muted-foreground leading-relaxed lg:w-1/2">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <ArrowButtonLink href="/services" variant="inverse">
            EXPLORE ALL SERVICES
          </ArrowButtonLink>
        </div>
      </div>
    </section>
  );
}
