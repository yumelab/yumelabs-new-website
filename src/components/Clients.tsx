import Image from "next/image"; 
import {ClientList} from '@/data/clients';  
import '../components/Banner/styles.css';

const Clients = () =>{
    return (
        <section className="w-full inline-flex flex-nowrap overflow-hidden"> 
                <ul className="flex gap-12 justify-between flex-nowrap w-full animate-infinite-scroll">
                    {
                        ClientList.map((client,i)=>( 
                            <li key={i} className="flex items-center justify-center max-w-40 flex-shrink-0 opacity-35 transition-all duration-200">
                                <Image
                                    className="h-10 w-auto object-fill invert-0"
                                    src={`/clients/${client}.svg`} 
                                    width={100} 
                                    height={100} 
                                    alt={client} />
                            </li> 
                        ))
                    }
                    <li key="more-clients" className="h-12 text-3xl flex items-center justify-center bg-gradient-to-r from-red-100 to-blue-600 bg-clip-text text-transparent">{ClientList.length-8}+</li> 
                </ul>  
        </section>
    )
}

export default Clients