import Tag from "@/components/Tag"
import Image from "next/image"

interface Props{
    tags:string[],
    title:string,
    description:string,
    img:string
}

const ProjectSmall = (props:Props) =>{
    const  {tags,title,description,img} = props
    return(
        <div className="flex flex-col gap-4 pb-24">
            <div className="w-full overflow-hidden h-96">
                <Image
                    alt="project"
                    className="object-cover w-full h-full transform transition duration-500 hover:scale-125 rounded-md"
                    width={400}
                    height={400} 
                    src={img}/>
            </div>
            <div className="flex gap-3"> 
                {
                    tags.map((tag,i)=>(
                        <Tag label={tag} key={i}/>
                    ))
                }
            </div>
            <h2 className="text-2xl capitalize font-medium text-black">{title}</h2>
            <p className="text-gray-500 md:w-2/3 text-sm">{description}</p>
        </div>
    )
}

export default ProjectSmall