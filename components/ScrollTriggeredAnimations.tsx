"use client"

import type React from "react"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "rotate" | "parallax"
  delay?: number
}

export default function ScrollTriggeredAnimation({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 50 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
      transition: { duration: 0.8, delay },
    },
    fadeLeft: {
      initial: { opacity: 0, x: -50 },
      animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
      transition: { duration: 0.8, delay },
    },
    fadeRight: {
      initial: { opacity: 0, x: 50 },
      animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 },
      transition: { duration: 0.8, delay },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
      transition: { duration: 0.8, delay },
    },
    rotate: {
      initial: { opacity: 0, rotate: -10 },
      animate: isInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -10 },
      transition: { duration: 0.8, delay },
    },
    parallax: {
      style: { y, opacity },
    },
  }

  return (
    <motion.div ref={ref} className={className} {...animations[animation]}>
      {children}
    </motion.div>
  )
}
