
import Link from "next/link";
import Image from "next/image";

import Focus from "./Focus";
import Button from "@/components/Button";

// import ProductInnovation from "@/assets/innovation/product-innovation.svg";
// import ExperienceDesign from "@/assets/innovation/uiux.webp";
// import AIGrid from "@/assets/innovation/ai-grid.svg";
// import AIbackground from '@/assets/innovation/ai-bg.svg'
// import AIStar from '@/assets/innovation/ai-star.svg'

import ai from '@/assets/innovation/ai.png'
import ux from '@/assets/innovation/ux.png'
import innovation from '@/assets/innovation/innovation.png'

import { AppRoutes } from "@/constants/routes";
import {FocusList, Offerings} from "@/data/focus"
import Offering from "./Offering";

const Main = () => {
  const FocusImages = [ai, innovation, ux]
  return (
    <section className="flex flex-col gap-16 md:py-32 min-h-fit"> 
      <div className="grid md:grid-cols-3 gap-4"> 
        {
            Offerings.map((item,i)=>(
              <Offering
                key={i}
                tags={item.tags}
                title={item.title}
                description={item.description}
                bgImage={FocusImages[i].src}
              />
            )) 
        } 
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
