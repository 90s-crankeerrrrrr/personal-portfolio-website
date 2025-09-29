import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClipLoader } from "react-spinners";
import "./globals.css";

import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jake Chisholm's Portfolio Website",
  description: "Come get to know me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<ClipLoader color="#C8A3D6" size={100} />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
