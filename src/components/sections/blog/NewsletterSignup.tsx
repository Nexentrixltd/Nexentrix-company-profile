// src/components/sections/blog/NewsletterSignup.tsx
import { useState } from 'react'
import { Mail, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }
    
    setStatus('submitting')
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Newsletter signup:', email)
      setStatus('success')
      setMessage('Thanks for subscribing! Check your inbox for our latest posts.')
      setEmail('')
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('Newsletter signup error:', err)
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-6 md:p-8">
          <div className="relative text-center max-w-2xl mx-auto">
            <div className="inline-flex p-3 rounded-xl bg-primary/20 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Get the latest AI insights, product updates, and exclusive content delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={status === 'submitting'}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group inline-flex items-center justify-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
            
            {status === 'success' && (
              <div className="mt-4 flex items-center justify-center gap-2 text-green-500">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">{message}</span>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mt-4 flex items-center justify-center gap-2 text-red-500">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">{message}</span>
              </div>
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

export default NewsletterSignup