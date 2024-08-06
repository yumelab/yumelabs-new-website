import Innovation from "./home/InnovationDum";
import Work from "./home/Work";
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
      <Work />
      <Services />
      <Testimonials/> 
      <Contact/>
      <Footer />
    </main>
  );
}
