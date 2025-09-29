"use client";

import Image from "next/image";
import LayoutContainer from "@/app/components/LayoutContainer"
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import Tilt from 'react-parallax-tilt';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

export default function Home() {
  const [knowMeToggle, setKnowMeToggle] = useState(false);
  
  return (
    <>
      <LayoutContainer setOverlay={knowMeToggle}>
        <div>
          <div className="flex stack-responsiveness justify-center items-center !mx-[5%] spacing-adjustments-hero">
            <Tilt className="w-[320px] h-[320px] rounded-[161px] overflow-hidden reposition-headshot" glareEnable={true} glareColor='white' glarePosition='all' glareMaxOpacity={0.38} glareReverse>
              <Image src="/self-portrait.png" alt="" width={320} height={320} className="element-shadow border-solid border-4 border-[#F31D64] rounded-[161px] mr-4 shadow-xl"></Image>
            </Tilt>
            <div className="ml-4">
              <div className={`text-[#F31D64] primary-title-sizing font-extrabold tracking-[3%] element-shadow`}
                style={{
                    fontFamily: inter.style.fontFamily,
                  }}>
                Hi, I'm Jake Chisholm,
              </div>
              <div className={`text-[#C8A3D6] text-[32px] font-semibold tracking-[3%] element-shadow secondary-title-sizing`}
                style={{
                    fontFamily: inter.style.fontFamily,
                  }}>
                &nbsp; Computer Engineering Student at McMaster University. Check out my portfolio!
              </div>
              <button className={`bg-[#F31D64] button-hover button-responsiveness-hero element-shadow text-white font-semibold tracking-[3%] rounded-[40px] cursor-pointer`}
                      onClick={() => setKnowMeToggle(true)}
                style={{
                    fontFamily: inter.style.fontFamily,
                  }}>
                Get to know me
              </button>
              { knowMeToggle ? ( 
                <div className={`fixed top-[50%] left-[50%] center-animation border-2 border-solid border-[#C8A3D6] z-[998] bg-[#440571] w-[250px] max-w-[80%]
                  flex justify-center items-center text-[32px] font-semibold tracking-[3%] py-8 `}
                  style={{
                    fontFamily: inter.style.fontFamily,
                  }}>
                  <ul className="pr-10">
                    <li>
                      <Link className="overlay-text-hover" href="/about">About</Link>
                    </li>
                    <li>
                      <Link className="overlay-text-hover" href="/projects">Projects</Link>
                    </li>
                    <li>
                      <Link className="overlay-text-hover" href="/contact">Contact</Link>
                    </li>
                  </ul>
                  <button onClick={() => setKnowMeToggle(false)} className="cursor-pointer absolute top-1 right-[-2px] w-[60px] h-[60px] z-[1001]">
                    <Image 
                    src={"/exit-icon.png"} alt={"Exit"}
                    width={60} height={60}              
                    />
                  </button>
                </div> ) : ( "" ) }
            </div>
          </div>
          <div className="bg-[#3A0055] h-[4px] w-[88%] mt-30 mb-30 mx-auto">
          </div>
          <div>
            <div className="flex justify-center items-center text-[#C8A3D6] second-primary-title-sizing font-[${inter}] font-bold tracking-[3%] mb-30 element-shadow spacing-adjustments-hero-secondary"
              style={{
                    fontFamily: inter.style.fontFamily,
                }}>
              Find Me Online
            </div>
            <div className="flex justify-center button-spacing-online-section items-center page-bottom-spacing-adjustment">
              <Link href="https://github.com" className="bg-[#F31D64] button-hover py-3 px-12 rounded-[40px] cursor-pointer flex justify-around items-center element-shadow">
                <span className={`text-white text-[24px] font-[${inter}] font-semibold tracking-[3%] mr-2`}
                  style={{
                    fontFamily: inter.style.fontFamily,
                  }}>
                  GitHub
                </span>
                <Image src="/github-for-portfolio.png" alt="GitHub logo" width={48} height={48}></Image>
              </Link>
              <Link href="https://ca.linkedin.com/in/jake-chisholm-57a785307" className="bg-[#F31D64] button-hover py-3 px-12 rounded-[40px] cursor-pointer flex justify-around items-center element-shadow">
                <span className={`text-white text-[24px] font-[${inter}] font-semibold tracking-[3%] mr-2`}
                  style={{
                    fontFamily: inter.style.fontFamily,
                  }}>
                  LinkedIn
                </span>
                <Image src="/linkedin-for-portfolio.png" alt="LinkedIn logo" width={48} height={48}></Image>
              </Link>
              <button className="bg-[#F31D64] button-hover py-3 px-12 rounded-[40px] cursor-pointer flex justify-around items-center element-shadow" onClick={() => window.open('./JacobChisholm-Resume-Fall2025.pdf')}>
                <span className={`text-white text-[24px] font-[${inter}] font-semibold tracking-[3%] mr-2`}
                  style={{
                    fontFamily: inter.style.fontFamily,
                  }}>
                  Resume
                </span>
                <Image src="/resume-for-portfolio.png" alt="Resume logo" width={48} height={48}></Image>
              </button>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </>
  );
}
