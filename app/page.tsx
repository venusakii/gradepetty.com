import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BeyondBowlSection } from "@/components/beyond-bowl-section"
import { CollectionsSection } from "@/components/collections-section"
import { ImpactDashboard } from "@/components/impact-dashboard"
import { ReviewsSection } from "@/components/reviews-section"
import { StoriesSection } from "@/components/stories-section"
import { GradeSystemSection } from "@/components/grade-system-section"
import { FactoryToForestSection } from "@/components/factory-to-forest-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { AmbientBackground } from "@/components/ambient-background"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AmbientBackground />
      <Header />
      <HeroSection />
      <BeyondBowlSection />
      <CollectionsSection />
      <ImpactDashboard />
      <ReviewsSection />
      <StoriesSection />
      <GradeSystemSection />
      <FactoryToForestSection />
      <NewsletterSection />
      <Footer />
      <CookieConsent />
    </main>
  )
}
