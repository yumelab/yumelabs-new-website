// import ButtonGrad from "@/components/ButtonsGrad";
import Link from "next/link";
import Image from "next/image" 

import { AppRoutes } from '@/constants/routes'; 
import Button from "@/components/Button";

interface ComponentProps{
    title: string;
    desccription:string; 
    image:string;
    overlay:string;
    opacity:string;
}

const Offerings = (props:ComponentProps) =>{
    const {title,desccription,image,overlay, opacity} = props  
    return(
        <div className="relative flex flex-col md:gap-8 gap-4 md:py-16 md:px-16 md:p-8 p-4 overlay overflow-hidden">
            <div className="absolute top-0 left-0  w-full h-full -z-10">
                <Image
                    alt="project"
                    className="object-cover w-full h-full aspect-auto"
                    width={400}
                    height={400} 
                    src={image}/>
            </div>
            <h2 className="md:text-4xl text-2xl z-30 text-white">{title}</h2>
            <p className="md:w-2/3 z-30 text-white text-xs md:text-base">{desccription}</p> 
            <Link
                className="z-30"
                href={AppRoutes.CONTACT_US}>
                    <Button
                        label="Contact Us"
                        variant="text"
                        style="solid"
                        size="md"
                        type="button"
                        />  
            </Link>
        </div>
    )
}

export default Offerings