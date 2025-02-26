"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import type { Service } from "@/lib/mdx-compiler";
import { useEffect, useState } from "react";
import ArrowUpRight from "../icons/arrow-up-right";

export default function PricingServicesContent() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch('/api/services');

        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }

        const data = await response.json();
        setServices(data.services);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Failed to load services. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchServices();
  }, []);

  if (isLoading) {
    return <ServicesLoading />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {services.map((service, index) => (
        <motion.div
          key={service.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="group relative"
        >
          <Link
            href={`/services/${service.slug}`}
            className="bg-background p-8 md:p-10 rounded-3xl border border-border/50 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
          >
            {/* Icon */}
            <div className="w-16 h-16 mb-8 rounded-2xl bg-background flex items-center justify-center shadow-sm border border-border/30 group-hover:bg-primary/10 transition-colors duration-300">
              {service.icon && (
                <DynamicIcon
                  name={service.icon as IconName}
                  className="w-8 h-8 text-foreground/70 group-hover:text-primary transition-colors duration-300"
                />
              )}
            </div>

            {/* Content */}
            <h3 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-lg mb-6 flex-grow">
              {service.description.length > 120
                ? `${service.description.substring(0, 120)}...`
                : service.description}
            </p>

            {/* CTA */}
            <div className="flex items-center text-primary font-medium mt-auto uppercase">
              <span>Learn more</span>
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:rotate-45 transition-transform" />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

// Loading placeholder
export function ServicesLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="bg-background/60 p-8 md:p-10 rounded-3xl border border-border/30 shadow-sm h-[300px] animate-pulse"
        />
      ))}
    </div>
  );
}
