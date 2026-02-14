"use client"

import { useEffect, useRef, useCallback } from "react"

interface Spiral {
  id: number
  x: number
  y: number
  size: number
  duration: number
  hue: number
  direction: 1 | -1
  variant: "fibonacci" | "vortex" | "bloom" | "rings"
}

function SpiralSVG({
  variant,
  hue,
  size,
}: {
  variant: Spiral["variant"]
  hue: number
  size: number
}) {
  const color1 = `hsl(${hue}, 100%, 50%)`
  const color2 = `hsl(${hue + 20}, 80%, 65%)`
  const color3 = `hsl(${hue - 10}, 90%, 40%)`

  if (variant === "fibonacci") {
    // Golden spiral made of arcs
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id={`fg-${hue}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color1} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color2} stopOpacity="0" />
          </radialGradient>
        </defs>
        <path
          d="M50 50 C50 38 60 28 72 28 C86 28 92 42 92 50 C92 68 76 82 58 82 C34 82 18 66 18 50 C18 28 36 10 58 10 C84 10 100 32 100 50"
          stroke={color1}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M50 50 C50 44 54 38 60 38 C68 38 72 46 72 50 C72 60 64 68 54 68 C42 68 34 58 34 50 C34 38 44 28 54 28"
          stroke={color2}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="50" cy="50" r="3" fill={`url(#fg-${hue})`} />
      </svg>
    )
  }

  if (variant === "vortex") {
    // Multiple trailing arms like a galaxy
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id={`vg-${hue}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color1} stopOpacity="0.6" />
            <stop offset="70%" stopColor={color3} stopOpacity="0.15" />
            <stop offset="100%" stopColor={color2} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="42" fill={`url(#vg-${hue})`} />
        {[0, 72, 144, 216, 288].map((rot) => (
          <path
            key={rot}
            d="M50 50 C52 42 58 34 66 32 C76 30 82 38 84 46"
            stroke={color1}
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.6"
            transform={`rotate(${rot} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="4" fill={color1} opacity="0.9" />
        <circle cx="50" cy="50" r="2" fill="#fff" opacity="0.8" />
      </svg>
    )
  }

  if (variant === "bloom") {
    // Flower/bloom spiral with petals
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id={`bg-${hue}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color1} stopOpacity="0.5" />
            <stop offset="100%" stopColor={color2} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill={`url(#bg-${hue})`} />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((rot) => (
          <ellipse
            key={rot}
            cx="50"
            cy="30"
            rx="5"
            ry="16"
            fill={color1}
            opacity="0.25"
            transform={`rotate(${rot} 50 50)`}
          />
        ))}
        {[22, 67, 112, 157, 202, 247, 292, 337].map((rot) => (
          <ellipse
            key={rot}
            cx="50"
            cy="35"
            rx="3.5"
            ry="11"
            fill={color2}
            opacity="0.2"
            transform={`rotate(${rot} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="6" fill={color1} opacity="0.7" />
        <circle cx="50" cy="50" r="3" fill="#fff" opacity="0.6" />
      </svg>
    )
  }

  // rings variant -- concentric expanding rings
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {[38, 30, 22, 14, 6].map((r, i) => (
        <circle
          key={r}
          cx="50"
          cy="50"
          r={r}
          stroke={i % 2 === 0 ? color1 : color2}
          strokeWidth="1"
          opacity={0.5 - i * 0.08}
          strokeDasharray={`${4 + i * 2} ${3 + i}`}
        />
      ))}
      <path
        d="M50 50 C50 42 56 34 64 34 C74 34 78 44 78 50 C78 62 66 72 54 72 C40 72 30 60 30 50 C30 36 42 24 54 24"
        stroke={color1}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="50" cy="50" r="3" fill={color1} opacity="0.9" />
    </svg>
  )
}

export function SpontaneousSpirals() {
  const containerRef = useRef<HTMLDivElement>(null)
  const spiralIdRef = useRef(0)
  const activeCountRef = useRef(0)
  const MAX_SPIRALS = 4

  const spawnSpiral = useCallback(() => {
    const container = containerRef.current
    if (!container || activeCountRef.current >= MAX_SPIRALS) return

    const variants: Spiral["variant"][] = ["fibonacci", "vortex", "bloom", "rings"]
    const spiral: Spiral = {
      id: spiralIdRef.current++,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      size: Math.random() * 80 + 60,
      duration: Math.random() * 3 + 4,
      hue: Math.random() * 40 + 160, // 160-200 range: cyan to teal
      direction: Math.random() > 0.5 ? 1 : -1,
      variant: variants[Math.floor(Math.random() * variants.length)],
    }

    activeCountRef.current++

    const el = document.createElement("div")
    el.style.cssText = `
      position: absolute;
      left: ${spiral.x}%;
      top: ${spiral.y}%;
      width: ${spiral.size}px;
      height: ${spiral.size}px;
      transform: translate(-50%, -50%) scale(0) rotate(0deg);
      pointer-events: none;
      z-index: 1;
      animation: spiral-emerge ${spiral.duration}s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      --spiral-direction: ${spiral.direction};
    `

    const inner = document.createElement("div")
    inner.style.cssText = `
      width: 100%;
      height: 100%;
      animation: spiral-continuous-spin ${spiral.duration * 1.5}s linear infinite;
      animation-direction: ${spiral.direction === 1 ? "normal" : "reverse"};
    `

    // Render the SVG via a temporary container
    const svgNS = "http://www.w3.org/2000/svg"
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = getSpiralSVGString(spiral)
    const svgEl = tempDiv.firstElementChild
    if (svgEl) inner.appendChild(svgEl)

    el.appendChild(inner)
    container.appendChild(el)

    // Remove after animation completes
    setTimeout(() => {
      el.remove()
      activeCountRef.current--
    }, spiral.duration * 1000)
  }, [])

  useEffect(() => {
    // Initial burst of 2
    const t0 = setTimeout(() => spawnSpiral(), 800)
    const t1 = setTimeout(() => spawnSpiral(), 1600)

    // Recurring random spawns
    let intervalId: ReturnType<typeof setInterval>

    function scheduleNext() {
      const delay = Math.random() * 3500 + 2000 // 2-5.5s
      intervalId = setTimeout(() => {
        spawnSpiral()
        scheduleNext()
      }, delay) as unknown as ReturnType<typeof setInterval>
    }

    scheduleNext()

    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(intervalId)
    }
  }, [spawnSpiral])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  )
}

// Server-render a spiral SVG as string for DOM insertion
function getSpiralSVGString(spiral: Spiral): string {
  const { variant, hue, size } = spiral
  const c1 = `hsl(${hue}, 100%, 50%)`
  const c2 = `hsl(${hue + 20}, 80%, 65%)`
  const c3 = `hsl(${hue - 10}, 90%, 40%)`

  if (variant === "fibonacci") {
    return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none">
      <defs><radialGradient id="fg${spiral.id}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${c1}" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="${c2}" stop-opacity="0"/>
      </radialGradient></defs>
      <path d="M50 50 C50 38 60 28 72 28 C86 28 92 42 92 50 C92 68 76 82 58 82 C34 82 18 66 18 50 C18 28 36 10 58 10 C84 10 100 32 100 50" stroke="${c1}" stroke-width="1.5" stroke-linecap="round" opacity="0.9"/>
      <path d="M50 50 C50 44 54 38 60 38 C68 38 72 46 72 50 C72 60 64 68 54 68 C42 68 34 58 34 50 C34 38 44 28 54 28" stroke="${c2}" stroke-width="1" stroke-linecap="round" opacity="0.7"/>
      <circle cx="50" cy="50" r="3" fill="url(#fg${spiral.id})"/>
    </svg>`
  }

  if (variant === "vortex") {
    const arms = [0, 72, 144, 216, 288]
      .map(
        (r) =>
          `<path d="M50 50 C52 42 58 34 66 32 C76 30 82 38 84 46" stroke="${c1}" stroke-width="1.2" stroke-linecap="round" opacity="0.6" transform="rotate(${r} 50 50)"/>`
      )
      .join("")
    return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none">
      <defs><radialGradient id="vg${spiral.id}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${c1}" stop-opacity="0.6"/>
        <stop offset="70%" stop-color="${c3}" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="${c2}" stop-opacity="0"/>
      </radialGradient></defs>
      <circle cx="50" cy="50" r="42" fill="url(#vg${spiral.id})"/>
      ${arms}
      <circle cx="50" cy="50" r="4" fill="${c1}" opacity="0.9"/>
      <circle cx="50" cy="50" r="2" fill="#fff" opacity="0.8"/>
    </svg>`
  }

  if (variant === "bloom") {
    const petals1 = [0, 45, 90, 135, 180, 225, 270, 315]
      .map(
        (r) =>
          `<ellipse cx="50" cy="30" rx="5" ry="16" fill="${c1}" opacity="0.25" transform="rotate(${r} 50 50)"/>`
      )
      .join("")
    const petals2 = [22, 67, 112, 157, 202, 247, 292, 337]
      .map(
        (r) =>
          `<ellipse cx="50" cy="35" rx="3.5" ry="11" fill="${c2}" opacity="0.2" transform="rotate(${r} 50 50)"/>`
      )
      .join("")
    return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none">
      <defs><radialGradient id="bg${spiral.id}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${c1}" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="${c2}" stop-opacity="0"/>
      </radialGradient></defs>
      <circle cx="50" cy="50" r="40" fill="url(#bg${spiral.id})"/>
      ${petals1}${petals2}
      <circle cx="50" cy="50" r="6" fill="${c1}" opacity="0.7"/>
      <circle cx="50" cy="50" r="3" fill="#fff" opacity="0.6"/>
    </svg>`
  }

  // rings
  const rings = [38, 30, 22, 14, 6]
    .map(
      (r, i) =>
        `<circle cx="50" cy="50" r="${r}" stroke="${i % 2 === 0 ? c1 : c2}" stroke-width="1" opacity="${0.5 - i * 0.08}" stroke-dasharray="${4 + i * 2} ${3 + i}"/>`
    )
    .join("")
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none">
    ${rings}
    <path d="M50 50 C50 42 56 34 64 34 C74 34 78 44 78 50 C78 62 66 72 54 72 C40 72 30 60 30 50 C30 36 42 24 54 24" stroke="${c1}" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
    <circle cx="50" cy="50" r="3" fill="${c1}" opacity="0.9"/>
  </svg>`
}
