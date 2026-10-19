import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GridGuides from "@/components/layout/GridGuides";
import Metrics from "@/seo/Metrics";
import ogImage from "@/app/opengraph-image.png";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yumelabs.com/"),
  title: {
    default: "Yume Labs | UX/UI Design for AI, Embedded, Mobile, & Web",
    template: "%s | Yume Labs",
  },
  description:
    "We drive customer conviction and investor interest for your product by setting it apart through deeper user research, product innovation, and experience design.",
  openGraph: {
    images: ogImage.src,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <GridGuides />
        <Header />
        <main>{children}</main>
        <Footer />
        <Metrics />
      </body>
    </html>
  );
}
