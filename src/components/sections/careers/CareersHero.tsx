// src/components/sections/careers/CareersHero.tsx
import { useState } from 'react'
import { Briefcase, Users, TrendingUp, Award, ArrowRight } from 'lucide-react'
import VideoModal from '../../ui/VideoModal'

const CareersHero = () => {
  const [showVideo, setShowVideo] = useState(false)

  const scrollToOpenPositions = () => {
    const element = document.querySelector('[data-shape="careers-open-positions"]')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Briefcase className="h-4 w-4 mr-2" />
            <span className="text-sm">Join Our Team</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Shape the Future of AI
            <span className="text-primary block mt-2">in Africa</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Join a team of passionate innovators building AI solutions that transform 
            industries and empower communities across Africa.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
            {[
              { icon: Users, value: '50+', label: 'Team Members', trend: '+200% YoY' },
              { icon: TrendingUp, value: '5+', label: 'Countries', trend: 'Growing' },
              { icon: Award, value: '12', label: 'Industry Awards', trend: '2026' },
              { icon: Briefcase, value: '15+', label: 'Open Roles', trend: 'New positions' },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="text-center">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <div className="text-xs text-green-500">{stat.trend}</div>
                </div>
              )
            })}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button
              onClick={scrollToOpenPositions}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all"
            >
              View Open Positions
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            {/* <button
              onClick={() => setShowVideo(true)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all"
            >
              <Play className="h-4 w-4" />
              Watch Culture Video
            </button> */}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoUrl="https://www.youtube.com/watch?v=jNQXAC9IVRw"
      />
    </section>
  )
}

export default CareersHero