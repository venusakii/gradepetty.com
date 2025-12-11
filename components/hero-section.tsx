"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Globe } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video/Image background with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/elegant-smart-terrarium-with-glowing-plants-futuri.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D0C]/80 via-[#0B0D0C]/60 to-[#0B0D0C]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Tagline badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-[#80FFA6]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#80FFA6] animate-pulse" />
            <span className="text-sm text-[#80FFA6]">The Future of Pet Care is Conscious</span>
          </div>

          {/* Main headline */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance"
          >
            <span className="block text-[#F7F9F6]">Design for Pets.</span>
            <span className="block text-gradient-mint animate-letter-glow">Designed for the Planet.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#F7F9F6]/70 mb-10 max-w-2xl mx-auto text-pretty">
            <span className="text-[#80FFA6] font-semibold">Smart.</span>{" "}
            <span className="text-[#A4FFDA] font-semibold">Sustainable.</span>{" "}
            <span className="text-[#C9A770] font-semibold">Stunning.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/shop"
              className="group relative px-8 py-4 rounded-full border-glow overflow-hidden magnetic-hover"
            >
              <span className="relative z-10 flex items-center gap-2 text-[#80FFA6] font-semibold">
                Explore Products
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-[#80FFA6]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="#impact"
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-[#F7F9F6]/5 hover:bg-[#F7F9F6]/10 transition-colors magnetic-hover"
            >
              <span className="text-[#F7F9F6] font-semibold">See Our Impact</span>
              <Globe className="w-4 h-4 text-[#A4FFDA]" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-[#80FFA6]/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-[#80FFA6] animate-bounce" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0D0C] to-transparent z-10" />
    </section>
  )
}
