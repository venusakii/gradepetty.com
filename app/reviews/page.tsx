import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AmbientBackground } from "@/components/ambient-background"
import { Star, ThumbsUp, Verified } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Jessica Harper",
    location: "Portland, OR",
    avatar: "/avatars/jessica-harper.jpg",
    rating: 5,
    date: "2 weeks ago",
    title: "Finally, pet products I can feel good about!",
    text: "I've been searching for eco-friendly pet products that don't compromise on quality. GradePetty exceeded all my expectations. The organic pet bed is incredibly soft, and knowing it's made sustainably makes me love it even more.",
    product: "Organic Cotton Pet Bed",
    verified: true,
    helpful: 47,
  },
  {
    id: 2,
    name: "Kevin Nakamura",
    location: "San Francisco, CA",
    avatar: "/avatars/kevin-nakamura.jpg",
    rating: 5,
    date: "1 month ago",
    title: "My dog has never been healthier",
    text: "After switching to GradePetty's Wild Salmon blend, I've noticed a huge improvement in my golden retriever's coat and energy levels. The ingredients are transparent and the quality is unmatched. Worth every penny.",
    product: "Wild Salmon & Kale Blend",
    verified: true,
    helpful: 89,
  },
  {
    id: 3,
    name: "Olivia Martinez",
    location: "Austin, TX",
    avatar: "/avatars/olivia-martinez.jpg",
    rating: 5,
    date: "3 weeks ago",
    title: "Beautiful design, sustainable materials",
    text: "The botanical hemp collar is absolutely stunning. I get compliments every time we go to the dog park. Love that it's made from sustainable materials and supports ocean cleanup efforts.",
    product: "Botanical Hemp Collar",
    verified: true,
    helpful: 34,
  },
  {
    id: 4,
    name: "Ryan Cooper",
    location: "Seattle, WA",
    avatar: "/avatars/ryan-cooper.jpg",
    rating: 4,
    date: "2 months ago",
    title: "Great products, fast shipping",
    text: "I've ordered multiple times from GradePetty and have always been impressed. The carbon-neutral shipping is a nice touch. My cats love the ceramic slow feeder - it's helped with their digestion.",
    product: "Ceramic Slow Feeder",
    verified: true,
    helpful: 23,
  },
  {
    id: 5,
    name: "Hannah Kim",
    location: "Denver, CO",
    avatar: "/avatars/hannah-kim.jpg",
    rating: 5,
    date: "1 week ago",
    title: "The calming spray actually works!",
    text: "I was skeptical about the lavender calming spray, but it's been a game-changer during thunderstorms. My anxious rescue pup is so much calmer now. All-natural ingredients and it smells divine.",
    product: "Lavender Calming Spray",
    verified: true,
    helpful: 56,
  },
  {
    id: 6,
    name: "Brandon Hayes",
    location: "Chicago, IL",
    avatar: "/avatars/brandon-hayes.jpg",
    rating: 5,
    date: "1 month ago",
    title: "Premium quality at fair prices",
    text: "What I appreciate most about GradePetty is the transparency. You know exactly where your money is going and what impact it's making. The recycled ocean leash is incredibly durable and looks fantastic.",
    product: "Recycled Ocean Leash",
    verified: true,
    helpful: 41,
  },
]

const stats = [
  { value: "4.9", label: "Average Rating" },
  { value: "12,000+", label: "Happy Customers" },
  { value: "98%", label: "Would Recommend" },
]

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#0B0D0C] relative overflow-hidden">
      <AmbientBackground />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[#80FFA6] text-sm font-medium mb-6">
            Community Love
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#F7F9F6] mb-6">
            Customer <span className="text-gradient-mint">Reviews</span>
          </h1>
          <p className="text-[#F7F9F6]/70 text-lg">
            Hear from our community of conscious pet parents about their GradePetty experience.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 pb-16 relative z-10">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gradient-mint mb-2">{stat.value}</p>
              <p className="text-[#F7F9F6]/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="container mx-auto px-6 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="glass rounded-2xl p-6 hover:border-[#80FFA6]/30 border border-transparent transition-all duration-500 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#F7F9F6] font-semibold">{review.name}</h3>
                    {review.verified && <Verified className="w-4 h-4 text-[#80FFA6]" />}
                  </div>
                  <p className="text-[#F7F9F6]/50 text-sm">{review.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "text-[#C9A770] fill-[#C9A770]" : "text-[#F7F9F6]/20"}`}
                    />
                  ))}
                </div>
                <span className="text-[#F7F9F6]/50 text-sm">{review.date}</span>
              </div>

              {/* Content */}
              <h4 className="text-[#F7F9F6] font-semibold mb-2">{review.title}</h4>
              <p className="text-[#F7F9F6]/70 text-sm flex-1 mb-4">{review.text}</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#F7F9F6]/10">
                <span className="text-[#80FFA6] text-xs font-medium">{review.product}</span>
                <button className="flex items-center gap-1 text-[#F7F9F6]/50 text-sm hover:text-[#80FFA6] transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  {review.helpful}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center"></div>
      </section>

      <Footer />
    </main>
  )
}
