interface Props{ 
    subtitle:string, 
    title:string, 
}

const Section = (props:Props) =>{
    const {subtitle,title} = props  
    return(
        <div className="flex flex-col gap-4">
            <span className="text-sm italic text-black">{subtitle}</span>
            <div className="h-[1px] bg-gray-200 w-full"></div>
            <h2 className="md:text-4xl text-2xl font-medium md:w-2/3 leading-tight text-black">{title}</h2>
        </div>
    )
}

export default Section