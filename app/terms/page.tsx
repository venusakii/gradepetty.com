import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AmbientBackground } from "@/components/ambient-background"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0B0D0C] text-[#F7F9F6]">
      <AmbientBackground />
      <Header />

      <section className="pt-32 pb-20 container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of <span className="text-gradient-mint">Service</span>
            </h1>
            <p className="text-[#F7F9F6]/60">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">1. Agreement to Terms</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed">
                By accessing or using GradePetty.com, you agree to be bound by these Terms of Service and all applicable
                laws and regulations. If you do not agree with any of these terms, you are prohibited from using or
                accessing this site. The materials contained in this website are protected by applicable copyright and
                trademark law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">2. Use License</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on
                GradePetty's website for personal, non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-[#F7F9F6]/70 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">3. Amazon Affiliate Disclosure</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed">
                GradePetty.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
                program designed to provide a means for sites to earn advertising fees by advertising and linking to
                Amazon.com. As an Amazon Associate, we earn from qualifying purchases. Product prices and availability
                are accurate as of the date/time indicated and are subject to change.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">4. Product Information</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed">
                We strive to provide accurate product information, descriptions, and images. However, we do not warrant
                that product descriptions or other content is accurate, complete, reliable, current, or error-free. All
                products are subject to availability. We reserve the right to discontinue any product at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">5. Disclaimer</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed">
                The materials on GradePetty's website are provided on an 'as is' basis. GradePetty makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including, without
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">6. Limitations</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed">
                In no event shall GradePetty or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on GradePetty's website, even if GradePetty or an authorized representative has
                been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">7. Governing Law</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of New York, United
                States, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or
                location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">8. Contact Us</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                <span className="text-[#80FFA6]">legal@gradepetty.com</span>
                <br />
                3399 Jarvis Street, Buffalo, NY 14202, United States
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
