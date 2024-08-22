import Tag from "@/components/Tag"
import Image from "next/image"

interface Props{
    tags:string[],
    title:string,
    description:string,
    img:string
}

const Project = (props:Props) =>{
    const  {tags,title,description,img} = props
    return(
        <div className="flex flex-col gap-4 md:pb-24 pb-12">
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
            <p className="text-gray-500 md:w-[80%] text-sm">{description}</p>
        </div>
    )
}

export default Project