// src/components/sections/products/ComparisonTable.tsx
import { Check, X, Sparkles, GraduationCap, CreditCard } from 'lucide-react'

const features = [
  { name: 'AI-Powered Analytics', lumina: true, academy: false, topup: false },
  { name: 'Real-time Processing', lumina: true, academy: true, topup: true },
  { name: 'Mobile App', lumina: false, academy: true, topup: true },
  { name: 'API Access', lumina: true, academy: false, topup: true },
  { name: 'Enterprise Support', lumina: true, academy: false, topup: true },
  { name: 'Certification', lumina: false, academy: true, topup: false },
  { name: 'Rewards Program', lumina: false, academy: false, topup: true },
  { name: 'Free Trial', lumina: true, academy: true, topup: true },
]

const ComparisonTable = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compare Our Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect solution for your needs
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-semibold">Feature</th>
                <th className="text-center p-4">
                  <div className="flex flex-col items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span>Lumina AI</span>
                  </div>
                </th>
                <th className="text-center p-4">
                  <div className="flex flex-col items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span>Academy</span>
                  </div>
                </th>
                <th className="text-center p-4">
                  <div className="flex flex-col items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <span>Top-Up</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-secondary/30 transition-colors">
                  <td className="p-4 font-medium">{feature.name}</td>
                  <td className="text-center p-4">
                    {feature.lumina ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="text-center p-4">
                    {feature.academy ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="text-center p-4">
                    {feature.topup ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default ComparisonTable