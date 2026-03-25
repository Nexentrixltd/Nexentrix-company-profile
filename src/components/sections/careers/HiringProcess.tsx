// src/components/sections/careers/HiringProcess.tsx
import { FileText, Mail, Users, Briefcase, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: 'Application Review',
    description: 'We review your resume and portfolio to understand your skills and experience.',
    duration: '2-3 days',
  },
  {
    icon: Mail,
    title: 'Initial Screening',
    description: '30-minute chat with our talent team to discuss your background and expectations.',
    duration: '30 mins',
  },
  {
    icon: Users,
    title: 'Technical Interview',
    description: 'Deep dive into your technical skills with team members.',
    duration: '60-90 mins',
  },
  {
    icon: Briefcase,
    title: 'Final Interview',
    description: 'Meet with leadership to discuss culture fit and vision alignment.',
    duration: '45 mins',
  },
  {
    icon: CheckCircle,
    title: 'Offer & Onboarding',
    description: 'Receive offer, negotiate terms, and join the team!',
    duration: '1-2 weeks',
  },
]

const HiringProcess = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Users className="h-4 w-4 mr-2" />
            <span className="text-sm">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Hire
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A transparent, candidate-friendly process designed to find the best fit for everyone
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20 hidden md:block" />
          
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isEven = idx % 2 === 0
              
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 hidden md:block" />
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="inline-flex p-2 rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm text-primary">{step.duration}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              )
            })}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            We aim to complete the entire process within 2-3 weeks from initial application
          </p>
        </div>
      </div>
    </section>
  )
}

export default HiringProcess