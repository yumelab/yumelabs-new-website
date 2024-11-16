interface Props{
    title:string;
    description:string;
}
const InlineSection = (props:Props) =>{
    const {title, description} = props
    return(
        <div className='grid md:grid-cols-3 md:gap-16 gap-8'>
            <h4 className='md:text-2xl text-xl font-medium'>{title}</h4>
            <p className='col-span-2 md:text-base text-sm'>{description}</p>
        </div>
    )
}

export default InlineSection