"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface SidebarNavigationProps {
  activeSection: string
}

export default function SidebarNavigation({ activeSection }: SidebarNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "github", label: "GitHub" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed left-6 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4" : ""
      }`}
    >
      <div className="flex flex-col space-y-4">
        {navItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
            className="relative flex items-center"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <motion.button
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`relative w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 border-blue-400 shadow-lg shadow-blue-500/50"
                  : "bg-white/20 border-white/40 hover:bg-white/30 hover:border-white/60 hover:shadow-lg hover:shadow-white/20"
              }`}
            >
              {/* Inner dot for active state */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-1 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>

            {/* Tooltip - Now perfectly aligned */}
            {hoveredItem === item.id && (
              <motion.div
                initial={{ opacity: 0, x: -10, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute left-8 top-0 bottom-0 flex items-center bg-slate-900/95 dark:bg-white/95 text-white dark:text-slate-900 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap pointer-events-none shadow-xl border border-white/10 dark:border-slate-900/10 backdrop-blur-sm z-10"
              >
                {item.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-3 h-3 bg-slate-900/95 dark:bg-white/95 rotate-45 border-l border-b border-white/10 dark:border-slate-900/10" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Progress indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute -right-2 top-0 bottom-0 w-0.5 bg-white/20 rounded-full"
      >
        <motion.div
          className="w-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full origin-top"
          style={{
            height: `${((navItems.findIndex((item) => item.id === activeSection) + 1) / navItems.length) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.nav>
  )
}
