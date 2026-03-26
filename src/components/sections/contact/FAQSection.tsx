// src/components/sections/contact/FAQSection.tsx
import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
  category: 'General' | 'Products' | 'Academy' | 'Support'
}

const faqs: FAQ[] = [
  {
    question: 'What services does Nexentrix offer?',
    answer: 'Nexentrix offers AI-powered solutions including Lumina AI (healthcare platform), Nexentrix Academy (AI education), and Top-Up Platform (fintech services). We also provide automation consulting and AI training.',
    category: 'General',
  },
  {
    question: 'How can I partner with Nexentrix?',
    answer: 'We welcome partnerships! Please reach out through our contact form with "Partnership" as the subject, and our partnerships team will get back to you within 48 hours.',
    category: 'General',
  },
  {
    question: 'What is Lumina AI and how does it work?',
    answer: 'Lumina AI is our healthcare intelligence platform that uses machine learning for predictive diagnostics, patient analytics, and treatment optimization. It integrates with existing healthcare systems to provide real-time insights.',
    category: 'Products',
  },
  {
    question: 'Are Nexentrix Academy courses accredited?',
    answer: 'Yes, all our courses come with industry-recognized certificates upon completion. Our certificates are verifiable and recognized by employers across Africa and globally.',
    category: 'Academy',
  },
  {
    question: 'Do you offer enterprise solutions?',
    answer: 'Yes, we provide custom enterprise solutions for businesses looking to integrate AI into their operations. Contact our sales team for a consultation.',
    category: 'Products',
  },
  {
    question: 'What is your response time for support?',
    answer: 'We strive to respond to all inquiries within 24 hours. For premium support clients, we offer priority response within 4 hours.',
    category: 'Support',
  },
  {
    question: 'Can I try products before purchasing?',
    answer: 'Yes, we offer free trials for most of our products. Contact us to schedule a demo and get access to our trial period.',
    category: 'Products',
  },
  {
    question: 'How do I enroll in Nexentrix Academy?',
    answer: 'Visit our Academy page, browse our courses, and click "Enroll Now". You can start with our free courses or choose a learning path that fits your goals.',
    category: 'Academy',
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const categories = ['All', 'General', 'Products', 'Academy', 'Support']
  
  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <HelpCircle className="h-4 w-4 mr-2" />
            <span className="text-sm">FAQs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our products and services
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="rounded-2xl bg-card border border-border overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-secondary/30 transition-colors"
                >
                  <span className="font-medium text-foreground">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                    <div className="mt-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        
        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-card border border-border">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for? Send us a message and we'll get back to you.
          </p>
          <button 
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
            <MessageSquare className="h-4 w-4" />
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQSection