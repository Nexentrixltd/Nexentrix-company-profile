// src/components/sections/about/CoreValues.tsx
import { Lightbulb, Shield, Users, Zap, TrendingUp, Heart } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We constantly push boundaries to create breakthrough AI solutions.',
    color: 'from-orange-500/20 to-transparent',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Ethical AI development with transparency and accountability.',
    color: 'from-blue-500/20 to-transparent',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'Building solutions that serve and uplift African communities.',
    color: 'from-green-500/20 to-transparent',
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'Delivering world-class quality in everything we do.',
    color: 'from-purple-500/20 to-transparent',
  },
  {
    icon: TrendingUp,
    title: 'Growth Mindset',
    description: 'Continuous learning and improvement at every level.',
    color: 'from-pink-500/20 to-transparent',
  },
  {
    icon: Heart,
    title: 'Impact Driven',
    description: 'Measuring success by real-world positive change.',
    color: 'from-red-500/20 to-transparent',
  },
]

const CoreValues = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm">What Drives Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do at Nexentrix
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2 cursor-pointer"
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                  
                  {/* Decorative Line */}
                  <div className="mt-4 w-12 h-0.5 bg-primary/30 group-hover:w-full transition-all" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CoreValues