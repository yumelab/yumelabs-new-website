import {Noto_SD} from '@/app/fonts'
import {SectionType} from '@/types'

interface Props{
    data:SectionType
}

const SubSection = (props:Props) =>{
    const {data} = props
    return(
        <div className="flex flex-col gap-4">
            <span className={`${Noto_SD.className} text-sm md:text-xl font-semibold`}>{data.section}</span>
            <div className="h-[1px] bg-gray-200 w-full md:mb-24 mb-8"></div>
            <div className='flex flex-col gap-8 md:flex-row md:justify-between'>
                <h2 className="md:text-4xl text-2xl font-medium md:leading-tight text-black md:w-[25%]">{data.title}</h2>
                <h2 className="md:text-base text-sm  md:leading-normal text-black md:w-[70%]">{data.description}</h2>
            </div>
        </div>
    )
}

export default SubSection;