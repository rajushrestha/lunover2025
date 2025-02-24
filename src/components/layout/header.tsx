"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChartNoAxesGantt, X } from "lucide-react";
import ArrowUpRight from "../icons/arrow-up-right";
import { usePathname } from "next/navigation";

const LETTERS = [
  {
    letter: "L",
    defaultWeight: "font-light",
    hoverWeight: "group-hover:font-black",
  },
  {
    letter: "u",
    defaultWeight: "font-normal",
    hoverWeight: "group-hover:font-extrabold",
  },
  {
    letter: "n",
    defaultWeight: "font-medium",
    hoverWeight: "group-hover:font-bold",
  },
  {
    letter: "o",
    defaultWeight: "font-semibold",
    hoverWeight: "group-hover:font-semibold",
  },
  {
    letter: "v",
    defaultWeight: "font-bold",
    hoverWeight: "group-hover:font-medium",
  },
  {
    letter: "e",
    defaultWeight: "font-extrabold",
    hoverWeight: "group-hover:font-normal",
  },
  {
    letter: "r",
    defaultWeight: "font-black",
    hoverWeight: "group-hover:font-light",
  },
];

const NAVIGATION_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Detect scroll position to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Using type assertion to treat the target as an Element which has closest method
      const target = e.target as Element;
      if (
        isMenuOpen &&
        !target.closest(".menu-container") &&
        !target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Close menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 py-4 md:py-6 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-sm"
            : "bg-background"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group text-3xl md:text-4xl">
              <span className="inline-flex">
                {LETTERS.map(
                  ({ letter, defaultWeight, hoverWeight }, index) => (
                    <span
                      key={index}
                      className={`transition-all duration-300 ${defaultWeight} ${hoverWeight}`}
                    >
                      {letter}
                    </span>
                  )
                )}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              <div className="flex items-center gap-8">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`text-xl font-medium relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-foreground before:transition-all before:duration-300 ${
                      pathname === item.path ? "before:w-full" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Get in Touch Button */}
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-3 text-lg font-medium rounded-full border-2 border-border hover:bg-foreground hover:text-background transition-colors duration-300 group"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="flex lg:hidden items-center">
              {/* Menu Button */}
              <button
                className="flex items-center gap-2 text-xl font-medium menu-button z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <span className="hidden sm:inline">
                  {isMenuOpen ? "Close" : "Menu"}
                </span>
                {isMenuOpen ? (
                  <X strokeWidth={1.5} className="w-8 h-8" />
                ) : (
                  <ChartNoAxesGantt strokeWidth={1.5} className="w-8 h-8" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay - Separate from header */}
      <div
        className={`fixed inset-0 bg-background z-40 menu-container transition-transform duration-300 lg:hidden overflow-hidden ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 pt-24 pb-8 flex flex-col min-h-screen max-h-screen overflow-y-auto">
          <div className="space-y-8 mt-12">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block text-3xl sm:text-4xl md:text-5xl font-medium hover:opacity-70 transition-opacity ${
                  pathname === item.path ? "underline underline-offset-8" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-xl font-medium rounded-full border-2 border-border hover:bg-foreground hover:text-background transition-colors duration-300 group"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
