import AchievementSection from "@/components/sections/acheivement";
import TeamSection from "@/components/sections/team";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl md:text-[7vw] font-normal leading-[1.05] tracking-tight sm:-mx-2">
            About Lunover
          </h1>

          <div className="py-8 sm:py-10 md:py-12 lg:py-16">
            <p className="max-w-3xl text-2xl leading-normal md:text-2xl/normal lg:text-3xl/normal xl:text-4xl/normal font-normal tracking-tight">
              Lunover is a growth-focused digital agency based in Kathmandu,
              Nepal. We specialize in building websites that drive measurable
              business results through increased traffic, enhanced user
              engagement, and higher conversion rates.
            </p>
          </div>

          <div className="py-4 sm:py-8 md:py-10 lg:py-12 flex justify-end">
            <p className="max-w-3xl text-xl leading-normal md:text-xl/normal lg:text-2xl/normal xl:text-3xl/normal font-normal tracking-tight md:text-right">
              Our mission is to transform your online presence into a powerful
              growth engine. With a strategic team of designers, developers, and
              digital marketers, we create websites that don&apos;t just look
              impressive—they perform, driving real business growth with
              measurable ROI.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight sm:-mx-2">
            We&apos;re here to grow your business through strategic digital
            solutions.
          </h2>

          <div className="py-8 sm:py-12 md:py-16 lg:py-24 flex flex-col md:flex-row gap-8 justify-between">
            <p className="max-w-3xl text-2xl leading-normal md:text-2xl/normal lg:text-3xl/normal xl:text-4xl/normal font-normal tracking-tight flex-1">
              We thrive on turning ambitious business goals into measurable
              results. At Lunover, every project begins with your growth
              objectives, every design decision is made with user conversion in
              mind, and every line of code is optimized for performance and
              engagement.
            </p>

            <p className="max-w-80 text-xl leading-normal lg:text-xl/normal xl:text-2xl/normal font-normal tracking-tight">
              We&apos;re the team that blends creativity with data-driven
              strategy to drive your business forward.
            </p>
          </div>

          <div className="pt-8 sm:pt-10 md:pt-12 lg:pt-16 aspect-video relative">
            <Image
              src="/images/about/about-1.png"
              alt="About Lunover"
              width={1920}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-24">
            <p className="text-2xl leading-normal lg:text-3xl/normal xl:text-4xl/normal font-normal tracking-tight">
              Founded with a vision to deliver websites that generate real
              business growth, we&apos;ve evolved into more than just a web
              agency; we&apos;re growth partners who measure our success by the
              increased traffic, engagement, and sales we deliver to our
              clients.
            </p>
          </div>
        </div>
      </section>

      {/* <AboutImageSlider /> */}

      <TeamSection />

      <AchievementSection />
    </>
  );
}
