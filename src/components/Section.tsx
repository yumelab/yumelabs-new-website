interface Props{ 
    subtitle:string, 
    title:string, 
    width?:string;
}

const Section = (props:Props) =>{
    const {subtitle,title,width = '2/3'} = props  
    return(
        <div className="flex flex-col gap-4">
            <span className="text-sm italic text-black">{subtitle}</span>
            <div className="h-[1px] bg-gray-200 w-full"></div>
            <h2 className={`md:w-${width} md:text-4xl text-2xl font-medium md:leading-tight text-black`}>{title}</h2>
        </div>
    )
}

export default Section