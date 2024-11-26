interface Props{
    title:string;
    description:string;
}

const SectionInfo = (props:Props) =>{
    const {title,description} = props
    return( 
        <div className='flex flex-col gap-8 md:flex-row md:justify-between'>
            <h2 className="md:text-4xl text-2xl font-medium md:leading-tight text-black md:w-[25%]">{title}</h2>
            <h2 className="md:text-base text-sm  md:leading-normal text-black md:w-[70%]" dangerouslySetInnerHTML={{ __html: description }}/>
        </div> 
    )
}

export default SectionInfo;