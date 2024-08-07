import Link from "next/link"

import Section from "@/components/Section"
import Button from "@/components/Button"
import Insight from "./Insight"
import Highlight from "./Highlight"

import DummyImage from '@/assets/contact-us-graphics.webp'

import {RecentInsight,Highlighted} from '@/data/insights'
import {AppRoutes} from '@/constants/routes'


const Main = () =>{
    
    return(
        <section className="flex flex-col gap-16 py-32 relative">
            <Section
                title="Learn from our time in the trenches innovating for user advocacy."
                subtitle="Insights"
            />

            <div className="flex flex-col gap-2">
                <Highlight
                    title={Highlighted.title}/>

                <div className="flex gap-2">
                    {
                        RecentInsight.map((item,i)=>(
                            <Insight
                                key={i}
                                id={`0${i+1}`}
                                title={item.title}
                                category={item.category}
                                date={item.date}
                                cover={DummyImage.src}
                            />
                        ))
                    }
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <Link 
                    href={AppRoutes.SERVICES}>
                        <Button
                            label="Explore Service"
                            variant="text"
                            style="outline"
                            size="xl"
                            type="button"
                            texticon={true}
                            />   
                </Link>   
            </div>

        </section>
    )
}

export default Main