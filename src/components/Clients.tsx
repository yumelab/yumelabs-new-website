import Image from "next/image"; 
import {ClientList} from '@/data/clients';  
import '../components/Banner/styles.css';

const Clients = () =>{
    return (
        <section className="mt-16">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {
                        ClientList.map((client,i)=>(
                            <li key={i} className="">
                                <Image
                                    className="transition-all grayscale hover:grayscale-0 h-12"
                                    src={`/clients/${client}.svg`} 
                                    width={100} 
                                    height={100} 
                                    alt={client} />
                            </li>
                        ))
                    }
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {
                        ClientList.map((client,i)=>(
                            <li key={i} className="">
                                <Image
                                    className="transition-all grayscale hover:grayscale-0 h-12"
                                    src={`/clients/${client}.svg`} 
                                    width={100} 
                                    height={100} 
                                    alt={client} />
                            </li>
                        ))
                    }
                </ul> 
            </div>
        </section>
    )
}

export default Clients