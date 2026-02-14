"use client"

import { useEffect, useRef, useState } from "react"
import { PenguinIcon, WolfIcon, RaccoonIcon, RatIcon, HeartIcon } from "./animal-icons"

const animals = [
  { Icon: PenguinIcon, name: "Pinguino", message: "Juntos para siempre" },
  { Icon: WolfIcon, name: "Lobo", message: "Tú eres mi manada" },
  { Icon: RaccoonIcon, name: "Mapache", message: "Aprendamos juntos" },
  { Icon: RatIcon, name: "Ratita", message: "Eres el amor de mi vida" },
  { Icon: PenguinIcon, name: "Pinguino", message: "Mi corazón es tuyo" },
  { Icon: WolfIcon, name: "Lobo", message: "Pido a la luna por ti" },
  { Icon: RaccoonIcon, name: "Mapache", message: "Eres mi tesoro" },
  { Icon: RatIcon, name: "Ratita", message: "Contigo al fin del mundo" },
]

export function AnimalParade() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      {/* Section label */}
      <div className="flex items-center justify-center gap-3 mb-10 px-4">
        <HeartIcon size={14} className="text-[hsl(180,100%,50%)] opacity-40" />
        <span className="text-xs tracking-[0.3em] uppercase text-[hsl(180,60%,70%)] font-light">
          Nuestro zoológico de amor
        </span>
        <HeartIcon size={14} className="text-[hsl(180,100%,50%)] opacity-40" />
      </div>

      {/* Scrolling strip */}
      <div className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="flex animate-[drift-left_30s_linear_infinite]" style={{ width: "fit-content" }}>
          {[...animals, ...animals].map((animal, i) => {
            const { Icon } = animal
            return (
              <div
                key={i}
                className="group flex-shrink-0 flex flex-col items-center mx-6 md:mx-10"
              >
                <div className="relative p-4 rounded-2xl bg-[hsl(195,80%,6%)] border border-[hsl(195,40%,15%)] group-hover:border-[hsl(180,100%,50%,0.3)] transition-all duration-300 group-hover:scale-110">
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-[hsl(180,100%,50%)] opacity-0 group-hover:opacity-10 transition-opacity blur-xl" />
                  <Icon size={64} className="relative" />
                  {/* Heart badge */}
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <HeartIcon size={16} className="text-[hsl(180,100%,50%)] animate-heartbeat" />
                  </div>
                </div>
                <p className="mt-3 text-xs text-[hsl(180,60%,70%)] font-light opacity-0 group-hover:opacity-100 transition-opacity text-center max-w-[100px]">
                  {animal.message}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
