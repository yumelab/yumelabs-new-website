import type { Metadata } from "next";
import {Poppins_S} from '@/app/fonts'
import "./globals.css";

import Header from "@/components/Header"; 
import Metrics from "@/seo/Metrics" 
import ogImage from "@/app/opengraph-image.png"



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
  metadataBase: new URL('https://yume-staging.web.app/'),
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
    <html lang="en" className="overflow-x-hidden">
      <body className={Poppins_S.className}>
        <Header/> 
          {children}
        <Metrics />
      </body>
    </html>
  );
}
