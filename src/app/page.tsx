import Innovation from "./home/innovation";
import Work from "./home/Work";
import Reels from "./home/Reels";
import Hero from "./home/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Testimonials from "./home/Testimonials";
import Engage from "@/components/Engage";
// import ButtonF from "@/components/ButtonF";
// import Contact from "@/components/Contact";
// import Services from "./home/services";
// import Insights from "./home/insights";
import GetEdge from "./home/GetEdge";

export default function Home() {
  return (
    <main className="container md:max-w-screen-xl flex flex-col mx-auto px-8">
      <Hero />
      <Reels /> 
      <Innovation />
      <Clients/>
      <Work />
      {/* <Services /> */}
      <GetEdge/>
      <Testimonials/> 
      {/* <Insights/> */}
      {/* <Contact/> */}
      <Engage/>
      <Footer />
    </main>
  );
}
