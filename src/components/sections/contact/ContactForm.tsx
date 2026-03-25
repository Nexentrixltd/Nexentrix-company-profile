// src/components/sections/contact/ContactForm.tsx
import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare, Building, Clock } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Form */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-card border ${
                      errors.name ? 'border-red-500' : 'border-border'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.name}
                  </p>
                )}
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-card border ${
                      errors.email ? 'border-red-500' : 'border-border'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.email}
                  </p>
                )}
              </div>
              
              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company (Optional)
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              
              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales & Partnerships</option>
                  <option value="support">Technical Support</option>
                  <option value="careers">Careers</option>
                  <option value="academy">Academy Questions</option>
                </select>
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-card border ${
                      errors.message ? 'border-red-500' : 'border-border'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none`}
                    placeholder="How can we help you?"
                  />
                </div>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.message}
                  </p>
                )}
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500">
                  <CheckCircle className="h-5 w-5" />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500">
                  <AlertCircle className="h-5 w-5" />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          </div>
          
          {/* Right Side - Contact Information & Support */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-24 space-y-6">
              {/* Quick Response Guarantee */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
                <div className="inline-flex p-3 rounded-xl bg-primary/20 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">24-Hour Response Time</h3>
                <p className="text-muted-foreground text-sm">
                  We pride ourselves on fast responses. Expect to hear from our team within 24 business hours.
                </p>
              </div>
              
              {/* Social Media Links */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'LinkedIn', icon: 'in', color: 'bg-blue-600' },
                    { name: 'Twitter', icon: '🐦', color: 'bg-sky-500' },
                    { name: 'Instagram', icon: '📸', color: 'bg-pink-600' },
                    { name: 'Facebook', icon: '📘', color: 'bg-blue-800' },
                    { name: 'YouTube', icon: '▶️', color: 'bg-red-600' },
                    { name: 'Discord', icon: '💬', color: 'bg-indigo-600' },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="flex items-center gap-2 p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
                    >
                      <span className="text-sm">{social.icon}</span>
                      <span className="text-sm">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Partner with Us */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-2">Partner With Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Interested in becoming a partner or reseller? We'd love to collaborate.
                </p>
                <button className="w-full py-2 rounded-lg border border-primary/30 hover:bg-primary/10 transition-all text-sm font-medium">
                  Explore Partnerships
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm