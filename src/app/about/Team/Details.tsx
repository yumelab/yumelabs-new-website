'use client'
import { useEffect, useState, useRef } from "react" 
import {gsap} from 'gsap'
import { useGSAP } from "@gsap/react";

import Link from "next/link"
import Image from "next/image"

import Button from "@/components/Button"
import linked from '@/assets/social/linkedin.svg'

interface Props{
    name:string;
    role:string;
    quote:string;
    description:string;
    social:{ [key: string]: string };
    meeting:string
}

const Details = (props:Props) =>{
    const {name,role,quote,description, social,meeting} = props

    const teamRef = useRef<HTMLDivElement>(null)
    const quoteRef = useRef<HTMLHeadingElement>(null)
    const descriptionRef = useRef<HTMLParagraphElement>(null)

    useGSAP(()=>{
        const tl = gsap.timeline()
       
        tl.fromTo(
            teamRef.current,
            { xPercent: -100, opacity: 0 },
            { xPercent: 0, opacity: 1, duration: 0.1, ease: 'back.out' },
        ).fromTo(
            quoteRef.current,
            { xPercent: -100, opacity: 0 },
            { xPercent: 0, opacity: 1, duration: 0.3, ease: 'back.out' },
        ).fromTo(
            descriptionRef.current,
            { xPercent: -100, opacity: 0 },
            { xPercent: 0, opacity: 1, duration: 0.5, ease: 'back.out' },
        )
    },[name,quote,description])

    return (
        <div className="flex flex-col gap-8 justify-between h-full overflow-hidden">
            <div className="flex flex-col" ref={teamRef}>
                <Link href={social.linkedin} target='_blank' className="invert w-fit rounded-lg pb-4">
                    <Image
                        className="w-6 h-6"
                        src={linked} 
                        alt='linkedin logo'/>
                </Link>
                <h4 className="text-sm font-semibold">{name}</h4>
                <p className="text-sm text-gray-400">{role}</p>
            </div>
            <h3 className="text-sm md:text-lg leading-tight italic text-gray-500" ref={quoteRef}>{quote}</h3>
            <p className="text-xs text-gray-600 leading-normal" ref={descriptionRef}>{description}</p>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-end">
                <span className="text-sm font-medium">Talk to {name}</span> 
                <Link 
                    target="_blank"
                    href={meeting || ''}>
                   <Button
                        size="xs"
                        variant="text"
                        style="solid"
                        label="Book Meeting"
                        type="button"
                        />   
                </Link> 
            </div>
        </div>
    )
}

export default Details