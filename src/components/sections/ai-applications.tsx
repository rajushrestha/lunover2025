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

const aiApplications = [
  {
    title: "RAG Chatbots",
    icon: <BrainCircuit className="w-10 h-10 md:w-14 md:h-14" />,
    description:
      "Our Retrieval-Augmented Generation chatbots transform how your business handles customer inquiries. By connecting AI with your knowledge base, these intelligent systems provide accurate, context-aware responses while significantly reducing response times and support costs.",
    benefits: [
      "24/7 customer support with 90% accurate responses",
      "Reduce support costs by up to 60%",
      "Increase visitor-to-lead conversion by 35%",
      "Seamless integration with your existing knowledge base",
    ],
  },
  {
    title: "AI Image Generation",
    icon: <ImageIcon className="w-10 h-10 md:w-14 md:h-14" />,
    description:
      "Drive engagement with custom AI-generated imagery tailored to your brand. Our AI image solutions create unique, on-brand visuals that capture attention, communicate your message effectively, and dramatically reduce content production costs and timelines.",
    benefits: [
      "Reduce image production costs by up to 80%",
      "Generate consistent on-brand visuals at scale",
      "Increase social media engagement by 42% with unique visuals",
      "Custom models trained on your brand guidelines",
    ],
  },
  {
    title: "Business Automations",
    icon: <Bot className="w-10 h-10 md:w-14 md:h-14" />,
    description:
      "Our AI-powered automation solutions eliminate repetitive tasks and streamline complex workflows, allowing your team to focus on high-value activities. These tailored systems work across departments to increase efficiency, accuracy, and ultimately, your bottom line.",
    benefits: [
      "Reduce operational costs by up to 50%",
      "Eliminate human error in routine processes",
      "Speed up workflow completion by 75%",
      "Scale operations without proportional cost increases",
    ],
  },
  {
    title: "Tailored AI Solutions",
    icon: <Sparkles className="w-10 h-10 md:w-14 md:h-14" />,
    description:
      "We develop custom AI solutions designed specifically for your unique business challenges. Whether you need predictive analytics, intelligent content recommendations, or specialized data processing, our team crafts AI systems that deliver measurable growth and competitive advantage.",
    benefits: [
      "Solution specifically designed for your business needs",
      "Gain actionable insights from your existing data",
      "Average ROI of 3.5x on custom AI implementations",
      "Continuous improvement with AI that learns from your business",
    ],
  },
];

export default function AIApplications() {
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
          {aiApplications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-16"
            >
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  {app.icon}
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium">
                    {app.title}
                  </h3>
                </div>
                <p className="text-xl lg:text-2xl mb-6">{app.description}</p>
                <ul className="space-y-3">
                  {app.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Layers className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-lg lg:text-xl">{benefit}</span>
                    </li>
                  ))}
                </ul>
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
