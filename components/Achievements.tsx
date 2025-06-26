"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, Medal, Target, Zap, Crown } from "lucide-react"

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      icon: Trophy,
      title: "Smart India Hackathon",
      subtitle: "Top 5%",
      description: "Secured position in top 5% among thousands of participants in the national-level hackathon",
      color: "from-yellow-500 to-orange-500",
      year: "2024",
    },
    {
      icon: Award,
      title: "IIM Ahmedabad Ideathon",
      subtitle: "Top 10%",
      description: "Achieved top 10% ranking in the prestigious business ideathon competition",
      color: "from-blue-500 to-indigo-500",
      year: "2024",
    },
    {
      icon: Medal,
      title: "NTSE Olympiad",
      subtitle: "Gold Medalist",
      description: "Won gold medal in National Talent Search Examination Olympiad",
      color: "from-yellow-600 to-yellow-400",
      year: "2016",
    },
    {
      icon: Target,
      title: "DSA Problem Solving",
      subtitle: "500+ Problems",
      description: "Successfully solved over 500 data structures and algorithms problems across platforms",
      color: "from-green-500 to-emerald-500",
      year: "Ongoing",
    },
    {
      icon: Crown,
      title: "KodeWreck Competition",
      subtitle: "Top 10 Rank",
      description: "Achieved top 10 ranking in competitive programming contest at KIIT University",
      color: "from-purple-500 to-pink-500",
      year: "2023",
    },
    {
      icon: Zap,
      title: "Technical Leadership",
      subtitle: "Multiple Roles",
      description: "Led technical initiatives across multiple student organizations and societies",
      color: "from-cyan-500 to-blue-500",
      year: "2023-Present",
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
            Achievements & Recognition
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 30, rotateY: -15 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group perspective-1000"
              >
                <Card className="h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group-hover:scale-105 transform-gpu">
                  <CardContent className="p-6 text-center space-y-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                      className={`w-16 h-16 mx-auto bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <achievement.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                      className="space-y-2"
                    >
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">{achievement.title}</h3>
                      <p
                        className={`text-lg font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}
                      >
                        {achievement.subtitle}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {achievement.description}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
                      className="pt-2"
                    >
                      <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">
                        {achievement.year}
                      </span>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-12"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Continuous Growth & Learning</h3>
                <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                  These achievements represent my commitment to excellence and continuous learning. I believe in pushing
                  boundaries and taking on challenges that help me grow both personally and professionally.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
