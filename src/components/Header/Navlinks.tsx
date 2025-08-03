'use client';

import Link from "next/link"; 
import { usePathname } from "next/navigation";
import { AppRoutes } from '@/constants/routes';  
import Button from '@/components/Button'; 

const NavLinks = () => {
    const pathname = usePathname();

    const isActive = (route: string) => pathname === route;

    const linkClass = (route: string) =>
        `w-full h-full whitespace-nowrap text-sm ${
            isActive(route) ? 'text-black font-medium' : 'text-slate-500'
        }`;

    return (
        <div className="flex flex-col gap-8 md:flex-row md:gap-16 md:items-center">
            <Link className={linkClass(AppRoutes.HOME_PAGE)} href={AppRoutes.HOME_PAGE}>
                Home
            </Link>
            <Link className={linkClass(AppRoutes.CASE_STUDY)} href={AppRoutes.CASE_STUDY}>
                Case Studies
            </Link>
            <Link className={linkClass(AppRoutes.SERVICES)} href={AppRoutes.SERVICES}>
                Services
            </Link>
            <Link className={linkClass(AppRoutes.ABOUT_US)} href={AppRoutes.ABOUT_US}>
                About Us
            </Link>
            <Link className="whitespace-nowrap" href={AppRoutes.CONTACT_US}>
                <Button
                    label="Contact Us"
                    variant="text"
                    style="solid"
                    size="xs"
                    type="button"
                /> 
            </Link>    
        </div>
    );
};

export default NavLinks;
