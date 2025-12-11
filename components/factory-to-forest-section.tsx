"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Leaf, Factory, Truck, RefreshCw } from "lucide-react"

const steps = [
  {
    icon: Leaf,
    title: "Plant-Based Polymers",
    description: "Sustainable materials from nature",
  },
  {
    icon: Factory,
    title: "Local Production",
    description: "Minimized transportation impact",
  },
  {
    icon: Truck,
    title: "Carbon-Neutral Shipping",
    description: "Offset every delivery",
  },
  {
    icon: RefreshCw,
    title: "Circular Design",
    description: "Built for reuse and recycling",
  },
]

export function FactoryToForestSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="text-[#F7F9F6]">From Factory </span>
            <span className="text-gradient-mint">to Forest</span>
          </h2>
          <p className="text-lg text-[#F7F9F6]/70 max-w-2xl mx-auto text-pretty">
            Every step of our process is designed with the planet in mind
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#80FFA6]/30 to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative group transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative p-8 rounded-3xl glass border border-[#80FFA6]/10 hover:border-[#80FFA6]/30 transition-all text-center">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0B0D0C] border border-[#80FFA6]/30 flex items-center justify-center text-sm font-bold text-[#80FFA6]">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#80FFA6]/10 flex items-center justify-center mb-6 group-hover:bg-[#80FFA6]/20 transition-colors">
                    <step.icon className="w-8 h-8 text-[#80FFA6]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#F7F9F6] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#F7F9F6]/60">{step.description}</p>

                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-[#80FFA6]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
