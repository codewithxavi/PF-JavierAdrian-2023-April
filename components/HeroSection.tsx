"use client" // this is a client component
import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Image from 'next/image';

import { raleway } from "../utils/fonts";
import { interLatin } from "../utils/fonts";

import { MdSportsSoccer } from "react-icons/md";


const HeroSection = () => {

  return (
    <section id="home">
      <div className="flex flex-col items-center  animate-fadeIn animation-delay-2 ">
        <div className="w-5/5 pt-24">
          <h1 className={`flex pb-4 text-5xl font-extrabold text-transparent md:h-24 bg-clip-text bg-gradient-to-r from-purple-800 to-fuchsia-950 dark:from-yellow-300 dark:to-emerald-500 md:text-7xl ${interLatin.className} font-bold`}>
            Hi, I&apos;m Javi!
          </h1>


          <div className="md:flex justify-center">
            <div className="flex-col w-full">
              <div className="text-  w-12/12 mb-5 text-neutral-600 dark:text-neutral-400">
                <p className={`${raleway.className} leading-7`}>Hello, my name is <b>Javi</b>, and I&apos;m a web developer who is passionate about teaching programming on <b>YouTube</b>. I&apos;ve developed a strong background in creating innovative solutions for <b>web-based software</b> applications, and I&apos;m excited to apply my knowledge to real-world problems.</p>

                <p className={`leading-7 mt-5 ${raleway.className}`}>If your company is looking for a passionate and knowledgeable <b>web developer</b> who is committed to creating innovative solutions, I would be excited to discuss potential opportunities. Let&apos;s connect and explore how my skills and experience can contribute to the success of your team.</p>
              </div>
              <Link className={`inline-flex items-center md:mt-12 lg:mt-24 rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${raleway.className}`} href="https://drive.google.com/file/d/1Yj1ErCagVHSaSoi2obPCxTrGeCgzUFsJ/view" target="blank" >
                Download CV
                <AiOutlineCloudDownload size={20} className="mx-2" />

              </Link>
            </div>

            <Image
              src="/xavi.webp"
              priority
              alt={"profile image"}
              width={300}
              height={100}
              className="relative -top-16"
            />


          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection