import AchievementSection from "@/components/sections/acheivement";
import TeamSection from "@/components/sections/team";
import Image from "next/image";
import SubpageHero from "@/components/sections/subpage-hero";

export default function AboutPage() {
  return (
    <>
      <SubpageHero
        title="About Lunover"
        description="A growth-focused digital agency based in Kathmandu, Nepal. We specialize in building websites that drive measurable business results through increased traffic, enhanced user engagement, and higher conversion rates."
      />

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
        </div>
      </section>

      {/* <AboutImageSlider /> */}

      <AchievementSection />
      <TeamSection />
    </>
  );
}
