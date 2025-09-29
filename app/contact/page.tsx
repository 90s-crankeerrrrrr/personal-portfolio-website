"use client";

import React, { FormEvent, useState } from 'react'
import LayoutContainer from '../components/LayoutContainer'
import { Inter } from "next/font/google";
import { ClipLoader } from 'react-spinners';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: "POST",
        body: JSON.stringify({
          name, email, message
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
      if (res.ok) {
        setIsLoading(false);
        setSubmitted(true);
      }
    } catch (err: unknown) {
      console.log("Error: " + err);
      setIsLoading(false);
    }
  }

  return (
    <LayoutContainer>
      <div className="flex flex-col justify-center items-center">
        <div className={`text-[#F31D64] page-title-responsiveness font-extrabold tracking-[3%] reduce-margin-contact-title`}
          style={{
              fontFamily: inter.style.fontFamily,
            }}>
          Contact Me
        </div>
        { !isLoading && !submitted ? (
          <form onSubmit={onSubmit}>
            <div className="flex contact-input-field-width items-center">
              <div className="flex flex-col justify-center w-[310px]">
                <label className="font-semibold text-[22px] tracking-[3%] text-[#C8A3D6] mb-1 pl-1"
                style={{
                  fontFamily: inter.style.fontFamily,
                }}>Name</label>
                <input className="bg-[#1D004D] font-semibold text-[22px] tracking-[3%] text-[#C8A3D6] 
                border-3 border-solid border-[#C8A3D6] rounded-lg py-1 px-3 add-input-margin-mobile" 
                type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} 
                style={{
                  fontFamily: inter.style.fontFamily,
                }}/>
              </div>
              <div className="flex flex-col justify-center w-[310px]">
                <label className="font-semibold text-[22px] tracking-[3%] text-[#C8A3D6] mb-1 pl-1"
                style={{
                  fontFamily: inter.style.fontFamily,
                }}>Email Address</label>
                <input className="bg-[#1D004D] font-semibold text-[22px] tracking-[3%] text-[#C8A3D6] 
                border-3 border-solid border-[#C8A3D6] rounded-lg py-1 px-3" 
                type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <label className="font-semibold text-[22px] tracking-[3%] text-[#C8A3D6] mb-1 pl-1"
              style={{
                fontFamily: inter.style.fontFamily,
              }}>Message</label>
              <textarea className="bg-[#1D004D] font-semibold text-[22px] tracking-[3%] text-[#C8A3D6] 
              border-3 border-solid border-[#C8A3D6] rounded-lg pt-2 pl-3 mb-5 h-[200px]" placeholder="Enter your message"
              value={message} onChange={(e) => setMessage(e.target.value)}
              style={{
                fontFamily: inter.style.fontFamily,
              }}/>
              <button className={`bg-[#F31D64] button-hover button-responsiveness-contact text-white font-semibold tracking-[3%] rounded-[40px] cursor-pointer`}
                style={{
                      fontFamily: inter.style.fontFamily,
                }} type="submit">
                Submit
              </button>
            </div>
          </form>
        ) : (
          isLoading && !submitted ? (
            <ClipLoader className="mt-[120px]" color="#C8A3D6" size={100} />
          ) : (
            <div className='text-[#C8A3D6] text-[32px] font-semibold tracking-[3%] element-shadow text-center mt-[120px] gratitute-text-responsiveness'>
              Thank you for making a submission! I will get back to you as soon as I can.
            </div>
          )
        )}
      </div>
    </LayoutContainer>
  )
}

export default Contact