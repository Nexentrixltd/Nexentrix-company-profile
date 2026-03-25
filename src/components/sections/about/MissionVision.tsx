// src/components/sections/about/MissionVision.tsx
import { Target, Eye, Rocket, Heart } from 'lucide-react'

const MissionVision = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To democratize artificial intelligence across Africa by providing accessible, 
                scalable, and impactful AI solutions that empower businesses, educate minds, 
                and transform communities.
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-primary">
                  <Rocket className="h-4 w-4" />
                  <span className="text-sm">Driving innovation since 2022</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vision Card */}
          <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become Africa's premier AI technology ecosystem, recognized globally for 
                innovative solutions that solve real-world problems and create lasting impact 
                across industries and communities.
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-primary">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm">Building for impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision