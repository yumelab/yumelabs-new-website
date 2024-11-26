import type { Metadata } from "next";
import Image from 'next/image' 
// import Partners from "./Parteners";
// import Workplace from "./Workplace";

import Hero from './Hero';
import YumeEdge from "@/app/home/GetEdge";
import OurValues from "./OurValues";
import Founders from "./Team";
import CompanyInfo from "./CompanyInfo";
import Engage from "@/components/Engage";
import Footer from "@/components/Footer";

import AboutBackground from '@/assets/bg-about.webp'

export const metadata: Metadata = {
    title: "About Us",
    description: "Yume Labs is a boutique UX/UI Design, Identity Design, and Industrial Design agency in Bangalore, India helping ambitious brands scale globally through Experience-led Growth.",
};

const About = () =>{
    return(
        <main className="container md:max-w-screen-xl mx-auto px-8 md:px-0 flex flex-col">
            <Hero/>
            <section className="md:h-[38rem] aspect-square md:aspect-auto shadow-sm">
                <Image
                    alt="contact-us"
                    className="object-cover w-full h-full rounded-lg"
                    width={1280}
                    height={800} 
                    src={AboutBackground}/>
            </section>
            <YumeEdge/> 
            <section className="h-[50vh] flex items-center justify-center">
                <h2 className="md:text-6xl text-3xl text-center bg-gradient-to-r from-indigo-700 via-red-300 to-pink-700 inline-block text-transparent bg-clip-text">We’re on a Mission to Humanize Adoption for “Tech That Matters”.</h2>
            </section>
            <OurValues/>
            <Founders/>
            <CompanyInfo/>
            <Engage/>
            {/* <Partners/> */}
            {/* <Workplace/>  */}
            <Footer />
        </main>
    )
}

export default About