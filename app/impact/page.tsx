import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AmbientBackground } from "@/components/ambient-background"
import { Leaf, Recycle, Heart, Globe, TreePine, Droplets, Users, Award } from "lucide-react"

const impactStats = [
  { icon: TreePine, value: "50,000+", label: "Trees Planted", color: "#80FFA6" },
  { icon: Recycle, value: "12 tons", label: "Ocean Plastic Recycled", color: "#A4FFDA" },
  { icon: Heart, value: "3,200+", label: "Shelter Animals Supported", color: "#C9A770" },
  { icon: Users, value: "25,000+", label: "Conscious Pet Parents", color: "#80FFA6" },
]

const initiatives = [
  {
    title: "1% For The Planet",
    description: "We donate 1% of every sale to environmental nonprofits working to protect our planet's ecosystems.",
    icon: Globe,
    image: "/forest-conservation-environmental-protection.jpg",
  },
  {
    title: "Ocean Cleanup Partnership",
    description: "Our accessories line transforms recovered ocean plastic into beautiful, durable pet products.",
    icon: Droplets,
    image: "/ocean-cleanup-plastic-recovery-beach.jpg",
  },
  {
    title: "Shelter Support Program",
    description: "Every purchase helps provide meals, supplies, and medical care to shelter animals awaiting adoption.",
    icon: Heart,
    image: "/animal-shelter-dogs-cats-care.jpg",
  },
  {
    title: "Carbon Neutral Shipping",
    description: "We offset 100% of shipping emissions through verified carbon removal projects worldwide.",
    icon: Leaf,
    image: "/sustainable-shipping-green-logistics.jpg",
  },
]

const certifications = [
  { name: "B Corp Certified", icon: Award },
  { name: "Climate Neutral", icon: Leaf },
  { name: "Leaping Bunny", icon: Heart },
  { name: "1% For The Planet", icon: Globe },
]

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-[#0B0D0C] relative overflow-hidden">
      <AmbientBackground />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[#80FFA6] text-sm font-medium mb-6">
            Our Commitment
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#F7F9F6] mb-6">
            Our <span className="text-gradient-mint">Impact</span>
          </h1>
          <p className="text-[#F7F9F6]/70 text-lg">
            At GradePetty, we believe luxury and responsibility go hand in hand. Every product we create is designed to
            make a positive impact on pets, people, and our planet.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container mx-auto px-6 pb-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-6 text-center group hover:border-[#80FFA6]/30 border border-transparent transition-all duration-500"
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-[#F7F9F6] mb-2">{stat.value}</p>
              <p className="text-[#F7F9F6]/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Initiatives */}
      <section className="container mx-auto px-6 pb-20 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F7F9F6] mb-12 text-center">
          Our <span className="text-gradient-mint">Initiatives</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((initiative, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl overflow-hidden group hover:border-[#80FFA6]/30 border border-transparent transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={initiative.image || "/placeholder.svg"}
                  alt={initiative.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#80FFA6]/10 flex items-center justify-center">
                    <initiative.icon className="w-5 h-5 text-[#80FFA6]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#F7F9F6]">{initiative.title}</h3>
                </div>
                <p className="text-[#F7F9F6]/70">{initiative.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="container mx-auto px-6 pb-20 relative z-10">
        <div className="glass rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F7F9F6] mb-8 text-center">
            Certified <span className="text-gradient-mint">Commitments</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#80FFA6]/5 border border-[#80FFA6]/20"
              >
                <cert.icon className="w-5 h-5 text-[#80FFA6]" />
                <span className="text-[#F7F9F6] font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
