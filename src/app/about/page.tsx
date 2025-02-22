import AboutImageSlider from "@/components/sections/about-image-slider";
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
              Lunover is a digital agency based in Kathmandu, Nepal. We are a
              team of experienced professionals who are dedicated to providing
              the best possible services to our clients.
            </p>
          </div>

          <div className="py-4 sm:py-8 md:py-10 lg:py-12 flex justify-end">
            <p className="max-w-3xl text-xl leading-normal md:text-xl/normal lg:text-2xl/normal xl:text-3xl/normal font-normal tracking-tight md:text-right">
              Our mission is to turn your dreams into reality, one pixel at a
              time. With a diverse team of designers, developers, and
              innovators, we're constantly pushing the boundaries of what's
              possible in the digital world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight sm:-mx-2">
            We're here to make your design dreams come true.
          </h2>

          <div className="py-8 sm:py-12 md:py-16 lg:py-24 flex flex-col md:flex-row gap-8 justify-between">
            <p className="max-w-3xl text-2xl leading-normal md:text-2xl/normal lg:text-3xl/normal xl:text-4xl/normal font-normal tracking-tight flex-1">
              We thrive on turning your wildest design aspirations into stunning
              realities. At Kreativy, every project is a collaboration, every
              client is a friend, and every design is a work of art crafted with
              care and enthusiasm.
            </p>

            <p className="max-w-80 text-xl leading-normal lg:text-xl/normal xl:text-2xl/normal font-normal tracking-tight">
              We're the designers who believe in the power of a warm smile and a
              friendly chat.
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
              Founded with a vision to redefine design through a modern and
              friendly lens, we've become more than just a design agency; we're
              a community of kindred spirits who share a passion for artistry
              and innovation.
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
