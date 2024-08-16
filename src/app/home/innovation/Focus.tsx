import Image from "next/image";

interface Props{
    title:string;
    image:string;
    alt:string;
}

const Focus = (props:Props) =>{
    const {title,image,alt} = props
    return(
        <div className="flex-1 min-h-fit bg-gray-100 px-8 py-16 rounded-lg overflow-hidden relative">
            <div className="absolute h-48 w-auto -right-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <Image 
                className="object-contain w-full h-full transform transition duration-500 hover:scale-125" 
                width={300} 
                height={300}
                src={image}
                alt={alt} 
                />
            </div> 
            <h4 className="md:absolute md:left-0 md:right-0 md:bottom-8 text-sm text-gray-400 md:text-center w-full whitespace-break-spaces md:whitespace-nowrap">{title}</h4>
        </div>
    )
}

export default Focus;