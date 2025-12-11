import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AmbientBackground } from "@/components/ambient-background"
import { Heart, Leaf, Shield, Sparkles, Target, Eye } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Every product is designed with the planet in mind, from materials to packaging to shipping.",
  },
  {
    icon: Shield,
    title: "Ethical Sourcing",
    description: "We partner only with suppliers who share our commitment to fair labor and animal welfare.",
  },
  {
    icon: Sparkles,
    title: "Uncompromising Quality",
    description: "Luxury isn't about price—it's about craftsmanship, durability, and thoughtful design.",
  },
  {
    icon: Heart,
    title: "Pet Wellbeing",
    description: "Our products are developed with veterinarians to ensure they're safe and beneficial for pets.",
  },
]

const team = [
  {
    name: "Alexandra Rivers",
    role: "Founder & CEO",
    bio: "Former sustainability consultant with 15 years of experience in eco-conscious business practices.",
    image: "/team/alexandra-rivers.jpg",
  },
  {
    name: "Dr. Marcus Webb",
    role: "Chief Veterinary Officer",
    bio: "Board-certified veterinarian specializing in holistic pet nutrition and wellness.",
    image: "/team/marcus-webb.jpg",
  },
  {
    name: "Sophia Chen",
    role: "Head of Product Design",
    bio: "Award-winning industrial designer passionate about sustainable materials and pet ergonomics.",
    image: "/team/sophia-chen.jpg",
  },
  {
    name: "James Okonkwo",
    role: "Director of Impact",
    bio: "Environmental scientist dedicated to measuring and maximizing our positive footprint.",
    image: "/team/james-okonkwo.jpg",
  },
]

const timeline = [
  { year: "2019", event: "GradePetty founded with a mission to transform pet care" },
  { year: "2020", event: "Launched first carbon-neutral product line" },
  { year: "2021", event: "Achieved B Corp certification" },
  { year: "2022", event: "Reached 10,000 trees planted milestone" },
  { year: "2023", event: "Expanded to ocean plastic recycling initiative" },
  { year: "2024", event: "Serving 25,000+ conscious pet parents worldwide" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B0D0C] relative overflow-hidden">
      <AmbientBackground />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full glass text-[#80FFA6] text-sm font-medium mb-6">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F7F9F6] mb-6">
              About <span className="text-gradient-mint">GradePetty</span>
            </h1>
            <p className="text-[#F7F9F6]/70 text-lg mb-6">
              We started GradePetty because we believed pet parents shouldn't have to choose between luxury and
              responsibility. Every pet deserves the best, and so does our planet.
            </p>
            <p className="text-[#F7F9F6]/70">
              Today, we're a team of passionate pet lovers, sustainability experts, and design enthusiasts working
              together to redefine what premium pet care means.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass">
              <img src="/about-happy-pets.jpg" alt="Happy pets" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4">
              <p className="text-[#80FFA6] font-bold text-2xl">5+ Years</p>
              <p className="text-[#F7F9F6]/60 text-sm">of conscious pet care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8">
            <div className="w-12 h-12 rounded-full bg-[#80FFA6]/10 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-[#80FFA6]" />
            </div>
            <h2 className="text-2xl font-bold text-[#F7F9F6] mb-4">Our Mission</h2>
            <p className="text-[#F7F9F6]/70">
              To provide exceptional pet products that nurture the bond between pets and their humans while actively
              contributing to environmental restoration and animal welfare.
            </p>
          </div>
          <div className="glass rounded-2xl p-8">
            <div className="w-12 h-12 rounded-full bg-[#C9A770]/10 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-[#C9A770]" />
            </div>
            <h2 className="text-2xl font-bold text-[#F7F9F6] mb-4">Our Vision</h2>
            <p className="text-[#F7F9F6]/70">
              A world where every pet product sold makes a positive impact—where luxury and sustainability are
              inseparable, and conscious consumption is the norm.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6 pb-20 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F7F9F6] mb-12 text-center">
          Our <span className="text-gradient-mint">Values</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-6 text-center hover:border-[#80FFA6]/30 border border-transparent transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-[#80FFA6]/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-[#80FFA6]" />
              </div>
              <h3 className="text-lg font-semibold text-[#F7F9F6] mb-2">{value.title}</h3>
              <p className="text-[#F7F9F6]/60 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-6 pb-20 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F7F9F6] mb-12 text-center">
          Our <span className="text-gradient-mint">Journey</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#80FFA6]" />
                {idx < timeline.length - 1 && <div className="w-px flex-1 bg-[#80FFA6]/30 mt-2" />}
              </div>
              <div className="pb-8">
                <span className="text-[#80FFA6] font-bold text-lg">{item.year}</span>
                <p className="text-[#F7F9F6]/80 mt-1">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-6 pb-20 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F7F9F6] mb-12 text-center">
          Meet Our <span className="text-gradient-mint">Team</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl overflow-hidden group hover:border-[#80FFA6]/30 border border-transparent transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[#F7F9F6] font-semibold">{member.name}</h3>
                <p className="text-[#80FFA6] text-sm mb-2">{member.role}</p>
                <p className="text-[#F7F9F6]/60 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
