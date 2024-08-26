import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";  
import MailForm from './MailForm'; 
import Engage from "@/components/Engage";

import PritamSaha from '@/assets/founders/pritam.png'

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Yume Labs is a boutique UX/UI Design, Identity Design, and Industrial Design agency in Bangalore, India helping ambitious brands scale globally through Experience-led Growth.",
};

const Main = () =>{
    const message = " I read every message. I will personally get back to you within 12 hours."
    return(
        <main className="container md:max-w-screen-xl mx-auto px-8 md:px-0 flex flex-col gap-8 md:gap-0">
            <div className="py-16 flex flex-col gap-4 md:py-32">
                <h2 className="md:text-5xl  text-3xl font-medium md:w-2/3 leading-tight text-black">Ready to Simplify Your Next?</h2> 
                <p>We’re step one on your journey to a brand that stands apart!</p>
            </div>
            <section className="grid md:grid-cols-2 md:gap-16 gap-8"> 
                <div className="flex flex-col min-h-fit items-center justify-start"> 
                    <div className="relative w-full md:h-full h-72 overflow-hidden">
                        <div  className="absolute top-0 left-0 rounded-full w-full h-full z-20 animate-spin-slow">
                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full rounded-full">
                                <path id="circlePath" fill="none" strokeWidth="0" d="
                                    M 10, 50
                                    a 40,40 0 1,1 80,0
                                    a 40,40 0 1,1 -80,0
                                    " />
                                <text fontSize="7">
                                <textPath id="textPath" href="#circlePath"> {message}</textPath>
                                </text>
                            </svg>
                        </div>
                        <div className="absolute flex items-center justify-center w-full h-full aspect-square p-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full overflow-hidden z-10">
                            <Image
                                alt="pritam-saha-contact-us"
                                className="object-contain aspect-square bg-gray-100 rounded-full"
                                src={PritamSaha}
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                    <p className="text-xs md:text-base">Pritam Saha, Chief Executive Officer</p>
                </div>
                <div className="flex gap-8 flex-col">
                    <h2 className="md:text-4xl text-2xl">How can we help?</h2>
                    <MailForm/>
                </div> 
            </section>
            <Engage/> 
            <Footer/>
        </main>
    )
}

export default Main