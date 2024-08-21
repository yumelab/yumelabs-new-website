import {Noto_SD} from '@/app/fonts'
const Hero = () =>{
    return(
        <section className="flex max-h-fit align-middle items-center md:py-32 py-16">
            <div className="flex flex-col gap-2 md:w-[80%]">
                <h2 className="md:text-5xl text-3xl md:leading-tight md:tracking-tight font-medium text-black">We’re Your Extended Team Simplifying</h2>
                <h2 className={`${Noto_SD.className} md:text-7xl  text-4xl font-normal`}>Breakthrough Experience & Innovation for Your Product.</h2>
            </div>
        </section>
    )
}
export default Hero