import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BackgroundNoise from "@/components/background-noise";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lunover | Digital Excellence",
  description:
    "Transform your digital presence with our comprehensive suite of services. From custom web development to AI-powered solutions, we help businesses thrive in the digital age.",
  keywords: [
    "web development",
    "AI solutions",
    "digital services",
    "custom websites",
    "digital transformation",
    "Kathmandu",
    "Nepal",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32" },
      { url: "/favicon.png", sizes: "16x16" },
    ],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.png",
        color: "#000000",
      },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Lunover",
  },
  openGraph: {
    title: "Lunover | Digital Excellence",
    description:
      "Transform your digital presence with our comprehensive suite of services. From custom web development to AI-powered solutions, we help businesses thrive in the digital age.",
    type: "website",
    locale: "en_US",
    siteName: "Lunover",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lunover Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunover | Digital Excellence",
    description:
      "Transform your digital presence with our comprehensive suite of services. From custom web development to AI-powered solutions.",
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
  alternates: {
    canonical: "https://lunover.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" />
        <link rel="icon" href="/favicon.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon.png" sizes="180x180" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />

          <div className="fixed bottom-2 right-2">
            <ThemeToggle />
          </div>

          <BackgroundNoise />
        </ThemeProvider>
      </body>
    </html>
  );
}
