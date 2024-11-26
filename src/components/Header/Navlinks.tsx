 
import Link from "next/link"; 
import { AppRoutes } from '@/constants/routes';  
import Button from '@/components/Button'; 

const NavLinks = () =>{   
    return(
        <div className="flex flex-col gap-8 md:flex-row md:gap-16 md:items-center">
            <Link
                className='w-full h-full whitespace-nowrap text-slate-500 text-sm md:hidden'
                href={AppRoutes.HOME_PAGE}>
                Home
            </Link> 
            <Link
                className='w-full h-full whitespace-nowrap text-slate-500 text-sm'
                href={AppRoutes.CASE_STUDY}>
                Case Studies
            </Link>  
            <Link
                className='w-full h-full whitespace-nowrap text-slate-500 text-sm'
                href={AppRoutes.SERVICES}>
                Services
            </Link> 
           <Link
                className='w-full h-full whitespace-nowrap text-slate-500 text-sm'
                href={AppRoutes.ABOUT_US}>
                About Us
            </Link> 
            <Link 
            className="whitespace-nowrap"
                href={AppRoutes.CONTACT_US}>
                    <Button
                        label="Contact Us"
                        variant="text"
                        style="solid"
                        size="xs"
                        type="button"
                        /> 
            </Link>    
        </div>
    )
}

export default NavLinks