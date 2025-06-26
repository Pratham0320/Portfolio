"use client"

import { motion } from "framer-motion"

interface LoadingSkeletonProps {
  className?: string
  variant?: "text" | "card" | "avatar" | "button"
  lines?: number
}

export default function LoadingSkeleton({ className = "", variant = "text", lines = 1 }: LoadingSkeletonProps) {
  const shimmer = {
    animate: {
      backgroundPosition: ["200% 0", "-200% 0"],
    },
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    },
  }

  const baseClasses =
    "bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 bg-[length:200%_100%] rounded"

  if (variant === "text") {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <motion.div key={i} className={`h-4 ${baseClasses} ${i === lines - 1 ? "w-3/4" : "w-full"}`} {...shimmer} />
        ))}
      </div>
    )
  }

  if (variant === "card") {
    return (
      <div className={`space-y-4 ${className}`}>
        <motion.div className={`h-48 ${baseClasses}`} {...shimmer} />
        <div className="space-y-2">
          <motion.div className={`h-6 ${baseClasses}`} {...shimmer} />
          <motion.div className={`h-4 ${baseClasses} w-3/4`} {...shimmer} />
          <motion.div className={`h-4 ${baseClasses} w-1/2`} {...shimmer} />
        </div>
      </div>
    )
  }

  if (variant === "avatar") {
    return <motion.div className={`w-12 h-12 rounded-full ${baseClasses} ${className}`} {...shimmer} />
  }

  if (variant === "button") {
    return <motion.div className={`h-10 w-24 ${baseClasses} ${className}`} {...shimmer} />
  }

  return <motion.div className={`h-4 ${baseClasses} ${className}`} {...shimmer} />
}
