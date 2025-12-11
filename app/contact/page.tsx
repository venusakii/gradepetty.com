import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AmbientBackground } from "@/components/ambient-background"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@gradepetty.com",
    link: "mailto:hello@gradepetty.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 716-859-1238",
    link: "tel:+17168591238",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "3399 Jarvis Street, Buffalo, NY 14202, USA",
    link: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 9AM-6PM EST",
    link: null,
  },
]

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day satisfaction guarantee on all products. If you're not completely happy, we'll make it right.",
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available at checkout.",
  },
  {
    question: "Are your products safe for all pets?",
    answer:
      "Our products are developed with veterinarians and are suitable for most pets. Check individual product pages for specific guidelines.",
  },
  {
    question: "How do I track my impact?",
    answer:
      "Every order comes with an impact report showing the trees planted, plastic recycled, and animals helped through your purchase.",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0D0C] relative overflow-hidden">
      <AmbientBackground />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[#80FFA6] text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#F7F9F6] mb-6">
            Contact <span className="text-gradient-mint">Us</span>
          </h1>
          <p className="text-[#F7F9F6]/70 text-lg">
            Have questions? We'd love to hear from you. Our team is here to help with anything you need.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-6 pb-20 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#F7F9F6] mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#F7F9F6]/80 text-sm mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0D0C] border border-[#F7F9F6]/10 text-[#F7F9F6] placeholder:text-[#F7F9F6]/30 focus:border-[#80FFA6]/50 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-[#F7F9F6]/80 text-sm mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0D0C] border border-[#F7F9F6]/10 text-[#F7F9F6] placeholder:text-[#F7F9F6]/30 focus:border-[#80FFA6]/50 focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#F7F9F6]/80 text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0D0C] border border-[#F7F9F6]/10 text-[#F7F9F6] placeholder:text-[#F7F9F6]/30 focus:border-[#80FFA6]/50 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-[#F7F9F6]/80 text-sm mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#0B0D0C] border border-[#F7F9F6]/10 text-[#F7F9F6] focus:border-[#80FFA6]/50 focus:outline-none transition-colors">
                  <option value="">Select a topic</option>
                  <option value="order">Order Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="partnership">Partnership</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-[#F7F9F6]/80 text-sm mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0D0C] border border-[#F7F9F6]/10 text-[#F7F9F6] placeholder:text-[#F7F9F6]/30 focus:border-[#80FFA6]/50 focus:outline-none transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#80FFA6] text-[#0B0D0C] font-semibold flex items-center justify-center gap-2 hover:bg-[#A4FFDA] transition-colors"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#F7F9F6] mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#80FFA6]/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[#80FFA6]" />
                    </div>
                    <div>
                      <p className="text-[#F7F9F6]/50 text-sm">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-[#F7F9F6] hover:text-[#80FFA6] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#F7F9F6]">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-5 h-5 text-[#80FFA6]" />
                <h3 className="text-lg font-semibold text-[#F7F9F6]">Live Chat</h3>
              </div>
              <p className="text-[#F7F9F6]/70 text-sm mb-4">
                Need quick help? Our team is available for live chat during business hours.
              </p>
              <button className="w-full py-3 rounded-full glass text-[#80FFA6] font-medium hover:bg-[#80FFA6]/10 transition-colors">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-6 pb-20 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F7F9F6] mb-12 text-center">
          Frequently Asked <span className="text-gradient-mint">Questions</span>
        </h2>
        <div className="max-w-3xl mx-auto grid gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass rounded-2xl p-6">
              <h3 className="text-[#F7F9F6] font-semibold mb-2">{faq.question}</h3>
              <p className="text-[#F7F9F6]/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
