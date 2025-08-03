const HeroAI = () =>{
    return(
        <section className="flex align-middle items-center py-16">
            <div className="md:flex md:justify-between w-full grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className="md:text-5xl text-3xl font-medium">25+</h2>
                    <p className="md:text-xl text-sm text-gray-500">Clients</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="md:text-5xl text-3xl font-medium">30+</h2>
                    <p className="md:text-xl text-sm text-gray-500">Projects</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="md:text-5xl text-3xl font-medium">6+</h2>
                    <p className="md:text-xl text-sm text-gray-500">Countries</p>
                </div> 
                <div className="flex flex-col gap-2">
                    <h2 className="md:text-5xl text-3xl font-medium">100%</h2>
                    <p className="md:text-xl text-sm text-gray-500">Customer Satisfaction</p>
                </div>
            </div>
        </section>
    )
}
export default HeroAI