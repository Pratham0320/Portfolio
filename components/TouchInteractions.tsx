"use client"

import { useEffect } from "react"

export default function TouchInteractions() {
  useEffect(() => {
    let startX = 0
    let startY = 0
    let currentSection = 0

    const sections = [
      "home",
      "about",
      "education",
      "skills",
      "experience",
      "projects",
      "github",
      "achievements",
      "contact",
    ]

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!e.changedTouches[0]) return

      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY
      const diffX = startX - endX
      const diffY = startY - endY

      // Minimum swipe distance
      const minSwipeDistance = 50

      // Vertical swipe (up/down)
      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > minSwipeDistance) {
        if (diffY > 0) {
          // Swipe up - next section
          currentSection = Math.min(currentSection + 1, sections.length - 1)
        } else {
          // Swipe down - previous section
          currentSection = Math.max(currentSection - 1, 0)
        }

        const targetSection = document.getElementById(sections[currentSection])
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" })
        }
      }

      // Horizontal swipe for project cards
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
        const projectCards = document.querySelectorAll("[data-project-card]")
        projectCards.forEach((card, index) => {
          if (diffX > 0) {
            // Swipe left - next project
            card.classList.add("swipe-left")
          } else {
            // Swipe right - previous project
            card.classList.add("swipe-right")
          }

          setTimeout(() => {
            card.classList.remove("swipe-left", "swipe-right")
          }, 300)
        })
      }
    }

    // Add haptic feedback for touch interactions
    const addHapticFeedback = () => {
      if ("vibrate" in navigator) {
        navigator.vibrate(10) // Short vibration
      }
    }

    // Enhanced touch feedback for buttons
    const handleTouchButton = (e: TouchEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "BUTTON" || target.closest("button")) {
        addHapticFeedback()
        target.classList.add("touch-active")
        setTimeout(() => {
          target.classList.remove("touch-active")
        }, 150)
      }
    }

    document.addEventListener("touchstart", handleTouchStart, { passive: true })
    document.addEventListener("touchend", handleTouchEnd, { passive: true })
    document.addEventListener("touchstart", handleTouchButton, { passive: true })

    return () => {
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchend", handleTouchEnd)
      document.removeEventListener("touchstart", handleTouchButton)
    }
  }, [])

  return null // This component only adds event listeners
}
