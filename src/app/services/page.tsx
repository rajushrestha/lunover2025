import ProcessSection from "@/components/sections/process";
import ServicesDetails from "@/components/sections/services-details";
import AIApplications from "@/components/sections/ai-applications";

export default function ServicesPage() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl md:text-[7vw] font-normal leading-[1.05] tracking-tight sm:-mx-2">
            Growth-Driving Services
          </h1>

          <div className="py-8 sm:py-10 md:py-12 lg:py-16">
            <p className="max-w-3xl text-2xl leading-normal md:text-2xl/normal lg:text-3xl/normal xl:text-4xl/normal font-normal tracking-tight">
              We provide strategic digital solutions that turn your website into
              a powerful growth engine—attracting more visitors, keeping them
              engaged, and converting them into loyal customers.
            </p>
          </div>
        </div>
      </section>

      <ServicesDetails />

      <AIApplications />

      <ProcessSection />
    </>
  );
}
