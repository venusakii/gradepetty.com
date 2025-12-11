"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Dr. Maya Thompson",
    role: "Veterinarian",
    image: "/professional-woman-veterinarian-portrait.jpg",
    quote: "Never thought sustainable pet care could feel this premium.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Pet Parent",
    image: "/man-with-dog-smiling-portrait.jpg",
    quote: "My dogs love the organic treats, and I love knowing it's eco-friendly.",
    rating: 5,
  },
  {
    name: "Emily Parker",
    role: "Environmental Advocate",
    image: "/woman-environmental-activist-portrait.jpg",
    quote: "Finally, a brand that aligns with my values without compromising quality.",
    rating: 5,
  },
]

export function ReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.3 })

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="text-[#F7F9F6]">Real Reviews. </span>
            <span className="text-gradient-mint">Real Changes.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`group relative p-8 rounded-3xl glass border border-[#80FFA6]/10 hover:border-[#80FFA6]/30 transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-3xl glow-mint-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A770] text-[#C9A770]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-[#F7F9F6]/90 mb-8 italic leading-relaxed">"{review.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-[#80FFA6]/0 group-hover:border-[#80FFA6]/50 transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-[#F7F9F6]">{review.name}</p>
                  <p className="text-sm text-[#80FFA6]">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
