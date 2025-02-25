"use client";

import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  gradient: string;
  className?: string;
}

export default function GradientBackground({
  gradient,
  className,
}: GradientBackgroundProps) {
  // Define all possible gradients used in your blog posts
  const gradientClasses = {
    "from-gray-200 to-gray-300": "bg-gradient-to-br from-gray-200 to-gray-300",
    "from-gray-500 to-gray-900": "bg-gradient-to-br from-gray-500 to-gray-900",
    "from-gray-300 to-gray-400": "bg-gradient-to-br from-gray-300 to-gray-400",
    "from-gray-700 to-gray-500": "bg-gradient-to-br from-gray-700 to-gray-500",
    "from-blue-300 to-purple-400":
      "bg-gradient-to-br from-blue-300 to-purple-400",
    // Add other gradients as needed
  };

  // Get the full class or use a default if not found
  const fullGradientClass =
    gradientClasses[gradient as keyof typeof gradientClasses] ||
    "bg-gradient-to-br from-gray-300 to-gray-500";

  return (
    <div className={cn("absolute inset-0", fullGradientClass, className)}></div>
  );
}
