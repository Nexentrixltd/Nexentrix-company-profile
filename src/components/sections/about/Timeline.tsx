// src/components/sections/about/Timeline.tsx
import { Rocket, Users, Award, Globe, Sparkles } from 'lucide-react'

const timelineEvents = [
  {
    year: '2022',
    title: 'Company Founded',
    description: 'Nexentrix Ltd established with a vision to transform Africa through AI.',
    icon: Rocket,
    status: 'completed',
  },
  {
    year: '2023',
    title: 'First Product Launch',
    description: 'Lumina AI platform launches, serving healthcare providers across Nigeria.',
    icon: Sparkles,
    status: 'completed',
  },
  {
    year: '2023',
    title: 'Academy Launched',
    description: 'Nexentrix Academy opens with 500+ students in first cohort.',
    icon: Users,
    status: 'completed',
  },
  {
    year: '2024',
    title: 'Expansion Phase',
    description: 'Operations expand to Ghana, Kenya, and South Africa.',
    icon: Globe,
    status: 'current',
  },
  {
    year: '2025',
    title: 'Global Recognition',
    description: 'Won 12 industry awards for AI innovation and impact.',
    icon: Award,
    status: 'completed',
  },
]

const Timeline = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm">Our Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Nexentrix Story
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From ambitious startup to industry leader — our journey of innovation and impact
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20 hidden md:block" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, idx) => {
              const Icon = event.icon
              const isEven = idx % 2 === 0
              
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 hidden md:block" />
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:translate-x-2 ${
                      event.status === 'current' ? 'shadow-lg shadow-primary/10' : ''
                    }`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`inline-flex p-2 rounded-lg ${
                          event.status === 'current' ? 'bg-primary' : 'bg-primary/10'
                        }`}>
                          <Icon className={`h-4 w-4 ${
                            event.status === 'current' ? 'text-primary-foreground' : 'text-primary'
                          }`} />
                        </div>
                        <span className="text-2xl font-bold text-primary">{event.year}</span>
                        {event.status === 'current' && (
                          <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty spacer for layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline