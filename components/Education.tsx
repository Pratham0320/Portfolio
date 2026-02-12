"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, Award } from "lucide-react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            Education
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                        Bachelor of Technology in Computer Science
                      </h3>
                      <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                        Kalinga Institute of Industrial Technology (KIIT)
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>2022 – Present</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <span className="font-semibold text-green-800 dark:text-green-300">Current CGPA</span>
                        </div>
                        <p className="text-2xl font-bold text-green-700 dark:text-green-400">8.60</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <span className="font-semibold text-blue-800 dark:text-blue-300">Highest SGPA</span>
                        </div>
                        <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">9.80</p>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 1, duration: 0.6 }}
                      className="pt-4"
                    >
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        Pursuing comprehensive education in computer science with focus on software engineering, data
                        structures, algorithms, and modern web technologies. Actively participating in coding
                        competitions and technical societies.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
