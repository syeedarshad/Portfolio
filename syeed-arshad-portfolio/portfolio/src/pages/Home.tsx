import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import WhatIBuild from "@/sections/WhatIBuild";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Exploring from "@/sections/Exploring";
import Experience from "@/sections/Experience";
import Certifications from "@/sections/Certifications";
import GithubShowcase from "@/sections/GithubShowcase";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIBuild />
        <Projects />
        <Skills />
        <Exploring />
        <Experience />
        <Certifications />
        <GithubShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
