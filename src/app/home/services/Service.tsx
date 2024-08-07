import Image from "next/image"

interface Props{
    title:string;
    description:string;
    image:string;
}

const Service = (props:Props) =>{
    const {title,description, image} = props
    return(
        <div className="bg-white md:p-4 flex md:flex-row flex-col md:gap-8 min-w-fit md:min-w-[60%] md:items-end h-full md:justify-between shadow-sm"> 
                <div className="flex flex-col gap-4 md:w-1/2 h-fit p-8">
                    <h2 className="text-xl font-medium">{title}</h2>
                    <p className="text-gray-500 text-sm font-light">{description}</p>
                </div>
                <div className="md:w-1/2 h-full md:p-0 p-4">
                    <Image
                        alt={image}
                        className="w-full h-full aspect-square object-fit"
                        width={400}
                        height={400} 
                        src={image}/>
                </div>
        </div>
    )
}

export default Service