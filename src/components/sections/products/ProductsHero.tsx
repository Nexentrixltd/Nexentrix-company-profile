// src/components/sections/products/ProductsHero.tsx
import { Sparkles, GraduationCap, CreditCard } from 'lucide-react'

const ProductsHero = () => {
  const categories = [
    { icon: Sparkles, name: 'AI Solutions', count: '3 products' },
    { icon: GraduationCap, name: 'Education', count: '50+ courses' },
    { icon: CreditCard, name: 'Fintech', count: '1 platform' },
  ]

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className=" badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm">Our Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            AI-Powered Products
            <span className="text-primary block mt-2">Built for Africa</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Discover our suite of intelligent solutions designed to transform healthcare, 
            education, and financial services across the continent.
          </p>
          
          {/* Category Chips */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, idx) => {
              const Icon = cat.icon
              return (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-all">
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{cat.name}</span>
                  <span className="text-xs text-muted-foreground">{cat.count}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsHero