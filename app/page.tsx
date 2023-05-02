import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import ScrollToTopButton from "@/components/ScrollToTopButton"
export default function Home() {
  return (
    <main className="mx-auto  px-4 sm:px-6 max-w-7xl ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ScrollToTopButton />
    </main>
  )
}
