
import Image from "next/image";
import React from 'react'
import { Inter } from "next/font/google";
import LayoutContainer from '../components/LayoutContainer';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

// const aboutTextSections = [
//   "Since a young age, sparked from my interest in video games, I have been developing code at various levels! My dad began enrolling me in after school coding camps around 3rd grade, where I got the chance to work on projects recreating popular video games. It began with recreating Pac-man & Donkey Kong in Visual Studio Basic, then I got to develop the original arcade Mario Bros. in Java. Going forward, I gained experience also working in C#, C++ (in game engines like Unity), and a host of other languages & frameworks through high school & university.",
//   "Throughout my teen years, I garnered a major interest in the world of music. Beginning with picking up piano during the COVID-19 pandemic, I grew proficient as a musician and as a creative over 2 years, inspiring me to begin playing guitar in 2022, as well as pick up the ropes of music production! Leveraging my knowledge of music theory from actively playing piano, I have used Logic Pro X to make a multitude of songs and instrumentals. As high school progressed, and I got more invested in different styles of music, I joined a music journalism club and furthered my writing skills through my musical passions.",
//   "Growing up playing hockey all throughout childhood and adolescene, my Dad frequently reinforced the importance not only of physical activity for body & mind, but also the virtues of how team sports would bolster collaboration. These days, I bring my strong teamwork skills to technical settings, but I have never let go of maintaining an active lifestyle, even in the face of an engineering schedule. Since high school, I have been an avid gym-goer and have found keen interest in bodybuilding & nutrition. Recently, I have got into the sport of boxing to re-engage with sports and learn useful self-defense skills!"
// ]

const About = () => {
  return (
    <LayoutContainer>
      <div className="flex flex-col justify-center items-center">
        <div className={`text-[#F31D64] page-title-responsiveness font-extrabold tracking-[3%] mt-[50px] mb-[50px]`}
          style={{
              fontFamily: inter.style.fontFamily,
            }}>
          About
        </div>
        <div className="relative w-full mb-[50px]">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
              <div className="relative">
                <Image
                  src="/code-background.jpg"
                  alt="Code background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="/music-background.jpg"
                  alt="Music background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="/fitness-background.jpg"
                  alt="Fitness background"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="adjust-content-margins relative z-10 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 md:gap-8 px-4 sm:px-6 lg:px-12 text-[#C8A3D6] tracking-[3%]"
            style={{
              fontFamily: inter.style.fontFamily,
            }}>
            <div className="bg-[#1D004D] border-3 border-solid border-[#C8A3D6] text-center rounded-lg p-6 md:p-7 text-base md:text-lg leading-relaxed shadow-md">
              Since a young age, sparked from my interest in video games, I have been developing code at various levels!
              My dad began enrolling me in after school coding camps around 3rd grade, where I got the chance to work on projects recreating popular video games.
              It began with recreating Pac-man & Donkey Kong in Visual Studio Basic, then I got to develop the original arcade Mario Bros. in Java.
              Going forward, I gained experience also working in C#, C++ &#40;in game engines like Unity&#41;, and a host of other languages & frameworks through high school & university.
            </div>
            <div className="bg-[#1D004D] border-3 border-solid border-[#C8A3D6] text-center rounded-lg p-6 md:p-7 text-base md:text-lg leading-relaxed shadow-md">
              Throughout my teen years, I garnered a major interest in the world of music. Beginning with picking up piano during the COVID-19 pandemic,
              I grew proficient as a musician and as a creative over 2 years, inspiring me to begin playing guitar in 2022, as well as pick up the ropes of music production!
              Leveraging my knowledge of music theory from actively playing piano, I have used Logic Pro X to make a multitude of songs and instrumentals.
              As high school progressed, and I got more invested in different styles of music,
              I joined a music journalism club and furthered my writing skills through my musical passions.
            </div>
            <div className="bg-[#1D004D] border-3 border-solid border-[#C8A3D6] text-center rounded-lg p-6 md:p-7 text-base md:text-lg leading-relaxed shadow-md">
              Growing up playing hockey all throughout childhood and adolescene, my Dad frequently reinforced the importance not only of physical activity
              for body & mind, but also the virtues of how team sports would bolster collaboration. These days, I bring my strong teamwork skills to technical
              settings, but I have never let go of maintaining an active lifestyle, even in the face of an engineering schedule. Since high school,
              I have been an avid gym-goer and have found keen interest in bodybuilding & nutrition.
              Recently, I have got into the sport of boxing to re-engage with sports and learn useful self-defense skills!
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  )
}

export default About