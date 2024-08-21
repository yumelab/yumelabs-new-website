import Image from "next/image"
import SendGraphic from "@/assets/sendGraphic.svg"
const Engage = () =>{
    return(
        <section className="flex flex-col gap-40 md:gap-0 md:flex-row justify-between md:h-[50vh] h-fit md:p-16 p-8 relative bg-black rounded-lg my-16">
            <div className="absolute top-0 left-1/2 md:w-[105%] w-screen h-full -translate-x-1/2 z-10">
                <Image
                    alt="contact-us"
                    className="object-contain w-full h-full aspect-auto"
                    width={800}
                    height={400} 
                    src={SendGraphic}/>
            </div>
            <h3 className="text-white md:text-4xl text-2xl md:w-1/3">If you resonate with our values, we want you!</h3>
            <p className="text-gray-500 self-end">Email us at <span className="underline text-white">nabarun@yumelabs.com</span> to <br /> apply to our team.</p>
        </section>
    )
}

export default Engage