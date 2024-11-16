import Image from 'next/image'
import {OurEdge} from '@/data/edge';

import deeperInsight from '@/assets/approach/implement.svg'
import pioneeringInnovation from '@/assets/approach/innovate.svg'
import compellingDesing from '@/assets/approach/improve.svg' 

const GetEdge = () =>{
    const titleA = 'Get the'
    const titleB = '"Yume Labs Edge"'
    const CoverImage = [deeperInsight,pioneeringInnovation,compellingDesing]
    return(
        <section className="flex flex-col md:gap-16 gap-8 max-h-fit  text-white md:py-32 py-24">
            <h2 className="md:text-4xl text-2xl font-medium leading-tight text-black md:w-2/3">{titleA} <br />{titleB}</h2>
            <div className="grid md:grid-cols-3 md:gap-8 gap-8">
                {
                    OurEdge.map((item,i)=>(
                        <div className='text-black flex flex-col md:gap-6 gap-2 bg-gray-50 rounded-xl p-2' key={i}>
                            <div className='w-full h-52 flex justify-end bg-gray-100 rounded-lg'>
                                <Image
                                    src={CoverImage[i]}
                                    alt={`yume-labs-`+item.title}
                                    className='object-contain w-fit h-full'
                                    width = {10}
                                    height={10}
                                    />
                            </div>
                            <h4 className='md:text-2xl text-lg font-medium'>{item.title}</h4>
                            <p className='text-gray-400 md:text-sm text-xs'>{item.description}</p>
                        </div>                 ))
                }
            </div>
        </section> 
    )
}

export default GetEdge