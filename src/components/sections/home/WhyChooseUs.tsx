// src/components/sections/home/WhyChooseUs.tsx
import { Cpu, Globe, Rocket, Heart, Shield, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'AI-First Approach',
    description: 'Built from the ground up with artificial intelligence at its core.',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: Globe,
    title: 'Built for Africa',
    description: 'Solutions designed specifically for African markets and challenges.',
    color: 'from-primary/15 to-transparent',
  },
  {
    icon: Rocket,
    title: 'Scalable Technology',
    description: 'Grow from startup to enterprise with our scalable infrastructure.',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: Heart,
    title: 'Real-World Impact',
    description: 'Making a tangible difference in healthcare, education, and business.',
    color: 'from-primary/15 to-transparent',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protecting your data and operations.',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Track record of delivering measurable business outcomes.',
    color: 'from-primary/15 to-transparent',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm">Why Trust Nexentrix</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with deep market understanding
          </p>
        </div>

        {/* Feature Grid - 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-border transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/35 via-fuchsia-400/35 to-teal-400/35 opacity-100" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/30 via-purple-400/30 to-fuchsia-500/30 opacity-0 group-hover:opacity-95 transition-all" />
                <div className="relative p-6 bg-card bg-opacity-90 backdrop-blur-sm rounded-2xl">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/30 via-primary/20 to-secondary/20 mb-4 shadow-sm">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs