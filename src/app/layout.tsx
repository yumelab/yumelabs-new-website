import type { Metadata } from "next";
import { Poppins } from "next/font/google";  
import "./globals.css";

import Header from "@/components/Header"; 
import Metrics from "@/seo/Metrics" 
import ogImage from "@/app/opengraph-image.png"

const poppins = Poppins({
  weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "fallback", 
 });

 interface ExtendedMetadata extends Metadata {
  rating: {
    ratingValue: number;
    reviewCount: number;
  };
  pricing:{
    budget:string;
    duration:string;
  }
}

export const metadata: ExtendedMetadata = {
  metadataBase: new URL('https://yumelabs.com'),
  title: {
    default:"Yume Labs | UX/UI Design for AI, Embedded, Mobile, & Web",
    template: "%s - Yume Labs | UX/UI Design for AI, Embedded, Mobile, & Web",
  },
  description: "We drive customer conviction and investor interest for your product by setting it apart through deeper user research, product innovation, and experience design.",
  openGraph: {
    images: ogImage.src,
  }, 
  rating: {
    ratingValue: 4.8,
    reviewCount: 16
  },
  pricing:{
    budget:"$5000/m",
    duration:"3 months"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/> 
          {children}
        <Metrics />
      </body>
    </html>
  );
}
