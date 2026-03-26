// src/components/sections/academy/MentorshipProgram.tsx
import { useNavigate } from 'react-router-dom'
import { MessageCircle, Calendar, Users, Target, Sparkles, Shield, ArrowRight } from 'lucide-react'

const MentorshipProgram = () => {
  const navigate = useNavigate()

  const handleApply = () => {
    navigate('/mentorship')
  }
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <MessageCircle className="h-4 w-4 mr-2" />
              <span className="text-sm">1-on-1 Mentorship</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Get Expert Guidance
              <span className="text-primary block">Every Step of the Way</span>
            </h2>
            
            <p className="text-muted-foreground">
              Connect with industry experts who provide personalized guidance, 
              code reviews, and career advice tailored to your goals.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, text: 'Weekly 1-on-1 Sessions' },
                { icon: Users, text: 'Industry Experts' },
                { icon: Target, text: 'Personalized Learning' },
                { icon: Shield, text: 'Career Coaching' },
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
              onClick={handleApply}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
              Apply for Mentorship
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          
          {/* Right Side - Stats */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative grid grid-cols-2 gap-6">
              {[
                { value: '150+', label: 'Active Mentors', icon: Users },
                { value: '98%', label: 'Student Satisfaction', icon: Sparkles },
                { value: '2,000+', label: 'Mentorship Hours', icon: Calendar },
                { value: '85%', label: 'Career Advancement', icon: Target },
              ].map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="p-6 text-center rounded-2xl bg-card border border-border">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
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

export default MentorshipProgram