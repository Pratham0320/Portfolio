"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export default function ProgressBars() {
  const { scrollYProgress } = useScroll()
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const updateReadingProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setReadingProgress(Math.min(progress, 100))
    }

    window.addEventListener("scroll", updateReadingProgress)
    return () => window.removeEventListener("scroll", updateReadingProgress)
  }, [])

  return (
    <>
      {/* Main scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Reading progress indicator */}
      {/* <div className="fixed top-20 left-4 z-40 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-slate-300 dark:text-slate-600"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              className="text-blue-600"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              style={{
                strokeDasharray: "100, 100",
                strokeDashoffset: 100 - readingProgress,
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{Math.round(readingProgress)}%</span>
          </div>
        </div>
      </div> */}
    </>
  )
}
