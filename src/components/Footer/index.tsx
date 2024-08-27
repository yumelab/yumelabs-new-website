import Copyright from "./Copyright" 
import Link from "next/link";
import { AppRoutes } from '@/constants/routes';
import Logo from "../Logo";

const Footer = () =>{
    return(
        <section className="max-h-fit  text-white pt-32 pb-8 flex flex-col md:gap-32 gap-16 relative">
            <div className="absolute top-0 left-1/2 w-screen h-full bg-black -translate-x-1/2 -z-10"></div>
            <div className="grid md:grid-cols-4 md:gap-32 gap-16">
                <div className="md:col-span-1 flex flex-col gap-8">
                 <Logo
                  size="sm"
                  textlogo={false}
                  iconlogo={false}
                  logostyle
                 />
                 <p className="text-lg text-gray-300 font">Dreams Deliverd.</p>
                </div>
                <div className="md:col-start-3 md:col-span-1 flex flex-col gap-6">
                    <div>
                        <span className="text-xs font-medium uppercase block">Email</span>
                        <Link href='mailto:discover@yumelabs.com' className="text-sm text-gray-300 font">
                            pritam@yumelabs.com
                        </Link>
                    </div> 
                    <div>
                        <span className="text-xs font-medium uppercase block">Phone</span>
                        <Link href='tel:8583035111' className="text-sm text-gray-300 font">
                            +91 98106 75713 
                        </Link>
                    </div>
                    <div> 
                        <span className="text-xs font-medium uppercase block">Address</span>
                        <p className="text-sm text-gray-300 font">
                        HubNxtDoor, SV Complex, Kothnur Main Road, 7th Phase, J.P. Nagar, Bengaluru 560078, Karnataka, India
                        </p> 
                    </div>
                </div> 
                <div className="col-span-1 flex flex-col text-sm gap-4 text-gray-300 font">
                    {/* <Link href={AppRoutes.OUR_WORK}>Work</Link> */}
                    <Link href={AppRoutes.SERVICES}>Services</Link>
                    {/* <Link href={AppRoutes.INSIGHTS}>Insights</Link> */}
                    <Link href={AppRoutes.ABOUT_US}>About Us</Link>
                    {/* <Link href={AppRoutes.LABS}>Labs</Link> */}
                    <Link href={AppRoutes.CONTACT_US}>Contact Us</Link>
                </div>
            </div>
            <Copyright/>
        </section>
    )

}

export default Footer