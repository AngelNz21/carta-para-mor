"use client"

import { FloatingParticles } from "@/components/valentine/floating-particles"
import { SpontaneousSpirals } from "@/components/valentine/spontaneous-spirals"
import { HeroSection } from "@/components/valentine/hero-section"
import { LoveLetterSection } from "@/components/valentine/love-letter-section"
import { CountersSection } from "@/components/valentine/counters-section"
import { ReasonsSection } from "@/components/valentine/reasons-section"
import { AnimalParade } from "@/components/valentine/animal-parade"
import { TimelineSection } from "@/components/valentine/timeline-section"
import { PromisesSection } from "@/components/valentine/promises-section"
import { FinalDeclaration } from "@/components/valentine/final-declaration"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating ambient particles */}
      <FloatingParticles />

      {/* Spontaneous spiral bursts */}
      <SpontaneousSpirals />

      {/* Hero / Landing */}
      <HeroSection />

      {/* Love letter */}
      <LoveLetterSection />

      {/* Live counters */}
      <CountersSection />

      {/* Reasons with animals */}
      <ReasonsSection />

      {/* Animal parade marquee */}
      <AnimalParade />

      {/* Timeline of moments */}
      <TimelineSection />

      {/* Promises */}
      <PromisesSection />

      {/* Final declaration */}
      <FinalDeclaration />
    </main>
  )
}
