const services = [
  {
    title: "Web Design",
    description:
      "We create stunning, responsive websites that are easy to use and look great on all devices.",
    lists: [
      "Responsive Design",
      "Customizable Templates",
      "SEO Optimization",
      "User-Friendly Interface",
      "Mobile-Friendly Design",
    ],
  },
  {
    title: "Web Development",
    description:
      "We build robust, scalable websites that are easy to manage and update.",
    lists: [
      "Responsive Design",
      "Customizable Templates",
      "SEO Optimization",
      "User-Friendly Interface",
      "Mobile-Friendly Design",
    ],
  },
  {
    title: "AI Services",
    description:
      "We offer a range of AI services to help you automate your business processes and improve your operations.",
    lists: [
      "Responsive Design",
      "Customizable Templates",
      "SEO Optimization",
      "User-Friendly Interface",
      "Mobile-Friendly Design",
    ],
  },
  {
    title: "SEO Services",
    description:
      "We optimize your website for search engines to improve your visibility and drive more traffic to your site.",
    lists: [
      "Responsive Design",
      "Customizable Templates",
      "SEO Optimization",
      "User-Friendly Interface",
      "Mobile-Friendly Design",
    ],
  },
  {
    title: "Team as a Service",
    description:
      "We offer a range of team as a service to help you automate your business processes and improve your operations.",
    lists: [
      "Precise Candidate Selection",
      "Thorough Technology Evaluation",
      "Comprehensive Background Checks",
      "Client-Centric Final Selection",
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
            <div className="lg:w-1/2 lg:pt-10">
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
