import Image from "next/image";
import Tag from "@/components/Tag";
import arrow from '@/assets/arrow_outward.svg'

interface Props{
    tags:Array<string>;
    title:string;
    description:string;
    bgImage:string;
}

const Offering = (props:Props) =>{
    const {title,description,bgImage,tags} = props
    return (
        <div className="flex flex-col justify-between rounded-2xl overflow-hidden"> 
            <div className="relative p-6 h-64">
                <h4 className="text-white max-w-fit">{title}</h4> 
                <div className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2 -z-10">
                    <Image
                        alt={title}
                        className="w-full object-contain absolute -top-1/2"
                        width={1280}
                        height={800} 
                        src={bgImage}/>
                </div> 
            </div>
            <div className="flex flex-col gap-8 bg-gray-50 p-6 rounded-b-2xl">
                <div className="md:text-lg"> 
                    {description}
                </div>
                <div className="flex flex-wrap gap-2">
                {
                    tags.map((tag,i)=>(
                        <Tag key={i} label={tag} size='xs'/>
                    ))
                }
                </div>
            </div> 
        </div>
    )
}
export default Offering;