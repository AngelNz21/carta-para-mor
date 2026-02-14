"use client"

import { useEffect, useState } from "react"
import { HeartIcon, SpiralIcon } from "./animal-icons"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  type: "heart" | "spiral" | "dot"
  opacity: number
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 16 + 8,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      type: i % 5 === 0 ? "spiral" : i % 3 === 0 ? "heart" : "dot",
      opacity: Math.random() * 0.3 + 0.1,
    }))
    setParticles(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            opacity: p.opacity,
          }}
        >
          {p.type === "heart" ? (
            <HeartIcon
              size={p.size}
              className="text-[hsl(180,100%,50%)]"
            />
          ) : p.type === "spiral" ? (
            <SpiralIcon
              size={p.size + 6}
              className="text-[hsl(160,80%,45%)]"
              style={{ animation: `spiral-spin ${p.duration * 2}s linear infinite` } as React.CSSProperties}
            />
          ) : (
            <div
              className="rounded-full bg-[hsl(180,100%,50%)]"
              style={{
                width: p.size / 2.5,
                height: p.size / 2.5,
                filter: "blur(1px)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
