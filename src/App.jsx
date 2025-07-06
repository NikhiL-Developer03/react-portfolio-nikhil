import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import ProjectShowcase from "./components/ProjectShowcase";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">

      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-pink-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-900/5 to-transparent"></div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-500 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>


      <Navbar />
      

      <main className="relative">

        <section id="home" className="min-h-screen flex items-center">
          <div className="w-full">
            <Hero />
          </div>
        </section>
        

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-32">
          <section id="about" className="py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
              <About />
            </div>
          </section>
          
          <section id="skills" className="py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
              <Skills />
            </div>
          </section>
          
          <section id="timeline" className="py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
              <Timeline />
            </div>
          </section>
          
          <section id="projects" className="py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
              <ProjectShowcase />
            </div>
          </section>
          
          <section id="contact" className="py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
              <Contact />
            </div>
          </section>
        </div>
      </main>
      

      <footer className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 bg-neutral-900/80 backdrop-blur-sm border-t border-neutral-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl py-6 sm:py-8 md:py-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-neutral-400 text-xs xs:text-sm sm:text-base">
              © 2025 Nikhil Developer. Built with React, Tailwind CSS & ❤️
            </p>
            <div className="flex flex-wrap justify-center gap-2 xs:gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-500">
              <span>Responsive Design</span>
              <span className="hidden xs:inline">•</span>
              <span>Modern UI/UX</span>
              <span className="hidden xs:inline">•</span>
              <span>Fast Performance</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
