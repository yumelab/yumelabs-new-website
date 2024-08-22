import {OurEdge} from '@/data/edge'
import Edge from './Edge'

import Invested from '@/assets/edge/invested.svg'
import Integrated from '@/assets/edge/integrated.svg'
import Inventive from '@/assets/edge/inventive.svg'

const Main = () =>{
  const titleA = 'Give the'
  const titleB = '"Yume Labs Edge"'
  const Icons = [Invested,Inventive,Integrated]
 return (
    <section className="flex flex-col md:gap-16 gap-8 max-h-fit  text-white md:py-32 py-24">
        <h2 className="md:text-4xl text-2xl font-medium leading-tight text-black md:w-2/3">{titleA} <br />{titleB}</h2>
        <div className="grid md:grid-cols-3 md:gap-32 gap-8">
            {
                OurEdge.map((item,i)=>(
                     <Edge
                        key={i}
                        title={item.title}
                        description={item.description}
                        icon={Icons[i].src}/>                ))
            }
        </div>
    </section>
 )
}
export default Main