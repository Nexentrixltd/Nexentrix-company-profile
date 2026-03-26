// src/pages/LuminaAI.tsx
import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import { Brain, Activity, TrendingUp, Shield, Clock, Award, ArrowRight, Check, Users, Building, Stethoscope } from 'lucide-react'

const LuminaAI = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms analyze medical data with 98% accuracy, providing early detection of diseases and conditions.',
    },
    {
      icon: Activity,
      title: 'Predictive Analytics',
      description: 'Forecast patient outcomes and potential health risks before they become critical, enabling proactive care.',
    },
    {
      icon: TrendingUp,
      title: 'Treatment Optimization',
      description: 'Personalized treatment plans based on patient history, genetics, and real-time health data.',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'HIPAA-compliant encryption and security measures to protect sensitive patient information.',
    },
    {
      icon: Clock,
      title: 'Real-time Monitoring',
      description: '24/7 patient health monitoring with instant alerts for critical changes.',
    },
    {
      icon: Award,
      title: 'Clinical Validation',
      description: 'Peer-reviewed and validated by leading healthcare institutions across Africa.',
    },
  ]

  const useCases = [
    {
      icon: Building,
      title: 'Hospitals & Clinics',
      description: 'Streamline diagnostics, reduce wait times, and improve patient outcomes with AI assistance.',
    },
    {
      icon: Stethoscope,
      title: 'Private Practices',
      description: 'Enhance your practice with intelligent insights and automated administrative tasks.',
    },
    {
      icon: Users,
      title: 'Healthcare Networks',
      description: 'Scale quality care across multiple facilities with centralized AI intelligence.',
    },
  ]

  const benefits = [
    '98% diagnostic accuracy',
    '60% faster diagnosis time',
    '40% reduction in administrative work',
    '50+ partner hospitals',
    'ISO 27001 certified',
    '24/7 technical support',
  ]

  return (
    <PageLayout>
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Brain className="h-4 w-4 mr-2" />
                <span className="text-sm">Flagship Healthcare AI</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Lumina AI
                <span className="text-primary block mt-2">Revolutionizing Healthcare with AI</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Transform patient care with intelligent diagnostics, predictive analytics, 
                and personalized treatment plans powered by cutting-edge artificial intelligence.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => navigate('/contact')}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
                  Request Demo
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                  Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powerful Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to deliver exceptional patient care
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built for Healthcare Providers
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tailored solutions for every type of healthcare organization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, idx) => {
                const Icon = useCase.icon
                return (
                  <div key={idx} className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                    <p className="text-muted-foreground text-sm">{useCase.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits & Stats */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Proven Results
                  <span className="text-primary block mt-2">Trusted by Healthcare Leaders</span>
                </h2>
                <ul className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => navigate('/documentation')}
                  className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
                  View Technical Docs
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '98%', label: 'Accuracy Rate' },
                  { value: '50+', label: 'Hospitals' },
                  { value: '60%', label: 'Faster Diagnosis' },
                  { value: '100k+', label: 'Patients Served' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-6 rounded-2xl bg-card border border-border">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-8 md:p-12">
              <div className="relative text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Schedule a personalized demo and see how Lumina AI can transform your healthcare practice.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
                    Request Demo
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => navigate('/products')}
                    className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                    View All Products
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

export default LuminaAI
