"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AmbientBackground } from "@/components/ambient-background"
import { Star, Heart, ShoppingCart, Shield, Leaf, ArrowLeft, Minus, Plus } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useState } from "react"
import { useParams } from "next/navigation"

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
    description:
      "Handcrafted from organic hemp fibers, this stunning collar features botanical embroidery and a solid brass buckle. Hypoallergenic and gentle on your pet's skin.",
    longDescription:
      "Our Botanical Hemp Collar represents the pinnacle of sustainable pet accessories. Each collar is meticulously handcrafted by skilled artisans using 100% organic hemp fibers sourced from certified farms in the European Alps. The intricate botanical embroidery is inspired by wildflower meadows and takes over 3 hours to complete by hand.",
    materials: ["Organic Hemp Fibers", "Solid Brass Buckle", "Natural Plant-Based Dyes", "Recycled Cotton Thread"],
    careInstructions:
      "Machine wash cold on gentle cycle. Air dry flat. Avoid bleach. The natural hemp will soften with each wash while maintaining its strength.",
    sustainability:
      "Carbon neutral production. Each collar saves 2.5 liters of water compared to synthetic alternatives. Fully biodegradable at end of life.",
    warranty: "Lifetime warranty against manufacturing defects. Free repairs for the first 2 years.",
    features: ["100% Organic Hemp", "Brass Hardware", "Adjustable Fit", "Machine Washable"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Natural", "Forest Green", "Ocean Blue"],
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
    description:
      "Premium wild-caught salmon combined with organic kale and superfoods. Rich in Omega-3s for a healthy coat and strong immune system.",
    longDescription:
      "Our Wild Salmon & Kale Blend is crafted from sustainably caught Pacific salmon combined with farm-fresh organic kale and a proprietary blend of superfoods. This nutrient-dense formula supports optimal health, promotes a lustrous coat, and strengthens your pet's immune system naturally.",
    materials: ["Wild-Caught Pacific Salmon", "Organic Kale", "Sweet Potato", "Blueberries", "Coconut Oil", "Turmeric"],
    careInstructions:
      "Store in a cool, dry place. Refrigerate after opening and use within 7 days. Best served at room temperature.",
    sustainability:
      "Salmon sourced from MSC-certified fisheries. Packaging made from 100% post-consumer recycled materials. Carbon-offset shipping.",
    warranty: "100% satisfaction guarantee. Full refund if your pet doesn't love it.",
    features: ["Wild-Caught Salmon", "Organic Vegetables", "No Fillers", "Grain-Free"],
    sizes: ["2lb", "5lb", "10lb", "20lb"],
    colors: [],
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
    description:
      "Luxuriously soft bed made from GOTS-certified organic cotton with a removable, washable cover. Memory foam core provides orthopedic support.",
    longDescription:
      "The ultimate in pet comfort, our Organic Cotton Pet Bed features a therapeutic memory foam core that conforms to your pet's body, relieving pressure points and supporting joints. The GOTS-certified organic cotton cover is impossibly soft yet incredibly durable, designed to withstand years of daily use while remaining gentle on sensitive skin.",
    materials: [
      "GOTS-Certified Organic Cotton",
      "CertiPUR-US Memory Foam",
      "Natural Latex Base",
      "Recycled Polyester Fill",
    ],
    careInstructions:
      "Remove cover and machine wash warm. Tumble dry low. Foam core can be spot cleaned with mild soap and water. Air dry completely.",
    sustainability:
      "Zero-waste manufacturing. Cotton grown without pesticides or synthetic fertilizers. Foam is free from harmful chemicals and off-gassing.",
    warranty: "5-year warranty on foam core. 2-year warranty on cover. Free replacement covers available.",
    features: ["GOTS Certified Cotton", "Memory Foam Core", "Removable Cover", "Anti-Slip Base"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    colors: ["Cream", "Sage", "Charcoal"],
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
    description:
      "Complete grooming set with sustainably harvested bamboo handles. Includes slicker brush, bristle brush, and detangling comb.",
    longDescription:
      "Transform grooming time into a bonding experience with our premium Bamboo Grooming Set. Each tool features an ergonomically designed handle carved from sustainably harvested bamboo, providing a comfortable grip that reduces hand fatigue. The gentle yet effective bristles work through all coat types without irritating sensitive skin.",
    materials: ["Moso Bamboo Handles", "Stainless Steel Pins", "Natural Boar Bristles", "Recycled Aluminum Comb"],
    careInstructions:
      "Remove loose fur after each use. Clean bristles monthly with mild soap and warm water. Oil bamboo handles occasionally with food-grade mineral oil.",
    sustainability:
      "Bamboo regrows 30x faster than trees. Our bamboo is harvested from managed forests in China. Plastic-free packaging.",
    warranty: "Lifetime warranty on bamboo handles. 1-year warranty on bristles and pins.",
    features: ["Sustainable Bamboo", "Gentle Bristles", "Ergonomic Design", "Travel Case Included"],
    sizes: ["Standard"],
    colors: ["Natural Bamboo"],
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
    description:
      "Artisan-crafted ceramic bowl with raised patterns to slow eating. Lead-free glaze, dishwasher safe, and weighted base prevents tipping.",
    longDescription:
      "Each Ceramic Slow Feeder is individually thrown on a potter's wheel by skilled artisans in our Vermont studio. The unique raised pattern design encourages slower eating, reducing bloat and improving digestion. The substantial weight and wide base ensure stability, while the food-safe glaze creates a beautiful, easy-to-clean surface.",
    materials: ["High-Fire Stoneware Clay", "Lead-Free Food-Safe Glaze", "Natural Mineral Pigments"],
    careInstructions:
      "Dishwasher safe on top rack. Can also be hand washed with warm soapy water. Microwave safe for warming food.",
    sustainability:
      "Handmade in small batches using locally sourced clay. Kilns powered by 100% renewable energy. Lasts a lifetime, reducing waste.",
    warranty: "1-year warranty against cracking or glaze defects. Chips from drops not covered.",
    features: ["Handmade Ceramic", "Lead-Free Glaze", "Dishwasher Safe", "Non-Tip Design"],
    sizes: ["Small", "Medium", "Large"],
    colors: ["Mint", "Terracotta", "Slate"],
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
    description:
      "Organic lavender and chamomile blend to naturally calm anxious pets. Safe for bedding, crates, and direct application.",
    longDescription:
      "Our Lavender Calming Spray harnesses the natural soothing power of organic lavender and chamomile essential oils to help reduce anxiety and promote relaxation in pets. Veterinarian-developed and rigorously tested, this gentle formula is safe for daily use on bedding, in crates, or directly on your pet's coat.",
    materials: [
      "Organic Lavender Essential Oil",
      "Organic Chamomile Extract",
      "Purified Water",
      "Plant-Based Emulsifier",
    ],
    careInstructions:
      "Shake well before use. Spray 2-3 pumps on bedding or coat from 6 inches away. Avoid eyes and nose. Store in cool, dark place.",
    sustainability:
      "Essential oils sourced from organic farms in Provence, France. Glass bottle is infinitely recyclable. Refill pouches available.",
    warranty: "30-day satisfaction guarantee. Consult your vet if your pet has sensitivities.",
    features: ["Organic Ingredients", "Vet Approved", "Alcohol-Free", "Long-Lasting"],
    sizes: ["4oz", "8oz"],
    colors: [],
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
    description:
      "Each leash removes 1lb of ocean plastic. Durable, weather-resistant, and beautiful with unique color variations from recycled materials.",
    longDescription:
      "Every Recycled Ocean Leash tells a story of environmental restoration. Made from plastic waste collected from coastal communities around the world, each leash represents 1lb of debris removed from our oceans. The resulting material is incredibly strong, weather-resistant, and features unique color variations that make each leash one-of-a-kind.",
    materials: [
      "Recycled Ocean Plastic (HDPE)",
      "Recycled Aluminum Hardware",
      "Neoprene Padded Handle",
      "Reflective Thread",
    ],
    careInstructions:
      "Rinse with fresh water after beach use. Machine washable in a mesh bag. Air dry. Hardware can be wiped with a damp cloth.",
    sustainability:
      "Supports ocean cleanup initiatives in 12 countries. Each purchase funds the collection of additional ocean plastic. Fully recyclable at end of life.",
    warranty: "Lifetime warranty. If your leash ever breaks, we'll replace it free and recycle the old one.",
    features: ["Recycled Ocean Plastic", "Weather Resistant", "Padded Handle", "Reflective Stitching"],
    sizes: ["4ft", "6ft"],
    colors: ["Ocean Blue", "Coral", "Seafoam"],
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
    description:
      "Veterinarian-formulated dental chews with probiotics for fresh breath and healthy digestion. Made with natural mint and parsley.",
    longDescription:
      "Our Probiotic Dental Chews deliver a powerful combination of oral health and digestive support. Each chew contains 500 million CFUs of beneficial probiotics alongside natural breath-freshening ingredients. The unique texture helps mechanically clean teeth while the active ingredients work to balance oral and gut microbiomes.",
    materials: [
      "Organic Oat Flour",
      "Probiotic Blend (5 strains)",
      "Fresh Mint",
      "Organic Parsley",
      "Coconut Oil",
      "Natural Chicken Flavor",
    ],
    careInstructions:
      "Give 1 chew daily for dogs under 25lbs, 2 chews for dogs 25-50lbs, 3 chews for dogs over 50lbs. Store in a cool, dry place.",
    sustainability:
      "Ingredients sourced from regenerative farms. Compostable packaging. B-Corp certified manufacturer.",
    warranty: "100% satisfaction guarantee. Veterinarian-backed formula.",
    features: ["Probiotic Formula", "Fresh Breath", "Vet Formulated", "All-Natural"],
    sizes: ["Small Dog", "Medium Dog", "Large Dog"],
    colors: [],
  },
]

