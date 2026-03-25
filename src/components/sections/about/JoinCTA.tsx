// src/components/sections/about/JoinCTA.tsx
import { ArrowRight, Briefcase, TrendingUp, Zap } from 'lucide-react'

const JoinCTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-8 md:p-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(252,163,17,.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
          
          <div className="relative text-center max-w-3xl mx-auto">
            <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Mission
            </h2>
            <p className="text-muted-foreground mb-8">
              We're looking for passionate individuals to help build Africa's AI future. 
              If you're excited about making an impact, we want to hear from you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {[
                { icon: Zap, text: 'Remote-Friendly' },
                { icon: TrendingUp, text: 'Growth Opportunities' },
                { icon: Briefcase, text: 'Competitive Benefits' },
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
            
            <button className="group inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="mt-4 text-xs text-muted-foreground">
              Currently hiring in Engineering, Product, Sales, and Education
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinCTA