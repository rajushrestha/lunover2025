import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import Blog from "@/components/sections/blog";
import GetInTouch from "@/components/sections/get-in-touch";
import Clients from "@/components/sections/clients";

export default function Home() {
  return (
    <>
      <Hero />
      <GetInTouch />
      <Projects />
      <Services />
      <Testimonials />
      <Clients />
      <Blog />
    </>
  );
}
