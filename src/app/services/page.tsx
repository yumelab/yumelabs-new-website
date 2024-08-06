
'use client'

import React, { useRef, memo, useEffect, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; 

import Link from "next/link"
import Offerings from "./Offerings"
import DigitalBg from '@/assets/services/digital.webp'
import Process from "./Process"

import DummyImg from '@/assets/14.png'
import {ProjectsList} from "@/data/projects";
import Project from '@/components/Project' 

// import GetInTouch from '@/components/GetInTouch'
import Footer from "@/components/Footer";

import temp from '@/assets/services/temp.svg'

import { offerringProduct, offerringDigital, offerringAIExperiences} from '@/data/services'; 
import Hero from "../home/Hero" 
import Approach from './Approach';
import Contact from '@/components/Contact';


import AIDesign from '@/assets/services/ai-oppportunity-mapping.webp'
import ProductInnovation from '@/assets/services/product-innovation.webp'
import UXDesing from '@/assets/services/digital.webp'
 
// gsap.registerPlugin(ScrollTrigger)

type Content = {
    tags:string[];
    title:string;
    description:string;
}

import GoodFlows from '@/assets/work/good-flows.webp'
import TwentyTwoYards from '@/assets/work/twenty-two-yards.webp'
import DoItZero from '@/assets/work/do-it-zero.webp'

const ServicesHome = () =>{  
    const Projects = [GoodFlows,DoItZero,TwentyTwoYards]
    // const Images = [AIDesign, ProductInnovation, UXDesing]
    const menu = [{title:'AI Experince Design',route:'#ai'},{title:'Product Innovation',route:'#product'},{title:'Digital Design',route:'#design'}]
    const [active,setActive] = useState(0)

    // Update the activeNav state when the pathname changes.
    const handleClick = (index:number) => {
        setActive(index);
    };

    return(
        <main className="container md:max-w-screen-xl mx-auto px-8 md:px-0 flex flex-col"> 
            <Hero/>
            <section className="grid md:grid-cols-5 grid-cols-1 gap-8 md:-mt-16 pb-64 align-items:flex-start">
                <div className="col-span-1 flex md:flex-col gap-4 h-fit sticky top-24"> 
                    {
                        menu.map((item,i)=>(
                            <Link
                                key={i}
                                onClick={() => handleClick(i)}
                                className={`cursor-pointer md:text-2xl py-4 md:py-0 ${active === i ? 'text-gray-700' : 'text-gray-300'} `}
                                href={item.route}>
                                <span className='whitespace-break-spaces md:whitespace-nowrap'>{item.title}</span>
                            </Link>
                        ))
                    } 
                </div>
                <div className="md:col-start-3 md:col-span-3 flex flex-col md:gap-24"> 
                    <div id="ai" className="flex flex-col gap-8 md:pt-24"> 
                        <Offerings
                            title="AI Experince Design"
                            desccription="Yumelabs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems."
                            image={AIDesign.src}
                            overlay="yellow"
                            opacity="80"
                        />
                        <div className="grid md:grid-cols-2 gap-16">
                            {
                                offerringAIExperiences.map((item,i)=>(        
                                    <Process 
                                        key={i}
                                        icon={temp}
                                        section="product Innovation"
                                        title={item.title}
                                        description={item.description}
                                    />       
                                ))
                            }
                        </div>  
                    </div>
                    <div id="product" className="flex flex-col gap-8 md:pt-24">
                        <Offerings
                            title="Product Innovation"
                            desccription="Yumelabs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems."
                            image={ProductInnovation.src}
                            overlay="blue"
                            opacity="50"
                        />
                        <div className="grid md:grid-cols-2 gap-16">
                            {
                                offerringProduct.map((item,i)=>(        
                                    <Process 
                                        key={i}
                                        icon={temp}
                                        section="product Innovation"
                                        title={item.title}
                                        description={item.description}
                                    />       
                                ))
                            }
                        </div>  
                    </div>
                    <div id="design" className="flex flex-col gap-8 md:pt-24"> 
                        <Offerings
                            title="Digital Design"
                            desccription="Yumelabs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems."
                            image={DigitalBg.src}
                            overlay="red"
                            opacity="30"
                        />
                        <div className="grid md:grid-cols-2 gap-16">
                            {
                                offerringDigital.map((item,i)=>(        
                                    <Process 
                                        key={i}
                                        icon={temp}
                                        section="product Innovation"
                                        title={item.title}
                                        description={item.description}
                                    />       
                                ))
                            }
                        </div>        
                    </div>
                </div>
            </section> 
            <Approach/>
            <section className='flex flex-col gap-16 md:py-32'>
                <h2 className='text-4xl leading-tight font-medium'>Selected <br /> Projects</h2>
                <div className='flex gap-2 overflow-x-hidden'>
                    {
                        ProjectsList.filter((item,i) => i>3 ).map((project:Content,i)=>(
                            <div key={i} className='w-1/3'>
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