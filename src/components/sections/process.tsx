export default function ProcessSection() {
  return (
    <section className="py-10 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-20 text-center">
            <h2 className="text-4xl lg:text-5xl xl:text-7xl font-medium mb-4">
              Efficient Team Assembly Process
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl max-w-5xl mx-auto">
              We follow a structured process to ensure that we deliver the best
              possible results for our clients.
            </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap max-w-6xl mx-auto divide-y divide-x divide-border border border-border">
          <div className="w-full md:w-1/2 p-10 h-full -m-px">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold mb-2 md:mb-4">
              Step 1: Initial Consultation
            </h3>
            <p className="text-xl md:text-2xl">
              We begin by understanding your business needs and goals. This
              initial consultation helps us tailor our services to your specific
              requirements.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-10 h-full -m-px">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold mb-2 md:mb-4">
              Step 2: Talent Sourcing
            </h3>
            <p className="text-xl md:text-2xl">
              Our team conducts a thorough search to identify the most suitable
              candidates for your team. We use a combination of online tools and
              professional networks to find the best matches.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-10 h-full -m-px">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold mb-2 md:mb-4">
              Step 3: Candidate Evaluation
            </h3>
            <p className="text-xl md:text-2xl">
              We evaluate the candidates to ensure they meet the required
              criteria. This includes checking their skills, experience, and
              cultural fit.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-10 h-full -m-px">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold mb-2 md:mb-4">
              Step 4: Background Checks
            </h3>
            <p className="text-xl md:text-2xl">
              We conduct thorough background checks to ensure the authenticity
              and reliability of the candidates. This includes verifying
              credentials and conducting reference checks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
