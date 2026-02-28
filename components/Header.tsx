"use client";

import { motion } from "framer-motion";
import {
  ChevronDown,
  Mail,
  Phone,
  Linkedin,
  Github,
  Link,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/TypingAnimation";
import ParticleBackground from "@/components/ParticleBackground";

export default function Header() {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -100, null],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl"
          >
            <img
              src="/Gemini_Generated_Image_egrajegrajegraje.png"
              alt="Pratham Shandilya"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 10%" }} // Moves image focus upward, showing more hair
            />
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Pratham Shandilya
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300"
            >
              <TypingAnimation
                texts={[
                  "Computer Science Undergraduate @ KIIT",
                  "Full-Stack Developer",
                  "Problem Solver",
                  "Tech Enthusiast",
                ]}
                className="font-semibold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
            >
              Passionate about software development, problem-solving, and
              creating innovative solutions
            </motion.p>
          </div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              variant="outline"
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
              asChild
            >
              <a
                href="mailto:prathamshandilya2207@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
              asChild
            >
              <a href="tel:+917084918772" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
              asChild
            >
              <a
                href="https://linkedin.com/in/Pratham0320"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
              asChild
            >
              <a
                href="https://github.com/Pratham0320"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1R_HSw0-S5nG0TrwXbtICRcW684SfxXb9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Link className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Positioned at very bottom */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToNext}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </div>
  );
}
