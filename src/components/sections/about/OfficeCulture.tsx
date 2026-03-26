// src/components/sections/about/OfficeCulture.tsx
import { MapPin, Coffee, Heart, Users } from 'lucide-react'

const cultureHighlights = [
  {
    icon: Coffee,
    title: 'Collaborative Space',
    description: 'Open office design fostering innovation and teamwork.',
  },
  {
    icon: Heart,
    title: 'Wellness First',
    description: 'Mental health support and work-life balance initiatives.',
  },
  {
    icon: Users,
    title: 'Diverse & Inclusive',
    description: 'Team members from 8+ African countries.',
  },
]

const OfficeCulture = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm">Life at Nexentrix</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              A Culture of
              <span className="text-primary block">Innovation & Belonging</span>
            </h2>
            
            <p className="text-muted-foreground">
              We believe great work happens when people feel valued, inspired, and empowered. 
              Our Lagos HQ is designed to foster creativity and collaboration.
            </p>
            
            <div className="space-y-4">
              {cultureHighlights.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                    <Icon className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="flex items-center gap-2 pt-4">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Lagos, Nigeria • Hybrid Work Model</span>
            </div>
          </div>
          
          {/* Right Side - Gallery Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                <span className="text-4xl">🏢</span>
              </div>
              <div className="h-32 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center border border-primary/20">
                <span className="text-3xl">💻</span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-32 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center border border-primary/20">
                <span className="text-3xl">🎉</span>
              </div>
              <div className="h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                <span className="text-4xl">🤝</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfficeCulture