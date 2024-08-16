import Image from "next/image"

interface Props{
    title:string;
    process:Array<string>;
    image:string
}

const Method = (props:Props) =>{
    const {title, process,image} = props
    return (
        <div className="flex flex-col gap-4 md:gap-8 flex-1 md:py-16 md:px-8 p-8 relative overflow-hidden group outline outline-1 outline-gray-200 hover:outline-gray-200 rounded-lg">
            <div className="absolute bottom-0 right-0 -z-10 w-1/2">
                <Image
                    alt="project"
                    className="object-cover w-full h-full transform transition duration-500 group-hover:scale-125"
                    width={200}
                    height={200} 
                    src={image}/>
            </div>
            <h2 className="md:text-2xl text-lg font-medium text-black">{title}</h2>
            <ul className="flex flex-col gap-2">
                {
                   process.map((item,i)=>(
                    <li key={i} className="text-black text-xs md:text-base">{item}</li>
                   ))
                }
            </ul>
        </div>
    )
}

export default Method