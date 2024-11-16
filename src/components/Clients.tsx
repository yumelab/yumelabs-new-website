import Image from "next/image"; 
import {ClientList} from '@/data/clients';  
import '../components/Banner/styles.css';

const Clients = () =>{
    return (
        <section className="mt-16">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex gap-16 animate-infinite-scroll flex-nowrap">
                    {
                        ClientList.map((client,i)=>(
                            <li key={i} className="flex items-center justify-center flex-shrink-0 max-w-40">
                                <Image
                                    className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-200"
                                    src={`/clients/${client}.svg`} 
                                    width={100} 
                                    height={100} 
                                    alt={client} />
                            </li>
                        ))
                    }
                </ul>
                {/* <ul className="flex gap-16 animate-infinite-scroll flex-nowrap">
                    {
                        ClientList.map((client,i)=>(
                            <li key={i} className="flex items-center justify-center flex-shrink-0 max-w-40">
                                <Image
                                    className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-200"
                                    src={`/clients/${client}.svg`} 
                                    width={100} 
                                    height={100} 
                                    alt={client} />
                            </li>
                        ))
                    }
                </ul>  */}
            </div>
        </section>
    )
}

export default Clients