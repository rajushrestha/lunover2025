"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface ServiceFeaturesProps {
  features: Feature[];
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      id="service-features"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Approach</h2>
          <p className="text-xl text-muted-foreground">
            We employ cutting-edge methodologies and technologies to deliver
            exceptional results for your business.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-background rounded-2xl p-8 border border-border/50 shadow-lg transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 transition-opacity duration-300"
                style={{ opacity: hoveredIndex === index ? 1 : 0 }}
              ></div>

              {/* Icon */}
              <div className="mb-6">
                <DynamicIcon
                  name={feature.icon as IconName}
                  className="w-8 h-8"
                  style={{
                    color: getIconColor(feature.icon),
                  }}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Function to determine icon color based on name
function getIconColor(icon: string): string {
  const colorMap: Record<string, string> = {
    zap: "#f59e0b", // amber-500
    heart: "#ec4899", // pink-500
    "pie-chart": "#3b82f6", // blue-500
    shield: "#10b981", // emerald-500
    database: "#6366f1", // indigo-500
    "trending-up": "#22c55e", // green-500
    layers: "#a855f7", // purple-500
    "brain-circuit": "#ef4444", // red-500
    search: "#3b82f6", // blue-500
    settings: "#6b7280", // gray-500
    smartphone: "#14b8a6", // teal-500
    "refresh-ccw": "#f97316", // orange-500
  };

  return colorMap[icon] || "#6b7280"; // default to gray-500
}
