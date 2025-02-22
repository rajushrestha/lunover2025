"use client";

import Link from "next/link";
import { ChartNoAxesGantt, MoveRight } from "lucide-react";
import ArrowUpRight from "../icons/arrow-up-right";

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

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 py-6 bg-background">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group text-4xl">
            <span className="inline-flex">
              {LETTERS.map(({ letter, defaultWeight, hoverWeight }, index) => (
                <span
                  key={index}
                  className={`transition-all duration-300 ${defaultWeight} ${hoverWeight}`}
                >
                  {letter}
                </span>
              ))}
            </span>
          </Link>

          {/* Right side navigation */}
          <div className="flex items-center gap-12">
            {/* Get in Touch Button */}
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-8 py-3 text-xl font-medium rounded-full border-2 border-border hover:bg-foreground hover:text-background transition-colors duration-300 group"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
            </Link>

            {/* Menu Button */}
            <button className="flex items-center gap-2 text-2xl font-medium">
              <span className="">Menu</span>
              <ChartNoAxesGantt strokeWidth={1} className="w-10 h-10" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
