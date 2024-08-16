'use client'

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Section from "@/components/Section";
import Service from "./Service";

import deeperInsight from '@/assets/services/deeper-insights.webp'
import pioneeringInnovation from '@/assets/services/pioneering-innovation.webp'
import compellingDesing from '@/assets/services/compelling-design.webp'
import aiInnovation from '@/assets/services/ai-innovation.webp'

import {ServicesList} from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const imageList = [
    deeperInsight,
    pioneeringInnovation,
    compellingDesing,
    aiInnovation,
  ]; 

  const cardsRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {   
      const amountToScroll = (cardsRef.current?.offsetWidth ?? 0 - window.innerWidth) + window.innerWidth/2
      const cards = gsap.utils.toArray(cardsRef.current?.children ?? [])  // added null array to set undefined 
      // const isMobile = window.innerWidth <= 768;
      // if (!isMobile) { 
        gsap.to(
          cards, 
            {
              x: -amountToScroll,
              ease: "Power4.easeOut", 
              scrollTrigger: {
                trigger: cardsContainerRef.current,
                start: "center center",   
                end:"+="+amountToScroll,
                pin:true, 
                pinSpacing:true,
                scrub: 0.1, // Smooth scrolling animation
                toggleActions: "play none none reverse", 
              }, 
              onStart: () => {
                // ScrollTrigger.refresh();
              }
            },
        );
    // } 
 
  },{scope: cardsContainerRef });
 

  return (
    <section className="flex flex-col gap-16 py-32 relative min-h-fit" ref={cardsContainerRef}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full bg-gray-50 -z-10"></div>
      <Section
        subtitle="our services"
        title="High-potential global brands trust Yume Labs for better customer advocacy, stronger investor trust, and higher media love."
      />
      <div ref={cardsRef}  className="flex flex-nowrap item-center space-x-10">  
              {
                  ServicesList.map((item,i)=>(
                    <Service 
                        key={i}
                        title={item.title}
                        description={item.description}
                        image={imageList[i].src}
                      />
                  ))
                } 
        </div> 
    </section>
  );
};

export default Main;
