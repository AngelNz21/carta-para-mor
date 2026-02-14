"use client"

import { useEffect, useRef, useState } from "react"
import { HeartIcon } from "./animal-icons"

const moments = [
  {
    title: "El día que nos conocimos",
    description: "Ese primer cruce de palabras, esa primer llamada en que ambos nos conectamos y por alguna cuestión del universo me quedé a conversar sin saber que más adelante nos convertiríamos en muchísimo más.",
  },
  {
    title: "Nuestra primer plática a corazón abierto",
    description: "La tensión de quererme expresar más por ti, esa sensación de que el tiempo se detuvo solo para comprendernos entre nosotros dos.",
  },
  {
    title: "Cuando dijiste 'te amo ca'",
    description: "Tres palabras que hicieron latir mi corazón como nunca antes. Un momento que guardo para siempre.",
  },
  {
    title: "Cuando nuestra conexión evolucionó a química",
    description: "Ese 'oye...' que comenzó nuestra bonita relación. El momento exacto de una gran historia que con mucho amor seguirá siendo escrita por nosotros...",
  },
  {
    title: "Nuestro tiempo juntos",
    description: "Cada llamada, cada videojuego, cada risa, cada momento vivido a tu lado... todos son curitas que ayudan a mi alma.",
  },
  {
    title: "Hoy y siempre",
    description: "Cada nuevo día a tu lado es el mejor regalo. Siempre más y más enamorado de ti.",
  },
]

export function TimelineSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    itemsRef.current.forEach((item, i) => {
      if (!item) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, i]))
          }
        },
        { threshold: 0.4 }
      )
      observer.observe(item)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section className="relative py-24 md:py-32 px-4">
      {/* Background orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[hsl(160,80%,45%)] opacity-[0.03] blur-[150px]" aria-hidden="true" />

      {/* Section label */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px flex-1 max-w-[60px] bg-[hsl(180,100%,50%)] opacity-20" />
        <span className="text-xs tracking-[0.3em] uppercase text-[hsl(180,60%,70%)] font-light">
          Nuestra historia
        </span>
        <div className="h-px flex-1 max-w-[60px] bg-[hsl(180,100%,50%)] opacity-20" />
      </div>

      <h2 className="font-cursive text-4xl md:text-5xl lg:text-6xl text-center text-[hsl(180,100%,70%)] mb-20 text-balance">
        Momentos que recordaré
      </h2>

      {/* Timeline */}
      <div className="max-w-2xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[hsl(180,100%,50%,0.2)] to-transparent" aria-hidden="true" />

        {moments.map((moment, i) => {
          const isEven = i % 2 === 0
          return (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el }}
              className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${
                visibleItems.has(i)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[hsl(180,100%,50%)] z-10 transition-colors duration-500 ${
                  visibleItems.has(i) ? "bg-[hsl(180,100%,50%)]" : "bg-background"
                }`}
                aria-hidden="true"
              >
                <div className="absolute inset-0 rounded-full bg-[hsl(180,100%,50%)] animate-ping opacity-20" />
              </div>

              {/* Content */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-30px)] ${
                  isEven ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="group">
                  <h3 className="text-lg md:text-xl font-semibold text-[hsl(180,100%,80%)] mb-2 flex items-center gap-2">
                    {!isEven && <HeartIcon size={12} className="text-[hsl(180,100%,50%)] opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />}
                    <span className={isEven ? "md:ml-auto" : ""}>{moment.title}</span>
                    {isEven && <HeartIcon size={12} className="text-[hsl(180,100%,50%)] opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />}
                  </h3>
                  <p className="text-sm md:text-base text-[hsl(180,30%,55%)] leading-relaxed">
                    {moment.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
