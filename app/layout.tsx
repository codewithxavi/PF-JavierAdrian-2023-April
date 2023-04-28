"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"

import { Providers } from '../components/providers'

export const metadata = {
  title: "Javier Adrian - Portfolio",
  description: "Javier Adrian's Personal Portfolio",
  keywords: ["Frontend", "Fullstack", "Developer", "Next.js"],
  openGraph: {
      title: "Javier Adrian - Portfolio",
      description: "Javier Adrian's Developer Portfolio built with NextJs 13.2",
      images: [
          {
              url: "https://codewithxavi.vercel.app/xavi.webp",
              width: 752,
              height: 400,
              alt: "portfolio thumbnail",
          },
      ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html suppressHydrationWarning lang="en">
        <body className="dark:bg-stone-900">
          <Navbar/>
          <Providers>{children}</Providers>
          <Footer/>
        </body>
      </html>
    </>

  )
}
