"use client";

import Link from "next/link";
import LetsChat from "@/components/sections/lets-chat";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

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

      <div className="text-center text-[20.5vw] font-extrabold leading-none overflow-hidden">
        <Link href="/">LUNOVER</Link>
      </div>
    </footer>
  );
}
