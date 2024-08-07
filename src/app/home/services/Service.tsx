import Image from "next/image"

interface Props{
    title:string;
    description:string;
    image:string;
}

const Service = (props:Props) =>{
    const {title,description, image} = props
    return(
        <div className="grid grid-cols-2 gap-8 bg-white place-items-end min-w-[40%] p-2 rounded-md shadow-sm"> 
                <div className="col-span-1 flex flex-col gap-4 p-8">
                    <h2 className="text-xl font-medium">{title}</h2>
                    <p className="text-gray-500 text-sm font-light">{description}</p>
                </div>
                <div className="col-span-1 aspect-square h-full">
                    <Image
                        alt={image}
                        className="object-fit w-full h-full"
                        width={400}
                        height={400} 
                        src={image}/>
                </div>
        </div>
    )
}

export default Service