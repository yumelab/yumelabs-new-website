import { CompDetails } from "@/data/companyInfo"

const CompanyInfo = () =>{

    return (
        <section className="md:flex md:flex-row grid grid-cols-2 md:gap-16 gap-8 relative md:py-32 py-24 justify-between"> 
            <div className="absolute top-0 left-1/2 w-screen h-full border-t border-b -translate-x-1/2 -z-10"></div>
            {
                CompDetails.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <h4 className='text-gray-500'>{item.title}</h4>
                        <p className='text-black md:text-6xl text-4xl'>{item.value}</p>
                    </div> 
                ))
            } 
        </section>
    )
}

export default CompanyInfo