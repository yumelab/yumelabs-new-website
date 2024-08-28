'use client'
import { useEffect, useState, useRef } from "react" 
import {gsap} from 'gsap'
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import Comma from "@/assets/double-quotes.svg"

interface Props{
    message:string;
    name:string;
    role:string;
    company:string;
}

const Testimonial = (props:Props) =>{
    const {message, name, role, company} = props

    const messageRef = useRef<HTMLParagraphElement>(null)
    const detailsRef = useRef<HTMLDivElement>(null) 

    useGSAP(()=>{
        const tl = gsap.timeline()
       
        tl.fromTo(
            messageRef.current,
            { xPercent: -10, opacity: 0 },
            { xPercent: 0, opacity: 1, duration: 0.1, ease: 'back.out' },
        ).fromTo(
            detailsRef.current,
            { xPercent: -10, opacity: 0 },
            { xPercent: 0, opacity: 1, duration: 0.3, ease: 'back.out' },
        ) 

    },[message])

    return(
        <div className="flex flex-col gap-8 md:pl-24 pl-12 relative">
            <div className="absolute left-0">
                <Image
                    src={Comma.src}
                    className="md:w-12 w-8 opacity-25"
                    alt="comma"
                    width={100}
                    height={100}/>
            </div>
            <p ref={messageRef} className={`text-lg md:text-xl font-light italic text-gray-400`}>{message}</p>
            <div ref={detailsRef}>
                <h4 className="text-sm font-semibold">{name}</h4>
                <h6 className="text-sm text-gray-500">{role}</h6>
                <h6 className="text-sm text-gray-500">{company}</h6>
            </div>
        </div>
    )
}

export default Testimonial