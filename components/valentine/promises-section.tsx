"use client"

import { useEffect, useRef, useState } from "react"
import { HeartIcon, SpiralIcon } from "./animal-icons"

const promises = [
  "Amarte cada día más que el anterior",
  "Hacerte reír hasta que te duela la panza",
  "Ser tu refugio cuando el mundo se ponga difícil",
  "Nunca dejar de enamorárte más y más",
  "Lograr nuestros sueños juntos, ser un mismo equipo",
  "Llenarte de besos hasta llegar a tu alma",
]

export function PromisesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 opacity-10" aria-hidden="true">
        <SpiralIcon size={120} className="text-[hsl(180,100%,50%)]" style={{ animation: "spiral-spin 20s linear infinite" } as React.CSSProperties} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10" aria-hidden="true">
        <SpiralIcon size={80} className="text-[hsl(160,80%,45%)]" style={{ animation: "spiral-spin 15s linear infinite reverse" } as React.CSSProperties} />
      </div>

      {/* Section label */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <HeartIcon size={14} className="text-[hsl(180,100%,50%)] opacity-40 animate-heartbeat" />
        <span className="text-xs tracking-[0.3em] uppercase text-[hsl(180,60%,70%)] font-light">
          Mis promesas
        </span>
        <HeartIcon size={14} className="text-[hsl(180,100%,50%)] opacity-40 animate-heartbeat" />
      </div>

      <h2 className="font-cursive text-4xl md:text-5xl lg:text-6xl text-center text-[hsl(180,100%,70%)] mb-16 text-balance">
        Te prometo...
      </h2>

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {promises.map((promise, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-5 rounded-xl border border-[hsl(195,40%,15%)] bg-[hsl(195,80%,6%)] hover:border-[hsl(180,100%,50%,0.3)] transition-all duration-700 group ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : i % 2 === 0
                  ? "opacity-0 -translate-x-8"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(180,100%,50%,0.1)] flex items-center justify-center group-hover:bg-[hsl(180,100%,50%,0.2)] transition-colors">
                <HeartIcon size={18} className="text-[hsl(180,100%,50%)] group-hover:animate-heartbeat" />
              </div>
              <p className="text-sm md:text-base text-[hsl(180,40%,70%)] leading-relaxed font-light">
                {promise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
