"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, Eye } from "lucide-react"

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState(0)
  const [currentViewers, setCurrentViewers] = useState(0)

  useEffect(() => {
    // Simulate visitor count (in real app, this would come from analytics)
    const storedVisitors = localStorage.getItem("visitorCount")
    const initialCount = storedVisitors ? Number.parseInt(storedVisitors) : Math.floor(Math.random() * 1000) + 500

    setVisitors(initialCount + 1)
    localStorage.setItem("visitorCount", (initialCount + 1).toString())

    // Simulate current viewers
    setCurrentViewers(Math.floor(Math.random() * 5) + 1)

    // Update current viewers periodically
    const interval = setInterval(() => {
      setCurrentViewers(Math.floor(Math.random() * 8) + 1)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-40 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700 p-3 shadow-lg"
    >
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4 text-blue-600" />
          <span className="font-medium">{visitors.toLocaleString()}</span>
          <span className="text-slate-600 dark:text-slate-300">visits</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <Eye className="w-4 h-4 text-green-600" />
          <span className="font-medium">{currentViewers}</span>
          <span className="text-slate-600 dark:text-slate-300">online</span>
        </div>
      </div>
    </motion.div>
  )
}
