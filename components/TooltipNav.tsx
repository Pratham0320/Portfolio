"use client";

import React from "react";
import {
  Home,
  User,
  GraduationCap,
  Wrench,
  Briefcase,
  Code,
  Github,
  Trophy,
  Mail,
} from "lucide-react";

interface TooltipNavProps {
  scrollToSection: (sectionId: string) => void;
}

export default function TooltipNav({ scrollToSection }: TooltipNavProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "github", label: "GitHub", icon: Github },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex justify-around gap-4 items-center px-6 py-2 bg-slate-900/60 backdrop-blur-md rounded-full border border-white/10 shadow-md z-50">
      {navItems.map((item) => (
        <div
          key={item.id}
          className="relative group hover:cursor-pointer hover:bg-white/10 p-2 rounded-full transition-all duration-300"
          onClick={() => scrollToSection(item.id)}
        >
          <item.icon className="w-5 h-5 text-white/90" />
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-white bg-slate-900/80 rounded-md opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
