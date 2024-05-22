
import Sections from "../components/Sections"
import Navbar from "../components/Navbar"; 
import Footers from "@/components/Footers";
import AboutMe from "@/components/AboutMe";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F9F5F6]">
      <Navbar />
      <div className="container mt-24 mx-auto px-20 py-14">
        <Sections /> 
        <AboutMe/>
        <Project/>
        <Skills/>  
      </div>
      <Footers/>
    </main>
  );
}
