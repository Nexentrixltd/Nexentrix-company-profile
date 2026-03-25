// src/components/sections/careers/DiversityCommitment.tsx
import { Heart, Globe, Users, Shield, Target, ArrowRight } from 'lucide-react'

const DiversityCommitment = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-8 md:p-12">
          <div className="relative text-center max-w-3xl mx-auto">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Diversity, Equity & Inclusion
            </h2>
            <p className="text-muted-foreground mb-8">
              We believe that diverse perspectives make us stronger. We're committed to building 
              a workplace where everyone feels valued, respected, and empowered to do their best work.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { icon: Globe, text: '8+ Countries' },
                { icon: Users, text: '45% Women' },
                { icon: Shield, text: 'Inclusive Policies' },
                { icon: Target, text: 'DEI Council' },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="text-center">
                    <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">{item.text}</div>
                  </div>
                )
              })}
            </div>
            
            <button className="inline-flex items-center gap-2 px-6 py-2 border border-primary/30 rounded-lg hover:bg-primary/10 transition-all text-sm font-medium">
              Read Our DEI Report
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiversityCommitment