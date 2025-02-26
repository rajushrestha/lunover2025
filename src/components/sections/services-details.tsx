import { getAllServices } from "@/lib/mdx-compiler";
import ArrowButtonLink from "../ui/arrow-button";

// Interface to extend what's in the MDX with our list structure
interface ServiceWithLists {
  slug: string;
  title: string;
  description: string;
  lists?: string[];
  tags?: string[];
  // Other fields from Service interface that we might need
  gradient: string;
  icon: string;
}

export default async function ServicesDetails() {
  // Fetch services from MDX files
  const allServices = await getAllServices();

  // Filter out services with the 'ai' tag
  const services = allServices.filter(
    (service) => !service.tags || !service.tags.includes("ai")
  );

  return (
    <section className="py-10 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={`${service.title}-${index}`}
            className="flex flex-col lg:flex-row gap-4 md:gap-8 xl:gap-16 relative pb-10 md:pb-20 lg:pb-32 xl:pb-40"
          >
            <div className="lg:w-1/2 lg:pt-8">
              <h3 className="text-4xl lg:text-5xl xl:text-7xl mb-2 lg:mb-4 xl:mb-6 font-medium">
                {service.title}
              </h3>
              <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl">
                {service.description}
              </p>

              <div className="pt-10">
                <ArrowButtonLink href={`/services/${service.slug}`}>
                  LEARN MORE
                </ArrowButtonLink>
              </div>
            </div>

            <ul className="list-disc list-inside lg:w-1/2 divide-y divide-border">
              {service.lists?.map((list, index) => (
                <li
                  key={`${service.slug}-list-${index}`}
                  className="py-2 md:py-4 lg:py-6 xl:py-8 text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                >
                  {list}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
