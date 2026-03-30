// src/pages/ComingSoon.tsx
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import { Mail, Bell, Clock, Sparkles, Rocket, ArrowRight, CheckCircle, Loader2 } from 'lucide-react'
import { useState, useEffect } from 'react'

const ComingSoon = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Calculate time until launch (example: 30 days from now)
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)
    targetDate.setHours(0, 0, 0, 0)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return
    }

    setIsLoading(true)
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/info.nexentrixltd@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          '📋 Form Type': '🚀 Coming Soon Early Access',
          '📧 Subscriber Email': email,
          '📍 Source': 'Coming Soon Page - Launch Notification',
          '💡 Interest': 'Early access to new feature/product launch',
          '🕐 Subscribed': new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' }),
          _subject: '🚀 [Nexentrix Launch] New Early Access Subscriber',
          _template: 'table',
          _captcha: 'false'
        })
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setEmail('')
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error('Subscription failed')
      }
    } catch (error) {
      console.error('Coming soon notification error:', error)
      // Still show success to user even if email fails
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <PageLayout intensity={0.4} particleCount={500}>
      <main className="min-h-[80vh] flex items-center justify-center py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated Icon */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 blur-2xl animate-pulse" />
            </div>
            <div className="relative inline-flex p-4 rounded-full bg-gradient-to-br from-primary/30 to-primary/10">
              <Rocket className="h-16 w-16 text-primary animate-bounce" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Coming Soon</span>
            <Clock className="h-4 w-4 text-primary" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Something Amazing
            <span className="text-primary block mt-2">Is On The Way</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We're working hard to bring you something extraordinary. 
            Stay tuned for updates and be the first to know when we launch.
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-card border border-border backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Notify Form */}
          <div className="max-w-md mx-auto mb-12">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  disabled={isLoading}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Notify Me
                    <Bell className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
            
            {isSubmitted && (
              <div className="mt-3 flex items-center justify-center gap-2 text-green-500 animate-fade-in">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Thanks! We'll notify you when we launch.</span>
              </div>
            )}
            
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            {[
              { icon: Sparkles, title: 'Innovative Features', desc: 'Cutting-edge technology' },
              { icon: Rocket, title: 'Launch Exclusive', desc: 'Special early access' },
              { icon: Bell, title: 'Instant Updates', desc: 'Be the first to know' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="p-4 rounded-xl bg-card/50 border border-border">
                  <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Back to Home */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>Back to Home</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>
    </PageLayout>
  )
}

export default ComingSoon