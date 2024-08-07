
import Link from "next/link";
import Image from "next/image";

import Focus from "./Focus";
import Button from "@/components/Button";

import ProductInnovation from "@/assets/innovation/product-innovation.svg";
import IndustrialDesign from "@/assets/innovation/industrial-design.webp";
import UXUI from "@/assets/innovation/uiux.webp";

import { AppRoutes } from "@/constants/routes";
import {FocusList} from "@/data/focus"

const Main = () => {
  const FocusImages = [ProductInnovation,UXUI,IndustrialDesign]
  return (
    <section className="flex gap-4 md:flex-row flex-col md:py-32 min-h-fit">
      <div className="md:w-1/3 bg-gray-100 p-9 rounded-lg flex flex-col md:gap-24 gap-16">
        <div className="flex flex-col md:gap-8 gap-4">
            <h2 className="md:text-4xl text-2xl font-medium">
            Innovation is the New Marketing.
            </h2>
            <p className="text-gray-300 md:text-base text-sm">
            Build your brand moat with us and leave the competition in the dust.
            </p>
        </div>
        <Link href={AppRoutes.CONTACT_US}>
          <Button
            variant="text" 
            style="solid" 
            label="All our services" 
            type="button" 
            texticon={true}
            size="sm" />
        </Link>
      </div>

      {
        FocusList.map((foc,i)=>(
          <Focus
            key={i}
            title={foc.title}
            alt={foc.alt}
            image={FocusImages[i].src}
          />
        ))
      }
      {/* <div className="flex-1 bg-gray-100 px-8 py-16 rounded-lg overflow-hidden relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-[70%] overflow-hidden">
            <Image 
                className="object-contain w-full h-full transform transition duration-500 hover:scale-125"
                width={300} 
                height={300}
                src={product_innovation_img.src}
                alt="product_innovation_img" 
                />
        </div> 
        <h4 className="absolute left-0 bottom-8 text-sm text-gray-400 text-center w-full">Product Innovation</h4>
      </div>
      <div className="flex-1 bg-gray-100 px-8 py-16 rounded-lg overflow-hidden relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-[150%] overflow-hidden">
        <Image 
            className="object-contain w-full h-full transform transition duration-500 hover:scale-125" 
            width={300} 
            height={300}
            src={ux_ui_img.src}
            alt="ux_ui_img" 
            />
        </div> 
        <h4 className="absolute left-0 bottom-8 text-sm text-gray-400 text-center w-full">UX/UI</h4>
      </div> 
      <div className="flex-1 bg-gray-100 px-8 py-16 rounded-lg overflow-hidden relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-[150%] overflow-hidden">
            <Image 
                className="object-contain w-full h-full transform transition duration-500 hover:scale-125"
                width={300} 
                height={300}
                src={industrial_design_img.src}
                alt="industrial_design_img" 
            />
        </div> 
        <h4 className="absolute left-0 bottom-8 text-sm text-gray-400 text-center w-full">AI Experience</h4>
      </div> */}
    </section>
  );
};

export default Main;
