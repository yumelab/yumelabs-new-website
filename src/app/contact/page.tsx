import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer"; 
import Section from "@/components/Section"; 
import MailForm from '@/components/MailForm'; 
import Engage from "../about/Engage";

import PritamSaha from '@/assets/founders/pritam.png'

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Yume Labs is a boutique UX/UI Design, Identity Design, and Industrial Design agency in Bangalore, India helping ambitious brands scale globally through Experience-led Growth.",
};

const Contact = () =>{
    return(
        <main className="container md:max-w-screen-xl mx-auto px-8 md:px-0 flex flex-col">
            <div className="">
            <h2 className="md:text-4xl text-2xl font-medium md:w-2/3 leading-tight text-black">Ready to Simplify Your Next?</h2> 
            <p>We’re step one on your journey to a brand that stands apart!</p>
            </div>
            <section className="grid grid-cols-2 md:gap-32 gap-16 md:py-32 py-16"> 
                <div className="relative flex flex-col items-end gap-4">
                    <h6 className="text-xl text-gray-900">
                        I read every message. I will personally get back to you within 12 hours. (Add my image) 
                    </h6>
                    <p>- Pritam Saha, Chief Executive Officer</p>
                    <div>
                        <Image
                            alt="pritam-saha-contact-us"
                            src={PritamSaha}
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
                <div className="">
                <MailForm/>
                </div> 
            </section>
            <Engage/> 
            <Footer/>
        </main>
    )
}

export default Contact