// src/components/sections/careers/WhyJoinUs.tsx
import { 
  Heart, 
  GraduationCap, 
  Globe, 
  Coffee, 
  Users, 
  Zap, 
  Home, 
  Trophy
} from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance for you and your family, plus mental health support.',
    color: 'from-red-500/20',
  },
  {
    icon: GraduationCap,
    title: 'Learning Budget',
    description: '$2,000 annual budget for courses, conferences, and certifications.',
    color: 'from-blue-500/20',
  },
  {
    icon: Globe,
    title: 'Remote-First',
    description: 'Work from anywhere with flexible hours and home office setup stipend.',
    color: 'from-green-500/20',
  },
  {
    icon: Coffee,
    title: 'Wellness Perks',
    description: 'Monthly wellness stipend for gym, meditation apps, or hobbies.',
    color: 'from-orange-500/20',
  },
  {
    icon: Users,
    title: 'Team Retreats',
    description: 'Annual company retreats to connect and collaborate in person.',
    color: 'from-purple-500/20',
  },
  {
    icon: Zap,
    title: 'Stock Options',
    description: 'Equity in the company — we all share in our success.',
    color: 'from-yellow-500/20',
  },
  {
    icon: Home,
    title: 'Home Office',
    description: 'One-time $1,000 stipend for your home office setup.',
    color: 'from-teal-500/20',
  },
  {
    icon: Trophy,
    title: 'Performance Bonuses',
    description: 'Quarterly bonuses tied to individual and company performance.',
    color: 'from-pink-500/20',
  },
]

const WhyJoinUs = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Heart className="h-4 w-4 mr-2" />
            <span className="text-sm">Why Join Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefits That Matter
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We take care of our team so you can focus on doing your best work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} bg-primary/10 mb-4`}>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyJoinUs