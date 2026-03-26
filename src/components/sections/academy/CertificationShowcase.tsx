// src/components/sections/academy/CertificationShowcase.tsx
import { Award, CheckCircle, Users, Briefcase, TrendingUp, Globe } from 'lucide-react'

const CertificationShowcase = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Award className="h-4 w-4 mr-2" />
            <span className="text-sm">Get Certified</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry-Recognized Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcase your skills with credentials that employers trust
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Certificate Preview */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 text-center">
            <Award className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Professional Certificate</h3>
            <p className="text-muted-foreground mb-4">
              Earn verifiable certificates upon course completion
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Verified by Blockchain</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4 text-primary" />
                <span>Globally Recognized</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Benefits */}
          <div className="space-y-4">
            {[
              { icon: Users, text: 'Trusted by 100+ employers', desc: 'Including Fortune 500 companies' },
              { icon: Briefcase, text: 'Career advancement', desc: 'Boost your earning potential' },
              { icon: TrendingUp, text: 'Share on LinkedIn', desc: 'One-click verification' },
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <Icon className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">{benefit.text}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificationShowcase