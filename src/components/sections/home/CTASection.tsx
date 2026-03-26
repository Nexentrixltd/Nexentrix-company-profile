// src/components/sections/home/CTASection.tsx
import { ArrowRight, Calendar, Users, Award } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm">Join the Movement</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to Transform
              <span className="text-primary block">Your Business with AI?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Join hundreds of companies already leveraging Nexentrix AI solutions 
              to automate, scale, and innovate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                Schedule a Demo
                <Calendar className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* Right Side - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: '500+', label: 'Clients', icon: Users, trend: '+45%' },
              { value: '98%', label: 'Retention', icon: Award, trend: '+12%' },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-all">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-green-500">{stat.trend} growth</div>
                </div>
              )
            })}
            <div className="p-6 rounded-2xl bg-card border border-primary/20 text-center col-span-2">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Expert Support</div>
              <div className="text-xs text-primary mt-2">Always here to help</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection