import Link from "next/link"
import Tag from "@/components/Tag"
import Image from "next/image"

interface Props{
    tags:string[],
    title:string,
    description:string,
    img:string;
    width?:string; 
    url:string;
}

const Project = (props:Props) =>{
    const  {tags,title,description,img,width="70%",url} = props
    return(
        <Link href={url}> 
            <div className="flex flex-col gap-4 md:pb-24 pb-12 break-inside-avoid">
                <div className="w-full overflow-hidden aspect-square rounded-md">
                    <Image
                        alt="project"
                        className="object-cover w-full h-full transform transition duration-500 hover:scale-125"
                        width={400}
                        height={400} 
                        src={img}/>
                </div> 
                <div className="flex flex-nowrap overflow-hidden overflow-x-scroll gap-3"> 
                    {
                        tags.map((tag,i)=>(
                            <Tag label={tag} key={i}/>
                        ))
                    }
                </div>
                <h2 className="text-2xl capitalize font-medium text-black">{title}</h2>
                <p className={`text-gray-500 w-[${width}] text-sm`}>{description}</p>
            </div>
        </Link>
    )
}

export default Project