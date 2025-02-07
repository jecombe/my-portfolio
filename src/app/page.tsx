import AboutMe from "@/components/about/AboutMe";
import Experience from "@/components/experiences/ExperiencesSections";
import ProfessionalJourney from "@/components/experiences/ExperiencesSections";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/navBar/NavBar";
import ProjectsSection from "@/components/project/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <AboutMe />
        <Experience/>
        <ProjectsSection/>
      </div>
    </main>
  );
}
