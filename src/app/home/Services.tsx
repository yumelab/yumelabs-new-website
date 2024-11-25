import { useState } from "react";

import Section from "@/components/Section";
import {ServicesList} from "@/data/projects";
import Service from "./Service";
import deeperInsight from '@/assets/services/deeper-insights.webp'
import pioneeringInnovation from '@/assets/services/pioneering-innovation.webp'
import compellingDesing from '@/assets/services/compelling-design.webp'
import aiInnovation from '@/assets/services/ai-innovation.webp'

const Services = () => {
  const imageList = [
    deeperInsight,
    pioneeringInnovation,
    compellingDesing,
    aiInnovation,
  ]; 

  return (
    <section className="flex flex-col gap-16 py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full bg-gray-100 -z-10"></div>
      <Section
        subtitle="our services"
        title="High-potential global brands trust Yume Labs for better customer advocacy, stronger investor trust, and higher media love."
      />
      <div className="flex flex-nowrap gap-16 overflow-x-scroll"> 
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

export default Services;
