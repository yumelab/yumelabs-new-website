import Banner from "@/components/Banner";
import Nav from '@/components/Header/Nav'; 
import Logo from '@/components/Logo'  

const Header = () =>{  
    return(
        <>
            <Banner/> 
            <header className="md:sticky fixed top-0 w-full z-40 md:py-1 py-0 bg-white drop-shadow-sm "> 
                <nav className='container md:max-w-screen-xl mx-auto flex justify-between flex-wrap items-center flex-row: mdpx-0 py-2'> 
                    <Logo
                        size="sm"
                        textlogo
                        iconlogo={false}
                        logostyle={false}
                    /> 
                    <Nav/>
                </nav>
            </header>
        </>
    )
}

export default Header