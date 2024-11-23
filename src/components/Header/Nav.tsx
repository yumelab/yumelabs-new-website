'use client'

import { useState,useEffect } from "react";
import NavLinks from '@/components/Header/Navlinks';

const Nav = () =>{ 
    const [isOpen,setOpen] = useState(false)

    const [dots, setDots] = useState([
        { style: "bg-blue-300", text: 'Div 1' },
        { style: "bg-pink-200", text: 'Div 2' },
        { style: "bg-indigo-400", text: 'Div 3' },
        { style: "bg-yellow-300", text: 'Div 4' },
    ]);

    const shuffleDivs = () => {
        const shuffledDivs = [...dots];
        for (let i = shuffledDivs.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledDivs[i], shuffledDivs[j]] = [shuffledDivs[j], shuffledDivs[i]];
        }
        setDots(shuffledDivs);
    };

    const toggleNavbar = () =>{
        setOpen(!isOpen)
        shuffleDivs();
    }

    useEffect(() => {
        shuffleDivs();
    }, [shuffleDivs]); 
     

    return(
        <>
            <div className='hidden md:flex flex-row items-center gap-4 md:w-fit py-8 md:py-0'>
                 <NavLinks/>
            </div> 
            <div className="grid grid-cols-2 gap-2 w-12 h-12 p-3 grid-rows-2 md:hidden" onClick={toggleNavbar} aria-hidden> 
                {
                    dots.map((item,i)=>(
                        <div key={i} className={`w-full h-full rounded-full ${item.style}`}></div>
                    )) 
                }
            </div>
            {isOpen && (
                <div className="flex basis-full flex-col gap-4 md:p-8 md:py-0 py-8" onClick={toggleNavbar}>
                    <NavLinks/>
                </div>
            ) 
            }   
        </>
    )
}

export default Nav