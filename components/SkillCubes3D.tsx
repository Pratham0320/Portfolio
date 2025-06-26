"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Box } from "lucide-react"
import type * as THREE from "three"

function SkillCube({ position, skill, color }: { position: [number, number, number]; skill: string; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
      <Text
        position={[0, 0, 0.51]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.ttf"
      >
        {skill}
      </Text>
    </mesh>
  )
}

export default function SkillCubes3D() {
  const skills = [
    { name: "React", color: "#61DAFB", position: [-2, 0, 0] as [number, number, number] },
    { name: "JS", color: "#F7DF1E", position: [0, 0, 0] as [number, number, number] },
    { name: "TS", color: "#3178C6", position: [2, 0, 0] as [number, number, number] },
    { name: "Java", color: "#ED8B00", position: [-1, 1.5, 0] as [number, number, number] },
    { name: "Python", color: "#3776AB", position: [1, 1.5, 0] as [number, number, number] },
    { name: "CSS", color: "#1572B6", position: [0, -1.5, 0] as [number, number, number] },
  ]

  return (
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
      <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Box className="w-5 h-5" />
            3D Skills Showcase
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <Canvas camera={{ position: [0, 0, 6] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <pointLight position={[-10, -10, -10]} color="#blue" intensity={0.3} />

              {skills.map((skill, index) => (
                <SkillCube key={skill.name} position={skill.position} skill={skill.name} color={skill.color} />
              ))}

              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          </div>
          <p className="text-center text-sm text-slate-600 dark:text-slate-300 mt-2">
            Drag to rotate • Auto-rotating 3D skill cubes
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
