"use client"

import { useEffect, useRef, useState } from "react"
import { HeartIcon, PenguinIcon, WolfIcon, RaccoonIcon, RatIcon, SpiralIcon } from "./animal-icons"

const reasons = [
  {
    icon: PenguinIcon,
    title: "Lealtad",
    text: "Como los pingüinos que eligen a su pareja para toda la vida, así te elijo yo a ti, cada día, sin dudarlo.",
  },
  {
    icon: WolfIcon,
    title: "Fuerza",
    text: "Como la manada de lobos que protege a los suyos, tú me das fuerza y seguridad en cada momento.",
  },
  {
    icon: RaccoonIcon,
    title: "Curiosidad",
    text: "Como un mapache explorando el mundo, mi curiosidad y alegría por ti hacen que cada momento sea inolvidable.",
  },
  {
    icon: RatIcon,
    title: "Inteligencia",
    text: "Tan ingeniosa y astuta como nadie, siempre haciendo brillar todo a tu alrededor.",
  },
]

export function ReasonsSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    cardsRef.current.forEach((card, i) => {
      if (!card) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, i]))
          }
        },
        { threshold: 0.3 }
      )
      observer.observe(card)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section className="relative py-24 md:py-32 px-4">
      {/* Section label */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <SpiralIcon size={20} className="text-[hsl(180,100%,50%)] opacity-40" />
        <span className="text-xs tracking-[0.3em] uppercase text-[hsl(180,60%,70%)] font-light">
          ¿Por qué te amo?
        </span>
        <SpiralIcon size={20} className="text-[hsl(180,100%,50%)] opacity-40" />
      </div>

      <h2 className="font-cursive text-4xl md:text-5xl lg:text-6xl text-center text-[hsl(180,100%,70%)] mb-16 text-balance">
        Por muchas razones...
      </h2>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {reasons.map((reason, i) => {
          const Icon = reason.icon
          return (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el }}
              className={`group relative transition-all duration-700 ${
                visibleCards.has(i)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Card glow on hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[hsl(180,100%,50%)] to-[hsl(160,80%,45%)] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="relative rounded-2xl bg-[hsl(195,80%,6%)] border border-[hsl(195,40%,15%)] p-6 md:p-8 group-hover:border-[hsl(180,100%,50%,0.3)] transition-colors duration-500">
                <div className="flex items-start gap-5">
                  {/* Animal icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-[hsl(180,100%,50%)] opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity" />
                    <Icon size={56} className="relative" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-[hsl(180,100%,80%)] mb-2 flex items-center gap-2">
                      {reason.title}
                      <HeartIcon size={14} className="text-[hsl(180,100%,50%)] opacity-0 group-hover:opacity-100 transition-opacity animate-heartbeat" />
                    </h3>
                    <p className="text-sm md:text-base text-[hsl(180,30%,55%)] leading-relaxed">
                      {reason.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
