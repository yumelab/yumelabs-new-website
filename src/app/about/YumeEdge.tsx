import {OurEdge} from '@/data/edge'

const YumeEdge = () =>{
  const titleA = 'Give the'
  const titleB = '"Yume Labs Edge"'
 return (
    <section className="flex flex-col gap-32 max-h-fit  text-white py-32">
        <h2 className="md:text-4xl text-2xl font-medium leading-tight text-black w-2/3">{titleA} <br />{titleB}</h2>
        <div className="grid grid-cols-3 gap-32">
            {
                OurEdge.map((item,i)=>(
                    <div key={i} className='text-black flex flex-col gap-8'>
                        <h4 className='text-2xl font-medium'>{item.title}</h4>
                        <p className='text-gray-400 text-sm'>{item.description}</p>
                    </div>
                ))
            }
        </div>
    </section>
 )
}
export default YumeEdge