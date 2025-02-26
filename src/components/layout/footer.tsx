"use client";

import Link from "next/link";
import LetsChat from "@/components/sections/lets-chat";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const textRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const animationRef = useRef<number>(0);
  const [initialPosition, setInitialPosition] = useState("0% 0%");

  // Set up after hydration to avoid mismatches
  useEffect(() => {
    setIsClient(true);

    // Start a consistent animation cycle
    const updatePosition = () => {
      const now = Date.now();
      const position = `${Math.sin(now / 12000) * 100 + 100}% 0%`;
      setInitialPosition(position);

      animationRef.current = requestAnimationFrame(updatePosition);
    };

    animationRef.current = requestAnimationFrame(updatePosition);

    // Clean up
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  return (
    <footer className="bg-black text-white relative">
      <div className="container mx-auto px-4 py-12">
        {!isContactPage && <LetsChat />}

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-20 justify-between py-12 sm:py-24">
          <div className="flex flex-row gap-12 md:gap-16 lg:gap-20 mb-12 md:mb-0">
            <div className="flex flex-col gap-4 md:gap-8">
              <Link
                href="/about"
                className="inline-flex text-xl sm:text-2xl lg:text-3xl font-medium hover:underline underline-offset-8"
              >
                About Us
              </Link>
              <Link
                href="/projects"
                className="inline-flex text-xl sm:text-2xl lg:text-3xl font-medium hover:underline underline-offset-8"
              >
                Projects
              </Link>
              <Link
                href="/services"
                className="inline-flex text-xl sm:text-2xl lg:text-3xl font-medium hover:underline underline-offset-8"
              >
                Services
              </Link>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
              <Link
                href="/contact"
                className="inline-flex text-xl sm:text-2xl lg:text-3xl font-medium hover:underline underline-offset-8"
              >
                Contact
              </Link>
              <Link
                href="/careers"
                className="inline-flex text-xl sm:text-2xl lg:text-3xl font-medium hover:underline underline-offset-8"
              >
                Careers
              </Link>
              <Link
                href="/blog"
                className="inline-flex text-xl sm:text-2xl lg:text-3xl font-medium hover:underline underline-offset-8"
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-8 md:items-end">
            <Link
              href="https://maps.app.goo.gl/Rkop7S8JseGZQe4t9"
              target="_blank"
              className="inline-flex text-xl sm:text-2xl lg:text-3xl font-medium hover:underline underline-offset-8"
            >
              Paknajol, Thamel, Kathmandu
            </Link>
            <Link
              href="mailto:hello@lunover.com"
              className="inline-flex text-xl sm:text-2xl lg:text-3xl font-medium hover:underline underline-offset-8"
            >
              hello@lunover.com
            </Link>
            <Link
              href="tel:+9779851353274"
              className="inline-flex text-xl sm:text-2xl lg:text-3xl font-medium hover:underline underline-offset-8"
            >
              +977 9851353274
            </Link>
          </div>
        </div>

        <div className="text-center text-muted-foreground">
          © {new Date().getFullYear()} Lunover. All rights reserved.
        </div>
      </div>

      <div
        ref={textRef}
        className="text-center text-[20.5vw] font-extrabold leading-none overflow-hidden relative cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Link href="/" className="relative inline-block">
          <span className="opacity-20">LUNOVER</span>

          {isClient && (
            <motion.span
              className="absolute inset-0 bg-clip-text text-transparent"
              style={{
                backgroundImage: isHovering
                  ? `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px,
                      rgba(255,255,255,1) 0%,
                      rgba(255,255,255,0.9) 20%,
                      rgba(255,255,255,0.7) 35%,
                      rgba(255,255,255,0.4) 50%,
                      rgba(255,255,255,0.2) 75%,
                      rgba(255,255,255,0) 100%)`
                  : `linear-gradient(90deg,
                      rgba(255,255,255,0) 0%,
                      rgba(255,255,255,0.2) 20%,
                      rgba(255,255,255,0.5) 30%,
                      rgba(255,255,255,0.8) 40%,
                      rgba(255,255,255,1) 50%,
                      rgba(255,255,255,0.8) 60%,
                      rgba(255,255,255,0.5) 70%,
                      rgba(255,255,255,0.2) 80%,
                      rgba(255,255,255,0) 100%)`,
                backgroundSize: isHovering ? "auto" : "200% 100%",
                backgroundPosition: isHovering ? "0% 0%" : initialPosition,
              }}
              animate={{
                backgroundPosition: isHovering ? "0% 0%" : ["0% 0%", "200% 0%"],
              }}
              transition={{
                backgroundPosition: {
                  duration: isHovering ? 0 : 12,
                  repeat: isHovering ? 0 : Infinity,
                  ease: "linear",
                },
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onMouseMove={handleMouseMove}
            >
              LUNOVER
            </motion.span>
          )}
        </Link>
      </div>
    </footer>
  );
}
