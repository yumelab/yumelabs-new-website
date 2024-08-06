// import ButtonGrad from "@/components/ButtonsGrad";
import Link from "next/link";
import Image from "next/image"
import Button from "@/components/Button";

import { AppRoutes } from '@/constants/routes'; 

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
        <div className="relative flex flex-col gap-8 md:py-16 md:px-16 p-8 text-white overlay">
            <div className="absolute top-0 left-0 rounded-2xl w-full h-full -z-10">
                <Image
                    alt="project"
                    className="object-cover w-full h-full aspect-auto"
                    width={400}
                    height={400} 
                    src={image}/>
            </div>
            <h2 className="text-4xl z-30">{title}</h2>
            <p className="md:w-2/3 z-30">{desccription}</p> 
            <Link
                className="z-30"
                href={AppRoutes.CONTACT_US}>
                <Button
                    label='Contact Us' 
                    type='button'
                    size="xs"
                    style={false}
                />
            </Link>
        </div>
    )
}

export default Offerings