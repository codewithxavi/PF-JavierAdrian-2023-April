import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { DiPhp, DiSass, DiLaravel } from 'react-icons/di';
import { FaLeaf, FaVuejs } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';

import { raleway } from "../utils/fonts";
import { interLatin } from "../utils/fonts";
import { MdWorkOutline } from "react-icons/md";


const projects = [
  {
    name: "Casa Lirio",
    description:
      `Designing and developing the website's user interface using SCSS to create visually appealing and responsive styles.`,
    image: "/casa-lirio.webp",
    github: "https://casalirio.com",
    link: "https://casalirio.com",
    stack: {
      DiPhp: true,
      DiScss: true,
      DiLaravel: true,
      FaVuejs: false
    },

  },
  {
    name: "Huddle Landing Page",
    description: "The Huddle landing page frontend mentor challenge involves building a responsive landing page for a fictional company called 'Huddle' using HTML, CSS, and potentially JavaScript. The page should be visually appealing, well-organized, and functional on both desktop and mobile devices.",
    image: "/huddle-landing.webp",
    github: "https://github.com/codewithxavi/Huddle-landing-page-with-curved-sections",
    link: "https://huddle-landing-page-codewithxavi.vercel.app/",
    stack: {
      DiJavascript1: true
    },
  },
  {
    name: "Rick And Morty",
    description: "The application utilizes the Rick and Morty API to fetch and display data about the characters, episodes, and locations. The user interface is designed to be user-friendly and responsive, allowing users to easily search for and browse information about their favorite characters, episodes, and locations from the show.",
    image: "/rick-and-morty.webp",
    github: "https://github.com/codewithxavi/rick_and_morty_vue",
    link: "https://rick-and-morty-vue-eight.vercel.app/",
    stack: {
      FaVuejs: true,
    },
  },

]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className={`my-10 text-4xl flex items-center ${interLatin.className}`}>
        Projects <MdWorkOutline className="ml-2" />
      </h2>


      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>

              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-2/2 md:mx-auto">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={1000}
                      height={1000}
                      className="rounded shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:mt-0 md:w-2/3">
                  <h1 className={`text-2xl md:text-2xl font-bold mb-6 ${interLatin.className}`}>{project.name}</h1>
                  <p className={`text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400 ${raleway.className}`}>
                    {project.description}
                  </p>
                  <div className="flex mb-12">
                    {project.stack.DiLaravel ? <DiLaravel size={40} /> : null}
                    {project.stack.DiPhp ? <DiPhp size={40} /> : null}
                    {project.stack.DiScss ? <DiSass size={40} /> : null}
                    {project.stack.FaVuejs ? <FaVuejs size={40} /> : null}
                    {project.stack.DiJavascript1 ? <DiJavascript1 size={40} /> : null}
                  </div>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ProjectsSection