import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AmbientBackground } from "@/components/ambient-background"
import { ShoppingCart, Heart, Star, Filter, ChevronDown } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Botanical Hemp Collar",
    category: "Accessories",
    price: 89,
    rating: 4.9,
    reviews: 234,
    badge: "Best Seller",
    image: "/luxury-hemp-pet-collar-botanical-design.jpg",
  },
  {
    id: 2,
    name: "Wild Salmon & Kale Blend",
    category: "Nutrition",
    price: 65,
    rating: 4.8,
    reviews: 189,
    badge: "Grade A+",
    image: "/premium-organic-pet-food-salmon-packaging.jpg",
  },
  {
    id: 3,
    name: "Organic Cotton Pet Bed",
    category: "Comfort",
    price: 195,
    rating: 5.0,
    reviews: 312,
    badge: "Eco Choice",
    image: "/luxury-organic-cotton-pet-bed-minimalist.jpg",
  },
  {
    id: 4,
    name: "Bamboo Grooming Set",
    category: "Grooming",
    price: 78,
    rating: 4.7,
    reviews: 156,
    badge: null,
    image: "/eco-bamboo-pet-grooming-brushes-set.jpg",
  },
  {
    id: 5,
    name: "Ceramic Slow Feeder",
    category: "Bowls",
    price: 55,
    rating: 4.9,
    reviews: 201,
    badge: "New",
    image: "/handmade-ceramic-slow-feeder-pet-bowl.jpg",
  },
  {
    id: 6,
    name: "Lavender Calming Spray",
    category: "Wellness",
    price: 35,
    rating: 4.8,
    reviews: 178,
    badge: null,
    image: "/organic-lavender-pet-calming-spray-bottle.jpg",
  },
  {
    id: 7,
    name: "Recycled Ocean Leash",
    category: "Accessories",
    price: 65,
    rating: 4.9,
    reviews: 145,
    badge: "Impact",
    image: "/recycled-ocean-plastic-pet-leash-blue-green.jpg",
  },
  {
    id: 8,
    name: "Probiotic Dental Chews",
    category: "Health",
    price: 42,
    rating: 4.6,
    reviews: 223,
    badge: null,
    image: "/natural-probiotic-pet-dental-treats-packaging.jpg",
  },
]

const categories = ["All", "Nutrition", "Accessories", "Comfort", "Grooming", "Wellness", "Health"]

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0B0D0C] relative overflow-hidden">
      <AmbientBackground />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[#80FFA6] text-sm font-medium mb-6">
            Curated Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#F7F9F6] mb-6">
            Shop <span className="text-gradient-mint">Collection</span>
          </h1>
          <p className="text-[#F7F9F6]/70 text-lg max-w-2xl">
            Discover our curated selection of eco-luxury pet products, ethically sourced and beautifully crafted for
            conscious pet parents.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-6 mb-12 relative z-10">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <Filter className="w-4 h-4 text-[#80FFA6]" />
            <span className="text-[#F7F9F6]/80 text-sm">Filter</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm transition-all duration-300 hover:bg-[#80FFA6]/10 text-[#F7F9F6]/70 hover:text-[#80FFA6]"
            >
              {cat}
            </button>
          ))}
          <button className="ml-auto flex items-center gap-2 glass px-4 py-2 rounded-full text-[#F7F9F6]/80 text-sm">
            Sort by: Featured <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-6 pb-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group glass rounded-2xl overflow-hidden hover:border-[#80FFA6]/30 border border-transparent transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden bg-[#151917]">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#80FFA6] text-[#0B0D0C] text-xs font-semibold">
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#80FFA6]/20">
                  <Heart className="w-5 h-5 text-[#F7F9F6]" />
                </button>
                
              </div>
              <div className="p-5">
                <span className="text-[#80FFA6] text-xs font-medium uppercase tracking-wider">{product.category}</span>
                <h3 className="text-[#F7F9F6] font-semibold mt-1 mb-2 group-hover:text-[#80FFA6] transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#C9A770] fill-[#C9A770]" />
                    <span className="text-[#F7F9F6]/80 text-sm">{product.rating}</span>
                  </div>
                  <span className="text-[#F7F9F6]/50 text-sm">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  
                  <Link
                    href={`/shop/${product.id}`}
                    className="px-4 py-2 rounded-full text-sm font-medium text-[#80FFA6] border border-[#80FFA6]/30 hover:bg-[#80FFA6]/10 transition-all duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-full glass text-[#80FFA6] font-medium hover:bg-[#80FFA6]/10 transition-all duration-300">
            Load More Products
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
