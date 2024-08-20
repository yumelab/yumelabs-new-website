'use client'
import { useEffect, useState } from "react"
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


const Founders = () =>{
    const headshots = [Pritam,Abhinav,Nabarun]
    const [active,setActive] = useState(0)
 
    
    const nextSlide = () => {
        setActive((prevIndex) => (prevIndex + 1) % FoundersList.length); 
    };

    const prevSlide = () => {
        setActive((prevIndex) => (prevIndex - 1 + FoundersList.length) % FoundersList.length); 
    };

    useEffect(()=>{
        
    
    },[])
    

    return(
        <section className="flex flex-col gap-16 md:py-32 py-16">
            <Section
                subtitle="Our Team"
                title=""
            />
            <div className="flex gap-16">
                <div className="flex-1 flex flex-col items-end gap-4 overflow-hidden">
                    <div className="flex gap-2 items-end flex-1">
                            <div className="w-[60%] flex gap-2">
                                {/* {
                                    headshots.filter((item,i)=> i!=active).map((item,i)=>(
                                        <div className="flex-1 h-2/3 rounded-lg" key={i}>
                                            <Image
                                            className="object-cover w-full h-full bg-gray-100 rounded-lg"
                                            src={item}
                                            alt="Founder"
                                            width={400}
                                            height={400}
                                        />
                                        </div>
                                    ))
                                } */}
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
                            </div>
                            <div className="flex-1 h-[50vh] relative flex rounded-lg overflow-hidden">
                                <div className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2">
                                    <Image
                                        alt="contact-us"
                                        className="object-cover w-full h-full"
                                        width={400}
                                        height={400} 
                                        src={contactBackground}/>
                                </div>
                                <Image 
                                    src={headshots[2]}
                                    className="w-full h-full object-cover z-10"
                                    alt="Founder"
                                    width={400}
                                    height={600}
                                />
                            </div>
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

                {/* {
                    FoundersList.map((item,i)=>(
                        <Founder
                            key={i}
                            picture={headshots[i].src}
                            name={item.name}
                            role={item.role}
                            social={item.social}
                        />
                    ))
                } */}
            </div>
        </section>
    )
}

export default Founders