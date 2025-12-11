"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const circles = [
  { label: "Sourcing", detail: "100% traceable, ethical origins", radius: 160 },
  { label: "Packaging", detail: "Zero-waste, recyclable materials", radius: 120 },
  { label: "Delivery", detail: "Carbon-neutral shipping network", radius: 80 },
  { label: "Reuse", detail: "Circular design philosophy", radius: 40 },
]

export function GradeSystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.3 })
  const [hoveredCircle, setHoveredCircle] = useState<number | null>(null)

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Diagram */}
          <div
            className={`relative flex items-center justify-center transition-all duration-1000 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {circles.map((circle, index) => (
                <div
                  key={circle.label}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#80FFA6]/30 flex items-center justify-center cursor-pointer transition-all duration-500 hover:border-[#80FFA6] group"
                  style={{
                    width: circle.radius * 2 + 40,
                    height: circle.radius * 2 + 40,
                  }}
                  onMouseEnter={() => setHoveredCircle(index)}
                  onMouseLeave={() => setHoveredCircle(null)}
                >
                  {/* Label */}
                  <span
                    className={`absolute text-sm font-semibold transition-colors duration-300 ${
                      hoveredCircle === index ? "text-[#80FFA6]" : "text-[#F7F9F6]/70"
                    }`}
                    style={{
                      top: -24,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    {circle.label}
                  </span>

                  {/* Tooltip */}
                  {hoveredCircle === index && (
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg glass border border-[#80FFA6]/30 whitespace-nowrap text-sm text-[#80FFA6] animate-in fade-in zoom-in duration-200">
                      {circle.detail}
                    </div>
                  )}

                  {/* Glow effect */}
                  {hoveredCircle === index && (
                    <div className="absolute inset-0 rounded-full bg-[#80FFA6]/10 animate-pulse" />
                  )}
                </div>
              ))}

              {/* Center dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#80FFA6] glow-mint" />
            </div>
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              <span className="text-[#F7F9F6]">The Grade System —</span>
              <br />
              <span className="text-gradient-mint">Our Ethics.</span>
            </h2>
            <p className="text-lg text-[#F7F9F6]/70 leading-relaxed mb-8 text-pretty">
              Every product gets a "GradePetty Score" — transparency that lets you shop responsibly. From sourcing to
              your doorstep, every step is tracked and verified.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-[#80FFA6]/20">
              <span className="w-3 h-3 rounded-full bg-[#80FFA6] animate-pulse" />
              <span className="text-[#F7F9F6]/80">Verified Supply Chain</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
