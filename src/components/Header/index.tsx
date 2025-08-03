import Banner from "@/components/Banner";
import Nav from '@/components/Header/Nav'; 
import Logo from '@/components/Logo'  

const Header = () =>{  
    return(  
        <header className="md:sticky fixed top-0 left-0 right-0 w-full z-40 md:py-1 py-0 backdrop-blur-lg"> 
            <nav className='container md:max-w-screen-2xl mx-auto flex justify-between flex-wrap items-center flex-row md:px-24 px-4 py-4'> 
                <Logo
                    size="sm"
                    theme="light"
                    textlogo
                    iconlogo={false} 
                /> 
                <Nav/>
            </nav>
        </header> 
    )
}

export default Header