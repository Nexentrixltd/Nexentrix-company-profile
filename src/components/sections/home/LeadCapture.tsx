// src/components/sections/home/LeadCapture.tsx
import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

const LeadCapture = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(true)
      setTimeout(() => setError(false), 3000)
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/info.nexentrixltd@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          '� NEXENTRIX LEAD CAPTURE': '━━━━━━━━━━━━━━━━',
          '📋 Form Type': '🚀 Lead Capture',
          '📧 Lead Email': email,
          '📍 Source': 'Home Page - "Join the Future of AI" Section',
          '💡 Lead Quality': 'High-intent lead interested in AI solutions and early access',
          '🕐 Captured': new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' }),
          _subject: '🔶 [Nexentrix Lead] New Home Page Subscriber',
          _template: 'table',
          _captcha: 'false'
        })
      })
      
      if (response.ok) {
        setSubmitted(true)
        setEmail('')
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        throw new Error('Submission failed')
      }
    } catch (err) {
      console.error('Lead capture error:', err)
      setError(true)
      setTimeout(() => setError(false), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-transparent to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 md:p-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
          
          <div className="relative text-center max-w-3xl mx-auto">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Future of AI
            </h2>
            <p className="text-muted-foreground mb-8">
              Be the first to know about product launches, exclusive content, and early access opportunities.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isSubmitting}
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
            
            {submitted && (
              <p className="mt-4 text-sm text-green-500 animate-fade-in">
                ✓ Thanks for subscribing! Check your email for updates.
              </p>
            )}
            
            {error && (
              <p className="mt-4 text-sm text-red-500 animate-fade-in">
                ✕ Please enter a valid email address.
              </p>
            )}
            
            <p className="mt-4 text-xs text-muted-foreground">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadCapture