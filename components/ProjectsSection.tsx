import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Casa Lirio",
    description:
      "Designing and developing the website's user interface using SCSS to create visually appealing and responsive styles.",
    image: "/casa-lirio.jpeg",
    github: "https://casalirio.com",
    link: "https://casalirio.com",
  },
  {
    name: "Huddle Landing Page",
    description: "The Huddle landing page frontend mentor challenge involves building a responsive landing page for a fictional company called 'Huddle' using HTML, CSS, and potentially JavaScript. The page should be visually appealing, well-organized, and functional on both desktop and mobile devices.",
    image: "/huddle-landing.jpeg",
    github: "https://github.com/codewithxavi/Huddle-landing-page-with-curved-sections",
    link: "https://huddle-landing-page-codewithxavi.vercel.app/",
  },
  {
    name: "Rick And Morty",
    description: "The application utilizes the Rick and Morty API to fetch and display data about the characters, episodes, and locations. The user interface is designed to be user-friendly and responsive, allowing users to easily search for and browse information about their favorite characters, episodes, and locations from the show.",
    image: "/rick-and-morty.jpeg",
    github: "https://github.com/codewithxavi/rick_and_morty_vue",
    link: "https://rick-and-morty-vue-eight.vercel.app/",
  },

]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 font-bold text-4xl">
        Projects
      </h1>

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
                <div className="mt-8 md:w-2/3">
                  <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
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