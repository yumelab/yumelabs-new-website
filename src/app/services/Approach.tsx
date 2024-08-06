import {Methods} from '@/data/methods'
import Method from './Method'
import Innovate from '@/assets/approach/innovate.svg'
import Implement from '@/assets/approach/implement.svg'
import Improve from '@/assets/approach/improve.svg'

const Approach = () =>{
    const imageList = [
        Innovate,Implement,Improve
    ]
    return(
        <section className="flex flex-col gap-16 md:py-32 relative">
            <div className="absolute top-0 left-1/2 w-screen h-full bg-gray-100 -translate-x-1/2 -z-10"></div>
            <h2 className='text-4xl leading-tight font-medium'>Our <br /> Approach</h2>
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