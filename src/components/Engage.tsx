import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

import BackgroundGraphic from "@/assets/bg-background.webp"
import SendGraphic from "@/assets/send.svg"

import { AppRoutes } from '@/constants/routes';  

const Engage = () =>{
    return(
        <section className="flex flex-col gap-40 md:gap-0 md:flex-row md:items-center md:justify-start justify-end  h-[450px] md:p-16 p-8 relative my-16">
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-full h-full -translate-x-1/2 z-10 overflow-hidden rounded-lg">
                <Image
                    className="object-cover w-full h-full"
                    alt="yume-labs-gradient-background"
                    src={BackgroundGraphic}
                />
            </div>
            <div className="absolute left-8 md:left-auto top-16 md:right-40 z-10"> 
                <Image 
                        alt="contact-us" 
                        width={80}
                        height={80} 
                        src={SendGraphic}/>
            </div>
            <div className="z-10 flex flex-col gap-16 ">
                <h3 className="text-black md:text-4xl text-2xl">Ready to Simplify <br /> Your Next?</h3>
                <Link  
                    href={AppRoutes.SERVICES}>
                        <Button
                            type="button"
                            label="Let's Chat"
                            style="solid"
                            size="md"
                            variant="text"
                            />
                </Link>  
            </div> 
        </section>
    )
}

export default Engage