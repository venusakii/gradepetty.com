"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Loader2 } from "lucide-react"

export function NewsletterSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.3 })
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSuccess(true)
    setEmail("")
  }

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          className={`relative max-w-3xl mx-auto text-center transition-all duration-1000 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          {/* Morphing blob background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#80FFA6]/20 to-[#A4FFDA]/10 rounded-full animate-morph blur-3xl" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="text-[#F7F9F6]">Join the </span>
            <span className="text-gradient-mint">Conscious Collective</span>
          </h2>
          <p className="text-lg text-[#F7F9F6]/70 mb-10 text-pretty">
            Subscribe for stories, guides, and exclusive eco collaborations.
          </p>

          {isSuccess ? (
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-[#80FFA6]/30">
              <span className="w-3 h-3 rounded-full bg-[#80FFA6] animate-pulse" />
              <span className="text-[#80FFA6] font-semibold">Welcome to the movement! 🌿</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative w-full sm:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full sm:w-80 px-6 py-4 rounded-full glass border border-[#80FFA6]/20 text-[#F7F9F6] placeholder:text-[#F7F9F6]/40 focus:outline-none focus:border-[#80FFA6]/50 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="relative w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#80FFA6] to-[#A4FFDA] text-[#0B0D0C] font-bold overflow-hidden group disabled:opacity-70 transition-opacity"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join the Movement
                      <span>🌿</span>
                    </>
                  )}
                </span>
                {/* Ripple effect */}
                <div className="absolute inset-0 bg-[#F7F9F6] opacity-0 group-hover:opacity-20 transition-opacity" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
