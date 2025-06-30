"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHubStats from "@/components/GitHubStats";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import SidebarNavigation from "@/components/SidebarNavigation";
import MobileSidebarToggle from "@/components/MobileSidebarToggle";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingShapes from "@/components/FloatingShapes";
import ProgressBars from "@/components/ProgressBars";
import TouchInteractions from "@/components/TouchInteractions";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "experience",
        "projects",
        "github",
        "achievements",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulated loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        <FloatingShapes />
        <ProgressBars />
        <TouchInteractions />

        {/* Desktop Sidebar Navigation */}
        <div className="hidden md:block">
          <SidebarNavigation activeSection={activeSection} />
        </div>

        {/* Mobile Navigation */}
        <MobileSidebarToggle activeSection={activeSection} />

        <main className="relative">
          <section id="home">
            <Header />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="github">
            <GitHubStats />
          </section>

          <section id="achievements">
            <Achievements />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </ThemeProvider>
  )
}
