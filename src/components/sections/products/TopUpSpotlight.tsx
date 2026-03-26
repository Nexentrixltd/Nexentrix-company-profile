// src/components/sections/products/TopUpSpotlight.tsx
import { useNavigate } from 'react-router-dom'
import { Smartphone, Zap, Wallet, RefreshCw, Shield, TrendingUp } from 'lucide-react'

const TopUpSpotlight = () => {
  const navigate = useNavigate()

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Smartphone className="h-4 w-4 mr-2" />
              <span className="text-sm">Fintech Solution</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Top-Up Platform
              <span className="text-primary block">Everything in One Place</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Seamless airtime top-up, bill payments, and subscription management for 
              users across Africa. Fast, secure, and rewarding.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, text: 'Instant Transactions' },
                { icon: Wallet, text: 'Multiple Payment Methods' },
                { icon: RefreshCw, text: 'Auto-renewal' },
                { icon: Shield, text: 'Bank-grade Security' },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-card border border-border">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                )
              })}
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div>
                <div className="text-2xl font-bold text-primary">100k+</div>
                <div className="text-xs text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground">Mobile Networks</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-xs text-muted-foreground">Uptime</div>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/products/top-up-platform')}
              className="inline-flex items-center px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
              Try Top-Up Now
            </button>
          </div>
          
          {/* Right Side - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Smartphone, title: 'Airtime', desc: 'All major networks' },
              { icon: Zap, title: 'Data Bundles', desc: 'Flexible plans' },
              { icon: Wallet, title: 'Bill Payments', desc: 'Electricity, TV, Water' },
              { icon: TrendingUp, title: 'Rewards', desc: 'Cashback & points' },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="p-4 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-all">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopUpSpotlight