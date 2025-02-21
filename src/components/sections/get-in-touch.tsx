import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="hidden sm:flex items-center justify-between gap-4 mb-10">
          <span className="text-2xl font-normal">
            Digital Agency Based in KATHMANDU
          </span>

          {/* Get in Touch Button */}
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 px-8 py-3 text-xl rounded-full border border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            <span>GET IN TOUCH</span>
            <MoveRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-xl md:text-2xl lg:text-4xl pt-4 mb-4">
          Based in the vibrant heart of Kathmandu, Nepal, Lunover is not just a
          digital agency, we're your partners in creativity. Our mission is to
          turn your dreams into reality, one pixel at a time. With a diverse
          team of designers, developers, and innovators, we're constantly
          pushing the boundaries of what's possible in the digital world.
        </p>

        <div className="flex justify-between flex-col sm:flex-row gap-5 pt-6 sm:pt-12">
          <Link
            href="/about"
            className="text-lg md:text-3xl font-medium leading-tight uppercase underline underline-offset-8 hover:no-underline"
          >
            About Us
          </Link>

          <div className="flex flex-col gap-4">
            <Link
              href="mailto:hello@lunover.com"
              className="text-lg md:text-3xl font-medium leading-tight underline underline-offset-8 hover:no-underline"
            >
              hello@lunover.com
            </Link>
            <Link
              href="tel:+977-9808000000"
              className="text-lg md:text-3xl font-medium leading-tight underline underline-offset-8 hover:no-underline"
            >
              +977-9808000000
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
