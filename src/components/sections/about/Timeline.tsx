// src/components/sections/about/Timeline.tsx
import { useState } from 'react'
import { Rocket, Users, Award, Globe, Sparkles, ChevronDown, ChevronUp, Calendar, MapPin } from 'lucide-react'

const timelineEvents = [
  {
    year: '2022',
    title: 'Company Founded',
    shortDescription: 'Nexentrix Ltd established with a vision to transform Africa through AI.',
    fullDescription: 'Founded in Lagos, Nigeria, Nexentrix began with a small team of 5 AI researchers passionate about solving African challenges. Our first office was a shared workspace in Victoria Island, and our initial funding came from angel investors who believed in our mission.',
    icon: Rocket,
    status: 'completed',
    metrics: { team: '5', funding: '$500K', location: 'Lagos' },
    image: '🚀',
  },
  {
    year: '2023',
    title: 'First Product Launch',
    shortDescription: 'Lumina AI platform launches, serving healthcare providers across Nigeria.',
    fullDescription: 'After 8 months of development, Lumina AI was launched at the Lagos HealthTech Summit. Within the first month, we onboarded 10 hospitals. The platform achieved 95% accuracy in early diagnostic tests, saving countless hours for medical professionals.',
    icon: Sparkles,
    status: 'completed',
    metrics: { hospitals: '10', accuracy: '95%', users: '500+' },
    image: '🏥',
  },
  {
    year: '2023',
    title: 'Academy Launched',
    shortDescription: 'Nexentrix Academy opens with 500+ students in first cohort.',
    fullDescription: 'Our education platform launched with 5 foundational AI courses. The first cohort of 500 students came from 12 African countries. Student success stories emerged within months, with graduates landing roles at tech companies across the continent.',
    icon: Users,
    status: 'completed',
    metrics: { students: '500+', courses: '5', countries: '12' },
    image: '📚',
  },
  {
    year: '2024',
    title: 'Expansion Phase',
    shortDescription: 'Operations expand to Ghana, Kenya, and South Africa.',
    fullDescription: 'Opened regional offices in Accra, Nairobi, and Cape Town. Grew team to 50+ employees across 4 countries. Established partnerships with 20+ healthcare providers and 15+ educational institutions across Africa.',
    icon: Globe,
    status: 'current',
    metrics: { countries: '4', employees: '50+', partners: '35+' },
    image: '🌍',
  },
  {
    year: '2025',
    title: 'Global Recognition',
    shortDescription: 'Won 12 industry awards for AI innovation and impact.',
    fullDescription: 'Recognized at the African Tech Summit, Global AI Awards, and Forbes Africa. Our Lumina AI platform was named "Most Innovative HealthTech Solution" at the Africa Innovation Summit. Featured in TechCrunch and Wired for our impact in healthcare.',
    icon: Award,
    status: 'completed',
    metrics: { awards: '12', features: '15+', media: 'TechCrunch, Wired' },
    image: '🏆',
  },
]

const Timeline = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (idx: number) => {
    setExpandedId(expandedId === idx ? null : idx)
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm text-primary">Our Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Nexentrix Story
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click on any milestone to explore the full story — from ambitious startup to industry leader
          </p>
        </div>
        
        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Timeline Center Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/40 via-primary/60 to-primary/40" />
          
          <div className="space-y-6">
            {timelineEvents.map((event, idx) => {
              const Icon = event.icon
              const isExpanded = expandedId === idx
              const isEven = idx % 2 === 0
              
              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 md:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 shadow-lg shadow-primary/50" />
                  
                  {/* Year Badge - Mobile */}
                  <div className="md:hidden flex items-center gap-3 mb-2 ml-12">
                    <span className="text-xl font-bold text-primary">{event.year}</span>
                    {event.status === 'current' && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                        Current
                      </span>
                    )}
                  </div>
                  
                  {/* Card Container */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div 
                      className={`
                        group relative cursor-pointer transition-all duration-300
                        ${isExpanded ? 'scale-[1.02]' : 'hover:scale-[1.01]'}
                      `}
                      onClick={() => toggleExpand(idx)}
                    >
                      {/* Card */}
                      <div className={`
                        rounded-2xl bg-card border transition-all duration-300 overflow-hidden
                        ${isExpanded 
                          ? 'border-primary shadow-xl shadow-primary/20' 
                          : 'border-border hover:border-primary/50 hover:shadow-lg'
                        }
                        ${event.status === 'current' && !isExpanded ? 'border-primary/50 shadow-lg shadow-primary/10' : ''}
                      `}>
                        {/* Header - Always Visible */}
                        <div className="p-5">
                          <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div className={`
                              flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all
                              ${isExpanded 
                                ? 'bg-primary text-primary-foreground' 
                                : event.status === 'current' 
                                  ? 'bg-primary/20 text-primary' 
                                  : 'bg-primary/10 text-primary'
                              }
                            `}>
                              <Icon className="h-6 w-6" />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              {/* Year and Status - Desktop */}
                              <div className="hidden md:flex items-center gap-3 mb-2">
                                <span className="text-lg font-bold text-primary">{event.year}</span>
                                {event.status === 'current' && (
                                  <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                                    Current
                                  </span>
                                )}
                              </div>
                              
                              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                {event.title}
                              </h3>
                              
                              <p className="text-muted-foreground text-sm">
                                {event.shortDescription}
                              </p>
                              
                              {/* Expand/Collapse Indicator */}
                              <div className="flex items-center gap-1 mt-3 text-xs text-primary">
                                <span>{isExpanded ? 'Show less' : 'Read more'}</span>
                                {isExpanded ? (
                                  <ChevronUp className="h-3 w-3" />
                                ) : (
                                  <ChevronDown className="h-3 w-3" />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Expanded Content */}
                        <div className={`
                          overflow-hidden transition-all duration-500 ease-in-out
                          ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                        `}>
                          <div className="px-5 pb-5 pt-2 border-t border-border/50">
                            {/* Full Description */}
                            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                              {event.fullDescription}
                            </p>
                            
                            {/* Metrics Grid */}
                            <div className="grid grid-cols-3 gap-3 mb-4">
                              {Object.entries(event.metrics).map(([key, value]) => (
                                <div key={key} className="text-center p-2 rounded-lg bg-secondary/30">
                                  <div className="text-xs text-muted-foreground capitalize mb-1">{key}</div>
                                  <div className="text-sm font-semibold text-primary">{value}</div>
                                </div>
                              ))}
                            </div>
                            
                            {/* Visual Element */}
                            <div className="flex items-center justify-between pt-3 border-t border-border/30">
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Calendar className="h-3 w-3" />
                                <span>{event.year}</span>
                                <MapPin className="h-3 w-3 ml-2" />
                                <span>Africa</span>
                              </div>
                              <div className="text-2xl">{event.image}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty spacer for desktop layout */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Timeline Hint */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            Click on any card to explore the full story
          </p>
        </div>
      </div>
    </section>
  )
}

export default Timeline