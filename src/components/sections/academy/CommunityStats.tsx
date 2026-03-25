// src/components/sections/academy/CommunityStats.tsx
import { Users, MessageCircle, Award, Globe, TrendingUp, Zap } from 'lucide-react'

const CommunityStats = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Users className="h-4 w-4 mr-2" />
            <span className="text-sm">Join the Movement</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Thriving Community of Learners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect, collaborate, and grow with fellow AI enthusiasts
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Users, value: '10,000+', label: 'Active Students', trend: '+45%' },
            { icon: MessageCircle, value: '500+', label: 'Daily Discussions', trend: '+120%' },
            { icon: Award, value: '2,500+', label: 'Certificates Issued', trend: '+78%' },
            { icon: Globe, value: '8', label: 'African Countries', trend: 'Growing' },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="text-center p-6 rounded-2xl bg-card border border-border">
                <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-green-500">{stat.trend}</div>
              </div>
            )
          })}
        </div>
        
        {/* Community Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm">Join our Discord community of 5,000+ AI enthusiasts</span>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunityStats