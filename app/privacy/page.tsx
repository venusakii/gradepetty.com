import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AmbientBackground } from "@/components/ambient-background"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0B0D0C] text-[#F7F9F6]">
      <AmbientBackground />
      <Header />

      <section className="pt-32 pb-20 container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy <span className="text-gradient-mint">Policy</span>
            </h1>
            <p className="text-[#F7F9F6]/60">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">1. Introduction</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed">
                At GradePetty.com, we respect your privacy and are committed to protecting your personal data. This
                privacy policy will inform you about how we look after your personal data when you visit our website and
                tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">2. Information We Collect</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped
                together as follows:
              </p>
              <ul className="list-disc list-inside text-[#F7F9F6]/70 space-y-2 ml-4">
                <li>
                  <strong>Identity Data:</strong> first name, last name, username or similar identifier
                </li>
                <li>
                  <strong>Contact Data:</strong> email address and telephone numbers
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser
                  plug-in types, operating system and platform
                </li>
                <li>
                  <strong>Usage Data:</strong> information about how you use our website and services
                </li>
                <li>
                  <strong>Marketing Data:</strong> your preferences in receiving marketing from us
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">3. How We Use Your Information</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-[#F7F9F6]/70 space-y-2 ml-4">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To send you newsletters and marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">4. Cookies</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed">
                We use cookies and similar tracking technologies to track the activity on our website and store certain
                information. Cookies are files with a small amount of data which may include an anonymous unique
                identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">5. Third-Party Services</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed">
                Our website contains links to Amazon.com and other third-party websites. We are a participant in the
                Amazon Services LLC Associates Program. When you click on a link to Amazon, you will be directed to
                their website which has its own privacy policy. We have no control over and assume no responsibility for
                the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">6. Data Security</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed">
                The security of your data is important to us, but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your personal data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">7. Your Rights</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including the right to:
              </p>
              <ul className="list-disc list-inside text-[#F7F9F6]/70 space-y-2 ml-4">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">8. Children's Privacy</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed">
                Our service does not address anyone under the age of 13. We do not knowingly collect personally
                identifiable information from anyone under the age of 13. If you are a parent or guardian and you are
                aware that your child has provided us with personal data, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">9. Changes to This Policy</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#80FFA6] mb-4">10. Contact Us</h2>
              <p className="text-[#F7F9F6]/70 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <span className="text-[#80FFA6]">privacy@gradepetty.com</span>
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
