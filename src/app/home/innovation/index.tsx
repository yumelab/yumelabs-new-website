
import Link from "next/link";
import Image from "next/image";

import Focus from "./Focus";
import Button from "@/components/Button";

import ProductInnovation from "@/assets/innovation/product-innovation.svg";
import ExperienceDesign from "@/assets/innovation/uiux.webp";
import AIGrid from "@/assets/innovation/ai-grid.svg";
import AIbackground from '@/assets/innovation/ai-bg.svg'
import AIStar from '@/assets/innovation/ai-star.svg'

import { AppRoutes } from "@/constants/routes";
import {FocusList} from "@/data/focus"

const Main = () => {
  const FocusImages = [AIGrid,ProductInnovation,ExperienceDesign]
  return (
    <section className="flex flex-col gap-16 md:py-32 min-h-fit"> 
      <div className="grid grid-cols-3 gap-8"> 
        {
            FocusList.filter((item,i)=>i>0).map((foc,i)=>(
              <Focus
                key={i}
                title={foc.title}
                alt={foc.alt} 
                background={AIbackground}
                image={FocusImages[i+1].src}  
              />
            ))
          }
        <div className="aspect-square p-8 bg-black-100 relative group overflow-hidden">
            <div className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2 -z-10 transform transition duration-500 group-hover:scale-150 bg-gradient-to-br from-pink-300  to-lime-300 opacity-65"> </div>
            <div className="absolute top-0 left-0 w-full h-full -z-10 ai-grid flex items-center justify-center">
                  <Image
                      alt="contact-us"
                      className="w-1/2 h-1/2 aspect-square"
                      width={100}
                      height={100} 
                      src={AIStar}/>
            </div>
            <h2 className="text-xl font-medium">AI Experiences</h2>
            <h4 className="text-8xl font-semibold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center bg-gradient-to-br from-lime-400 to-rose-300 inline-block text-transparent bg-clip-text">AI</h4>
        </div> 
      </div>
      <div className="flex justify-center w-full">
      <Link 
          href={AppRoutes.SERVICES}>
            <Button
                label="Explore Services" 
                variant="text"
                style="outline"
                size="xl"
                type="button"
                texticon={true}
                />   
      </Link>   
      </div>
    </section>
  );
};

export default Main;
