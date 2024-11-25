'use client'

import { useState } from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


import ImageButton from "@/components/ImageButton"
import Section from "@/components/Section"
import Testimonial from "@/components/Testimonial"

import {Reviews} from "@/data/reviews"

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () =>{
    const [activeIndex, setActiveIndex] = useState(0)

    const tl = gsap.timeline();


    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % Reviews.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + Reviews.length) % Reviews.length);
    };

    return(
        <section className="flex flex-col gap-16 md:py-32 py-16">
            <Section
                subtitle="testimonial"
                title="Our customer brands see consistent return on design investment"/>

            <div className="flex flex-col md:gap-4 gap-8">
                <div className="flex flex-nowrap md:w-1/2 md:h-48"> 
                    <Testimonial 
                        name={Reviews[activeIndex].name} 
                        message={Reviews[activeIndex].message}
                        role={Reviews[activeIndex].role}
                        company={Reviews[activeIndex].company}
                        size="2xl"/> 
                </div>
    
                <div className="flex gap-8 md:pl-24 pl-12">
                    <ImageButton 
                        color="200"
                        onClick={prevSlide}
                        direction
                        size="sm"/>
                    <ImageButton 
                        color="300"
                        onClick={nextSlide}
                        direction={false}
                        size="sm"/>
                </div>
            </div>
        </section>
    )
}

export default Testimonials

// message:string;
// name:string;
// role:string;
// company:string;