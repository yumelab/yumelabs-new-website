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
}

const Details = (props:Props) =>{
    const {name,role,quote,description, social} = props
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
                <Link href={social.linkedin} target='_blank' className="invert w-fit rounded-lg pb-4">
                    <Image
                        className="w-6 h-6"
                        src={linked} 
                        alt='linkedin logo'/>
                </Link>
                <h4 className="text-sm font-semibold">{name}</h4>
                <p className="text-sm text-gray-400">{role}</p>
            </div>
            <h3 className="text-xl italic text-gray-500">{quote}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <div className="flex gap-8 items-center justify-end">
                <span className="text-sm font-medium">Talk to Nabarun</span>
                <Button
                    size="xs"
                    variant="text"
                    style="solid"
                    label="Book Meeting"
                    type="button"/>
            </div>
        </div>
    )
}

export default Details