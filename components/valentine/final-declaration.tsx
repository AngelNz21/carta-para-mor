"use client"

import { useEffect, useRef, useState } from "react"
import { HeartIcon, PenguinIcon, WolfIcon, RaccoonIcon, RatIcon } from "./animal-icons"

export function FinalDeclaration() {
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
    <section ref={ref} className="relative py-32 md:py-48 px-4 overflow-hidden">
      {/* Large background glow */}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="w-[800px] h-[800px] rounded-full bg-[hsl(180,100%,50%)] opacity-[0.04] blur-[200px]" />
      </div>

      {/* Corner animals */}
      <div className="absolute top-10 left-10 animate-float opacity-30 hidden lg:block" aria-hidden="true">
        <PenguinIcon size={48} />
      </div>
      <div className="absolute top-20 right-16 animate-float-slow opacity-25 hidden lg:block" aria-hidden="true">
        <WolfIcon size={44} />
      </div>
      <div className="absolute bottom-16 left-20 animate-float opacity-25 hidden lg:block" aria-hidden="true">
        <RaccoonIcon size={44} />
      </div>
      <div className="absolute bottom-10 right-10 animate-float-slow opacity-30 hidden lg:block" aria-hidden="true">
        <RatIcon size={40} />
      </div>

      <div
        className={`relative z-10 text-center max-w-3xl mx-auto transition-all duration-1500 ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
        }`}
      >
        {/* Big heart */}
        <div className="mb-10 flex justify-center" aria-hidden="true">
          <div className="relative">
            <HeartIcon size={80} className="text-[hsl(180,100%,50%)] animate-heartbeat" />
            <div className="absolute inset-0 flex items-center justify-center">
              <HeartIcon size={80} className="text-[hsl(180,100%,50%)] opacity-30 blur-lg" />
            </div>
          </div>
        </div>

        {/* Message */}
        <h2 className="font-cursive text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-balance leading-tight mb-8">
          <span className="bg-gradient-to-r from-[hsl(180,100%,70%)] via-[hsl(160,80%,65%)] to-[hsl(180,100%,70%)] bg-clip-text text-transparent bg-[length:200%] animate-shimmer">
            Te amo Natalia
          </span>
          <br />
          <span className="text-[hsl(180,100%,50%)] text-3xl sm:text-4xl md:text-5xl">
            hoy, mañana y siempre
          </span>
        </h2>

        <p className="text-lg md:text-xl text-[hsl(180,40%,65%)] max-w-lg mx-auto leading-relaxed font-light mb-12">
          Eres mi todo, mi complemento perfecto, mi otra mitad, la razón a mi felicidad.
          Tienes un muy bonito corazón mi vida.
          Gracias por ser y por elegirme cada dia.
          <br /><br />
          <span className="font-cursive text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-balance leading-tight mb-8 text-[hsl(180,100%,50%)] text-3xl sm:text-4xl md:text-5xl">
            Te amaré por siempre
          </span>
          
        </p>

        {/* Decorative bottom */}
        <div className="flex items-center justify-center gap-3" aria-hidden="true">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[hsl(180,100%,50%)] opacity-30" />
          <HeartIcon size={10} className="text-[hsl(180,100%,50%)] opacity-40" />
          <HeartIcon size={14} className="text-[hsl(160,80%,45%)] opacity-60 animate-heartbeat" />
          <HeartIcon size={10} className="text-[hsl(180,60%,70%)] opacity-40" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[hsl(180,100%,50%)] opacity-30" />
        </div>

        {/* Small animals row */}
        <div className="flex items-center justify-center gap-6 mt-12 opacity-40" aria-hidden="true">
          <PenguinIcon size={28} />
          <HeartIcon size={12} className="text-[hsl(180,100%,50%)]" />
          <WolfIcon size={28} />
          <HeartIcon size={12} className="text-[hsl(160,80%,45%)]" />
          <RaccoonIcon size={28} />
          <HeartIcon size={12} className="text-[hsl(180,60%,70%)]" />
          <RatIcon size={28} />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-24 text-center">
        <p className="text-xs tracking-[0.2em] text-[hsl(180,30%,40%)] uppercase font-light">
          Hecho con todo mi amor para ti, mor
        </p>
        <div className="flex items-center justify-center gap-1 mt-2">
          <HeartIcon size={8} className="text-[hsl(180,100%,50%)] opacity-30" />
          <span className="text-xs text-[hsl(180,30%,40%)]">3:43pm, Sábado 14 de Febrero, 2026</span>
          <HeartIcon size={8} className="text-[hsl(180,100%,50%)] opacity-30" />
        </div>
      </div>
    </section>
  )
}
