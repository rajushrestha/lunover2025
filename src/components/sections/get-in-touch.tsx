import { MoveRight } from "lucide-react";
import Link from "next/link";
import ArrowUpRight from "../icons/arrow-up-right";

export default function GetInTouch() {
  return (
    <section className="py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="hidden sm:flex items-center justify-between gap-4 mb-10">
          <span className="text-2xl font-normal">
            Take Your Business to the Next Level
          </span>

          {/* Get in Touch Button */}
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 px-8 py-3 text-xl font-medium rounded-full border-2 border-border hover:bg-foreground hover:text-background transition-colors duration-300 group"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>

        <p className="text-xl md:text-2xl lg:text-4xl pt-4 mb-4">
          We build digital experiences that drive real growth. Our websites
          don't just look great—they perform. Through strategic design, seamless
          user experiences, and data-driven optimization, we help your business
          attract more visitors, boost engagement, and convert leads into loyal
          customers.
        </p>

        <div className="flex justify-between flex-col sm:flex-row gap-5 pt-6 sm:pt-12">
          <Link
            href="/about"
            className="text-lg md:text-3xl font-medium leading-tight uppercase underline underline-offset-8 hover:no-underline"
          >
            About Us
          </Link>

          <div className="flex flex-col gap-4 sm:text-right">
            <Link
              href="mailto:hello@lunover.com"
              className="text-lg md:text-3xl font-medium leading-tight underline underline-offset-8 hover:no-underline"
            >
              hello@lunover.com
            </Link>
            <Link
              href="tel:+9779851353274"
              className="text-lg md:text-3xl font-medium leading-tight underline underline-offset-8 hover:no-underline"
            >
              +977 9851353274
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
