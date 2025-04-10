import { getServiceContent, getAllServices } from "@/lib/mdx-compiler";
import { notFound } from "next/navigation";
import Link from "next/link";
import GradientBackground from "@/components/gradient-background";
import { Metadata } from "next";
import { ArrowLeft, Check } from "lucide-react";
import ProcessSection from "@/components/sections/process";
import dynamic from "next/dynamic";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import ArrowButtonLink from "@/components/ui/arrow-button";
import ArrowUpRight from "@/components/icons/arrow-up-right";
import TocSidebar from "@/components/toc-sidebar";
import SubpageHero from "@/components/sections/subpage-hero";

// Dynamically import components that might have client-side interactivity
const ServiceFaqSection = dynamic(
  () => import("@/components/sections/service-faq"),
  { ssr: true }
);
const ServiceCta = dynamic(() => import("@/components/sections/service-cta"), {
  ssr: true,
});
const ServiceFeatures = dynamic(
  () => import("@/components/sections/service-features"),
  { ssr: true }
);
const ServiceTestimonials = dynamic(
  () => import("@/components/sections/service-testimonials"),
  { ssr: true }
);

// Define interface for a feature item
interface ServiceFeature {
  title: string;
  description: string;
  icon: IconName | string;
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Need to await params according to the error
  const paramsData = await params;
  const { slug } = paramsData;

  if (!slug) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found",
    };
  }

  try {
    const service = await getServiceContent(slug);

    if (!service) {
      return {
        title: "Service Not Found",
        description: "The requested service could not be found",
      };
    }

    return {
      title: service.frontmatter.metaTitle,
      description: service.frontmatter.metaDescription,
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Service Error",
      description: "There was an error loading this service",
    };
  }
}

// Generate static paths for all services
export async function generateStaticParams() {
  try {
    const services = await getAllServices();

    return services.map((service) => ({
      slug: service.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const paramsData = await params;
    const { slug } = paramsData;

    if (!slug) {
      notFound();
    }

    const service = await getServiceContent(slug);

    if (!service) {
      notFound();
    }

    const { frontmatter, content, headings } = service;

    // Get all services for related services section
    const allServices = await getAllServices();

    // Get related services (excluding current one)
    // If tags exist, prioritize services with matching tags
    const relatedServices = allServices
      .filter((s) => {
        if (s.slug === slug) return false;
        if (frontmatter.tags && s.tags) {
          return frontmatter.tags.some((tag) => s.tags?.includes(tag));
        }
        return true;
      })
      .slice(0, 3);

    // Get service-specific benefits or use fallbacks
    const benefits = frontmatter.benefits || [
      "Improved user experience",
      "Increased conversion rates",
      "Enhanced brand perception",
      "Greater customer satisfaction",
    ];

    // Get service features if available
    const features: ServiceFeature[] = Array.isArray(
      (frontmatter as any).features
    )
      ? (frontmatter as any).features
      : [
          {
            title: "High Performance",
            description:
              "Optimized solutions that deliver exceptional speed and efficiency.",
            icon: "zap",
          },
          {
            title: "User-Centered Design",
            description:
              "Interfaces crafted around user needs for maximum engagement.",
            icon: "heart",
          },
          {
            title: "Data-Driven Approach",
            description:
              "Decisions guided by analytics and real user behavior.",
            icon: "pie-chart",
          },
          {
            title: "Security Focus",
            description:
              "Robust protection for your data and your users' information.",
            icon: "shield",
          },
        ];

    return (
      <>
        <SubpageHero
          title={frontmatter.title}
          description={frontmatter.description}
        />

        {/* Key Benefits Section */}
        <section
          id="benefits"
          className="py-10 md:py-16 bg-secondary/5 relative"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                Why Choose Our {frontmatter.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover how our specialized approach delivers exceptional
                results and measurable ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div className="bg-background rounded-2xl shadow-xl overflow-hidden border border-border/50 relative">
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Key Benefits
                  </h3>
                  <ul className="space-y-5">
                    {benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        {/* <Check className="mt-1 w-4 h-4 text-foreground/70" /> */}
                        <ArrowUpRight className="mt-1 w-5 h-5 text-foreground/70 rotate-45 inline-flex flex-shrink-0" />
                        <p className="text-lg md:text-xl">{benefit}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-background rounded-2xl shadow-xl overflow-hidden border border-border/50 relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                <div className="p-8 lg:p-12 relative">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    What We Deliver
                  </h3>
                  <ul className="space-y-5">
                    {frontmatter.lists?.map((list, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-foreground/50 flex items-center justify-center">
                          <span className="text-xs font-medium text-background">
                            {idx + 1}
                          </span>
                        </div>
                        <p className="text-lg md:text-xl">{list}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <ArrowButtonLink href="/contact" variant="secondary">
                      Get Started
                    </ArrowButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <ServiceFeatures features={features} />

        {/* Service Content Section with TOC */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-indigo-500/5 to-purple-500/5 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-blue-500/5 to-teal-500/5 blur-3xl -z-10"></div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Table of Contents Sidebar */}
                <TocSidebar headings={headings} />

                {/* Main Content */}
                <div className="flex-1">
                  <article
                    className="prose prose-lg md:prose-xl dark:prose-invert max-w-none prose-headings:font-normal prose-headings:scroll-mt-28 prose-headings:outline-none prose-img:rounded-2xl prose-img:shadow-lg prose-headings:mb-6 prose-p:leading-relaxed prose-li:marker:text-primary"
                    id="content"
                  >
                    {content}
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <ServiceTestimonials serviceSlug={slug} /> */}

        {/* Our Process Section */}
        <ProcessSection />

        {/* FAQ Section */}
        <ServiceFaqSection serviceSlug={slug} />

        {/* CTA Section */}
        <ServiceCta
          title={`Ready to transform your business with ${frontmatter.title}?`}
          description="Contact us today to discuss your project and discover how we can help you achieve your goals."
        />

        {/* Related Services */}
        <section className="py-24 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl xl:text-5xl font-medium mb-3">
                    Related Services
                  </h2>
                  <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-xl">
                    Explore other services that complement {frontmatter.title}{" "}
                    for a comprehensive digital strategy.
                  </p>
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center mt-4 md:mt-0 text-base lg:text-lg font-medium uppercase hover:text-primary transition-colors group"
                >
                  <span>View all services</span>
                  <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:rotate-45" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-border/50 group"
                    prefetch={false}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <div className="absolute inset-0">
                        <GradientBackground gradient={service.gradient} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-white">
                          {/* Use DynamicIcon component */}
                          {service.icon && (
                            <DynamicIcon
                              name={service.icon as IconName}
                              className="w-8 h-8"
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 mb-4 text-xl">
                        {service.description}
                      </p>
                      <div className="flex items-center text-lg font-medium uppercase text-primary">
                        <span>Learn more</span>
                        <ArrowUpRight className="ml-1 w-4 h-4 group-hover:rotate-45 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error(`Error rendering service page:`, error);
    notFound();
  }
}
