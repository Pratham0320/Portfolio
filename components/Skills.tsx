"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CodePlayground from "@/components/CodePlayground";
import MiniGames from "@/components/MiniGames";
import SkillAssessment from "@/components/SkillAssessment";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ✅ Use devicon SVG links via jsdelivr
  const topRow = [
    {
      name: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "Tailwind CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "C",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    },
    {
      name: "IntelliJ IDEA",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
    },
    {
      name: "VS Code",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "SQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      name: "AWS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
  ];

  const bottomRow = [
    {
      name: "Spring",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
    {
      name: "Supabase",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    },
    {
      name: "HTML5",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "Next.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "GitHub",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      name: "Linux",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
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
            Skills & Technologies
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-2"
            >
              <CodePlayground />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-8"
            >
              <MiniGames />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-12"
          >
            <SkillAssessment />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h3 className="text-3xl text-center font-bold mb-4 text-slate-200">
              Tools I work with
            </h3>

            {/* Top Row */}
            <div className="flex flex-wrap justify-center items-center gap-6 py-6">
              {topRow.map((skill) => {
                const rotate = useMotionValue(0);
                useAnimationFrame((t) => {
                  rotate.set((t / 1000) * 60);
                });
                return (
                  <div
                    key={skill.name}
                    className="relative group w-16 h-16 rounded-full border border-slate-500 ring-1 ring-white/30 hover:ring-2 hover:ring-white/70 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center justify-center p-3 hover:scale-110 transition"
                  >
                    <motion.img
                      src={skill.src}
                      alt={skill.name}
                      style={{ rotate }}
                      className="w-8 h-8"
                    />
                    <span className="absolute bottom-[-2rem] text-xs opacity-0 group-hover:opacity-100 bg-black text-white px-2 py-1 rounded shadow transition">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap justify-center items-center gap-6 py-6">
              {bottomRow.map((skill) => {
                const rotate = useMotionValue(0);
                useAnimationFrame((t) => {
                  rotate.set((t / 1000) * 60);
                });
                return (
                  <div
                    key={skill.name}
                    className="relative group w-16 h-16 rounded-full border border-slate-500 ring-1 ring-white/30 hover:ring-2 hover:ring-white/70 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center justify-center p-3 hover:scale-110 transition"
                  >
                    <motion.img
                      src={skill.src}
                      alt={skill.name}
                      style={{ rotate }}
                      className="w-8 h-8"
                    />
                    <span className="absolute bottom-[-2rem] text-xs opacity-0 group-hover:opacity-100 bg-black text-white px-2 py-1 rounded shadow transition">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
