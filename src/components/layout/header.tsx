"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAVIGATION_ITEMS = [
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
            isScrolled ? "bg-[#0A0A0F]/80" : "bg-transparent"
          }`}
        />

        <div className="container mx-auto px-6">
          <nav className="h-20 flex items-center justify-between relative z-10">
            {/* Logo */}
            <Link
              href="/"
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="text-2xl font-bold tracking-tight"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  rotate: isHovered ? 2 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="bg-gradient-to-r from-[#FF4D4D] via-[#FFC837] to-[#00F5A0] bg-clip-text text-transparent">
                  LUNOVER
                </span>
              </motion.div>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[#FF4D4D]/20 via-[#FFC837]/20 to-[#00F5A0]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
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
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
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
