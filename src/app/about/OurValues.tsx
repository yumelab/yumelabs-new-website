import Image from "next/image"  

import contactBackground from '@/assets/bg-background.webp'
import Excellence from '@/assets/values/excellence.svg'
import CoCreation from '@/assets/values/co-creation.svg'
import Simplification from '@/assets/values/simplification.svg'

const OurValues = () => {

    return(
        <section className="grid md:grid-cols-2 md:gap-32 gap-16 max-h-fit  text-white md:py-32 py-24 relative">
            <div className="absolute top-0 left-1/2 w-screen h-full -translate-x-1/2 -z-10">
                <Image
                    alt="contact-us"
                    className="object-cover w-full h-full aspect-auto"
                    width={1280}
                    height={800} 
                    src={contactBackground}/>
            </div>
            <h2 className="md:text-4xl text-2xl font-medium leading-tight text-black md:w-2/3">Our Values Guide our Choices and Actions Daily.</h2>
            <div className="grid md:grid-cols-2 grid-rows-2 gap-2">
                <div className="flex flex-col gap-4 justify-end p-8 bg-white shadow-sm rounded-lg row-span-2 relative overflow-hidden aspect-square  md:aspect-auto">
                    <div className="absolute -top-4 -left-8 md:w-2/3 w-1/2 aspect-square z-10">
                        <Image
                            alt="contact-us"
                            className="w-full aspect-square"
                            width={200}
                            height={200} 
                            src={Excellence}/>
                    </div>
                    <h4 className="md:text-2xl text-lg font-medium text-black">Excellence</h4>
                    <p className="text-black text-sm ">Be at the edge of what&#39;s &quot;possible&quot; through continuous lifelong learning</p>
                </div>
                <div className="flex flex-col gap-4 justify-end p-8 shadow-sm rounded-lg bg-gradient-to-tr from-indigo-600 to-red-300 aspect-square">
                    <div className="h-8 w-8">
                        <Image
                            alt="contact-us"
                            className="w-full aspect-square"
                            width={200}
                            height={200} 
                            src={CoCreation}/>
                    </div>
                    <h4 className="md:text-2xl text-lg font-medium text-white">Co-Creation</h4>
                    <p className="text-white opacity-40 text-sm">Create together through positivity, relationships, and accountability.</p>
                </div>
                <div className="flex flex-col gap-4 justify-end p-8 bg-blue-700 shadow-sm rounded-lg aspect-square">
                    <div className="h-8 w-8">
                        <Image
                            alt="contact-us"
                            className="w-full aspect-square"
                            width={200}
                            height={200} 
                            src={Simplification}/>
                    </div>
                    <h4 className="md:text-2xl text-lg font-medium text-white">Simplification</h4>
                    <p className="text-white opacity-40 text-sm">Embrace first-principles thinking to reduce non-essential complexity.</p>
                </div>
            </div>
        </section>
    )
}

export default OurValues