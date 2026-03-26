// src/components/sections/academy/AcademyCTA.tsx
import { GraduationCap, ArrowRight, Gift, Shield, Clock } from 'lucide-react'

const AcademyCTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-8 md:p-12">
          <div className="relative text-center max-w-3xl mx-auto">
            <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your AI Journey Today
            </h2>
            <p className="text-muted-foreground mb-8">
              Get access to 50+ courses, live webinars, mentorship, and a supportive community.
              Start learning for free today.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {[
                { icon: Gift, text: 'Free First Course' },
                { icon: Clock, text: 'Self-Paced Learning' },
                { icon: Shield, text: '30-Day Guarantee' },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                )
              })}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
                Start Learning Free
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                View All Courses
              </button>
            </div>
            
            <p className="mt-6 text-xs text-muted-foreground">
              No credit card required • Cancel anytime • Access to 10+ free courses
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcademyCTA