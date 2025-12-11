import Link from "next/link"
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

const footerLinks = {
  shop: [
    { label: "Food & Treats", href: "/shop/food" },
    { label: "Toys", href: "/shop/toys" },
    { label: "Hygiene", href: "/shop/hygiene" },
    { label: "Homeware", href: "/shop/homeware" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Impact", href: "/impact" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] to-[#0B0D0C]/95" />

      {/* Dew particles decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#80FFA6]/20 animate-dew"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top section */}
        <div className="text-center mb-16">
          
        </div>

        {/* Links grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & description */}
          <div>
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="text-xl font-bold text-[#F7F9F6]">grade</span>
              <span className="text-xl font-bold text-gradient-mint">petty</span>
              <span className="relative w-1.5 h-1.5 ml-0.5 -mt-3">
                <span className="absolute inset-0 rounded-full bg-[#80FFA6] animate-pulse-glow" />
              </span>
            </Link>
            <p className="text-sm text-[#F7F9F6]/60 mb-6">
              Redefining pet care through design, science, and conscience.
            </p>
            {/* Social links */}
            
          </div>

          {/* Shop links */}
          

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-[#80FFA6] uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#F7F9F6]/60 hover:text-[#80FFA6] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold text-[#80FFA6] uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#F7F9F6]/60 hover:text-[#80FFA6] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-[#80FFA6]/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#F7F9F6]/40">
            <p>© 2025 GradePetty.com — All rights reserved.</p>
            <p>As an Amazon Associate, we earn from qualifying purchases.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
