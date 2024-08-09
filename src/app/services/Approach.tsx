import {Methods} from '@/data/methods'
import Method from './Method'
import Innovate from '@/assets/approach/innovate.svg'
import Implement from '@/assets/approach/implement.svg'
import Improve from '@/assets/approach/improve.svg'
import Section from '@/components/Section'

const Approach = () =>{
    const imageList = [
        Innovate,Implement,Improve
    ]
    return(
        <section className="flex flex-col gap-16 md:py-32 relative">
            <div className="absolute top-0 left-1/2 w-screen h-full bg-gray-50 -translate-x-1/2 -z-10"></div>
            <Section
            title="Discover how we strategically innovate, collaborating with you to shape your brand's future."
            subtitle='our approach'
            />
            <div className="flex gap-16">
                {
                    Methods.map((item,i)=>(
                        <Method
                            key={i}
                            title={item.title}
                            process={item.process}
                            image={imageList[i].src}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Approach