import Image from 'next/image';

interface Props{
    title:string;
    description:string; 
    icon: string;
}

const Edge = (props:Props) =>{ 
    const {title, description,icon} = props 
    return ( 
        <div className='text-black flex flex-col md:gap-6 gap-2'>
            <Image
                src={icon}
                alt={`yume-labs-`+title}
                className='md:w-12 w-8'
                width = {10}
                height={10}
            />
            <h4 className='md:text-2xl text-lg font-medium'>{title}</h4>
            <p className='text-gray-400 md:text-sm text-xs'>{description}</p>
        </div> 
    )
}

export default Edge