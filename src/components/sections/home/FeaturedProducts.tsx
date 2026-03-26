// src/components/sections/home/FeaturedProducts.tsx
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Sparkles, GraduationCap, CreditCard } from 'lucide-react'

const products = [
  {
    icon: Sparkles,
    name: 'Lumina AI',
    description: 'Healthcare AI platform for predictive diagnostics and patient care optimization.',
    features: ['AI Diagnostics', 'Predictive Analytics', 'Patient Management'],
  },
  {
    icon: GraduationCap,
    name: 'Nexentrix Academy',
    description: 'Comprehensive AI learning platform with courses, webinars, and mentorship.',
    features: ['Expert Courses', 'Live Webinars', 'Community Access'],
  },
  {
    icon: CreditCard,
    name: 'Top-Up Platform',
    description: 'Seamless airtime, bill payments, and subscription management.',
    features: ['Instant Top-up', 'Bill Payments', 'Subscription Manager'],
  },
]

const FeaturedProducts = () => {
  const navigate = useNavigate()

  const handleLearnMore = () => {
    navigate('/products')
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-4 md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                Featured Products
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Innovative solutions designed to transform industries
              </p>
            </div>
            <div className="self-start md:self-center">
              <span className="badge bg-primary/90 text-primary-foreground">Top 3 picks</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent opacity-70" />
                <div className="relative bg-card bg-opacity-90 rounded-2xl">
                  {/* Simple primary color accent bar - no gradient */}
                  <div className="h-1 bg-primary" />
                  <div className="p-6">
                    {/* Icon with gradient color for emphasis */}
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-fuchsia-500 mb-4 shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={handleLearnMore}
                      className="group inline-flex items-center text-primary font-medium hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts