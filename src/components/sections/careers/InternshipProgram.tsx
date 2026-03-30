// src/components/sections/careers/InternshipProgram.tsx
import { GraduationCap, Users, Calendar, Award, ArrowRight, Sparkles } from 'lucide-react'

const InternshipProgram = () => {
  const scrollToOpenPositions = () => {
    const element = document.querySelector('[data-shape="careers-open-positions"]')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <GraduationCap className="h-4 w-4 mr-2" />
              <span className="text-sm">Internships</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Launch Your Career
              <span className="text-primary block">With Nexentrix</span>
            </h2>
            
            <p className="text-muted-foreground">
              Our internship program offers hands-on experience, mentorship, and real-world 
              projects that prepare you for a successful career in tech.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, text: '3-6 month programs' },
                { icon: Users, text: '1-on-1 mentorship' },
                { icon: Award, text: 'Project portfolio' },
                { icon: Sparkles, text: 'Full-time offers' },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                )
              })}
            </div>
            
            <button
              onClick={scrollToOpenPositions}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all"
            >
              View Internships
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          
          {/* Right Side - Program Highlights */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <span className="text-xl">🎓</span>
                </div>
                <h3 className="font-semibold">Software Engineering Intern</h3>
              </div>
              <p className="text-sm text-muted-foreground">Summer 2026 • 12 weeks • Abuja/Remote</p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="font-semibold">AI/ML Research Intern</h3>
              </div>
              <p className="text-sm text-muted-foreground">Fall 2026 • 6 months • Remote</p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="font-semibold">Product Marketing Intern</h3>
              </div>
              <p className="text-sm text-muted-foreground">Spring 2027 • 4 months • Abuja</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InternshipProgram