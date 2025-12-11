import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "GradePetty — The Future of Pet Care is Conscious",
  description: "Smart. Sustainable. Stunning. Redefining pet care through design, science, and conscience.",
  keywords: ["eco-friendly pet care", "sustainable pet products", "organic pet food", "biodegradable pet toys"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.jpg",
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#0B0D0C",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#0B0D0C] text-[#F7F9F6]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
