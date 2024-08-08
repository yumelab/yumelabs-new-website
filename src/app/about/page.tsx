import type { Metadata } from "next";
import Image from 'next/image'
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Founders from "./Founders";
import Partners from "./Parteners";
import Workplace from "./Workplace";

import AboutBackground from '@/assets/bg-about.jpg'
import Hero from './Hero';

export const metadata: Metadata = {
    title: "About Us",
    description: "Yume Labs is a boutique UX/UI Design, Identity Design, and Industrial Design agency in Bangalore, India helping ambitious brands scale globally through Experience-led Growth.",
};

const About = () =>{
    return(
        <main className="container md:max-w-screen-xl mx-auto px-8 md:px-0 flex flex-col">
            <Hero/>
            <section className="h-screen relative">
                <div className="absolute top-0 left-1/2 w-screen h-full -translate-x-1/2 -z-10">
                    <Image
                        alt="contact-us"
                        className="object-cover w-full h-full aspect-auto"
                        width={1280}
                        height={800} 
                        src={AboutBackground}/>
                </div>
            </section>
            <Founders/>
            <Partners/>
            <Workplace/>
            <Contact />
            <Footer />
        </main>
    )
}

export default About