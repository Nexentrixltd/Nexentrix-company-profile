// src/components/sections/products/AcademySpotlight.tsx
import { useNavigate } from 'react-router-dom'
import { GraduationCap, Video, Users, Award, Clock, Globe } from 'lucide-react'

const AcademySpotlight = () => {
  const navigate = useNavigate()

  const courses = [
    { name: 'AI Fundamentals', students: '2,500+', duration: '4 weeks', level: 'Beginner' },
    { name: 'Machine Learning', students: '1,800+', duration: '8 weeks', level: 'Intermediate' },
    { name: 'Deep Learning', students: '1,200+', duration: '12 weeks', level: 'Advanced' },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="space-y-4">
              {courses.map((course, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:translate-x-2 cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{course.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-500' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-500' :
                      'bg-red-500/20 text-red-500'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" /> {course.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {course.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <GraduationCap className="h-4 w-4 mr-2" />
              <span className="text-sm">Education Platform</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Nexentrix Academy
              <span className="text-primary block">Learn AI from Experts</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Africa's fastest-growing AI learning platform with industry-recognized 
              certifications and hands-on project experience.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Video, text: '50+ Expert Courses' },
                { icon: Users, text: '10,000+ Students' },
                { icon: Award, text: 'Industry Certificates' },
                { icon: Globe, text: '8 African Countries' },
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
              onClick={() => navigate('/academy')}
              className="inline-flex items-center px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
              Start Learning Free
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcademySpotlight