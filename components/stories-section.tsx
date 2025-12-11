"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ChevronLeft, ChevronRight } from "lucide-react"

const stories = [
  {
    image: "/forest-rescue-dogs-nature-documentary-style.jpg",
    caption: "Forest rescues bringing hope to abandoned animals",
  },
  {
    image: "/ocean-cleanup-dogs-beach-environmental-documentary.jpg",
    caption: "Ocean cleanups protecting marine ecosystems",
  },
  {
    image: "/dogs-with-eco-collars-sustainable-pet-accessories-.jpg",
    caption: "Sustainable accessories for conscious companions",
  },
]

export function StoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.3 })
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="text-[#F7F9F6]">Stories of </span>
            <span className="text-gradient-mint">Change</span>
          </h2>
        </div>

        {/* Slideshow */}
        <div
          className={`relative rounded-3xl overflow-hidden transition-all duration-1000 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="aspect-[16/9] relative">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.caption}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/40 to-transparent" />

                {/* Caption - film trailer style */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <p
                    className={`text-xl md:text-2xl text-[#F7F9F6] font-light max-w-2xl transition-all duration-700 ${
                      index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "300ms" }}
                  >
                    {story.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="absolute bottom-8 right-8 flex items-center gap-4">
            
            
          </div>

          {/* Dots */}
          <div className="absolute bottom-8 left-8 flex gap-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8 bg-[#80FFA6]" : "bg-[#F7F9F6]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
