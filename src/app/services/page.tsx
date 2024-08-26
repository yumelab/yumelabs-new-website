import type { Metadata } from "next";
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; 

import Offerings from "./offerings"
import {ProjectsList} from "@/data/projects"; 

// import GetInTouch from '@/components/GetInTouch'
import Footer from "@/components/Footer";

import Hero from "./Hero" 
import Approach from './Approach';
import Contact from '@/components/Contact';
 
// gsap.registerPlugin(ScrollTrigger)

type Content = {
    tags:string[];
    title:string;
    description:string;
}

import GoodFlows from '@/assets/work/good-flows.webp'
import TwentyTwoYards from '@/assets/work/twenty-two-yards.webp'
import DoItZero from '@/assets/work/do-it-zero.webp'
import Project from "@/components/Project";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Yume Labs is a boutique UX/UI Design, Identity Design, and Industrial Design agency in Bangalore, India helping ambitious brands scale globally through Experience-led Growth.",
};


const ServicesHome = () =>{  
    const Projects = [GoodFlows,DoItZero,TwentyTwoYards]

    return(
        <main className="container md:max-w-screen-xl mx-auto px-8 md:px-0 flex flex-col"> 
            <Hero/>
            <Offerings/>
            <Approach/>
            <section className='flex flex-col gap-16 md:py-32 py-24'>
                <h2 className='md:text-4xl text-2xl leading-tight font-medium whitespace-break-spaces'>
                    Selected 
                    Projects</h2>
                <div className='flex md:flex-row flex-col gap-2 overflow-x-hidden'>
                    {
                        ProjectsList.filter((item,i) => i>3 ).map((project:Content,i)=>(
                            <div key={i} className='md:w-1/3'>
                                <Project
                                    title={project.title}
                                    description={project.description}
                                    tags={project.tags}
                                    img={Projects[i].src}/>
                            </div>
                        ))
                    }
                </div>
            </section>
            <Contact/>
            <Footer/>
        </main>
    )
}

export default ServicesHome