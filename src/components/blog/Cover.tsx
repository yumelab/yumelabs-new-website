import Image from "next/image";
import defaultImage from '@/assets/bg-background.webp'

interface Props{
    projectName:string;
    imgSrc:string;
}

const Cover = (props:Props) =>{
    const {imgSrc,projectName} = props
    return(
        <section className="relative w-full md:h-screen h-96">
            <div className="w-screen h-full absolute top-0 left-1/2 -translate-x-1/2">
            <Image
                alt={`cover-imgage-${projectName}`}
                src={imgSrc || defaultImage}
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
            </div> 
        </section>
    )
}

export default Cover