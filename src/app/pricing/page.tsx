"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  DollarSign,
  Infinity as InfinityIcon,
  Zap,
  Globe,
  Shield,
  FileText,
  CreditCard,
  Send,
  Package,
  LifeBuoy,
  Check,
  Star,
} from "lucide-react";
import ArrowButtonLink from "@/components/ui/arrow-button";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import PricingServicesContent from "@/components/sections/pricing-services-content";
import SubpageHero from "@/components/sections/subpage-hero";

export default function PricingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Our process steps data
  const processSteps = [
    {
      title: "Subscribe",
      description:
        "Choose a plan that fits your needs and business goals. Our flexible membership options make it easy to get started with the right level of support.",
      number: "01",
      icon: "CreditCard",
    },
    {
      title: "Send Request",
      description:
        "Submit your design or development requests through our intuitive platform. Detail your requirements, and we'll get started right away.",
      number: "02",
      icon: "Send",
    },
    {
      title: "Delivered Service",
      description:
        "Receive high-quality deliverables on time, every time. We maintain clear communication throughout the process to ensure your satisfaction.",
      number: "03",
      icon: "Package",
    },
    {
      title: "Ongoing Support",
      description:
        "Get continuous updates and improvements with dedicated support. We're committed to your long-term success and growth.",
      number: "04",
      icon: "LifeBuoy",
    },
  ];

  // Updated process section implementation
  const processRef = useRef<HTMLDivElement>(null);
  const processSectionRef = useRef<HTMLElement>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isSectionSticky, setIsSectionSticky] = useState(false);
  const totalSteps = processSteps.length;

  // Check if process section is in view
  const isProcessInView = useInView(processRef, {
    amount: 0.4,
    once: false,
  });

  // Handle scroll events for the rotation effect
  //   useEffect(() => {
  //     if (!processRef.current || !processSectionRef.current) return;

  //     const handleScroll = () => {
  //       // Skip if already in scrolling cooldown
  //       if (isScrolling) return;

  //       // Recalculate section position on each scroll
  //       const processSection = processSectionRef.current;
  //       if (!processSection) return;
  //       const sectionRect = processSection.getBoundingClientRect();

  //       // Determine if we should activate sticky mode
  //       const shouldBeSticky =
  //         sectionRect.top == 0 && // Section is at or near the top
  //         sectionRect.bottom >= window.innerHeight; // Section still extends past viewport

  //       setIsSectionSticky(!!shouldBeSticky);
  //     };

  //     const throttledScroll = throttle(handleScroll, 200);
  //     window.addEventListener("scroll", throttledScroll);

  //     return () => {
  //       window.removeEventListener("scroll", throttledScroll);
  //     };
  //   }, [isSectionSticky, isScrolling]);

  // Update the wheel event prevention effect
  useEffect(() => {
    // Only apply wheel prevention when we're in sticky mode
    if (!isSectionSticky || !processSectionRef.current) return;

    const preventWheel = (e: WheelEvent) => {
      // Only prevent when rotating through cards, not when at start/end
      if (
        (e.deltaY > 0 && carouselIndex < totalSteps - 1) ||
        (e.deltaY < 0 && carouselIndex > 0)
      ) {
        e.preventDefault();

        // Manually update the carousel index for smoother control
        if (!isScrolling) {
          setIsScrolling(true);

          if (e.deltaY > 0) {
            setCarouselIndex((prev) => Math.min(prev + 1, totalSteps - 1));
          } else {
            setCarouselIndex((prev) => Math.max(prev - 1, 0));
          }

          // Increase the cooldown period to slow down scrolling between steps
          setTimeout(() => {
            setIsScrolling(false);
          }, 1200); // Changed from 500ms to 1200ms for slower transitions
        }
      }
    };

    const processSection = processSectionRef.current;
    processSection.addEventListener("wheel", preventWheel, { passive: false });

    return () => {
      processSection.removeEventListener("wheel", preventWheel);
    };
  }, [isSectionSticky, carouselIndex, isScrolling, totalSteps]);

  // Add this custom throttle function
  function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle = false;

    return function (this: any, ...args: Parameters<T>): void {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  }

  return (
    <>
      <SubpageHero
        title="Pricing Plans"
        description="Choose the perfect plan for your business needs. Our flexible pricing options ensure you get the right level of support and services."
      />

      {/* Membership Benefits */}
      <section className="py-24 md:py-32 lg:py-40 relative">
        {/* Subtle background gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-full md:w-2/3 h-1/2 bg-gradient-to-bl from-indigo-500/5 to-purple-500/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full md:w-2/3 h-1/2 bg-gradient-to-tr from-blue-500/5 to-teal-500/5 blur-3xl"></div>
        </div>

        {/* Very subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-32"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8">
              Membership Benefits
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to supercharge your design and development
              process with predictable, transparent pricing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {[
              {
                title: "Flat Monthly Fee",
                icon: "DollarSign",
                description:
                  "Predictable pricing with no surprise costs. Know exactly what you'll pay each month without hidden fees or unexpected expenses.",
                accent: "border-emerald-200/30",
              },
              {
                title: "Unlimited Requests & Revisions",
                icon: "Infinity",
                description:
                  "Submit as many design and development requests as you need. We'll keep refining until you're completely satisfied with the results.",
                accent: "border-blue-200/30",
              },
              {
                title: "Fast Turnaround",
                icon: "Zap",
                description:
                  "Quick delivery on all your requests with most projects completed within 2-5 business days, depending on complexity.",
                accent: "border-amber-200/30",
              },
              {
                title: "Complete Web Services",
                icon: "Globe",
                description:
                  "End-to-end solutions for your digital needs, from website design to development, animations, and marketing materials.",
                accent: "border-violet-200/30",
              },
              {
                title: "Dedicated Support",
                icon: "Shield",
                description:
                  "We're here whenever you need us. Get priority support and quick responses through dedicated communication channels.",
                accent: "border-indigo-200/30",
              },
              {
                title: "No Contracts Required",
                icon: "FileText",
                description:
                  "Pause or cancel anytime without penalties or long-term commitments. You maintain complete flexibility with your subscription.",
                accent: "border-rose-200/30",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)",
                  transition: { duration: 0.3 },
                }}
                className={`relative bg-background/70 backdrop-blur-sm rounded-3xl p-10 border-2 ${benefit.accent} shadow-sm transition-all duration-300`}
              >
                {/* Icon Container */}
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-background flex items-center justify-center shadow-sm border border-border/30">
                    {benefit.icon === "DollarSign" && (
                      <DollarSign className="w-10 h-10 text-foreground/70" />
                    )}
                    {benefit.icon === "Infinity" && (
                      <InfinityIcon className="w-10 h-10 text-foreground/70" />
                    )}
                    {benefit.icon === "Zap" && (
                      <Zap className="w-10 h-10 text-foreground/70" />
                    )}
                    {benefit.icon === "Globe" && (
                      <Globe className="w-10 h-10 text-foreground/70" />
                    )}
                    {benefit.icon === "Shield" && (
                      <Shield className="w-10 h-10 text-foreground/70" />
                    )}
                    {benefit.icon === "FileText" && (
                      <FileText className="w-10 h-10 text-foreground/70" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process - Card Carousel Implementation */}
      <motion.section className={cn("py-24 md:py-32 relative overflow-hidden")}>
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
          <div className="absolute top-1/4 left-1/3 w-[30rem] h-[30rem] bg-blue-600/5 dark:bg-blue-400/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[25rem] h-[25rem] bg-purple-600/5 dark:bg-purple-400/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8">
              Our Process
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A seamless journey from subscription to ongoing support, designed
              for clarity and efficiency
            </p>
          </motion.div>

          {/* Card stack with sticky positioning */}
          <div className="relative flex flex-col gap-10 md:gap-20 items-center justify-center mx-auto max-w-4xl mb-10 lg:mb-20">
            {processSteps.map((step, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={index}
                  className={`
              bg-background/95 backdrop-blur-sm rounded-3xl p-8 md:p-10
              shadow-lg border border-border/30 h-full ring-2 ring-primary/50
              `}
                >
                  {/* Number and Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`text-6xl font-light text-primary`}>
                      {step.number}
                    </span>
                    <div
                      className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-primary/20`}
                    >
                      {step.icon === "CreditCard" && (
                        <CreditCard className="w-8 h-8 text-primary" />
                      )}
                      {step.icon === "Send" && (
                        <Send className="w-8 h-8 text-primary" />
                      )}
                      {step.icon === "Package" && (
                        <Package className="w-8 h-8 text-primary" />
                      )}
                      {step.icon === "LifeBuoy" && (
                        <LifeBuoy className="w-8 h-8 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl md:text-4xl font-medium mb-6">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xl leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <ArrowButtonLink href="/contact">
              Start Your Journey With Us
            </ArrowButtonLink>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive design and development solutions for all your
              digital needs
            </p>
          </div>

          {/* No need for Suspense since we're handling loading in the component */}
          <PricingServicesContent />
        </div>
      </section>

      {/* Membership Pricing */}
      <section
        id="pricing"
        className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-blue-500/5 to-indigo-500/5 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Membership Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that works best for your business needs. All plans
              include our core benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Standard</h3>
                <div className="text-4xl font-bold mb-4">
                  $4,999
                  <span className="text-lg text-muted-foreground font-normal">
                    /month
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  Pause or cancel anytime
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-foreground text-background py-4 rounded-full text-center font-medium hover:bg-foreground/80 transition-all"
                >
                  Get Started
                </Link>
              </div>
              <div className="bg-muted/30 p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>200 hours/month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>Access to Designer & Fullstack Developer</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>Unlimited support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>Unlimited requests</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>Communication via Slack</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl shadow-xl overflow-hidden border border-primary transform scale-105 z-10"
            >
              <div className="bg-primary text-primary-foreground text-center py-2">
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 fill-current" />
                  <p className="font-medium">Most Popular</p>
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-bold mb-4">
                  $9,999
                  <span className="text-lg text-muted-foreground font-normal">
                    /month
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  Pause or cancel anytime
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-primary text-primary-foreground py-4 rounded-full text-center font-medium hover:bg-primary/90 transition-all"
                >
                  Get Started
                </Link>
              </div>
              <div className="bg-muted/30 p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>500 hours/month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>
                      Access to Designer, Frontend Developer, Backend Developer
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>Video Editor & Fullstack Developer</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>QA and Project Manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>All Standard features included</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <div className="text-4xl font-bold mb-4">
                  $25,000
                  <span className="text-lg text-muted-foreground font-normal">
                    /month
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  Dedicated team of 5 senior members
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-foreground text-background py-4 rounded-full text-center font-medium hover:bg-foreground/80 transition-all"
                >
                  Contact Us
                </Link>
              </div>
              <div className="bg-muted/30 p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>Dedicated team of 5 senior members</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>$3,999/month for additional senior member</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>Dedicated project manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>Dedicated team manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>All Pro features included</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-40 relative overflow-hidden">
        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-blue-700/15 dark:bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-purple-700/15 dark:bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            y: [0, -25, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>

        {/* Content */}
        <div className="container relative mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-6 text-foreground">
              Ready to transform your business?
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 mx-auto max-w-2xl">
              Let's discuss how we can help your business grow with our
              comprehensive design and development solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <ArrowButtonLink variant="inverse" href="/contact">
                LETS TALK
              </ArrowButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-xl mx-auto">
                Get answers to common questions about our membership plans
              </p>
            </div>

            {/* Single unified FAQ box */}
            <motion.div
              className="bg-background rounded-xl overflow-hidden shadow-lg border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                {
                  question: "How does the unlimited request system work?",
                  answer:
                    "You can submit as many requests as you'd like, and we'll work on them sequentially. The more requests you have, the more value you get from your membership.",
                },
                {
                  question:
                    "What if I want to pause or cancel my subscription?",
                  answer:
                    "You can pause or cancel at any time with no penalty. Just let us know, and we'll handle the rest. If you decide to come back, we'll welcome you with open arms.",
                },
                {
                  question: "How fast will my requests be completed?",
                  answer:
                    "Most requests are completed within 2-5 business days, depending on complexity. We work efficiently to ensure quick turnaround times without sacrificing quality.",
                },
                {
                  question: "Can I request revisions to the work?",
                  answer:
                    "Absolutely! Revisions are a normal part of the process. We'll continue to revise until you're 100% satisfied with the deliverables.",
                },
                {
                  question: "What types of projects can I request?",
                  answer:
                    "You can request any design or development work that falls within our service offerings. From website updates to complex app development, we've got you covered.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`p-6 ${index !== 0 ? "border-t border-border/50" : ""}`}
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </motion.div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                Have more questions?{" "}
                <a
                  href="/contact"
                  className="text-primary font-medium hover:underline"
                >
                  Contact our team
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
