// src/pages/CourseEnrollment.tsx
import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import { BookOpen, CheckCircle, Clock, Users, Award, Video, ArrowRight, Star } from 'lucide-react'

const CourseEnrollment = () => {
  const navigate = useNavigate()

  const enrollmentSteps = [
    {
      step: 1,
      title: 'Choose Your Course',
      description: 'Browse our catalog and select the course that matches your goals. All courses include lifetime access and certificates.',
    },
    {
      step: 2,
      title: 'Create Your Account',
      description: 'Sign up with your email or social accounts. Access your personalized dashboard and track your progress.',
    },
    {
      step: 3,
      title: 'Start Learning',
      description: 'Begin your journey with video lessons, hands-on projects, and community support. Learn at your own pace.',
    },
  ]

  const benefits = [
    { icon: Video, title: 'Lifetime Access', description: 'Watch lessons anytime, anywhere on any device' },
    { icon: Award, title: 'Certification', description: 'Earn industry-recognized certificates upon completion' },
    { icon: Users, title: 'Community Support', description: 'Join a community of 10,000+ learners' },
    { icon: Clock, title: 'Self-Paced', description: 'Learn on your schedule with flexible deadlines' },
  ]

  const pricingTiers = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        '10+ free courses',
        'Community access',
        'Basic certificate',
        'Course forums',
      ],
      cta: 'Get Started Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      features: [
        '50+ premium courses',
        'All free tier features',
        'Professional certificates',
        '1-on-1 mentorship sessions',
        'Priority support',
        'Career resources',
      ],
      cta: 'Start Pro Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Unlimited team members',
        'Custom learning paths',
        'Dedicated account manager',
        'Advanced analytics',
        'White-label options',
        'API access',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  const faqs = [
    {
      question: 'Do I need prior experience?',
      answer: 'Most of our beginner courses require no prior experience. Each course clearly states any prerequisites needed.',
    },
    {
      question: 'How long do I have access to courses?',
      answer: 'All enrolled courses include lifetime access. You can learn at your own pace and revisit materials anytime.',
    },
    {
      question: 'Are certificates recognized?',
      answer: 'Yes! Our certificates are recognized by industry leaders and can be shared on LinkedIn to showcase your skills.',
    },
    {
      question: 'Can I get a refund?',
      answer: 'We offer a 30-day money-back guarantee for all paid courses. No questions asked if you\'re not satisfied.',
    },
  ]

  return (
    <PageLayout>
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <BookOpen className="h-4 w-4 mr-2" />
                <span className="text-sm">Course Enrollment</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Start Your Learning Journey
                <span className="text-primary block mt-2">Enroll in AI Courses Today</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Join thousands of students mastering AI skills. Choose from 50+ courses, 
                get certified, and advance your career with expert instruction.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => navigate('/academy')}
                  className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
                  Browse All Courses
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                  Contact Admissions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Steps */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How Enrollment Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get started in minutes with our simple enrollment process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enrollmentSteps.map((step) => (
                <div key={step.step} className="relative p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What You Get When You Enroll
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                More than just courses - a complete learning experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border text-center">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your Plan
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Flexible options for individual learners and organizations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`relative p-8 rounded-2xl border ${
                    tier.popular
                      ? 'bg-gradient-to-b from-primary/10 to-transparent border-primary'
                      : 'bg-card border-border'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground"> /{tier.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => navigate('/contact')}
                    className={`w-full px-6 py-3 rounded-lg font-medium transition-all ${
                      tier.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border border-border hover:bg-secondary'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about enrolling
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-8 md:p-12">
              <div className="relative text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Start Learning?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Join over 10,000 students already learning with Nexentrix Academy. 
                  Start with a free course today or unlock everything with Pro.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => navigate('/academy')}
                    className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
                    View All Courses
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                    Talk to Admissions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}

export default CourseEnrollment
