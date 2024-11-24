import SubSection from "@/components/SubSection"
import Image from "next/image"


import defaultImage from '@/assets/bg-background.webp'
import {SectionType} from '@/types'

interface Props{
    section:SectionType;
    path:string;
}
 
const Branding = (props:Props) =>{
    const  {section,path} = props
    const description = "We've also incorporated components and patterns inspired by spiritual and temple themes. These elements infuse the design with a sense of sacredness and reverence, enhancing the overall aesthetic and immersing users in a spiritually enriching experience. From intricate patterns reminiscent of traditional temple architecture to symbolic motifs representing spirituality, each component is thoughtfully designed to evoke a connection to the divine. This integration of spiritual elements not only reinforces the platform's purpose but also fosters a deeper engagement with users on their spiritual journey."
    const fw = false
    const des = "The color palette artfully blends shades of blue, violet, and green, evoking a harmonious and visually engaging experience. This palette conveys a sense of trustworthiness, innovation, and tranquility. Moving to typography, the deliberate selection of Work Sans lends a balanced and sophisticated touch to the design. "
    return(
        <section className="flex flex-col gap-16 md:py-32 py-24">
            <SubSection data={section}/>
            <div className={`${fw?'md:w-full':'md:w-[70%] md:ml-[30%]'} w-full flex flex-col gap-16`}>
                <div className="max-h-fit w-full">
                    <Image
                    className="w-full"
                    width={400}
                    height={400} 
                    alt={`cover-imgage-${section.title}`}
                    src={`../assets/${path}/typography.png`}
                    />
                </div>
                <p className="text-sm md:text-base">{description}</p>
             </div>
        </section>
    )
}

export default Branding