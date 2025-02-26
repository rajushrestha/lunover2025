"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

// Define testimonial types
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

// Default testimonials
const defaultTestimonials: Testimonial[] = [
  {
    quote: "The team at Lunover transformed our digital presence completely. Their approach was methodical, creative, and highly effective.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechWave Solutions"
  },
  {
    quote: "What impressed me most was their attention to detail and commitment to understanding our business needs before suggesting solutions.",
    author: "Michael Chen",
    role: "CEO",
    company: "Innovate Labs"
  },
  {
    quote: "The ROI we've seen from our partnership with Lunover has exceeded our expectations. Their strategic approach has delivered measurable results.",
    author: "Jessica Rivera",
    role: "Operations Manager",
    company: "Global Retail Group"
  }
];

// Service-specific testimonials mapping
const serviceTestimonials: Record<string, Testimonial[]> = {
  "rag-chatbots": [
    {
      quote: "Since implementing Lunover's RAG chatbot, our customer support team has reduced response times by 78% while maintaining a 92% satisfaction rating.",
      author: "Thomas Wright",
      role: "Customer Experience Director",
      company: "EcommerceElite"
    },
    {
      quote: "The chatbot's ability to pull accurate information from our knowledge base is remarkable. It's like giving every customer their own personal support specialist.",
      author: "Anita Patel",
      role: "CTO",
      company: "TechSolve Inc."
    }
  ],
  "ai-image-generation": [
    {
      quote: "Lunover's AI image generation has revolutionized our content creation process. We're producing 5x more visual content at a fraction of our previous costs.",
      author: "Daniel Garcia",
      role: "Creative Director",
      company: "BrandForward Agency"
    },
    {
      quote: "The consistency and quality of the AI-generated images have significantly improved our brand presence across all channels.",
      author: "Laura Thompson",
      role: "Social Media Manager",
      company: "Fashion Forward"
    }
  ]
  // Add more services as needed
};

export default function ServiceTestimonials({ serviceSlug }: { serviceSlug: string }) {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Get service-specific testimonials or use defaults
  const testimonials = serviceTestimonials[serviceSlug] || defaultTestimonials;

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, testimonials.length]);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    pauseAutoplay();
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    pauseAutoplay();
  };

  const handleDotClick = (index: number) => {
    setCurrent(index);
    pauseAutoplay();
  };

  const pauseAutoplay = () => {
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  return (
    <section className="py-24 md:py-32 bg-secondary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
            Client Success Stories
          </h2>

          <div className="bg-background rounded-3xl shadow-xl overflow-hidden border border-border/50">
            <div className="relative p-8 md:p-12">
              {/* Testimonial content */}
              <div className="relative min-h-[16rem] md:min-h-[14rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center">
                          <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                        </div>
                      </div>

                      <div>
                        <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                          "{testimonials[current].quote}"
                        </blockquote>

                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold mr-4">
                            {testimonials[current].author.charAt(0)}
                          </div>

                          <div>
                            <p className="font-bold">{testimonials[current].author}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonials[current].role}, {testimonials[current].company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation controls */}
              <div className="flex justify-between items-center mt-8 border-t border-border/50 pt-6">
                {/* Dots navigation */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        current === index
                          ? "bg-primary"
                          : "bg-primary/30 hover:bg-primary/50"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Prev/Next buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={goToPrevious}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={goToNext}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
