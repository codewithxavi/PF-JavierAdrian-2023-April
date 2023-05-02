"use client"
import React from "react";
import { useState } from "react";
// import { Link } from "react-scroll/modules";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import { raleway } from "../utils/fonts";

import { MdSportsSoccer } from "react-icons/md";

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)
  return (
    <header className={`w-full mx-auto sm:px-8 fixed top-0 z-50  bg-white dark:bg-stone-900  dark:border-stone-600 `}>
      <div className="justify-between md:items-center md:flex mx-auto max-w-[77rem]">
        <div>
          <div className="flex items-center justify-between px-5  py-3 md:py-5 md:block sm:px-0">
            <Link href="#home" aria-label="Home">
              <div className="container flex items-center space-x-2">
                <div className="group inline-block flex">
                  <h2 className={`text-2xl font-bold ${raleway.className}`}>
                    @codewithxavi &nbsp;
                  </h2>
                  <MdSportsSoccer
                    color="black dark:text-white"
                    size={30}
                    className="self-end inline-block animate-custom-bounce"
                    
                  />
                </div>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border "
                onClick={() => setNavbar(!navbar)}
                aria-label="menu"
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center px-6 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    aria-label={item.label}
                    key={idx}
                    href={`#${item.page}`}
                    className={
                      "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 dark:hover:text-purple-400 cursor-pointer"
                    }
                    onClick={() => setNavbar(!navbar)}
                  >
                    <span className={`${raleway.className} `}>{item.label}</span>
                  </Link>
                )
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="p-2 rounded-xl"
                  aria-label="enable light theme"
                >
                  <RiSunLine size={25} />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="p-2 rounded-xl "
                  aria-label="enable dark theme"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}