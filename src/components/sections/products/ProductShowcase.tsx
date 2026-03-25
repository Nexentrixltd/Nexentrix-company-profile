// src/components/sections/products/ProductShowcase.tsx
import { Sparkles, GraduationCap, CreditCard, ArrowRight} from 'lucide-react'

const products = [
  {
    icon: Sparkles,
    name: 'Lumina AI',
    tagline: 'Intelligent Healthcare Platform',
    description: 'AI-powered diagnostic tools and predictive analytics for modern healthcare providers.',
    features: ['Predictive Diagnostics', 'Patient Analytics', 'Treatment Optimization'],
    metrics: ['98% accuracy', '50+ hospitals', '24/7 support'],
    color: 'from-blue-500/20 to-transparent',
    badge: 'Flagship',
  },
  {
    icon: GraduationCap,
    name: 'Nexentrix Academy',
    tagline: 'AI Learning Ecosystem',
    description: 'Comprehensive platform for AI education with hands-on projects and expert mentorship.',
    features: ['50+ Courses', 'Live Webinars', 'Project Portfolio', 'Certification'],
    metrics: ['10k+ students', '4.9 rating', '8 countries'],
    color: 'from-purple-500/20 to-transparent',
    badge: 'Popular',
  },
  {
    icon: CreditCard,
    name: 'Top-Up Platform',
    tagline: 'Seamless Payments Hub',
    description: 'One-stop platform for airtime, bills, and subscription management across Africa.',
    features: ['Instant Top-up', 'Bill Payments', 'Subscription Manager', 'Rewards Program'],
    metrics: ['100k+ users', '99.9% uptime', '5+ operators'],
    color: 'from-green-500/20 to-transparent',
    badge: 'New',
  },
]

const ProductShowcase = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => {
            const Icon = product.icon
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">
                    {product.badge}
                  </span>
                </div>
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative p-6">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                  <p className="text-primary text-sm mb-3">{product.tagline}</p>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, fIdx) => (
                        <span key={fIdx} className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                    {product.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-xs text-muted-foreground">{metric}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 w-full group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-primary/30 hover:bg-primary/10 transition-all">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase