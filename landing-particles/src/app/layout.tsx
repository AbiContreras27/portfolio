import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const poppins = Poppins({weight:["400"],subsets: ["latin"]});


export const metadata: Metadata = {
  title: "AbigailDev Landing Page ♥",
  description: "Landing page made by AbigailDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <NavBar/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
