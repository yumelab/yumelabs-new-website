
import Footer from "@/components/Footer"; 
import Section from "@/components/Section";
import Formcs from '@/components/Formcs';
import MailForm from '@/components/MailForm';
import TempButton from "@/components/TempButton";

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
            {/* <TempButton 
                img='arrow'
                variant="icon"
                style="solid"
                size="sm"
                type="button"
                /> 
            <TempButton 
                img='arrow'
                variant="icon"
                style="outline"
                size="sm"
                type="button"
                /> 

             <TempButton
                label="Get Started"
                variant="text"
                style="outline"
                size="xl"
                type="button"
                />     */}
            <Footer/>
        </main>
    )
}

export default Contact