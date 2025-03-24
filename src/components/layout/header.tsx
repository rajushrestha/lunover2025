"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const NAVIGATION_ITEMS = [
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className="fixed w-full top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`absolute inset-0 backdrop-blur-xl transition-all duration-500 ${
            isScrolled ? "bg-[#0A0A0F]" : "bg-transparent"
          }`}
        />

        <div className="container mx-auto px-6">
          <nav className="h-20 flex items-center justify-between relative z-10">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight hover:opacity-90 transition-all duration-300 group"
            >
              <motion.span
                className="text-white inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                LUNOVER
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="group relative py-2"
                >
                  <span
                    className={`text-base font-medium relative z-10 transition-all duration-300 ${
                      pathname === item.path
                        ? "text-white"
                        : "text-white/60 group-hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#FF4D4D] via-[#FFC837] to-[#00F5A0] origin-left rounded-full"
                    initial={false}
                    animate={{
                      scaleX: pathname === item.path ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex md:hidden w-12 h-12 items-center justify-center relative z-50 rounded-full hover:bg-white/5 transition-colors duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-5 relative">
                <motion.span
                  className="absolute left-0 top-0 w-full h-[2px] bg-gradient-to-r from-[#FF4D4D] via-[#FFC837] to-[#00F5A0] rounded-full"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 10 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="absolute left-0 top-1/2 w-full h-[2px] bg-gradient-to-r from-[#FF4D4D] via-[#FFC837] to-[#00F5A0] rounded-full"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                    x: isMenuOpen ? 8 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#FF4D4D] via-[#FFC837] to-[#00F5A0] rounded-full"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -10 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A0F]/90 md:hidden"
          >
            <div className="container mx-auto px-6 pt-28 pb-20">
              <nav className="flex flex-col items-start gap-8">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full"
                  >
                    <Link
                      href={item.path}
                      className={`group relative inline-block text-3xl font-bold tracking-tight py-2 ${
                        pathname === item.path
                          ? "bg-gradient-to-r from-[#FF4D4D] via-[#FFC837] to-[#00F5A0] bg-clip-text text-transparent"
                          : "text-white/60 hover:text-white transition-colors duration-300"
                      }`}
                    >
                      {item.name}
                      {pathname === item.path && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#FF4D4D] via-[#FFC837] to-[#00F5A0] origin-left"
                          layoutId="mobile-nav-underline"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
