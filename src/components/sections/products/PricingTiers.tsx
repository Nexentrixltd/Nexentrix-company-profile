// src/components/sections/products/PricingTiers.tsx
import { useNavigate } from 'react-router-dom'
import { Check, Sparkles, } from 'lucide-react'

const pricing = [
  {
    product: 'Lumina AI',
    icon: Sparkles,
    tiers: [
      { name: 'Starter', price: 'Free', features: ['Basic Analytics', 'Up to 100 patients', 'Email Support'] },
      { name: 'Professional', price: '$299/mo', features: ['Advanced Analytics', 'Up to 1,000 patients', 'Priority Support', 'API Access'] },
      { name: 'Enterprise', price: 'Custom', features: ['Unlimited Patients', 'Dedicated Support', 'Custom Integration', 'SLA Guarantee'] },
    ],
  },
]

const PricingTiers = () => {
  const navigate = useNavigate()

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Flexible Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing[0].tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border ${
                idx === 1 ? 'border-primary bg-primary/5' : 'border-border bg-card'
              } hover:-translate-y-2 transition-all`}
            >
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-primary mb-4">{tier.price}</div>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => navigate('/contact')}
                className={`w-full py-2 rounded-lg font-medium transition-all ${
                idx === 1
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'border border-border hover:bg-secondary'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingTiers