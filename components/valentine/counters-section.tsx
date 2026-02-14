"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { HeartIcon, PenguinIcon, WolfIcon, RaccoonIcon, RatIcon, SpiralIcon } from "./animal-icons"

/* ── Configuration ───────────────────────────────────────── */
// Change this date to the real anniversary date
const RELATIONSHIP_START = new Date("2025-12-12T01:14:00")
const MEET_DATE = new Date("2020-10-10T19:06:00")

interface Counter {
  label: string
  getValue: () => number
  suffix: string
  icon: typeof PenguinIcon
  accentHue: string          // hsl accent colour for the ring / glow
  description: string
}

function daysSince(date: Date) {
  return Math.floor((Date.now() - date.getTime()) / 86_400_000)
}

const counters: Counter[] = [
  {
    label: "Dias juntos",
    getValue: () => daysSince(RELATIONSHIP_START),
    suffix: " dias",
    icon: PenguinIcon,
    accentHue: "180 100% 50%",
    description: "y sumando...",
  },
  {
    label: "Pensamientos por ti",
    getValue: () => daysSince(MEET_DATE) * 1212,
    suffix: "+",
    icon: RatIcon,
    accentHue: "160 80% 45%",
    description: "desde el inicio",
  },
  {
    label: "Cantidad de amor",
    getValue: () => 999_999_999,
    suffix: "+",
    icon: WolfIcon,
    accentHue: "170 70% 55%",
    description: "infinito e incalculable",
  },
  {
    label: "Tiempo de conocernos",
    getValue: () => daysSince(MEET_DATE) * 24,
    suffix: "+ hrs",
    icon: RaccoonIcon,
    accentHue: "185 90% 45%",
    description: "las mejor compartidas",
  },
]

/* ── Animated number ─────────────────────────────────────── */
function useAnimatedNumber(target: number, shouldAnimate: boolean, duration = 2000) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!shouldAnimate) return
    let start: number | null = null
    let rafId: number

    function step(timestamp: number) {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [target, shouldAnimate, duration])

  return value
}

/* ── Single counter card ─────────────────────────────────── */
function CounterCard({
  counter,
  index,
  isVisible,
}: {
  counter: Counter
  index: number
  isVisible: boolean
}) {
  const target = counter.getValue()
  const animated = useAnimatedNumber(target, isVisible, 2400)
  const Icon = counter.icon

  const formatted = animated.toLocaleString("es-ES")

  return (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 180}ms` }}
    >
      {/* Outer glow ring */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, hsl(${counter.accentHue}), transparent 60%)`,
        }}
      />

      <div className="relative rounded-2xl bg-[hsl(195,80%,6%)] border border-[hsl(195,40%,15%)] group-hover:border-[hsl(180,100%,50%,0.3)] transition-colors duration-500 overflow-hidden">
        {/* Top accent bar */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, transparent, hsl(${counter.accentHue}), transparent)`,
            opacity: 0.5,
          }}
        />

        <div className="p-6 md:p-8 flex flex-col items-center text-center">
          {/* Floating icon */}
          <div className="relative mb-5">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-500"
              style={{ background: `hsl(${counter.accentHue})` }}
            />
            <div className="relative animate-float-slow">
              <Icon size={52} />
            </div>
          </div>

          {/* Label */}
          <p className="text-xs tracking-[0.25em] uppercase text-[hsl(180,50%,55%)] mb-3 font-light">
            {counter.label}
          </p>

          {/* Number */}
          <p
            className="font-cursive text-4xl sm:text-5xl md:text-6xl leading-none mb-1"
            style={{ color: `hsl(${counter.accentHue})` }}
          >
            {formatted}
            <span className="text-2xl md:text-3xl opacity-70">{counter.suffix}</span>
          </p>

          {/* Description */}
          <p className="text-sm text-[hsl(180,30%,50%)] mt-2 italic">{counter.description}</p>

          {/* Decorative bottom hearts */}
          <div className="flex items-center gap-1.5 mt-5 opacity-0 group-hover:opacity-60 transition-opacity duration-500" aria-hidden="true">
            <HeartIcon size={8} className="text-[hsl(180,100%,50%)] animate-heartbeat" />
            <HeartIcon size={11} className="text-[hsl(160,80%,45%)] animate-heartbeat" style={{ animationDelay: "0.2s" }} />
            <HeartIcon size={8} className="text-[hsl(180,60%,70%)] animate-heartbeat" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Live clock counter (real-time ticker) ───────────────── */
function LiveTicker() {
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const totalSec = Math.floor((now - RELATIONSHIP_START.getTime()) / 1000)
  const d = Math.floor(totalSec / 86400)
  const h = Math.floor((totalSec % 86400) / 3600)
  const m = Math.floor((totalSec % 3600) / 60)
  const s = totalSec % 60

  const pad = (n: number) => n.toString().padStart(2, "0")

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
      {[
        { value: d.toLocaleString("es-ES"), unit: "dias" },
        { value: pad(h), unit: "horas" },
        { value: pad(m), unit: "min" },
        { value: pad(s), unit: "seg" },
      ].map((item) => (
        <div key={item.unit} className="flex flex-col items-center">
          <span className="font-mono text-2xl sm:text-3xl md:text-4xl text-[hsl(180,100%,50%)] tabular-nums tracking-tight">
            {item.value}
          </span>
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[hsl(180,40%,50%)] mt-1">
            {item.unit}
          </span>
        </div>
      ))}
    </div>
  )
}

/* ── Main section ────────────────────────────────────────── */
export function CountersSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-24 md:py-36 px-4">
      {/* Background ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[700px] h-[500px] rounded-full bg-[hsl(180,100%,50%)] opacity-[0.03] blur-[150px]" />
      </div>

      {/* Section header */}
      <div
        className={`relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <SpiralIcon size={20} className="text-[hsl(180,100%,50%)] opacity-40" />
          <span className="text-xs tracking-[0.3em] uppercase text-[hsl(180,60%,70%)] font-light">
            Nuestros números
          </span>
          <SpiralIcon size={20} className="text-[hsl(180,100%,50%)] opacity-40" />
        </div>

        <h2 className="font-cursive text-4xl md:text-5xl lg:text-6xl text-center text-[hsl(180,100%,70%)] mb-6 text-balance">
          Somos lo que hemos construido
        </h2>

        <p className="text-center text-[hsl(180,30%,55%)] max-w-md mx-auto mb-12 text-sm md:text-base leading-relaxed">
          Cada segundo a tu lado suma.
        </p>

        {/* Live real-time ticker */}
        <div
          className={`max-w-xl mx-auto mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="relative">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-[hsl(180,100%,50%)] via-[hsl(160,80%,45%)] to-[hsl(180,100%,50%)] opacity-20" />
            <div className="relative rounded-xl bg-[hsl(195,80%,5%)] border border-[hsl(195,40%,15%)] py-6 px-4 md:py-8 md:px-8">
              <p className="text-center text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[hsl(180,50%,55%)] mb-4">
                Tiempo exacto juntos - en vivo
              </p>
              <LiveTicker />
              <div className="flex items-center justify-center gap-2 mt-4" aria-hidden="true">
                <HeartIcon size={10} className="text-[hsl(180,100%,50%)] animate-heartbeat" />
                <div className="w-2 h-2 rounded-full bg-[hsl(180,100%,50%)] animate-pulse" />
                <HeartIcon size={10} className="text-[hsl(180,100%,50%)] animate-heartbeat" style={{ animationDelay: "0.3s" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter cards grid */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {counters.map((counter, i) => (
          <CounterCard key={i} counter={counter} index={i} isVisible={isVisible} />
        ))}
      </div>
    </section>
  )
}
