"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BrainCircuit,
  Image as ImageIcon,
  Layers,
  Bot,
  Sparkles,
} from "lucide-react";
import { Service } from "@/lib/mdx-compiler";

// Accept services as props instead of hardcoding them
interface AIApplicationsProps {
  aiServices: Service[];
}

// Map icon names to Lucide components
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "brain-circuit":
      return <BrainCircuit className="w-10 h-10 md:w-14 md:h-14" />;
    case "image":
      return <ImageIcon className="w-10 h-10 md:w-14 md:h-14" />;
    case "bot":
      return <Bot className="w-10 h-10 md:w-14 md:h-14" />;
    case "sparkles":
      return <Sparkles className="w-10 h-10 md:w-14 md:h-14" />;
    default:
      return <Sparkles className="w-10 h-10 md:w-14 md:h-14" />;
  }
};

export default function AIApplications({ aiServices }: AIApplicationsProps) {
  // If no AI services provided, use fallback messaging
  if (!aiServices || aiServices.length === 0) {
    return (
      <section className="py-16 sm:py-24 md:py-36">
        <div className="container mx-auto px-4">
          <div className="mb-12 md:mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-6">
              AI Applications for Growth
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl">
              Our AI solutions are engineered for measurable business growth. Contact us to learn more about our advanced AI capabilities.
            </p>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 text-xl font-medium rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-colors duration-300 group"
            >
              <span>DISCUSS YOUR AI NEEDS</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 md:py-36">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-6">
            AI Applications for Growth
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl">
            Our AI solutions are engineered for measurable business growth. We
            implement cutting-edge artificial intelligence technologies that
            drive traffic, deepen engagement, and boost conversions while
            reducing operational costs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:gap-16 lg:gap-24">
          {aiServices.map((app, index) => (
            <motion.div
              key={app.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-16"
            >
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  {getIconComponent(app.icon)}
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium">
                    {app.title}
                  </h3>
                </div>
                <p className="text-xl lg:text-2xl mb-6">{app.description}</p>
                <ul className="space-y-3">
                  {app.benefits?.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Layers className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-lg lg:text-xl">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    href={`/services/${app.slug}`}
                    className="inline-flex items-center text-lg font-medium hover:underline"
                  >
                    <span>Learn more</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="ml-1 transition-transform group-hover:translate-x-1"
                    >
                      <path
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 h-64 md:h-80 lg:h-auto bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-500 text-lg">
                  AI Solution Visualization
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 text-xl font-medium rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-colors duration-300 group"
          >
            <span>DISCUSS YOUR AI NEEDS</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
