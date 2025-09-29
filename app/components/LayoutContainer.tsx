"use client";

import Link from 'next/link';
import React, { ReactNode } from 'react'
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"], // Add more weights if needed
  variable: "--font-inter",
  display: "swap",
});

interface LayoutContainerProps {
  children: ReactNode;
  setOverlay?: boolean;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children, setOverlay }) => {
  
  const year = new Date().getFullYear();

  return (
    <div className={`min-h-screen flex flex-col relative`}
        style={{background: "linear-gradient(0deg, #1D004D 0%, #6C007D 45%, #450065 75%)"}}>
        
        {setOverlay ? <div className="fixed top-0 bottom-0 left-0 right-0 z-[100] bg-[rgba(0,0,0,0.3)] pointer-events-none"></div> : "" }
        
        <header className="sticky top-0 z-50 h-[70px] flex header-footer-flex-responsiveness items-center bg-[#300047] flex-shrink-0 text-[#C8A3D6] text-[24px] font-extrabold"
                style={{lineHeight: "auto", letterSpacing: "3%"}}>
            <div className="responsive-header-name-margin"
                style={{
                    fontFamily: inter.style.fontFamily,
                }}>
                <Link className="smooth-underline header-text-responsiveness" href="/">
                    Jake Chisholm
                </Link>
            </div>
            <div className="flex justify-between items-center sections-spacing header-text-responsiveness mr-[50px]">
                <Link className="smooth-underline" href="/about" style={{fontFamily: inter.style.fontFamily}}>
                    About
                </Link>
                <Link className="smooth-underline" href="/projects" style={{fontFamily: inter.style.fontFamily}}>
                    Projects
                </Link>
                <Link className="smooth-underline" href="/contact" style={{fontFamily: inter.style.fontFamily}}>
                    Contact
                </Link>
            </div>
        </header>
        <main className="z-30 flex-1 overflow-auto">
          {children}
        </main>
        <footer className=" h-[70px] flex header-footer-flex-responsiveness items-center bg-[#300047] flex-shrink-0 text-[#C8A3D6] font-semibold">
            <div className="responsive-footer-name-margin" style={{fontFamily: inter.style.fontFamily}}>
                {year} Jake Chisholm's Portfolio Website
            </div>
            <div className="flex justify-between items-center footer-sections-spacing w-[400px] mr-[75px]">
                <Link className="smooth-underline" href="https://www.github.com" style={{fontFamily: inter.style.fontFamily}}>
                    GitHub
                </Link>
                <Link className="smooth-underline" href="https://ca.linkedin.com/in/jake-chisholm-57a785307" style={{fontFamily: inter.style.fontFamily}}>
                    LinkedIn
                </Link>
                <button className="cursor-pointer smooth-underline" onClick={() => window.open('./JacobChisholm-Resume-Fall2025.pdf')} style={{fontFamily: inter.style.fontFamily}}>
                    Resume
                </button>
            </div>
        </footer>
    </div>
  )
}

export default LayoutContainer