import Section from "@/components/Section"
import Partner from "./Partner"
import {PartnersList} from '@/data/partners'

import Primathon from '@/assets/partners/primathon.jpg'
import ProducXperts from '@/assets/partners/default.webp'
import Approlabs from '@/assets/partners/approlabs.svg'

const Partners = () =>{
    const partnerLogos = [Primathon, ProducXperts, Approlabs]
    return(
        <section className="flex flex-col gap-16 md:py-32">
            <Section
                subtitle="Partners"
                title="Our Partners are passionate about creating a better world through technology and innovation."
            />
            <div  className="grid md:grid-cols-3 gap-16">
            {
                PartnersList.map((item,i)=>(
                    <Partner
                        key={i} 
                        image={partnerLogos[i].src}
                        name = {item.name}
                        details={item.details}
                        url={item.url}
                        />
                ))
            }
            </div>
        </section>
    )
}
export default Partners