import type { Metadata } from "next";
import { Poppins } from "next/font/google";  
import "./globals.css";

import Header from "@/components/Header"; 
import Metrics from "@/seo/Metrics" 

const poppins = Poppins({
  weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "fallback", 
 });

export const metadata: Metadata = {
  title: "Yume Labs",
  description: "Yume Labs is a boutique UX/UI Design, Identity Design, and Industrial Design agency in Bangalore, India helping ambitious brands scale globally through Experience-led Growth.",
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
