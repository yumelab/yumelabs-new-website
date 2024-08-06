 
import Link from "next/link"; 
import { AppRoutes } from '@/constants/routes';  
import Button from '@/components/Button';

const NavLinks = () =>{   
    return(
        <div className="flex gap-16 items-center">
            <Link
                className='w-full h-full whitespace-nowrap text-slate-500 text-sm'
                href={AppRoutes.OUR_WORK}>
                Work
            </Link> 
            <Link
                className='w-full h-full whitespace-nowrap text-slate-500 text-sm'
                href={AppRoutes.ABOUT_US}>
                About Us
            </Link> 
            <Link
                className='w-full h-full whitespace-nowrap text-slate-500 text-sm'
                href={AppRoutes.SERVICES}>
                Services
            </Link> 
            <Link 
                href={AppRoutes.CONTACT_US}>
                <Button
                    style
                    label='Contact Us'
                    size='xs'
                    type='button'
                />
            </Link>    
        </div>
    )
}

export default NavLinks