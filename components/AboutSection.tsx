import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "PHP" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Angular" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="">
        <h2 className=" font-bold text-4xl mb-2 mt-5">
          About Me
        </h2>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <p>
              My interest in programming started in 2016, and ever since, I&apos;ve been hooked! I started with front-end development, learning the basics of HTML, CSS, and JavaScript, and then moved on to back-end programming with popular languages like PHP and Java. These days, I&apos;m proud to say that I&apos;m a full-stack web developer, and I love creating powerful and efficient web applications.
            </p>
            <br />
            <p>
              Aside from programming, I have a couple of other passions that I love to pursue. I&apos;m a huge football fan and love watching my favorite team play. I also enjoy taking walks with my friends, especially on weekends when we can explore the beautiful sights and sounds of Barcelona together. Last but not least, I&apos;m a music lover and enjoy listening to all kinds of different genres.
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start pb-5">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-purple-600 px-4 py-2 mr-4 mt-4 text-sky-50 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/code.gif"
              alt="code"
              width={400}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:z-0 bg-transparent mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
