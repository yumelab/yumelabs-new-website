import Section from "@/components/Section"
import {FoundersList} from '@/data/founders'
import Founder from "./Founder"


import Pritam from "@/assets/founders/pritam.jpg"
import Abhinav from "@/assets/founders/abhinav.jpg"
import Nabarun from "@/assets/founders/nabarun.jpg"

const Founders = () =>{
    const headshots = [Pritam,Abhinav,Nabarun]
    return(
        <section className="flex flex-col gap-16 md:py-32 py-16">
            <Section
                subtitle="Founders"
                title="Our Founders are passionate about creating a better world through technology and innovation."
            />
            <div className="grid md:grid-cols-3 gap-16">
                {
                    FoundersList.map((item,i)=>(
                        <Founder
                            key={i}
                            picture={headshots[i].src}
                            name={item.name}
                            role={item.role}
                            social={item.social}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Founders