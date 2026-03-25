// src/components/sections/products/IntegrationSection.tsx
import { Database, Cloud, Shield, Zap, Code, Globe } from 'lucide-react'

const integrations = [
  { icon: Database, name: 'AWS', type: 'Cloud Infrastructure' },
  { icon: Cloud, name: 'Google Cloud', type: 'AI/ML Tools' },
  { icon: Shield, name: 'Azure', type: 'Enterprise Security' },
  { icon: Zap, name: 'Stripe', type: 'Payments' },
  { icon: Code, name: 'REST API', type: 'Custom Integration' },
  { icon: Globe, name: 'Webhooks', type: 'Real-time Events' },
]

const IntegrationSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm">Seamless Integration</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect with Your Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our products integrate seamlessly with your existing tools and workflows
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {integrations.map((integration, idx) => {
            const Icon = integration.icon
            return (
              <div
                key={idx}
                className="p-4 text-center rounded-xl bg-card border border-border hover:border-primary/50 hover:-translate-y-1 transition-all"
              >
                <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold text-sm">{integration.name}</div>
                <div className="text-xs text-muted-foreground">{integration.type}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default IntegrationSection