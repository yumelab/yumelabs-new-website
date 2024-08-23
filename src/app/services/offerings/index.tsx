'use client'

import Link from "next/link"
import React, { useRef, memo, useEffect, useState } from 'react'; 

import Process from "./Process"
import Offerings from "./Offerings"

// process list under each category
import { offerringProduct, offerringDigital, offerringAIExperiences} from '@/data/services'; 

// cover images
import AIDesign from '@/assets/services/ai-oppportunity-mapping.webp'
import ProductInnovation from '@/assets/services/product-innovation.webp'
import DigitalBg from '@/assets/services/digital.webp'


import {FocusList} from "@/data/focus"

const Main = () =>{

    const [active,setActive] = useState(0)

    // Update the activeNav state when the pathname changes.
    const handleClick = (index:number) => {
        setActive(index);
    };

    const menuStyle = "text-xs whitespace-break-spaces leading-tighter md:whitespace-nowrap md:text-2xl md:leading-none cursor-pointer py-4 md:py-0"

    return ( 
        <section className="grid md:grid-cols-5 grid-cols-1 gap-8 md:py-32 py-24">
            <div className="col-span-1 flex md:flex-col gap-2 md:gap-4 h-fit sticky top-24 justify-between"> 
                {
                    FocusList.map((item,i)=>(
                        <Link
                            key={i}
                            onClick={() => handleClick(i)}
                            className={`${menuStyle} ${active === i ? 'text-gray-700' : 'text-gray-300'} `}
                            href={item.route}> 
                            {item.title}
                        </Link>
                    ))
                } 
            </div>
            <div className="md:col-start-3 md:col-span-3 flex flex-col md:gap-24 gap-16"> 
                <div id="ai-experiences" className="flex flex-col gap-8 scroll-my-24"> 
                    <Offerings
                        title={FocusList[0].title}
                        desccription={FocusList[0].description}
                        image={AIDesign.src}
                        overlay="yellow"
                        opacity="80"
                    />
                    <div className="grid md:grid-cols-2 md:gap-16 gap-8">
                        {
                            offerringAIExperiences.map((item,i)=>(        
                                <Process 
                                    key={i} 
                                    section="ai experiences"
                                    title={item.title}
                                    description={item.description}
                                />       
                            ))
                        }
                    </div>  
                </div>
                <div id="product-innovation" className="flex flex-col gap-8 scroll-my-24">
                    <Offerings
                        title={FocusList[1].title}
                        desccription={FocusList[1].description}
                        image={ProductInnovation.src}
                        overlay="blue"
                        opacity="50"
                    />
                    <div className="grid md:grid-cols-2 md:gap-16 gap-8">
                        {
                            offerringProduct.map((item,i)=>(        
                                <Process 
                                    key={i} 
                                    section="product innovation"
                                    title={item.title}
                                    description={item.description}
                                />       
                            ))
                        }
                    </div>  
                </div>
                <div id="experince-design" className="flex flex-col gap-8 scroll-my-24"> 
                    <Offerings
                        title={FocusList[2].title}
                        desccription={FocusList[2].description}
                        image={DigitalBg.src}
                        overlay="red"
                        opacity="30"
                    />
                    <div className="grid md:grid-cols-2 md:gap-16 gap-8">
                        {
                            offerringDigital.map((item,i)=>(        
                                <Process 
                                    key={i} 
                                    section="experience design"
                                    title={item.title}
                                    description={item.description}
                                />       
                            ))
                        }
                    </div>        
                </div>
            </div>
        </section> 
    )
}

export default Main