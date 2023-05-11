"use client" // this is a client component
import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import Link from "next/link";
import { raleway } from "../utils/fonts";
import { interLatin } from "../utils/fonts";
import { Icon } from '@iconify/react';

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Create a new instance of the Typed class when the component mounts
    const typed = new Typed(typedRef.current, {
      strings: ['I am a  <strong>Software Engineer</strong>', 'I  work  with React, NextJS, NodeJS, Angular'],
      typeSpeed: 50,
      contentType: 'html', // add this option to allow HTML tags
      loop: true,
    });

    // Destroy the instance of the Typed class when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <section id="home" className='mt-24'>
      <div className="md:flex justify-center items-center">
        <div className="flex-col w-full">
          <div className="text-  w-12/12 mb-5 text-neutral-600 dark:text-neutral-400">
            <h1 className={`flex pb-4 text-5xl font-extrabold text-transparent md:h-24 bg-clip-text bg-gradient-to-r from-purple-800 to-fuchsia-950 dark:from-yellow-300 dark:to-emerald-500 md:text-7xl ${interLatin.className} font-bold drop-shadow-[0px_35px_35px_rgba(39,245,131,0.6)]`}>
              Hi, I&apos;m Javi! <span className="text-current bg-transparent" style={{ color: 'white' }}>👋🏻</span>
            </h1>
            <span className={`pb-5 ${raleway.className} inline`} ref={typedRef}></span>
            <p className={`${raleway.className} leading-7 mt-5`}>Hello, my name is <b>Javi</b>, and I&apos;m a web developer who is passionate about teaching programming on <b>YouTube</b>. I&apos;ve developed a strong background in creating innovative solutions for <b>web-based software</b> applications, and I&apos;m excited to apply my knowledge to real-world problems.</p>
            <p className={`leading-7 mt-5 ${raleway.className}`}>If your company is looking for a passionate and knowledgeable <b>web developer</b> who is committed to creating innovative solutions, I would be excited to discuss potential opportunities. Let&apos;t connect and explore how my skills and experience can contribute to the success of your team.</p>
          </div>
          <Link id="about" className={`inline-flex items-center my-5 rounded-md border-gray-300 bg-white bg-opacity-10 dark:bg-opacity-5 backdrop-blur-md backdrop-filter rounded-lg shadow-lg hover:shadow-xl transition duration-300 px-6 py-3 text-base text-gray-700 dark:text-white dark:hover:text-gray-100 ${raleway.className}`} href="https://drive.google.com/file/d/1Yj1ErCagVHSaSoi2obPCxTrGeCgzUFsJ/view" target="blank">
            Download CV
            <Icon className='text-2xl' icon="line-md:download-outline-loop" />
          </Link>


        </div>
        {/* <Image
          src="/xavi.webp"
          priority
          alt={"profile image"}
          width={210}
          height={100}
          className="relative -top-16 object-cover mt-5 md:mt-0"
        /> */}
      </div>

    </section>
  )

}





export default HeroSection

