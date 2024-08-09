
import { Poppins, Noto_Serif_Display } from "next/font/google"; 

export const Poppins_S = Poppins({
    weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap", 
});
  
export const Noto_SD = Noto_Serif_Display({
    weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    style: 'italic',
    display: "swap", 
});