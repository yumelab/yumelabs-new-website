import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

import SendGraphic from "@/assets/sendGraphic.svg"

import { AppRoutes } from '@/constants/routes';  

const Engage = () =>{
    return(
        <section className="flex flex-col gap-40 md:gap-0 md:flex-row justify-between md:h-[450px] h-fit md:p-16 p-8 relative bg-black rounded-lg my-16">
            <div className="absolute top-0 left-1/2 md:w-[105%] w-screen h-full -translate-x-1/2 z-10">
                <Image
                    alt="contact-us"
                    className="object-contain w-full h-full aspect-auto"
                    width={800}
                    height={400} 
                    src={SendGraphic}/>
            </div>
            <h3 className="text-white md:text-4xl text-2xl">Ready to Simplify Your Next?</h3>
            <Link 
                className="self-end z-20 rounded-full px-16 py-4 bg-gray-50 text-black hover:bg-gray-300"
                href={AppRoutes.SERVICES}>
                    Let&apos;s Chat 
            </Link>   
        </section>
    )
}

export default Engage