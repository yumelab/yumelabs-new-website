import {Noto_SD} from '@/app/fonts'
interface Props{
    title:string;
}

const SectionHeader = (props:Props) =>{
 const  {title} = props
 return(
        <>
            <span className={`${Noto_SD.className} text-sm md:text-xl font-semibold`}>{title}</span>
            <div className="h-[1px] bg-gray-200 w-full md:mb-24 mb-8"></div>
        </>
 )
}

export default SectionHeader