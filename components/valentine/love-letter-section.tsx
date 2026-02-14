"use client"

import { useEffect, useRef, useState } from "react"
import { HeartIcon, PenguinIcon } from "./animal-icons"

export function LoveLetterSection() {
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
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="w-[600px] h-[400px] rounded-full bg-[hsl(180,100%,50%)] opacity-[0.03] blur-[120px]" />
      </div>

      <div
        className={`relative z-10 max-w-2xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px flex-1 max-w-[60px] bg-[hsl(180,100%,50%)] opacity-20" />
          <span className="text-xs tracking-[0.3em] uppercase text-[hsl(180,60%,70%)] font-light">
            Mi carta para ti
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-[hsl(180,100%,50%)] opacity-20" />
        </div>

        {/* Letter card */}
        <div className="relative">
          {/* Glow border */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[hsl(180,100%,50%)] to-[hsl(160,80%,45%)] opacity-20" />

          <div className="relative rounded-2xl bg-[hsl(195,80%,6%)] border border-[hsl(195,40%,15%)] p-8 md:p-12 backdrop-blur-sm">
            {/* Corner penguin */}
            <div className="absolute -top-5 -right-5 animate-float-slow" aria-hidden="true">
              <PenguinIcon size={44} />
            </div>

            {/* Letter content */}
            <div className="space-y-6 font-cursive text-lg md:text-xl leading-relaxed text-[hsl(180,40%,75%)]">
              <p>Mi vida linda...</p>

              <p>
                Los días se han vuelto más increíbles e importantes, has hecho que
                cada momento sea invaluable y lo conserve en mente, corazón y alma.
                Como un vino que se añeja al pasar de los años: se vuelve más dulce
                y más puro.
              </p>

              <p>
                Desde el momento en que llegué a conectar contigo de una forma cósmica
                y espiritual, todo mejoró demasiado. Siempre has sido la bonita razón
                por la cual esforzarme por ver lucir tus hermosos ojos y tu preciosa
                sonrisa relucir.
              </p>

              <p>
                Eres la razón por la que cada día tiene sentido, la
                linda voz que le da vibrato a mis oídos y la esencia que enamora a mi
                ser por completo. Cada momento vivido, cada palabra compartida, cada
                risa generada, cada coqueteo provocado, cada latido... están enlazados
                a ti.
              </p>

              <p>
                Tu sonrisa y ojos son mi atardecer, tu risa el sonido del viento que
                ambienta mi calma y tu amor el calor que ordena mi hogar, eres el lugar
                donde siempre quiero estar.
              </p>

              <p>
                Hoy y siempre, quiero que sepas que eres la persona más increible
                que he conocido. Mi vida contigo es una aventura que no cambiaría
                por nada en el mundo. Eres única, eres perfecta...
              </p>

              <p className="text-right text-[hsl(180,100%,50%)]">
                Con todo mi ser,
                <br />
                <span className="text-2xl md:text-3xl">por siempre tuyo</span>
              </p>
            </div>

            {/* Decorative hearts */}
            <div className="flex items-center justify-center gap-2 mt-8 opacity-40" aria-hidden="true">
              <HeartIcon size={10} className="text-[hsl(180,100%,50%)]" />
              <HeartIcon size={14} className="text-[hsl(160,80%,45%)]" />
              <HeartIcon size={10} className="text-[hsl(180,60%,70%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
