"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Define interface for FAQ item structure
interface FaqItem {
  question: string;
  answer: string;
}

// Default FAQs that can be overridden by service-specific FAQs
const defaultFaqs: FaqItem[] = [
  {
    question: "How long does the typical project take?",
    answer: "Project timelines vary based on complexity and scope. A simple implementation might take 4-6 weeks, while more complex projects can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed project rates, hourly billing, and retainer options. Our pricing is transparent and competitive, reflecting the expertise and value we deliver. Contact us for a customized quote based on your specific requirements.",
  },
  {
    question: "How do you ensure quality?",
    answer: "Quality is built into our entire process. We use a combination of automated testing, code reviews, and rigorous QA procedures. We also implement continuous integration and delivery practices to catch issues early and maintain high standards throughout development.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. This includes regular updates, security patches, performance monitoring, and technical support. We can tailor a support plan to match your specific needs.",
  },
  {
    question: "How do we get started?",
    answer: "The process begins with an initial consultation where we discuss your goals, requirements, and timeline. After that, we'll provide a detailed proposal outlining scope, deliverables, timeline, and pricing. Once approved, we'll assemble the right team and begin the discovery phase.",
  },
];

// Service-specific FAQs mapping
const serviceFaqs: Record<string, FaqItem[]> = {
  "rag-chatbots": [
    {
      question: "How accurate are your RAG chatbots?",
      answer: "Our RAG chatbots typically achieve 90-95% accuracy in providing relevant and contextual responses. The accuracy depends on the quality of your knowledge base and the specificity of customer queries. We continuously monitor and improve performance over time.",
    },
    {
      question: "Can the chatbot integrate with our existing systems?",
      answer: "Yes, our RAG chatbots can integrate with most CRM systems, knowledge bases, ticketing systems, and communication platforms through APIs. We'll perform a technical assessment to ensure seamless integration with your specific infrastructure.",
    },
    {
      question: "How long does it take to implement a RAG chatbot?",
      answer: "A typical RAG chatbot implementation takes 6-8 weeks from start to finish. This includes knowledge base analysis, model training, integration, testing, and deployment. More complex implementations may take longer depending on specific requirements.",
    },
    // Add more service-specific FAQs
  ],
  "ai-image-generation": [
    {
      question: "How do you ensure generated images match our brand identity?",
      answer: "We train custom models specifically on your brand guidelines, existing imagery, and style references. This ensures all generated content maintains consistent brand identity. We also implement feedback loops for continuous refinement of the output.",
    },
    {
      question: "What image formats and resolutions do you support?",
      answer: "Our AI image generation system supports all standard formats including JPG, PNG, WebP, and SVG. We can generate images at various resolutions up to 4K, optimized for different use cases from social media posts to large-format printing.",
    },
    {
      question: "Do we own the copyright to AI-generated images?",
      answer: "Yes, all images generated as part of our service belong to you. We provide full usage rights for commercial purposes with no additional licensing fees. Our agreement clearly outlines ownership of all generated content.",
    },
    // Add more service-specific FAQs
  ],
  // Add more services
};

export default function ServiceFaqSection({ serviceSlug }: { serviceSlug: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Select service-specific FAQs or use defaults
  const faqs: FaqItem[] = serviceFaqs[serviceSlug] || defaultFaqs;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_top_right,rgba(var(--secondary),0.03),transparent_80%)]"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_bottom_left,rgba(var(--secondary),0.03),transparent_80%)]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Get answers to common questions about our {serviceSlug.replace('-', ' ')} services
            </p>
          </div>

          {/* Single unified FAQ box */}
          <motion.div
            className="bg-background rounded-xl overflow-hidden shadow-lg border border-border/50"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {faqs.map((faq: FaqItem, index: number) => (
              <div
                key={index}
                className={`${index !== 0 ? 'border-t border-border/50' : ''}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-6 text-left hover:bg-secondary/5 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg md:text-xl font-medium pr-4">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    openIndex === index ? "bg-primary/10" : "bg-secondary/50"
                  }`}>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openIndex === index ? "transform rotate-180 text-primary" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Have more questions? <a href="/contact" className="text-primary font-medium hover:underline">Contact our team</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
