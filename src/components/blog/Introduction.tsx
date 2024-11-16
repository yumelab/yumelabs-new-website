import {Noto_SD} from '@/app/fonts'
import {ProjectIntroduction} from '@/types'

interface Props{
    data:ProjectIntroduction; 
}

const Introduction = (props:Props) =>{
    const {data} = props
    return(
        <section className="flex flex-col gap-8 md:py-32 py-24">
            <span className={`${Noto_SD.className} md:text-xl font-semibold`}>{data.company}</span>
            <h1 className="text-3xl md:text-6xl leading-snug">{data.title}</h1>
            <p className="md:text-lg">{data.summary}</p>
        </section>
    )
}

export default Introduction