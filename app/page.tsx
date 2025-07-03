"use client";

import { useCallback } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHubStats from "@/components/GitHubStats";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import { ThemeProvider } from "@/components/theme-provider";
import ProgressBars from "@/components/ProgressBars";
import TouchInteractions from "@/components/TouchInteractions";
import TooltipNav from "@/components/TooltipNav";

export default function Home() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        <ProgressBars />
        <TouchInteractions />

        {/* Tooltip Nav Bar */}
        <TooltipNav scrollToSection={scrollToSection} />

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
  );
}
