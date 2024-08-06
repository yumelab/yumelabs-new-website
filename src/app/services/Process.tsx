
import Image from "next/image"; 

interface ComponentProps{
    icon:string;
    section:string;
    title:string;
    description:string;
}

const Process = (props:ComponentProps) =>{
    const {section,title,description, icon} = props
    return(
        <div className="flex flex-col gap-4"> 
            {/* <Image 
                className='h-4 max-w-fit'
                src={icon}
                alt={title} /> */}
            {/* <span className="text-gray-400 text-xs">{section}</span> */}
            <h4 className="font-medium">{title}</h4>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    )
}

export default Process