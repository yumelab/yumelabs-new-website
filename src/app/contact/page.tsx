import Footer from "@/components/Footer"; 
import Section from "@/components/Section"; 
import MailForm from '@/components/MailForm'; 

const Contact = () =>{
    return(
        <main className="container md:max-w-screen-xl mx-auto px-8 md:px-0 flex flex-col"> 
            <section className="flex md:flex-row flex-col md:gap-32 gap-16 md:py-32 py-16"> 
                <Section
                    subtitle="contact us"
                    title="Partner with Yume Labs. Simplify Your Next!"
                />
                <div className="md:w-1/2">
                <MailForm/>
                </div> 
            </section> 
            <Footer/>
        </main>
    )
}

export default Contact