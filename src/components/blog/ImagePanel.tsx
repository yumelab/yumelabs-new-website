import Image from "next/image"
import defaultImage from '@/assets/bg-background.webp'

interface Props{
    title:string;
    imgSrc:string
}

const ImagePanel = (props:Props) =>{
    const {title,imgSrc} = props
    return ( 
        <section className="md:max-h-fit rounded-lg overflow-hidden">
            <Image
                className="object-cover w-full h-full aspect-square md:aspect-auto"
                alt={`blog-cover-${title}`}
                width={500}
                height={500}
                src={imgSrc || defaultImage}
            />
        </section>
    ) 
}

export default ImagePanel