export default function ProductPage() {
  const params = useParams()
  const id = params.id as string
  const product = products.find((p) => p.id === Number.parseInt(id))

  const [selectedSize, setSelectedSize] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const incrementQuantity = () => setQuantity((q) => q + 1)
  const decrementQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1))

  return (
    <main className="min-h-screen bg-[#0B0D0C] relative overflow-hidden">
      <AmbientBackground />
      <Header />

      <section className="pt-32 pb-20 container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-[#F7F9F6]/70 hover:text-[#80FFA6] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.badge && (
              <span className="absolute top-6 left-6 px-4 py-2 rounded-full bg-[#80FFA6] text-[#0B0D0C] text-sm font-semibold">
                {product.badge}
              </span>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="text-[#80FFA6] text-sm font-medium uppercase tracking-wider mb-2">{product.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#F7F9F6] mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-[#C9A770] fill-[#C9A770]" : "text-[#F7F9F6]/20"}`}
                  />
                ))}
              </div>
              <span className="text-[#F7F9F6]/80">{product.rating}</span>
              <span className="text-[#F7F9F6]/50">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            {/* Added price display */}

            {/* Description */}
            <p className="text-[#F7F9F6]/70 leading-relaxed mb-4">{product.description}</p>

            {/* Extended Description */}
            <p className="text-[#F7F9F6]/60 leading-relaxed mb-8 text-sm">{product.longDescription}</p>

            {/* Sizes */}
            {product.sizes.length > 0 && (
              <div className="mb-6">
                <span className="text-[#F7F9F6] font-medium mb-3 block">
                  Size: <span className="text-[#80FFA6]">{product.sizes[selectedSize]}</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size, index) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(index)}
                      className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                        index === selectedSize
                          ? "bg-[#80FFA6] text-[#0B0D0C] font-medium"
                          : "glass text-[#F7F9F6]/70 hover:text-[#80FFA6] hover:border-[#80FFA6]/30"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {product.colors.length > 0 && (
              <div className="mb-8">
                <span className="text-[#F7F9F6] font-medium mb-3 block">
                  Color: <span className="text-[#80FFA6]">{product.colors[selectedColor]}</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(index)}
                      className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                        index === selectedColor
                          ? "bg-[#80FFA6] text-[#0B0D0C] font-medium"
                          : "glass text-[#F7F9F6]/70 hover:text-[#80FFA6] hover:border-[#80FFA6]/30"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-3 glass rounded-full px-4 py-2">
                <button
                  onClick={decrementQuantity}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#80FFA6]/10 transition-colors"
                >
                  <Minus className="w-4 h-4 text-[#F7F9F6]" />
                </button>
                <span className="text-[#F7F9F6] font-medium w-8 text-center">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#80FFA6]/10 transition-colors"
                >
                  <Plus className="w-4 h-4 text-[#F7F9F6]" />
                </button>
              </div>
              <a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-full transition-all duration-300 bg-gradient-to-r from-[#80FFA6] to-[#A4FFDA] text-[#0B0D0C] hover:shadow-[0_0_30px_rgba(128,255,166,0.4)]"
              >
                <ShoppingCart className="w-5 h-5" />
                Buy on Amazon
              </a>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`w-12 h-12 rounded-full glass flex items-center justify-center transition-colors ${
                  isFavorite ? "bg-red-500/20" : "hover:bg-[#80FFA6]/10"
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? "text-red-500 fill-red-500" : "text-[#F7F9F6]"}`} />
              </button>
            </div>

            {/* Features */}
            <div className="glass rounded-2xl p-6 mb-6">
              <span className="text-[#F7F9F6] font-medium mb-4 block">Features</span>
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-[#80FFA6]" />
                    <span className="text-[#F7F9F6]/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials & Ingredients */}
            <div className="glass rounded-2xl p-6 mb-6">
              <span className="text-[#F7F9F6] font-medium mb-4 block">Materials & Ingredients</span>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material) => (
                  <span
                    key={material}
                    className="px-3 py-1.5 rounded-full bg-[#C9A770]/10 text-[#C9A770] text-xs font-medium"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>

            {/* Care Instructions */}
            <div className="glass rounded-2xl p-6 mb-6">
              <span className="text-[#F7F9F6] font-medium mb-3 block">Care Instructions</span>
              <p className="text-[#F7F9F6]/60 text-sm leading-relaxed">{product.careInstructions}</p>
            </div>

            {/* Sustainability */}
            <div className="glass rounded-2xl p-6 mb-6 border border-[#80FFA6]/20">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="w-5 h-5 text-[#80FFA6]" />
                <span className="text-[#F7F9F6] font-medium">Sustainability</span>
              </div>
              <p className="text-[#F7F9F6]/60 text-sm leading-relaxed">{product.sustainability}</p>
            </div>

            {/* Warranty & Guarantee */}
            <div className="glass rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-[#C9A770]" />
                <span className="text-[#F7F9F6] font-medium">Warranty & Guarantee</span>
              </div>
              <p className="text-[#F7F9F6]/60 text-sm leading-relaxed">{product.warranty}</p>
            </div>

            {/* Trust Badges */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
