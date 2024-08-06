
import { useState } from "react";
import NavLinks from '@/components/Header/Navlinks';

const Nav = () =>{ 
    const [isOpen,setOpen] = useState(false)
    
    const toggleNavbar = () =>{
        setOpen(!isOpen)
    }

    return(
        <>
            <div className='hidden md:flex flex-row items-center gap-4 md:w-fit py-8 md:py-0'>
                 <NavLinks/>
            </div> 
            <div className="w-8 h-8 py-2 px-1 flex flex-col align-middle justify-center gap-1 md:hidden" onClick={toggleNavbar} aria-hidden>
                <div className='w-full h-2 bg-blue-900'></div>
                <div className='w-full h-2 bg-blue-900'></div>
                <div className='w-full h-2 bg-blue-900'></div>
            </div>
            {isOpen && (
                <div className="flex basis-full flex-col gap-4 p-8">
                    <NavLinks/>
                </div>
            ) 
            }   
        </>
    )
}

export default Nav