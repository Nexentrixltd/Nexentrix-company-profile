// src/components/sections/home/AcademyHighlight.tsx
import { GraduationCap, Video, Users, MessageCircle, ArrowRight } from 'lucide-react'

const AcademyHighlight = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with primary overlay */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <GraduationCap className="h-4 w-4 mr-2" />
              <span className="text-sm">Nexentrix Academy</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Master AI Skills
              <span className="text-primary block">For the Future</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Join Africa's fastest-growing AI learning platform. Get certified, 
              build real projects, and connect with industry experts.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Video, text: '50+ Courses' },
                { icon: Users, text: '10K+ Students' },
                { icon: MessageCircle, text: 'Live Mentorship' },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                )
              })}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
                Start Learning Free
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                View All Courses
              </button>
            </div>
          </div>
          
          {/* Right Side - Feature Cards Stack */}
          <div className="relative">
            <div className="space-y-4">
              {[
                { title: 'AI Fundamentals', level: 'Beginner', duration: '4 weeks', color: 'bg-primary/10' },
                { title: 'Machine Learning', level: 'Intermediate', duration: '8 weeks', color: 'bg-primary/15' },
                { title: 'Deep Learning', level: 'Advanced', duration: '12 weeks', color: 'bg-primary/20' },
              ].map((course, idx) => (
                <div
                  key={idx}
                  className={`bg-card p-5 rounded-2xl ${course.color} border border-primary/20 hover:border-primary/50 transition-all hover:translate-x-2 cursor-pointer`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{course.title}</h3>
                    <span className="text-xs px-2 py-1 rounded bg-card text-primary">{course.level}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{course.duration} • Certificate Included</p>
                  <div className="flex items-center text-primary text-sm">
                    Enroll Now <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcademyHighlight