import Image from "next/image";

interface Props{
    title:string;
    image:string;
    background:string;  
    alt:string; 
}

const Focus = (props:Props) =>{
    const {title,image,alt,background} = props 
    return(
        <div className="flex-1 min-h-fit p-8 rounded-lg overflow-hidden relative aspect-square bg-gray-100"> 
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-full h-full transform transition duration-500 hover:scale-110 hover:-translate-y-1/4"> 
            <Image 
                className="object-contain w-full h-fit" 
                width={500} 
                height={500}
                src={image}
                alt={alt} 
                />
            </div> 
            <h4 className="text-xl whitespace-break-spaces z-10 font-medium">{title}</h4> 
        </div>
    )
}

export default Focus;

// transform transition duration-500 hover:scale-125