"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CodePlayground from "@/components/CodePlayground"
import MiniGames from "@/components/MiniGames"
import SkillAssessment from "@/components/SkillAssessment"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
  ]

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

          {/* Interactive Features */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <CodePlayground />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="space-y-6">
                <MiniGames />
                <SkillAssessment />
              </div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              >
                <Card className="h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-800 dark:text-white text-center">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          duration: 0.6,
                        }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                          <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full" />
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                              duration: 1,
                              ease: "easeOut",
                            }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
