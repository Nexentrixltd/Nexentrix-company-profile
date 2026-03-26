// src/components/sections/products/LuminaAISpotlight.tsx
import { Brain, Activity, TrendingUp, Shield, Clock, Award } from 'lucide-react'

const LuminaAISpotlight = () => {
  const features = [
    { icon: Brain, title: 'AI Diagnostics', desc: 'Early detection with 98% accuracy' },
    { icon: Activity, title: 'Predictive Analytics', desc: 'Patient outcome prediction' },
    { icon: TrendingUp, title: 'Treatment Optimization', desc: 'Personalized care plans' },
    { icon: Shield, title: 'Data Security', desc: 'HIPAA compliant encryption' },
    { icon: Clock, title: 'Real-time Monitoring', desc: '24/7 patient insights' },
    { icon: Award, title: 'Clinical Validation', desc: 'Peer-reviewed accuracy' },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Brain className="h-4 w-4 mr-2" />
              <span className="text-sm">Flagship Product</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Lumina AI
              <span className="text-primary block">Healthcare Intelligence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Revolutionizing healthcare with AI-powered diagnostics, predictive analytics, 
              and intelligent patient care management.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {features.slice(0, 4).map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border">
                    <Icon className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="flex gap-4 pt-4">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
                Request Demo
              </button>
              <button className="px-6 py-2 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                View Case Studies
              </button>
            </div>
          </div>
          
          {/* Right Side - Visual Stats */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative grid grid-cols-2 gap-6">
              {[
                { value: '98%', label: 'Diagnostic Accuracy', trend: '+12%' },
                { value: '60%', label: 'Faster Diagnosis', trend: '-40% time' },
                { value: '50+', label: 'Partner Hospitals', trend: 'Growing' },
                { value: '24/7', label: 'AI Support', trend: 'Always on' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-6 rounded-2xl bg-card border border-border">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-green-500">{stat.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LuminaAISpotlight