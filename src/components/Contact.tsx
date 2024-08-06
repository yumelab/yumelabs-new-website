import Link from "next/link"; 
import Image from "next/image"
import Button from '@/components/Button';
import { AppRoutes } from '@/constants/routes';  

import contactGraphics from '@/assets/contact-us-graphics.webp'
import contactBackground from '@/assets/contact-us-bg.webp'

const Contact = () =>{
    return (
        <section className="max-h-fit flex items-center relative justify-between md:py-32 py-16">
            <div className="absolute top-0 left-1/2 w-screen h-full -translate-x-1/2 -z-10 opacity-40">
                <Image
                    alt="contact-us"
                    className="object-cover w-full h-full aspect-auto"
                    width={1280}
                    height={800} 
                    src={contactBackground}/>
            </div>
            <div className="md:w-1/3 flex flex-col gap-16">
                <div className="container">
                    <h4 className="text-gray-500">Have a dream for a better world?</h4>
                    <h2 className="md:text-6xl text-4xl font-medium text-gray-900">Let us make it real.</h2>
                </div>
                <Link 
                    href={AppRoutes.CONTACT_US}>
                    <Button
                        style={true} 
                        label='Get in Touch'
                        size='md'
                        type='button'
                    />
                </Link>  
            </div>
            <div className="md:inline-block md:w-1/2 h-full hidden">
                <Image
                    alt="contact-us"
                    className="w-full h-full aspect-auto"
                    width={400}
                    height={400} 
                    src={contactGraphics}/>
            </div>            
        </section>
    )
}

export default Contact