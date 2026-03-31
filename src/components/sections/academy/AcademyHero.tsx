// src/components/sections/academy/AcademyHero.tsx
import { useState } from 'react'
import { GraduationCap, Users, Video, Award, ArrowRight } from 'lucide-react'
import VideoModal from '../../ui/VideoModal'

const AcademyHero = () => {
  const [showVideo, setShowVideo] = useState(false)

  const handleStartLearning = () => {
    const coursesSection = document.getElementById('courses')
    coursesSection?.scrollIntoView({ behavior: 'smooth' })
  }

  // const handleWatchIntro = () => {
  //   setShowVideo(true)
  // }
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <GraduationCap className="h-4 w-4 mr-2" />
              <span className="text-sm">Nexentrix Academy</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Master AI Skills
              <span className="text-primary block">For the Future</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Join Africa's fastest-growing AI learning platform. Get certified, 
              build real-world projects, and connect with industry experts.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { icon: Users, value: '10,000+', label: 'Students' },
                { icon: Video, value: '50+', label: 'Courses' },
                { icon: Award, value: '98%', label: 'Success Rate' },
              ].map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-xl">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={handleStartLearning}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
                Start Learning Free
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button 
                onClick={handleWatchIntro}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                <Play className="h-4 w-4" />
                Watch Intro
              </button> */}
            </div>
          </div>
          
          {/* Right Side - Visual/Stats Grid */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { icon: Users, value: '10k+', label: 'Active Students', color: 'from-blue-500/20' },
                { icon: Award, value: '98%', label: 'Completion Rate', color: 'from-green-500/20' },
                { icon: Video, value: '500+', label: 'Video Lessons', color: 'from-purple-500/20' },
                { icon: GraduationCap, value: '8', label: 'Countries', color: 'from-orange-500/20' },
              ].map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl bg-gradient-to-br ${stat.color} bg-card border border-border text-center`}
                  >
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

      <VideoModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
    </section>
  )
}

export default AcademyHero