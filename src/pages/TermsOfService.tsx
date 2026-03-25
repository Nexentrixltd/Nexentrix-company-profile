// src/pages/TermsOfService.tsx
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import { FileText, Scale, AlertCircle, CheckCircle, Clock } from 'lucide-react'
import { useState } from 'react'

const TermsOfService = () => {
  const [lastUpdated] = useState('March 25, 2024')

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'services', title: 'Our Services' },
    { id: 'accounts', title: 'User Accounts' },
    { id: 'payments', title: 'Payments & Subscriptions' },
    { id: 'intellectual', title: 'Intellectual Property' },
    { id: 'user-content', title: 'User Content' },
    { id: 'prohibited', title: 'Prohibited Conduct' },
    { id: 'termination', title: 'Termination' },
    { id: 'disclaimer', title: 'Disclaimer of Warranties' },
    { id: 'limitation', title: 'Limitation of Liability' },
    { id: 'governing', title: 'Governing Law' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'contact', title: 'Contact Us' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <PageLayout intensity={0.3} particleCount={400}>
      <main className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Scale className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-primary">Legal Agreement</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="mb-12 p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Quick Navigation
            </h2>
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="px-3 py-1.5 rounded-lg text-sm bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            <section id="acceptance" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  By accessing or using Nexentrix Ltd's website, products, and services (collectively, 
                  the "Services"), you agree to be bound by these Terms of Service. If you do not agree 
                  to these terms, please do not use our Services.
                </p>
              </div>
            </section>

            <section id="services" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">2. Our Services</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>Nexentrix provides AI-powered solutions including:</p>
                <ul>
                  <li><strong>Lumina AI:</strong> Healthcare intelligence platform</li>
                  <li><strong>Nexentrix Academy:</strong> AI education and training</li>
                  <li><strong>Top-Up Platform:</strong> Payment and subscription services</li>
                  <li><strong>Consulting Services:</strong> AI automation and strategy</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our Services 
                  at any time without notice.
                </p>
              </div>
            </section>

            <section id="accounts" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  To access certain features, you must create an account. You agree to:
                </p>
                <ul>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Be responsible for all activities under your account</li>
                </ul>
                <p>
                  You must be at least 13 years old to create an account. If you are under 18, 
                  you must have parental consent.
                </p>
              </div>
            </section>

            <section id="payments" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">4. Payments & Subscriptions</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Certain services require payment. By purchasing a subscription, you agree to:
                </p>
                <ul>
                  <li>Pay all fees associated with your chosen plan</li>
                  <li>Provide valid payment information</li>
                  <li>Authorize recurring payments for subscription services</li>
                  <li>Review our refund policy before purchase</li>
                </ul>
                <p>
                  Subscription fees are non-refundable except as required by law. We may change 
                  fees with prior notice.
                </p>
              </div>
            </section>

            <section id="intellectual" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  All content, features, and functionality of our Services are owned by Nexentrix Ltd 
                  and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not copy, modify, distribute, or create derivative works of our content 
                  without our explicit permission.
                </p>
              </div>
            </section>

            <section id="user-content" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">6. User Content</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  You retain ownership of content you submit. By submitting content, you grant us 
                  a license to use, display, and distribute it as necessary to provide our Services.
                </p>
                <p>
                  You are responsible for the content you submit and must ensure it does not violate 
                  any laws or third-party rights.
                </p>
              </div>
            </section>

            <section id="prohibited" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">7. Prohibited Conduct</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>You agree not to:</p>
                <ul>
                  <li>Use our Services for illegal purposes</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our Services</li>
                  <li>Harass, abuse, or harm others</li>
                  <li>Impersonate any person or entity</li>
                  <li>Reverse engineer our software</li>
                </ul>
              </div>
            </section>

            <section id="termination" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  We may terminate or suspend your account immediately, without prior notice, for 
                  conduct that violates these Terms or is harmful to our Services or users.
                </p>
                <p>
                  Upon termination, your right to use our Services will cease immediately.
                </p>
              </div>
            </section>

            <section id="disclaimer" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">9. Disclaimer of Warranties</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg mb-4">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mb-2" />
                  <p className="text-sm">
                    Our Services are provided "AS IS" without warranties of any kind. We do not warrant 
                    that our Services will be uninterrupted, error-free, or secure.
                  </p>
                </div>
              </div>
            </section>

            <section id="limitation" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-red-500 mb-2" />
                  <p className="text-sm">
                    To the maximum extent permitted by law, Nexentrix shall not be liable for any indirect, 
                    incidental, or consequential damages arising from your use of our Services.
                  </p>
                </div>
              </div>
            </section>

            <section id="governing" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  These Terms shall be governed by the laws of Nigeria, without regard to conflict of law principles.
                </p>
              </div>
            </section>

            <section id="changes" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  We may update these Terms from time to time. We will notify you of material changes 
                  by posting on our website or sending an email. Continued use of our Services 
                  constitutes acceptance of the modified Terms.
                </p>
              </div>
            </section>

            <section id="contact" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>If you have questions about these Terms, please contact us:</p>
                <ul>
                  <li><strong>Email:</strong> <a href="mailto:legal@nexentrix.com" className="text-primary">legal@nexentrix.com</a></li>
                  <li><strong>Phone:</strong> +234 123 456 7890</li>
                  <li><strong>Address:</strong> 123 AI Avenue, Victoria Island, Lagos, Nigeria</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Acknowledgment */}
          <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Acknowledgment</h3>
                  <p className="text-sm text-muted-foreground">
                    By using our services, you acknowledge that you have read, understood, and agree to these Terms of Service.
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all whitespace-nowrap"
              >
                Questions? Contact Us
              </Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}

export default TermsOfService