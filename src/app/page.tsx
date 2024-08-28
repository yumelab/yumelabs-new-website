import Innovation from "./home/innovation";
import Work from "./home/Work";
import Reels from "./home/Reels";
import Hero from "./home/Hero";
import Services from "./home/services";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Clients from "@/components/Clients";
import Testimonials from "./home/Testimonials";
import Insights from "./home/insights";
import Engage from "@/components/Engage";
import ButtonF from "@/components/ButtonF";

export default function Home() {
  return (
    <main className="container md:max-w-screen-xl flex flex-col mx-auto px-8">
      <Hero />
      <Reels /> 
      <Innovation />
      <Clients/>
      <Work />
      {/* <Services /> */}
      <Testimonials/> 
      {/* <Insights/> */}
      {/* <Contact/> */}
      <Engage/>
      <Footer />
    </main>
  );
}
