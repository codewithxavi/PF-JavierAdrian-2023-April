"use client" // this is a client component
import React from "react"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center  animate-fadeIn animation-delay-2 ">
        <div className="w-5/5 pt-24">
          <h1 className="flex  pb-4 text-5xl font-extrabold text-transparent md:h-24 bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-950 dark:from-yellow-300 dark:to-emerald-500 md:text-6xl">Hi, I'm Javier Adrián</h1>
          <div className="md:flex items-center justify-center">
            <div className="flex-col w-full">
              <div className="text-lg  w-12/12 mb-5">
                <p>Hello, my name is <b>Javi</b>, and I'm a web developer who is passionate about teaching programming on <b>YouTube</b>. I've developed a strong background in creating innovative solutions for <b>web-based software</b> applications, and I'm excited to apply my knowledge to real-world problems.</p>

                <p className="mt-5">If your company is looking for a passionate and knowledgeable <b>web developer</b> who is committed to creating innovative solutions, I would be excited to discuss potential opportunities. Let's connect and explore how my skills and experience can contribute to the success of your team.</p>
              </div>
              <Link className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" href="https://drive.google.com/file/d/1Yj1ErCagVHSaSoi2obPCxTrGeCgzUFsJ/view" target="blank" >Download CV</Link>
            </div>
            <img
              src="/xavi.png"
              alt="profile image xavi"
              width={300}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection