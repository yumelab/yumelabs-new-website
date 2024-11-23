import Image from 'next/image'
import {OurEdge} from '@/data/edge';

import Invested from '@/assets/edge/invested.png' 
import Inventive from '@/assets/edge/inventive.png' 
import Integrated from '@/assets/edge/integrated.png'

const GetEdge = () =>{
    const titleA = 'Get the "Yume Labs Edge"' 
    const CoverImage = [Invested,Inventive,Integrated]
    return(
        <section className="flex flex-col md:gap-16 gap-8 max-h-fit  text-white md:py-32 py-24">
            <h2 className="md:text-4xl text-2xl font-medium leading-tight text-black md:w-2/3">{titleA}</h2>
            <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4 grid-cols-1">
                <div className="md:aspect-square col-span-1 row-span-2 md:place-content-end place-content-center px-24 py-20 rounded-lg relative overflow-hidden">
                    <div className="absolute w-full h-full top-0 left-1/2 -translate-x-1/2 -z-10">
                        <Image src={CoverImage[0]} alt="Integrated" width={400} height={400} className='w-full h-full object-cover'/>
                    </div>
                    <h4 className='md:text-2xl text-lg font-medium py-4 text-white'>{OurEdge[0].title}</h4>
                    <p className='text-white md:text-sm text-xs'>{OurEdge[0].description}</p>
                </div>
                <div className='cols-span-1 row-span-1 place-content-center px-24 rounded-lg relative overflow-hidden'>
                    <div className="absolute w-full h-full top-0 left-1/2 -translate-x-1/2 -z-10">
                        <Image src={CoverImage[1]} alt="Integrated" width={400} height={400} className='w-full h-full object-cover'/>
                    </div>
                    <h4 className='md:text-2xl text-lg font-medium py-4 text-gray-800'>{OurEdge[1].title}</h4>
                    <p className='text-gray-400 md:text-sm text-xs'>{OurEdge[1].description}</p>
                </div>
                <div className='cols-span-1 row-span-1 place-content-center px-24 rounded-lg relative overflow-hidden'>
                    <div className="absolute w-full h-full top-0 left-1/2 -translate-x-1/2 -z-10">
                        <Image src={CoverImage[2]} alt="Integrated" width={400} height={400} className='w-full h-full object-cover'/>
                    </div>
                    <h4 className='md:text-2xl text-lg font-medium py-4 text-gray-800'>{OurEdge[2].title}</h4>
                    <p className='text-gray-400 md:text-sm text-xs'>{OurEdge[2].description}</p>
                </div>
            </div>
        </section> 
    )
}

export default GetEdge