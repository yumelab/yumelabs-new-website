import Innovation from "./home/innovation";
import Work from "./home/Work";
import Reels from "./home/Reels";
import Milestone from"./home/Milestones";
import HeroAI from "./home/HeroAI";
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
    <main className="container md:max-w-screen-2xl flex flex-col mx-auto md:px-24 px-4">
      <HeroAI />
      <Reels /> 
      <Clients/>
      <Innovation />
      <Milestone/>
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
