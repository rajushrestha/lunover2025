import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import Blog from "@/components/sections/blog";
import GetInTouch from "@/components/sections/get-in-touch";
import Clients from "@/components/sections/clients";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lunover | Digital Excellence",
  description:
    "We craft extraordinary digital experiences that push boundaries and redefine what's possible. From custom web development to AI-powered solutions, we help businesses thrive in the digital age.",
  keywords: [
    "web development",
    "digital agency",
    "AI solutions",
    "custom websites",
    "digital transformation",
    "Kathmandu",
    "Nepal",
  ],
  openGraph: {
    title: "Lunover | Digital Excellence",
    description:
      "We craft extraordinary digital experiences that push boundaries and redefine what's possible. From custom web development to AI-powered solutions, we help businesses thrive in the digital age.",
    type: "website",
    locale: "en_US",
    siteName: "Lunover",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lunover - Digital Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunover | Digital Excellence",
    description:
      "We craft extraordinary digital experiences that push boundaries and redefine what's possible. From custom web development to AI-powered solutions, we help businesses thrive in the digital age.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://lunover.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <GetInTouch />
      <Projects />
      <Services />
      <Testimonials />
      <Clients />
      <Blog />
    </>
  );
}
