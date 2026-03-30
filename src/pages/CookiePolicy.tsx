// src/pages/CookiePolicy.tsx
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import { Cookie, Settings, Shield, RefreshCw, Info, CheckCircle, Eye, Database, Globe, Clock, AlertCircle, Mail } from 'lucide-react'
import { useState } from 'react'

const CookiePolicy = () => {
  const [lastUpdated] = useState('March 25, 2026')
  const [showPreferences, setShowPreferences] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    performance: false,
    advertising: false,
  })

  const handlePreferenceChange = (type: keyof typeof cookiePreferences) => {
    if (type === 'necessary') return // Necessary cookies cannot be disabled
    setCookiePreferences(prev => ({ ...prev, [type]: !prev[type] }))
  }

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences))
    setShowPreferences(false)
    // Show success message
    alert('Cookie preferences saved successfully!')
  }

  const sections = [
    { id: 'what-are-cookies', title: 'What Are Cookies?' },
    { id: 'how-we-use', title: 'How We Use Cookies' },
    { id: 'types', title: 'Types of Cookies' },
    { id: 'third-party', title: 'Third-Party Cookies' },
    { id: 'control', title: 'Your Control' },
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
              <Cookie className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-primary">Cookie Notice</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn how we use cookies and similar technologies to improve your experience.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Cookie Preferences Button */}
          <div className="mb-12 flex justify-center">
            <button
              onClick={() => setShowPreferences(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all"
            >
              <Settings className="h-5 w-5" />
              Manage Cookie Preferences
            </button>
          </div>

          {/* Cookie Preferences Modal */}
          {showPreferences && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <div className="relative max-w-lg w-full bg-card rounded-2xl border border-border p-6 max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="absolute top-4 right-4 p-1 rounded-lg hover:bg-secondary"
                >
                  ✕
                </button>
                
                <div className="flex items-center gap-3 mb-4">
                  <Cookie className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-bold">Cookie Preferences</h2>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6">
                  Choose which cookies you want to allow. You can change your preferences at any time.
                </p>
                
                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-start justify-between p-3 rounded-lg bg-secondary/30">
                    <div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <h3 className="font-medium">Necessary Cookies</h3>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Required for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">Always Active</span>
                  </div>
                  
                  {/* Functional Cookies */}
                  <div className="flex items-start justify-between p-3 rounded-lg hover:bg-secondary/30 transition-colors">
                    <div>
                      <div className="flex items-center gap-2">
                        <RefreshCw className="h-4 w-4 text-primary" />
                        <h3 className="font-medium">Functional Cookies</h3>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Remember your preferences and enhance functionality.
                      </p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('functional')}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        cookiePreferences.functional
                          ? 'bg-primary/20 text-primary'
                          : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      {cookiePreferences.functional ? 'Enabled' : 'Disabled'}
                    </button>
                  </div>
                  
                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between p-3 rounded-lg hover:bg-secondary/30 transition-colors">
                    <div>
                      <div className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-primary" />
                        <h3 className="font-medium">Analytics Cookies</h3>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        cookiePreferences.analytics
                          ? 'bg-primary/20 text-primary'
                          : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      {cookiePreferences.analytics ? 'Enabled' : 'Disabled'}
                    </button>
                  </div>
                  
                  {/* Performance Cookies */}
                  <div className="flex items-start justify-between p-3 rounded-lg hover:bg-secondary/30 transition-colors">
                    <div>
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-primary" />
                        <h3 className="font-medium">Performance Cookies</h3>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Track website performance and improve user experience.
                      </p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('performance')}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        cookiePreferences.performance
                          ? 'bg-primary/20 text-primary'
                          : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      {cookiePreferences.performance ? 'Enabled' : 'Disabled'}
                    </button>
                  </div>
                  
                  {/* Advertising Cookies */}
                  <div className="flex items-start justify-between p-3 rounded-lg hover:bg-secondary/30 transition-colors">
                    <div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary" />
                        <h3 className="font-medium">Advertising Cookies</h3>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Deliver relevant advertisements and track campaign effectiveness.
                      </p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('advertising')}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        cookiePreferences.advertising
                          ? 'bg-primary/20 text-primary'
                          : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      {cookiePreferences.advertising ? 'Enabled' : 'Disabled'}
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={savePreferences}
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all"
                  >
                    Save Preferences
                  </button>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="flex-1 px-4 py-2 border border-border rounded-lg font-medium hover:bg-secondary transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Quick Navigation */}
          <div className="mb-12 p-6 rounded-2xl bg-card border border-border">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
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

          {/* Cookie Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { icon: Shield, title: 'Essential', desc: 'Required for basic functionality', color: 'from-green-500/20' },
              { icon: Eye, title: 'Analytics', desc: 'Help us improve performance', color: 'from-blue-500/20' },
              { icon: Globe, title: 'Marketing', desc: 'Personalize your experience', color: 'from-orange-500/20' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className={`p-4 rounded-xl bg-gradient-to-br ${item.color} bg-card border border-border`}>
                  <Icon className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Policy Content */}
          <div className="space-y-8">
            {/* What Are Cookies */}
            <section id="what-are-cookies" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Cookie className="h-6 w-6 text-primary" />
                What Are Cookies?
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Cookies are small text files that are placed on your computer, smartphone, or other device 
                  when you visit a website. They are widely used to make websites work more efficiently, 
                  enhance user experience, and provide information to the site owners.
                </p>
                <p>
                  Cookies help us remember your preferences, understand how you interact with our site, 
                  and improve your overall experience. They are not harmful and cannot access your 
                  device's system files.
                </p>
              </div>
            </section>

            {/* How We Use Cookies */}
            <section id="how-we-use" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>We use cookies for the following purposes:</p>
                <ul>
                  <li><strong>Essential Operations:</strong> To enable core functionality like security, authentication, and accessibility</li>
                  <li><strong>Performance & Analytics:</strong> To understand how visitors use our site and identify areas for improvement</li>
                  <li><strong>Preferences:</strong> To remember your settings and personalize your experience</li>
                  <li><strong>Marketing:</strong> To deliver relevant content and measure campaign effectiveness</li>
                </ul>
              </div>
            </section>

            {/* Types of Cookies */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Strictly Necessary Cookies</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Always Active</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies are essential for the website to function properly. They enable basic 
                    features like page navigation, security, and accessibility. You cannot disable these cookies.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Examples: Session cookies, authentication cookies, CSRF tokens
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <RefreshCw className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Functional Cookies</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies enable enhanced functionality and personalization. They remember your 
                    preferences, such as language settings and login information.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Examples: Language preferences, theme settings, saved preferences
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Analytics & Performance Cookies</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously. This helps us improve our services.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Examples: Google Analytics, page view counters, user journey tracking
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Advertising & Targeting Cookies</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies may be set through our site by our advertising partners. They build a 
                    profile of your interests and show you relevant ads on other sites.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Examples: Facebook Pixel, Google Ads, retargeting cookies
                  </div>
                </div>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section id="third-party" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  We use third-party services that may set cookies on our behalf. These include:
                </p>
                <ul>
                  <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                  <li><strong>HubSpot:</strong> For marketing automation and lead tracking</li>
                  <li><strong>Stripe:</strong> For payment processing (if applicable)</li>
                  <li><strong>Social Media Platforms:</strong> For sharing content and tracking engagement</li>
                </ul>
                <p>
                  These third parties have their own privacy policies and cookie policies. We recommend 
                  reviewing their policies for more information.
                </p>
              </div>
            </section>

            {/* Your Control */}
            <section id="control" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">Your Control Over Cookies</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>You have several options to control and manage cookies:</p>
                
                <h3>Browser Settings</h3>
                <p>
                  Most browsers allow you to control cookies through their settings. You can:
                </p>
                <ul>
                  <li>View all cookies currently stored on your device</li>
                  <li>Delete individual or all cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all third-party cookies</li>
                  <li>Set preferences for first-party cookies</li>
                </ul>
                <p>
                  Visit your browser's help section for instructions:
                </p>
                <ul>
                  <li><a href="#" className="text-primary">Chrome</a></li>
                  <li><a href="#" className="text-primary">Firefox</a></li>
                  <li><a href="#" className="text-primary">Safari</a></li>
                  <li><a href="#" className="text-primary">Edge</a></li>
                </ul>
                
                <h3>Cookie Preference Tool</h3>
                <p>
                  You can use our cookie preference tool (click the "Manage Cookie Preferences" button at the 
                  top of this page) to enable or disable specific categories of cookies.
                </p>
                
                <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mt-4">
                  <AlertCircle className="h-5 w-5 text-primary mb-2" />
                  <p className="text-sm">
                    <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website. 
                    Essential cookies cannot be disabled as they are necessary for basic site operations.
                  </p>
                </div>
              </div>
            </section>

            {/* Changes to This Policy */}
            <section id="changes" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">Changes to This Cookie Policy</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for legal reasons. We will notify you of any material changes by posting the new 
                  policy on this page and updating the "Last updated" date.
                </p>
                <p>
                  We encourage you to review this policy periodically to stay informed about how we use cookies.
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
                  If you have questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <ul>
                  <li><strong>Email:</strong> <a href="mailto:privacy@nexentrix.com" className="text-primary">privacy@nexentrix.com</a></li>
                  <li><strong>Phone:</strong> +234(0)9110468788</li>
                  <li><strong>Address:</strong> 123 AI Avenue, Central Business District, FCT, Abuja Nigeria</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Cookie Compliance Notice */}
          <div className="mt-12 p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">GDPR & CCPA Compliant</h3>
                <p className="text-sm text-muted-foreground">
                  We are committed to complying with global privacy regulations including GDPR (EU) 
                  and CCPA (California). Our cookie practices are designed to give you full control 
                  over your data.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
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

export default CookiePolicy