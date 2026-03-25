// src/components/sections/careers/LifeAtNexentrix.tsx
import { Users, Coffee, Laptop, PartyPopper, Trophy, Heart } from 'lucide-react'

const cultureMoments = [
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Cross-functional teams working together to solve complex problems.',
    image: '🤝',
    color: 'from-blue-500/20',
  },
  {
    icon: Coffee,
    title: 'Coffee Chats',
    description: 'Informal conversations that spark new ideas and connections.',
    image: '☕',
    color: 'from-orange-500/20',
  },
  {
    icon: Laptop,
    title: 'Remote Workspaces',
    description: 'Flexible work environment with top-tier equipment.',
    image: '💻',
    color: 'from-green-500/20',
  },
  {
    icon: PartyPopper,
    title: 'Celebrations',
    description: 'Marking milestones and achievements together.',
    image: '🎉',
    color: 'from-pink-500/20',
  },
  {
    icon: Trophy,
    title: 'Hackathons',
    description: 'Regular innovation sprints and creative challenges.',
    image: '🏆',
    color: 'from-yellow-500/20',
  },
  {
    icon: Heart,
    title: 'Community Impact',
    description: 'Giving back through volunteer programs.',
    image: '❤️',
    color: 'from-red-500/20',
  },
]

const LifeAtNexentrix = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Users className="h-4 w-4 mr-2" />
            <span className="text-sm">Life at Nexentrix</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More Than a Job
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe in creating an environment where people can thrive, grow, and do their best work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cultureMoments.map((moment, idx) => {
            const Icon = moment.icon
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2 text-center"
              >
                <div className={`badge inline-flex items-center justify-center gap-2 p-4 rounded-2xl bg-gradient-to-br ${moment.color} bg-primary/10 mb-4`}>
                  <div className="text-2xl">{moment.image}</div>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{moment.title}</h3>
                <p className="text-muted-foreground text-sm">{moment.description}</p>
              </div>
            )
          })}
        </div>
        
        {/* Culture Video Placeholder */}
        <div className="mt-12 relative rounded-2xl overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <button className="group flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary border-b-[12px] border-b-transparent ml-1" />
              </div>
              <span className="text-sm text-muted">Watch our culture video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LifeAtNexentrix