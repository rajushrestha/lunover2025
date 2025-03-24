import ProcessSection from "@/components/sections/process";
import ServicesDetails from "@/components/sections/services-details";
import AIApplications from "@/components/sections/ai-applications";
import { getAllServices, getAIServices } from "@/lib/mdx-compiler";
import { Metadata } from "next";
import SubpageHero from "@/components/sections/subpage-hero";

export const metadata: Metadata = {
  title: "Growth-Driving Digital Services | Lunover",
  description:
    "Strategic digital solutions that turn your website into a powerful growth engine—attracting visitors, improving engagement, and converting them into loyal customers.",
};

export default async function ServicesPage() {
  const services = await getAllServices();
  const aiServices = await getAIServices();

  return (
    <>
      <SubpageHero
        title="Growth-Driving Services"
        description="We provide strategic digital solutions that turn your website into a powerful growth engine—attracting more visitors, keeping them engaged, and converting them into loyal customers."
      />

      <ServicesDetails />

      <AIApplications aiServices={aiServices} />

      <ProcessSection />
    </>
  );
}
