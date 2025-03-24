import ProcessSection from "@/components/sections/process";
import ServicesDetails from "@/components/sections/services-details";
import AIApplications from "@/components/sections/ai-applications";
import { getAllServices, getAIServices } from "@/lib/mdx-compiler";
import { Metadata } from "next";
import SubpageHero from "@/components/sections/subpage-hero";

export const metadata: Metadata = {
  title: "Digital Services & Solutions | Lunover",
  description:
    "Transform your digital presence with our comprehensive suite of services. From custom web development to AI-powered solutions, we help businesses thrive in the digital age.",
};

export default async function ServicesPage() {
  const services = await getAllServices();
  const aiServices = await getAIServices();

  return (
    <>
      <SubpageHero
        title="Digital Services & Solutions"
        description="From custom web development to AI-powered solutions, we offer a comprehensive suite of services designed to transform your digital presence and drive business growth."
      />

      <ServicesDetails />

      <AIApplications aiServices={aiServices} />

      <ProcessSection />
    </>
  );
}
