import type { Metadata } from "next";
import Image from 'next/image'
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// import Partners from "./Parteners";
import Hero from './Hero';
import YumeEdge from "./YumeEdge";
import OurValues from "./OurValues";
import Founders from "./Founders/Founders";
import Workplace from "./Workplace";

import AboutBackground from '@/assets/bg-about.jpg'
import CompanyInfo from "./CompanyInfo";

export const metadata: Metadata = {
    title: "About Us",
    description: "Yume Labs is a boutique UX/UI Design, Identity Design, and Industrial Design agency in Bangalore, India helping ambitious brands scale globally through Experience-led Growth.",
};

const About = () =>{
    return(
        <main className="container md:max-w-screen-xl mx-auto px-8 md:px-0 flex flex-col">
            <Hero/>
            <CompanyInfo/>
            <section className="md:h-[38rem] aspect-square md:aspect-auto shadow-sm">
                <Image
                    alt="contact-us"
                    className="object-cover w-full h-full rounded-lg"
                    width={1280}
                    height={800} 
                    src={AboutBackground}/>
            </section>
            <YumeEdge/>
            <OurValues/>
            <Founders/>
            {/* <Partners/> */}
            <Workplace/>
            <Contact />
            <Footer />
        </main>
    )
}

export default About