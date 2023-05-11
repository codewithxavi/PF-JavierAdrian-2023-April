import React from "react";
import Image from "next/image";


import { raleway } from "../utils/fonts";
import { interLatin } from "../utils/fonts";

import { HiOutlineUserCircle } from "react-icons/hi";

import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { FaAngular } from 'react-icons/fa';
import { SiCss3, SiJavascript, SiPhp, SiReact, SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';
import { BsGit } from "react-icons/bs";

const skills = [
  { name: "HTML", icon: <AiFillHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <BsGit /> },
  { name: "GitHub", icon: <AiFillGithub /> },
  { name: "Angular", icon: <FaAngular /> },
];


const AboutSection = () => {
  return (
    <section>
      <div className="">
        <h2 className={`text-4xl mb-2 mt-5 ${interLatin.className} flex items-center`}>
          About Me <span className="ml-2"><HiOutlineUserCircle /></span>
        </h2>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:flex-row md:text-left text-neutral-600 dark:text-neutral-400">
          <div className="md:w-1/2">
            <p className={`${raleway.className} mt-4 leading-7`}>
              My interest in programming started in 2016, and ever since, I&apos;ve been hooked! I started with front-end development, learning the basics of HTML, CSS, and JavaScript, and then moved on to back-end programming with popular languages like PHP and Java. These days, I&apos;m proud to say that I&apos;m a full-stack web developer, and I love creating powerful and efficient web applications.
            </p>
            <br />
            <p className={`${raleway.className} leading-7`} id="projects">
              Aside from programming, I have a couple of other passions that I love to pursue. I&apos;m a huge football fan and love watching my favorite team play. I also enjoy taking walks with my friends, especially on weekends when we can explore the beautiful sights and sounds of Barcelona together. Last but not least, I&apos;m a music lover and enjoy listening to all kinds of different genres.
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <div className="flex flex-wrap flex-row z-10 md:justify-start pb-5">
              {skills.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-md px-4 py-2 mr-4 mt-4 text-sky-50 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                    title={item.name}
                  >
                    <span className="dark:text-neutral-300 text-fuchsia-800 text-3xl pointer-events-none">
                      {item.icon}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>



        </div>
      </div>
    </section>
  )
}

export default AboutSection
