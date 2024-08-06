import Innovation from "./home/InnovationDum";
import Projects from "./home/Projects";
import Reels from "./home/Reels";
import Hero from "./home/Hero";
import Services from "./home/Services";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Clients from "@/components/Clients";
import Testimonials from "./home/Testimonials";

export default function Home() {
  return (
    <main className="container md:max-w-screen-xl flex flex-col mx-auto px-8">
      <Hero />
      <Reels />
      <Innovation />
      <Clients/>
      <Projects />
      <Services />
      <Testimonials/>
      <Contact/>
      <Footer />
    </main>
  );
}
