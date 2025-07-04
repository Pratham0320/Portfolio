"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Zap } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, animations, real-time GitHub integration, and performance optimization.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive design",
        "Smooth animations",
        "GitHub API integration",
        "Contact form",
        "SEO optimized",
      ],
      github: "https://github.com/Pratham0320/portfolio",
      demo: "#",
      image: "/PortFolio.png",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Inofinity RnD",
      description:
        "Worked as a Junior Web Development Intern at Inofinity R&D Pvt. Ltd. Contributed to building and optimizing a production-ready medical web platform using Next.js, React, and Tailwind CSS.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Vercel", "Git"],
      features: [
        "Modular UI component design",
        "Improved performance & accessibility by 30%",
        "Cross-browser responsiveness",
        "Team collaboration on frontend",
        "Backend response optimization by 35%",
        "Production uptime of 99.9%",
      ],
      github: "https://github.com/Pratham0320/Inofinity-Medical",
      demo: "https://inofinityrnd.com",
      image: "/inofinity.webp",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Expense Tracker",
      description:
        "A comprehensive personal finance management application built with Java & JavaFX. Features expense categorization, budget tracking, and detailed analytics with CSV export functionality.",
      technologies: ["Java", "JavaFX", "CSV", "File I/O"],
      features: [
        "Personal expense tracking",
        "Category-wise organization",
        "Budget management",
        "CSV export functionality",
        "Data visualization",
        "Monthly/yearly reports",
      ],
      github: "https://github.com/Pratham0320/ExpenseTracker",
      demo: null,
      image: "/placeholder.svg?height=200&width=400",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
            <p className="text-3xl font-semibold text-slate-600 dark:text-slate-300 mt-6">
              I've built
            </p>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <TiltCard key={index}>
                <Card className="h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-40" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Key Features
                      </h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                        {project.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button
                          size="sm"
                          className={`flex-1 bg-gradient-to-r ${project.color} text-white`}
                          asChild
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ✅ Reusable tilt wrapper
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.1s ease",
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
