"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

export function BeyondBowlSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.3 })

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div
            className={`relative transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden glow-mint-subtle">
              <img
                src="/sleek-modern-pet-feeding-bowl-with-plant-fiber-des.jpg"
                alt="Eco-friendly pet feeding bowl"
                className="w-full h-full object-cover"
              />
              {/* Animated overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#80FFA6]/20 to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-[#80FFA6] to-[#A4FFDA] animate-morph opacity-80" />
          </div>

          {/* Text side */}
          <div
            className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              <span className="text-[#F7F9F6]">Beyond the Bowl —</span>
              <br />
              <span className="text-gradient-mint">The Future of Pet Care.</span>
            </h2>
            <p className="text-lg text-[#F7F9F6]/70 leading-relaxed mb-8 text-pretty">
              We merge sustainable materials, minimalist design, and data-backed nutrition to make pet life cleaner —
              and smarter.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Sustainable", "Minimalist", "Data-Driven"].map((tag, i) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full glass-light border border-[#80FFA6]/20 text-sm text-[#80FFA6]"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
