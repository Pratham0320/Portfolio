"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CodePlayground from "@/components/CodePlayground";
import MiniGames from "@/components/MiniGames";
import SkillAssessment from "@/components/SkillAssessment";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiGit,
  SiAmazon,
  SiDocker,
  SiPostgresql,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const icons = [
    { name: "React", icon: <SiReact size={32} color="#61DAFB" /> },
    { name: "JavaScript", icon: <SiJavascript size={32} color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript size={32} color="#3178C6" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={32} color="#38BDF8" /> },
    { name: "Node.js", icon: <SiNodedotjs size={32} color="#339933" /> },
    { name: "Next.js", icon: <SiNextdotjs size={32} color="#000000" /> },
    { name: "Git", icon: <SiGit size={32} color="#F05032" /> },
    { name: "AWS", icon: <SiAmazon size={32} color="#FF9900" /> },
    { name: "Docker", icon: <SiDocker size={32} color="#2496ED" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={32} color="#336791" /> },
    { name: "HTML5", icon: <SiHtml5 size={32} color="#E34F26" /> },
    { name: "CSS3", icon: <SiCss3 size={32} color="#1572B6" /> },
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 75 },
        { name: "C", level: 70 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "SQL", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "AWS", level: 65 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Git/GitHub", level: 85 },
        { name: "IntelliJ IDEA", level: 80 },
        { name: "Linux", level: 70 },
        { name: "Supabase", level: 75 },
        { name: "Vercel", level: 80 },
      ],
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

          {/* ✅ NEW: Interactive Section with 3-column layout */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Code Playground — spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-2"
            >
              <CodePlayground />
            </motion.div>

            {/* Right column: MiniGames & SkillAssessment stacked */}
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
            <h3 className="text-4xl text-center font-bold mb-2 text-slate-800 dark:text-slate-200">
              Tools I work with
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 py-12">
              {icons.map((skill) => {
                const rotate = useMotionValue(0);

                useAnimationFrame((t) => {
                  rotate.set((t / 1000) * 60); // Keep spinning clockwise
                });

                return (
                  <div className="relative group w-16 h-16 rounded-full border border-slate-600 flex items-center justify-center p-3 hover:scale-110 transition">
                    {/* Rotating icon only */}
                    <motion.div
                      style={{ rotate }}
                      className="flex items-center justify-center"
                    >
                      {skill.icon}
                    </motion.div>

                    {/* Tooltip stays fixed */}
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
