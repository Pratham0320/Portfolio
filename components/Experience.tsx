"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, TrendingUp } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Junior Web Development Intern",
      company: "Inofinity R&D Pvt. Ltd.",
      period: "Dec 2024 – Jan 2025",
      location: "Remote",
      achievements: [
        "Built responsive UI with React/Next.js and TailwindCSS",
        "Boosted user engagement by 30% through optimized user experience",
        "Improved application performance by 35% through code optimization",
        "Collaborated with cross-functional teams on multiple projects",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Member and Problem Setter",
      company: "KodeWreck, KIIT",
      period: "May 2023 – Nov 2023",
      location: "KIIT University",
      achievements: [
        "Hosted competitive coding events for 200+ participants",
        "Created and tested algorithmic problems for competitions",
        "Mentored junior students in competitive programming",
        "Achieved top 10 rank in internal coding competitions",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "R&D Executive",
      company: "Khwaab, KIIT",
      period: "Mar 2023 – Present",
      location: "KIIT University",
      achievements: [
        "Co-developed software for tracking 100+ campus events",
        "Improved decision-making processes through data analytics",
        "Led technical workshops for student community",
        "Contributed to multiple open-source projects",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="py-20 px-6 bg-slate-50/50 dark:bg-slate-800/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white dark:border-slate-900 z-10`}
                  ></motion.div>

                  <div className="ml-20">
                    <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{exp.title}</h3>
                            <p
                              className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                            >
                              {exp.company}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.div
                                key={achIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ delay: index * 0.2 + achIndex * 0.1 + 0.5, duration: 0.5 }}
                                className="flex items-start gap-2"
                              >
                                <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-600 dark:text-slate-300">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
