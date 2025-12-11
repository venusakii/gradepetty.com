"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Bone, Leaf, Recycle, Home } from "lucide-react"
import Link from "next/link"

const collections = [
  {
    icon: Bone,
    title: "Organic Food & Treats",
    description: "Premium nutrition from nature",
    image: "/organic-pet-food-treats-natural-ingredients.jpg",
    href: "/shop/food",
  },
  {
    icon: Leaf,
    title: "Eco-Safe Toys",
    description: "Play without the plastic",
    image: "/eco-friendly-pet-toys-sustainable-natural-material.jpg",
    href: "/shop/toys",
  },
  {
    icon: Recycle,
    title: "Biodegradable Hygiene",
    description: "Clean care, clean planet",
    image: "/biodegradable-pet-hygiene-products-eco-grooming.jpg",
    href: "/shop/hygiene",
  },
  {
    icon: Home,
    title: "Pet & Planet Homeware",
    description: "Sustainable living spaces",
    image: "/eco-pet-furniture-sustainable-pet-bed-modern-desig.jpg",
    href: "/shop/homeware",
  },
]

export function CollectionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="text-[#F7F9F6]">Shop </span>
            <span className="text-gradient-mint">Conscious Collections</span>
          </h2>
          <p className="text-lg text-[#F7F9F6]/70 max-w-2xl mx-auto text-pretty">
            Curated categories designed with intention and impact
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.title}
              href={collection.href}
              className={`group relative rounded-2xl overflow-hidden card-tilt transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background image */}
              <div className="aspect-[3/4] relative">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Liquid morph overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/60 to-transparent" />
                <div className="absolute inset-0 bg-[#80FFA6]/0 group-hover:bg-[#80FFA6]/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-12 h-12 rounded-xl bg-[#80FFA6]/20 flex items-center justify-center mb-4 group-hover:bg-[#80FFA6]/30 transition-colors">
                  <collection.icon className="w-6 h-6 text-[#80FFA6]" />
                </div>
                <h3 className="text-xl font-bold text-[#F7F9F6] mb-2">{collection.title}</h3>
                <p className="text-sm text-[#F7F9F6]/60 group-hover:text-[#F7F9F6]/80 transition-colors">
                  {collection.description}
                </p>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-[#80FFA6]/0 group-hover:border-[#80FFA6]/30 transition-colors duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
