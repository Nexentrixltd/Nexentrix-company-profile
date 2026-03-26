// src/components/sections/about/AboutHero.tsx
import { Users, Globe, Award, Calendar } from 'lucide-react'

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm">Our Story</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building Africa's AI Future,
            <span className="text-primary block mt-2">One Innovation at a Time</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Founded in 2022, Nexentrix Ltd has grown from a bold vision into a leading 
            AI technology company, empowering businesses and individuals across Africa 
            with cutting-edge solutions.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
            {[
              { icon: Calendar, value: '2022', label: 'Founded' },
              { icon: Users, value: '50+', label: 'Team Members' },
              { icon: Globe, value: '5+', label: 'Countries' },
              { icon: Award, value: '12', label: 'Awards Won' },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="text-center">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero