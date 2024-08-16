import {OurEdge} from '@/data/edge'

const YumeEdge = () =>{
  const titleA = 'Give the'
  const titleB = '"Yume Labs Edge"'
 return (
    <section className="flex flex-col md:gap-32 gap-16 max-h-fit  text-white py-32">
        <h2 className="md:text-4xl text-2xl font-medium leading-tight text-black w-2/3">{titleA} <br />{titleB}</h2>
        <div className="grid md:grid-cols-3 md:gap-32 gap-8">
            {
                OurEdge.map((item,i)=>(
                    <div key={i} className='text-black flex flex-col md:gap-8 gap-2'>
                        <h4 className='md:text-2xl text-lg font-medium'>{item.title}</h4>
                        <p className='text-gray-400 md:text-sm text-xs'>{item.description}</p>
                    </div>
                ))
            }
        </div>
    </section>
 )
}
export default YumeEdge