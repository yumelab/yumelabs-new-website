import Link from "next/link"; 
import Footer from "@/components/Footer"; 
import { AppRoutes } from '@/constants/routes';  

const NotFound = () =>{
    return(
        <main className="container md:max-w-screen-xl mx-auto md:gap-32 px-8 md:px-0 flex flex-col"> 
             <section className="h-screen flex flex-col gap-16 justify-center">
                <h1 className="text-8xl">Don't worry! You are not lost. You've just found our secret page.</h1>  
                <div className="flex gap-8 items-center"> 
                    <h4 className="whitespace-nowrap font-semibold text-gray-600">Try our other pages</h4>
                    <Link
                        className='max-w-fit h-full whitespace-nowrap text-slate-500 text-sm border rounded-full px-12 py-4'
                        href={AppRoutes.ABOUT_US}>
                        Work
                    </Link> 
                    <Link
                        className='max-w-fit h-full whitespace-nowrap text-slate-500 text-sm border rounded-full px-12 py-4'
                        href={AppRoutes.ABOUT_US}>
                        About Us
                    </Link> 
                    <Link
                        className='max-w-fit h-full whitespace-nowrap text-slate-500 text-sm border rounded-full px-12 py-4'
                        href={AppRoutes.SERVICES}>
                        Services
                    </Link> 
                </div>
             </section>
            <Footer/>
        </main>
    )
}

export default NotFound