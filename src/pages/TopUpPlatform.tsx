// src/pages/TopUpPlatform.tsx
import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import { Smartphone, Zap, Wallet, RefreshCw, Shield, TrendingUp, ArrowRight, Check, Phone, Tv, Lightbulb, Wifi } from 'lucide-react'

const TopUpPlatform = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: Zap,
      title: 'Instant Transactions',
      description: 'Lightning-fast processing ensures your airtime and data are delivered within seconds.',
    },
    {
      icon: Wallet,
      title: 'Multiple Payment Options',
      description: 'Pay with cards, mobile money, bank transfers, or crypto - whatever works for you.',
    },
    {
      icon: RefreshCw,
      title: 'Auto-Renewal',
      description: 'Never run out of airtime again with smart auto-renewal and balance alerts.',
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Your transactions are protected with enterprise-level encryption and fraud detection.',
    },
    {
      icon: TrendingUp,
      title: 'Rewards Program',
      description: 'Earn cashback, points, and exclusive bonuses on every transaction you make.',
    },
    {
      icon: Phone,
      title: 'Multi-Network Support',
      description: 'Support for all major mobile networks across 8+ African countries.',
    },
  ]

  const services = [
    {
      icon: Phone,
      title: 'Airtime Top-Up',
      description: 'Instant airtime for all major networks',
      networks: ['MTN', 'Airtel', 'Vodacom', '9mobile'],
    },
    {
      icon: Wifi,
      title: 'Data Bundles',
      description: 'Affordable data plans for every need',
      networks: ['Daily', 'Weekly', 'Monthly', 'Custom'],
    },
    {
      icon: Tv,
      title: 'TV Subscriptions',
      description: 'Renew your favorite channels',
      networks: ['DStv', 'GOtv', 'StarTimes', 'Showmax'],
    },
    {
      icon: Lightbulb,
      title: 'Bills Payment',
      description: 'Pay electricity, water, and more',
      networks: ['Electricity', 'Water', 'Internet', 'Waste'],
    },
  ]

  const benefits = [
    'Zero hidden fees',
    '99.9% uptime guarantee',
    '24/7 customer support',
    'Instant refunds on failed transactions',
    'Cashback on every purchase',
    'Support for 100+ billers',
  ]

  return (
    <PageLayout>
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Smartphone className="h-4 w-4 mr-2" />
                <span className="text-sm">Fintech Innovation</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Top-Up Platform
                <span className="text-primary block mt-2">Everything in One Place</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                The easiest way to buy airtime, data, pay bills, and manage subscriptions 
                across Africa. Fast, secure, and rewarding.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => navigate('/contact')}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
                  Get Started Now
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => window.open('https://apps.apple.com', '_blank')}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                  Download on iOS
                </button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                  { value: '100k+', label: 'Active Users' },
                  { value: '5+', label: 'Networks' },
                  { value: '99.9%', label: 'Uptime' },
                  { value: '8', label: 'Countries' },
                ].map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-card border border-border">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our Platform?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built for convenience, security, and value
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                All Your Needs, One Platform
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From airtime to electricity bills, we've got you covered
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.networks.map((network, nIdx) => (
                        <span key={nIdx} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {network}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits & CTA */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Smart Way to Pay
                  <span className="text-primary block mt-2">Save Time & Money</span>
                </h2>
                <ul className="space-y-3 mb-6">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
                    Start Saving Today
                  </button>
                  <button 
                    onClick={() => navigate('/documentation')}
                    className="px-6 py-2 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                    API Documentation
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4">Available on All Devices</h3>
                  <p className="text-muted-foreground mb-6">
                    Access your account from web, iOS, Android, or USSD. Pay anytime, anywhere.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-card border border-border text-center">
                      <div className="text-lg font-bold text-primary">Web App</div>
                      <div className="text-xs text-muted-foreground">Desktop & Mobile</div>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border text-center">
                      <div className="text-lg font-bold text-primary">Mobile App</div>
                      <div className="text-xs text-muted-foreground">iOS & Android</div>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border text-center">
                      <div className="text-lg font-bold text-primary">USSD</div>
                      <div className="text-xs text-muted-foreground">*123*456#</div>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border text-center">
                      <div className="text-lg font-bold text-primary">API</div>
                      <div className="text-xs text-muted-foreground">For Developers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-8 md:p-12">
              <div className="relative text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join 100,000+ Happy Users
                </h2>
                <p className="text-muted-foreground mb-8">
                  Start enjoying fast, secure, and rewarding transactions today.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
                    Create Free Account
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => navigate('/products')}
                    className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                    View All Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}

export default TopUpPlatform
