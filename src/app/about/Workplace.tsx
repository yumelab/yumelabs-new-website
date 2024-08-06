import Image from "next/image"

import A from '@/assets/workplace/1.webp'
import B from '@/assets/workplace/2.webp'
import C from '@/assets/workplace/3.webp'
import D from '@/assets/workplace/4.webp'

const Workplace = () =>{
    return (
        <section className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 grid-rows-4 gap-2 md:py-32 py-16 h-screen ">
            <div className="col-span-1">
                <div className="w-full h-full ">
                    <Image
                        src={A.src}
                        className="w-full h-full object-cover"
                        alt="Workplace"
                        width={400}
                        height={400}
                    />
                </div>
            </div> 
            <div className="md:col-span-2">
                <div className="w-full h-full">
                    <Image
                        src={B.src}
                        className="w-full h-full object-cover md:aspect-auto"
                        alt="Workplace"
                        width={400}
                        height={400}
                        />
                </div>
            </div> 
            <div className="md:col-span-2">
                <div className="w-full h-full">
                    <Image
                        src={C.src}
                        className="w-full h-full object-cover"
                        alt="Workplace"
                        width={400}
                        height={400}
                        />
                </div>
            </div> 
            <div className="col-span-1">
                <div className="w-full h-full bg-red-200">
                    <Image
                        src={D.src}
                        className="w-full h-full object-cover"
                        alt="Workplace"
                        width={400}
                        height={400}
                    />
                </div>
            </div> 
        </section>
    )
}

export default Workplace