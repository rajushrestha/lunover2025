import ProcessSection from "@/components/sections/process";
import ServicesDetails from "@/components/sections/services-details";

export default function ServicesPage() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl md:text-[7vw] font-normal leading-[1.05] tracking-tight sm:-mx-2">
            Our Services
          </h1>

          <div className="py-8 sm:py-10 md:py-12 lg:py-16">
            <p className="max-w-3xl text-2xl leading-normal md:text-2xl/normal lg:text-3xl/normal xl:text-4xl/normal font-normal tracking-tight">
              Together, we turn the blank canvas into a masterpiece, your brand
              into a sensation, and your website into an experience.
            </p>
          </div>
        </div>
      </section>

      <ServicesDetails />

      <ProcessSection />
    </>
  );
}
