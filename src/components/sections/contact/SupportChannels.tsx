// src/components/sections/contact/SupportChannels.tsx
import { Headphones, MessageCircle, Mail, Zap, Shield, ChevronRight } from 'lucide-react'

const supportChannels = [
  {
    icon: Headphones,
    title: '24/7 Technical Support',
    description: 'Our support team is available around the clock to help with technical issues.',
    availability: '24/7',
    responseTime: '< 2 hours',
    priority: 'Critical issues',
    color: 'from-blue-500/20',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support agents directly from your dashboard.',
    availability: 'Mon-Fri, 9am-6pm',
    responseTime: '< 5 minutes',
    priority: 'General inquiries',
    color: 'from-green-500/20',
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email and we\'ll get back to you within 24 hours.',
    availability: '24/7',
    responseTime: '< 24 hours',
    priority: 'Non-urgent issues',
    color: 'from-orange-500/20',
  },
]

const SupportChannels = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Headphones className="h-4 w-4 mr-2" />
            <span className="text-sm">Support Channels</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Can We Help?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the best way to get support based on your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportChannels.map((channel, idx) => {
            const Icon = channel.icon
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${channel.color} bg-primary/10 mb-4`}>
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{channel.description}</p>
                
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="font-medium">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="font-medium text-green-500">{channel.responseTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Best For:</span>
                    <span className="font-medium">{channel.priority}</span>
                  </div>
                </div>
                
                <button className="mt-4 w-full inline-flex items-center justify-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
                  Get Support
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )
          })}
        </div>
        
        {/* Premium Support Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-primary/20">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm">Enterprise clients get priority support with 4-hour response time</span>
            <Shield className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportChannels