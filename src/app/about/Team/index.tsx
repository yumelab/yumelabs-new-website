'use client'
import { useEffect, useState, useRef } from "react" 
import {gsap} from 'gsap'
import { Draggable } from 'gsap/dist/Draggable';  
import { useGSAP } from "@gsap/react";
import Image from "next/image"
import Section from "@/components/Section"
import {FoundersList} from '@/data/founders'
import Founder from "./Founder"
import Details from "./Details"
import Button from "@/components/Button"

import Pritam from "@/assets/founders/pritam.png"
import Abhinav from "@/assets/founders/abhinav.png"
import Nabarun from "@/assets/founders/nabarun.png"

import contactBackground from '@/assets/contact-us-bg.webp'

 gsap.registerPlugin(Draggable);

const Main = () =>{
    const [headshots,setHeadShots] = useState([Pritam,Abhinav,Nabarun])
    const [active,setActive] = useState(0) 
    const carouselRef = useRef<HTMLDivElement>(null)

    const nextSlide = () => {
        setActive((prevIndex) => (prevIndex + 1) % FoundersList.length);  
        // updatePos(1)
        rotateArray(1)
    };

    const prevSlide = () => {
        setActive((prevIndex) => (prevIndex - 1 + FoundersList.length) % FoundersList.length);  
        // updatePos(-1)
        rotateArray(-1)
    };

    const rotateArray = (direction:number) => {
        gsap.fromTo(headshots,{xPercent:0,opacity:0},{ 
            xPercent:100,
            opacity:1,
            ease:"elastic.inOut",
            onComplete: () => {
                if (direction === -1) {
                    // Rotate left
                  setHeadShots((prevArr) => [...prevArr.slice(1), prevArr[0]]); 
                } else if (direction === 1) {
                // Rotate right
                  setHeadShots((prevArr) => [prevArr[prevArr.length - 1], ...prevArr.slice(0, -1)]);
                }
            },
          });
      }

    return(
        <section className="flex flex-col gap-16 md:py-32 py-16">
            <Section
                subtitle="Our Team"
                title=""
            />
            <div className="flex gap-16">
                <div className="flex-1 flex flex-col items-end gap-4 overflow-hidden">
                    <div className="flex gap-2 items-end flex-1" ref={carouselRef}>
                        <div className="flex-1 rounded-lg">
                            <Image
                                className="object-cover w-full h-full bg-gray-100 rounded-lg"
                                src={headshots[0]}
                                alt="Founder"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="flex-1 rounded-lg">
                            <Image
                                className="object-cover w-full h-full bg-gray-100 rounded-lg"
                                src={headshots[1]}
                                alt="Founder"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="flex-1 rounded-lg relative ">
                                <Image
                                    alt="contact-us"
                                    className="object-cover w-full h-full absolute top-0 left-1/2 w-full h-full -translate-x-1/2"
                                    width={400}
                                    height={400} 
                                    src={contactBackground}/>
                            <Image
                                className="object-cover w-full h-full bg-gray-100 rounded-lg"
                                src={headshots[2]}
                                alt="Founder"
                                width={400}
                                height={400}
                            />
                        </div>

                        {/* <div className="w-[60%] flex gap-2"> 
                            <div className="flex-1 h-2/3 rounded-lg">
                                <Image
                                    className="object-cover w-full h-full bg-gray-100 rounded-lg"
                                    src={headshots[0]}
                                    alt="Founder"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="flex-1 h-2/3 rounded-lg">
                                <Image
                                    className="object-cover w-full h-full bg-gray-100 rounded-lg"
                                    src={headshots[1]}
                                    alt="Founder"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>  */}
                    </div>
                    <div className="flex gap-8 md:pl-24 pl-12"> 
                        <Button 
                            iconName="ArrowLeft"
                            variant="icon"
                            style="outline"
                            size="xs"
                            type="button"
                            onClick={prevSlide}/> 
                        <Button 
                        iconName="ArrowRight"
                            variant="icon"
                            style="solid"
                            size="xs"
                            type="button"
                            onClick={nextSlide}/>  
                    </div>
                </div>
                <div className="w-1/3">
                     <Details
                        name={FoundersList[active].name}
                        role={FoundersList[active].role}
                        quote={FoundersList[active].quote}
                        description={FoundersList[active].description}
                        social={FoundersList[active].social}
                        /> 
                </div> 
            </div>
        </section>
    )
}

export default Main