// src/components/sections/home/AboutPeek.tsx
import { Target, Eye, Globe2, Users, BarChart3, Star } from 'lucide-react'

const AboutPeek = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 badge">
              <span className="text-sm">Who We Are</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Building the Future of
              <span className="text-primary block mt-2">Artificial Intelligence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Nexentrix Ltd is an AI-driven technology company building intelligent solutions, 
              empowering individuals through education, and helping businesses automate and scale.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: Eye, title: 'Vision', text: 'AI-first Africa by 2030' },
                { icon: Target, title: 'Mission', text: 'Democratize AI access' },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="p-4 rounded-xl bg-card border border-border">
                    <Icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Right Side - Stats Showcase */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative grid grid-cols-2 gap-6">
              {[
                { value: '5+', label: 'Countries', icon: Globe2 },
                { value: '50+', label: 'Experts', icon: Users },
                { value: '100K+', label: 'Users', icon: BarChart3 },
                { value: '98%', label: 'Satisfaction', icon: Star },
              ].map((stat, idx) => {
                const StatsIcon = stat.icon
                return (
                  <div
                    key={idx}
                    className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-105"
                  >
                    <div className="text-primary mx-auto mb-2 text-center">
                      <StatsIcon className="h-7 w-7" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPeek