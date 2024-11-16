import ImagePanel from './ImagePanel';
import InlineSection from './InlineSection'
import {DefaultType} from '@/types'
interface Props{
    data: DefaultType; 
    path:string;
}

const Strategy = (props:Props) =>{
    const {data,path} = props
    return (
        <section className='flex flex-col gap-16 md:py-32 py-24'>
            <InlineSection title={data.title} description={data.description}/>
            <ImagePanel title={data.title}  imgSrc={`assets/${path}/strategy.png`} />

        </section>
    )
}

export default Strategy