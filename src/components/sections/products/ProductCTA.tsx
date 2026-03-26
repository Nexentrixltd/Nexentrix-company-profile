// src/components/sections/products/ProductCTA.tsx
import { useNavigate } from 'react-router-dom'
import { ArrowRight, MessageCircle, Calendar, FileText } from 'lucide-react'

const ProductCTA = () => {
  const navigate = useNavigate()

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-8 md:p-12">
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a demo with our product experts and discover how Nexentrix solutions 
              can help you achieve your goals.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate('/contact')}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
                <Calendar className="h-4 w-4" />
                Schedule Demo
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                <MessageCircle className="h-4 w-4" />
                Contact Sales
              </button>
              <button 
                onClick={() => navigate('/documentation')}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                <FileText className="h-4 w-4" />
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCTA