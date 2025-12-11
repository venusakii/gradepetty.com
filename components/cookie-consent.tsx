"use client"

import { useState, useEffect } from "react"
import { Cookie, X } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="relative p-6 rounded-3xl glass border border-[#80FFA6]/20 glow-mint-subtle">
        {/* Close button */}
        <button
          onClick={handleDecline}
          className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-[#80FFA6]/10 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-[#F7F9F6]/60" />
        </button>

        <div className="flex items-start gap-4">
          {/* Cookie icon orb */}
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#80FFA6]/20 flex items-center justify-center">
            <Cookie className="w-6 h-6 text-[#80FFA6]" />
          </div>

          <div className="flex-1 pr-6">
            <p className="text-sm text-[#F7F9F6]/80 mb-4">
              🍪 We use cookies to keep your eco experience smooth and optimized.
            </p>

            <div className="flex gap-3">
              <button
                onClick={handleAccept}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#80FFA6] to-[#A4FFDA] text-[#0B0D0C] text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2 rounded-full glass border border-[#80FFA6]/20 text-sm text-[#F7F9F6]/70 hover:text-[#80FFA6] hover:border-[#80FFA6]/40 transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
