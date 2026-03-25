// src/components/sections/home/DivisionsSection.tsx
import { Brain, GraduationCap, Bot, Users } from 'lucide-react'

const divisions = [
  {
    icon: Brain,
    title: 'AI SaaS',
    description: 'Cutting-edge AI solutions for businesses of all sizes.',
  },
  {
    icon: GraduationCap,
    title: 'Nexentrix Academy',
    description: 'Comprehensive AI education and training programs.',
  },
  {
    icon: Bot,
    title: 'Automation & Consulting',
    description: 'Streamline operations with intelligent automation.',
  },
  {
    icon: Users,
    title: 'AI Influencing',
    description: 'Building a community of AI thought leaders.',
  },
]

const DivisionsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-4 md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                Our Divisions
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Specialized units dedicated to pushing the boundaries of AI innovation
              </p>
            </div>
            <div className="self-start md:self-center">
              <span className="badge bg-primary/90 text-primary-foreground">Explore the full ecosystem</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((division, index) => {
            const Icon = division.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden p-6 rounded-2xl border border-border transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/40 to-cyan-200 opacity-20 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-purple-500/10 opacity-50 group-hover:opacity-0 transition-opacity" />
                <div className="relative bg-card bg-opacity-90 rounded-2xl p-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/30 via-primary/20 to-secondary/20 mb-4 shadow-sm">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{division.title}</h3>
                  <p className="text-muted-foreground">{division.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default DivisionsSection