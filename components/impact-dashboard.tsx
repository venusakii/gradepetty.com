"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Recycle, Globe, PawPrint } from "lucide-react"

const stats = [
  {
    icon: Recycle,
    value: 8472,
    suffix: " kg",
    label: "Plastic Reduced This Year",
    color: "#80FFA6",
  },
  {
    icon: Globe,
    value: 23000,
    prefix: "$",
    label: "Donated to Wildlife Funds",
    color: "#A4FFDA",
  },
  {
    icon: PawPrint,
    value: 127000,
    suffix: "+",
    label: "Eco Items Shipped",
    color: "#C9A770",
  },
]

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  isInView,
}: {
  value: number
  prefix?: string
  suffix?: string
  isInView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, isInView])

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function ImpactDashboard() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.3 })

  return (
    <section id="impact" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D0C] via-[#0B0D0C]/95 to-[#0B0D0C]" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="text-[#F7F9F6]">Impact </span>
            <span className="text-gradient-mint">Dashboard</span>
          </h2>
          <p className="text-lg text-[#F7F9F6]/70 max-w-2xl mx-auto text-pretty">
            Real-time transparency on our environmental commitment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative group transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative p-8 rounded-3xl glass border border-[#80FFA6]/10 hover:border-[#80FFA6]/30 transition-colors">
                {/* Pulsing background glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.color}10 0%, transparent 70%)`,
                  }}
                />

                {/* Icon with pulse */}
                <div className="relative mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                    {/* Pulse ring */}
                    <div
                      className="absolute inset-0 rounded-2xl animate-ping opacity-20"
                      style={{ backgroundColor: stat.color }}
                    />
                  </div>
                </div>

                {/* Counter */}
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: stat.color }}>
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} isInView={isInView} />
                </div>

                <p className="text-[#F7F9F6]/70">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
