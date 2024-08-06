import Image from "next/image"

interface Props{
    title:string;
    process:Array<string>;
    image:string
}

const Method = (props:Props) =>{
    const {title, process,image} = props
    return (
        <div className="flex flex-col gap-8 flex-1 py-16 px-8 relative overflow-hidden group outline outline-1 outline-gray-300 hover:outline-gray-400">
            <div className="absolute bottom-0 right-0 -z-10 w-1/2">
                <Image
                    alt="project"
                    className="object-cover w-full h-full transform transition duration-500 group-hover:scale-125"
                    width={200}
                    height={200} 
                    src={image}/>
            </div>
            <h2 className="text-2xl font-medium">{title}</h2>
            <ul className="flex flex-col gap-2">
                {
                   process.map((item,i)=>(
                    <li key={i}>{item}</li>
                   ))
                }
            </ul>
        </div>
    )
}

export default Method