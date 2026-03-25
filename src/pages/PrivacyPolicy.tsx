// src/pages/PrivacyPolicy.tsx
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import { Shield, Eye, Database, Mail, FileText, Clock, Globe, Lock, Server, UserCheck, Bell, RefreshCw } from 'lucide-react'
import { useState } from 'react'

const PrivacyPolicy = () => {
  const [lastUpdated] = useState('March 25, 2024')

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information', title: 'Information We Collect' },
    { id: 'usage', title: 'How We Use Your Information' },
    { id: 'sharing', title: 'Information Sharing' },
    { id: 'security', title: 'Data Security' },
    { id: 'cookies', title: 'Cookies & Tracking' },
    { id: 'rights', title: 'Your Rights' },
    { id: 'children', title: 'Children\'s Privacy' },
    { id: 'international', title: 'International Transfers' },
    { id: 'changes', title: 'Changes to This Policy' },
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
              <Shield className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-primary">Privacy & Legal</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
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

          {/* Privacy Overview Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Lock, title: 'Data Protection', desc: 'Industry-standard encryption' },
              { icon: UserCheck, title: 'Your Control', desc: 'Manage your preferences' },
              { icon: Globe, title: 'Transparency', desc: 'Clear data practices' },
              { icon: Bell, title: 'Updates', desc: 'Notify you of changes' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="p-4 rounded-xl bg-card border border-border text-center">
                  <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Policy Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <section id="introduction" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Introduction
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Nexentrix Ltd ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website, use our products, or interact with our services.
                </p>
                <p>
                  By using our services, you consent to the data practices described in this policy. 
                  If you do not agree with any part of this policy, please do not use our services.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section id="information" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Database className="h-6 w-6 text-primary" />
                Information We Collect
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>We collect several types of information from and about users of our services:</p>
                
                <h3>Personal Information</h3>
                <ul>
                  <li><strong>Account Information:</strong> Name, email address, phone number, company name</li>
                  <li><strong>Payment Information:</strong> Billing details, payment method (processed securely by third parties)</li>
                  <li><strong>Profile Information:</strong> Profile picture, bio, preferences, learning progress</li>
                  <li><strong>Communication:</strong> Messages, feedback, support requests</li>
                </ul>
                
                <h3>Automatically Collected Information</h3>
                <ul>
                  <li><strong>Usage Data:</strong> Pages visited, time spent, features used, interactions</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong>Location Data:</strong> Approximate geographic location based on IP address</li>
                </ul>
                
                <h3>Cookies and Similar Technologies</h3>
                <p>
                  We use cookies and similar tracking technologies to track activity on our services 
                  and hold certain information. You can instruct your browser to refuse all cookies 
                  or to indicate when a cookie is being sent.
                </p>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section id="usage" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Eye className="h-6 w-6 text-primary" />
                How We Use Your Information
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>We use the information we collect for various purposes:</p>
                <ul>
                  <li><strong>Provide and Maintain Services:</strong> Deliver our products, process transactions, and manage accounts</li>
                  <li><strong>Improve and Develop:</strong> Analyze usage to enhance user experience and develop new features</li>
                  <li><strong>Communicate:</strong> Send updates, security alerts, and respond to inquiries</li>
                  <li><strong>Personalization:</strong> Tailor content, recommendations, and learning paths</li>
                  <li><strong>Security:</strong> Detect, prevent, and address technical issues and fraud</li>
                  <li><strong>Legal Compliance:</strong> Comply with applicable laws and regulations</li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section id="sharing" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                Information Sharing
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>We may share your information in the following circumstances:</p>
                <ul>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our services (payment processors, hosting, analytics)</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Legal Requirements:</strong> To comply with legal obligations or respond to lawful requests</li>
                  <li><strong>With Your Consent:</strong> When you authorize us to share your information</li>
                </ul>
                <p className="mt-4 text-sm bg-secondary/30 p-4 rounded-lg">
                  <strong>We do not sell your personal information</strong> to third parties for their marketing purposes.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section id="security" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Server className="h-6 w-6 text-primary" />
                Data Security
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information. These include:
                </p>
                <ul>
                  <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response procedures</li>
                </ul>
                <p>
                  While we strive to protect your information, no method of transmission over the internet 
                  is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Cookies & Tracking */}
            <section id="cookies" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <RefreshCw className="h-6 w-6 text-primary" />
                Cookies & Tracking
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>We use cookies and similar tracking technologies to:</p>
                <ul>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze site traffic and usage patterns</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Improve site performance and functionality</li>
                </ul>
                <p>
                  You can manage cookie preferences through your browser settings. Note that disabling 
                  cookies may affect certain features of our services.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section id="rights" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <UserCheck className="h-6 w-6 text-primary" />
                Your Rights
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>Depending on your location, you may have the following rights:</p>
                <ul>
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Restriction:</strong> Limit how we process your information</li>
                  <li><strong>Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Objection:</strong> Object to certain processing activities</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information in the "Contact Us" section.
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section id="children" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If you believe we have collected 
                  such information, please contact us immediately.
                </p>
              </div>
            </section>

            {/* International Transfers */}
            <section id="international" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">International Transfers</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Your information may be transferred to and processed in countries other than your 
                  country of residence. We take appropriate safeguards to ensure your information 
                  remains protected in accordance with this Privacy Policy.
                </p>
              </div>
            </section>

            {/* Changes to This Policy */}
            <section id="changes" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page and updating the "Last updated" date. 
                  We encourage you to review this policy periodically.
                </p>
              </div>
            </section>

            {/* Contact Us */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Mail className="h-6 w-6 text-primary" />
                Contact Us
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <ul>
                  <li><strong>Email:</strong> <a href="mailto:privacy@nexentrix.com" className="text-primary">privacy@nexentrix.com</a></li>
                  <li><strong>Phone:</strong> +234 123 456 7890</li>
                  <li><strong>Address:</strong> 123 AI Avenue, Victoria Island, Lagos, Nigeria</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Consent Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold mb-1">Privacy Policy Acknowledgment</h3>
                <p className="text-sm text-muted-foreground">
                  By using our services, you acknowledge that you have read and understood this Privacy Policy.
                </p>
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
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
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

export default PrivacyPolicy