
import React from 'react'
import LayoutContainer from '../components/LayoutContainer'
import { Inter } from 'next/font/google';
import Image from "next/image";
import Video from 'next-video';
import DSASnakeGame from "@/videos/dsa-snake-game-demo.mp4";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

const Projects = () => {
  return (
     <LayoutContainer>
      <div className="flex flex-col justify-center items-center w-full">
        <div className={`text-[#F31D64] page-title-responsiveness font-extrabold tracking-[3%] mt-[50px] mb-[50px]`}
          style={{
              fontFamily: inter.style.fontFamily,
            }}>
          Projects
        </div>
        <div className="bg-[#1D004D] h-auto border-3 border-solid border-[#C8A3D6] rounded-lg py-6 px-[30px] flex stack-responsiveness justify-between items-center w-[85%]">
          <div className="flex flex-col justify-center items-center width-adjustments-responsiveness add-margin-mobile"
            style={{
              fontFamily: inter.style.fontFamily,
            }}>
            <div className="text-[#C8A3D6] font-semibold subtitle-text-sizing tracking-[3%] mb-[20px]">
              Personal Portfolio
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] mb-[40px]">
              June 2025 - September 2025
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] text-center">
              Developed a full-stack personal portfolio website using a Next.js framework and deployed on Netlify. Made use of Tailwind CSS for front-end work,
              node.js for back-end email setup, and TypeScript throughout the project. All UI/UX designs were crafted by me using Figma &#40;screenshot visible to the right&#41;. This project is publicly
              accessible on my GitHub account.
            </div>
          </div>
          <div className='relative w-full max-w-[750px] aspect-video'>
            <Image src='/figma.png' alt='' fill className='object-cover' />
          </div>
        </div>
        <div className="bg-[#3A0055] h-[4px] w-[88%] mt-30 mb-30 mx-auto"/>
        <div className="bg-[#1D004D] h-auto border-3 border-solid border-[#C8A3D6] rounded-lg py-6 px-[30px] flex stack-responsiveness justify-between items-center w-[85%]">
          <div className='relative w-full max-w-[750px] aspect-video'>
            <Video src={DSASnakeGame}/>
          </div>
          <div className="flex flex-col justify-center items-center width-adjustments-responsiveness"
            style={{
              fontFamily: inter.style.fontFamily,
            }}>
            <div className="text-[#C8A3D6] font-semibold subtitle-text-sizing tracking-[3%] mb-[20px]">
              DSA Snake Game
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] mb-[40px]">
              November 2024 - April 2025
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] text-center">
              Across the courses COMPENG 2SH4 and COMPENG 2SI3 at McMaster, we got to develop the snake game, fully based in the command line terminal.
              Initially, the game was developed independently using OOP principles. While completing 2SI3, the game then grew to take advantage of linked lists,
              stacks & queues, binary search trees and hashing to implement a more robust featureset into gameplay.
            </div>
          </div>
        </div>
        <div className="bg-[#3A0055] h-[4px] w-[88%] mt-30 mb-30 mx-auto"/>
        <div className="bg-[#1D004D] h-auto border-3 border-solid border-[#C8A3D6] rounded-lg py-6 px-[30px] flex stack-responsiveness justify-between items-center w-[85%]">
          <div className="flex flex-col justify-center items-center width-adjustments-responsiveness add-margin-mobile"
            style={{
              fontFamily: inter.style.fontFamily,
            }}>
            <div className="text-[#C8A3D6] font-semibold subtitle-text-sizing tracking-[3%] mb-[20px]">
              Multi-Player Fighting Game
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] mb-[40px]">
              May 2023 - June 2023
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] text-center">
              In a group with two other individuals, I assisted in developing a multi-player fighting game, played on a single device.
              This game was programmed in Java, utilizing the libGDX game engine. This game included full menu navigation, multiple characters
              with unique movesets, Computer Player Characters &lpar;CPUs&rpar;, multiple stages, unlockables & more. This project is publicly accessible
              on my GitHub account.
            </div>
          </div>
          <div className='relative w-full max-w-[750px] aspect-video'>
            <Video src={DSASnakeGame}/>
          </div>
        </div>
        <div className="bg-[#3A0055] h-[4px] w-[88%] mt-30 mb-30 mx-auto"/>
        <div className={`text-[#C8A3D6] second-primary-title-sizing font-bold tracking-[3%] mb-[50px]`}
          style={{
              fontFamily: inter.style.fontFamily,
            }}>
          Projects In Progress
        </div>
        <div className="h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8 mb-[125px]">
          <div className="bg-[#1D004D] border-3 border-solid border-[#C8A3D6] rounded-lg py-6 px-[30px] flex flex-col justify-center items-center eng-academy-margins"
            style={{
              fontFamily: inter.style.fontFamily,
            }}>
            <div className="text-[#C8A3D6] font-semibold subtitle-text-sizing tracking-[3%] mb-[60px]">
              Eng Academy
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] text-center mb-[130px]">
              In a group with two other individuals, I am currently developing a website called Eng Academy, focusing on front-end and UI/UX design.
              The purpose of this website is to provide a one-stop-shop for engineering students of all fields to have strong academic resources and 
              interview prep. Think sort of somewhere between Khan Academy and Duolingo, but for university level engineering content. Planned for first release
              in Fall 2025!
            </div>
          </div>
          <div className="bg-[#1D004D] border-3 border-solid border-[#C8A3D6] rounded-lg py-6 px-[30px] flex flex-col justify-center items-center synthesizer-margins"
            style={{
              fontFamily: inter.style.fontFamily,
            }}>
            <div className="text-[#C8A3D6] font-semibold subtitle-text-sizing tracking-[3%] mb-[60px]">
              Digital Synthesizer
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] text-center mb-[100px]">
              For my first foray into hardware projects, I am seeking to combine my passion for music & playing musical instruments with my interest in DSP
              and embedded systems. I plan to refactor an old CASIO synthesizer to house a set of microcontrollers & PCBs to perform both modular synthesis and
              play preset sounds. The software side would make use of existing C++ libraries, and would be controlled by a touchscreen GUI. Project is still in
              research phase, completion TBA.
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>  
  )
}

export default Projects