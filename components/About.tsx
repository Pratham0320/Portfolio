"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
            <CardContent className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                <p>
                  Hello! I'm Pratham Shandilya, a passionate Computer Science undergraduate at KIIT University with a
                  deep love for software development and problem-solving. My journey in technology began with curiosity
                  and has evolved into a dedicated pursuit of creating innovative solutions.
                </p>

                <p>
                  I thrive on challenges and enjoy working with cutting-edge technologies to build applications that
                  make a difference. My experience spans across web development, competitive programming, and software
                  engineering, with a particular interest in full-stack development and data structures.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new technologies, participating in hackathons, or
                  contributing to open-source projects. I believe in continuous learning and am always eager to take on
                  new challenges that push the boundaries of what's possible.
                </p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-wrap gap-3 pt-4"
                >
                  {["Problem Solving", "Full-Stack Development", "Competitive Programming", "Open Source"].map(
                    (interest, index) => (
                      <span
                        key={interest}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {interest}
                      </span>
                    ),
                  )}
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
