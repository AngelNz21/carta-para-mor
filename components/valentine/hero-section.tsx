"use client"

import { useEffect, useState } from "react"
import { HeartIcon, PenguinIcon, WolfIcon } from "./animal-icons"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Gradient orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-[hsl(180,100%,50%)] opacity-[0.07] blur-[120px] -top-40 -left-40"
        aria-hidden="true"
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-[hsl(160,80%,45%)] opacity-[0.06] blur-[100px] -bottom-20 -right-20"
        aria-hidden="true"
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full bg-[hsl(180,60%,70%)] opacity-[0.05] blur-[80px] top-1/3 right-1/4"
        aria-hidden="true"
      />

      {/* Floating animals */}
      <div className="absolute top-[15%] left-[8%] animate-float opacity-60 hidden md:block" aria-hidden="true">
        <PenguinIcon size={56} />
      </div>
      <div className="absolute bottom-[20%] right-[10%] animate-float-slow opacity-50 hidden md:block" aria-hidden="true">
        <WolfIcon size={52} />
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Top decorative hearts */}
        <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
          <HeartIcon size={14} className="text-[hsl(180,100%,50%)] opacity-40 animate-heartbeat" />
          <HeartIcon size={18} className="text-[hsl(160,80%,45%)] opacity-60 animate-heartbeat" style={{ animationDelay: "0.3s" }} />
          <HeartIcon size={14} className="text-[hsl(180,60%,70%)] opacity-40 animate-heartbeat" style={{ animationDelay: "0.6s" }} />
        </div>

        {/* Subtitle */}
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-[hsl(180,60%,70%)] mb-4 font-light">
          14 DE FEBRERO
        </p>

        {/* Main title */}
        <h1 className="font-cursive text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-balance leading-tight mb-6">
          <span
            className="bg-gradient-to-r from-[hsl(180,100%,70%)] via-[hsl(160,80%,65%)] to-[hsl(180,100%,70%)] bg-clip-text text-transparent bg-[length:200%] animate-shimmer"
          >
            Para Ti,
          </span>
          <br />
          <span className="text-[hsl(180,100%,50%)]">
            Mor de Mi Vida
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8" aria-hidden="true">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[hsl(180,100%,50%)] opacity-40" />
          <HeartIcon size={16} className="text-[hsl(180,100%,50%)] animate-heartbeat" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[hsl(180,100%,50%)] opacity-40" />
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-[hsl(180,40%,65%)] max-w-lg mx-auto leading-relaxed font-light">
          Hoy quiero dedicarte estas palabras desde lo más profundo de mi corazón y de mi alma,
          porque tú eres mi todo, mi alma gemela.
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-[hsl(180,100%,50%)] border-opacity-30 rounded-full mx-auto flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[hsl(180,100%,50%)] rounded-full opacity-60" />
          </div>
        </div>
      </div>
    </section>
  )
}
