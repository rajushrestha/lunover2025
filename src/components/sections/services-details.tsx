const services = [
  {
    title: "Web Design & Development",
    description:
      "We create high-performance websites strategically engineered to drive traffic, engagement, and conversions. Our end-to-end approach combines stunning visuals with technical excellence to deliver sites that not only look great but generate measurable business growth.",
    lists: [
      "UX Design (40% Higher Conversions)",
      "Fast Loading (<2s, 30% Lower Bounce Rates)",
      "SEO Architecture (Top 3 Rankings)",
      "High-Converting Landing Pages (65% Engagement)",
      "Data-Driven A/B Testing",
      "Mobile-First Design (52% Revenue Increase)",
      "Behavior Analytics with ROI Focus",
      "Lead-Capture Systems",
      "Accessibility (20% Larger Reach)",
    ],
  },
  {
    title: "AI Services",
    description:
      "Our advanced AI solutions drive business growth through intelligent automation and enhanced customer experiences. We implement cutting-edge AI technologies customized to your specific business goals, increasing engagement and conversions while reducing operational costs.",
    lists: [
      "24/7 Product Chatbots (-90% Support Costs)",
      "Custom Brand Imagery (-75% Design Time)",
      "Email Response Automation (+45% Open Rates)",
      "Purchase Pattern Analysis (+42% Cart Value)",
      "Content Personalization (3× Engagement)",
      "Lead Scoring AI (68% Conversion Boost)",
    ],
  },
  {
    title: "SEO Services",
    description:
      "We implement data-driven SEO strategies that increase your visibility, drive targeted traffic, and boost conversions. Our approach focuses on sustainable growth and measurable business results.",
    lists: [
      "Traffic Growth Strategy",
      "Conversion-Focused Keywords",
      "Engagement-Optimized Content",
      "Technical SEO for Performance",
      "Analytics-Driven Optimization",
    ],
  },
  {
    title: "Team as a Service",
    description:
      "We provide dedicated teams focused on growing your business through increased traffic, engagement, and sales. Our specialists work as an extension of your organization with clear growth objectives.",
    lists: [
      "Growth-Focused Talent Selection",
      "Performance-Oriented Specialists",
      "ROI-Driven Team Structure",
      "Conversion Optimization Experts",
    ],
  },
];

export default function ServicesDetails() {
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
            </div>

            <ul className="list-disc list-inside lg:w-1/2 divide-y divide-border">
              {service.lists.map((list, index) => (
                <li
                  key={`${list}-${index}`}
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
