"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import type * as THREE from "three"

function FloatingShape({
  position,
  color,
  shape,
}: {
  position: [number, number, number]
  color: string
  shape: "sphere" | "box" | "octahedron"
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.01
    }
  })

  const geometry = {
    sphere: <sphereGeometry args={[0.5, 16, 16]} />,
    box: <boxGeometry args={[0.8, 0.8, 0.8]} />,
    octahedron: <octahedronGeometry args={[0.6]} />,
  }

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {geometry[shape]}
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </Float>
  )
}

export default function FloatingShapes() {
  const shapes = [
    { shape: "sphere" as const, position: [-3, 2, -2] as [number, number, number], color: "#3B82F6" },
    { shape: "box" as const, position: [3, -1, -3] as [number, number, number], color: "#8B5CF6" },
    { shape: "octahedron" as const, position: [-2, -2, -1] as [number, number, number], color: "#06B6D4" },
    { shape: "sphere" as const, position: [2, 3, -4] as [number, number, number], color: "#10B981" },
    { shape: "box" as const, position: [0, -3, -2] as [number, number, number], color: "#F59E0B" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />

        {shapes.map((shape, index) => (
          <FloatingShape key={index} position={shape.position} color={shape.color} shape={shape.shape} />
        ))}
      </Canvas>
    </div>
  )
}
