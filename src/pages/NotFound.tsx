// src/pages/NotFound.tsx
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import { Search, Home, ArrowLeft, BookOpen, Compass, Mail } from 'lucide-react'

const NotFound = () => {
  const suggestions = [
    { icon: Home, text: 'Go to Homepage', href: '/' },
    { icon: BookOpen, text: 'Browse Blog', href: '/blog' },
    { icon: Compass, text: 'Explore Products', href: '/products' },
    { icon: Mail, text: 'Contact Support', href: '/contact' },
  ]

  return (
    <PageLayout>
      <main className="min-h-[70vh] flex items-center justify-center py-24">
        <div className="max-w-2xl mx-auto text-center px-4">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-8xl md:text-9xl font-bold text-primary/20">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl md:text-7xl">🔍</div>
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Page Not Found
          </h1>
          
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for articles, products, or help..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {suggestions.map((item, idx) => {
              const Icon = item.icon
              return (
                <Link
                  key={idx}
                  to={item.href}
                  className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    {item.text}
                  </span>
                </Link>
              )
            })}
          </div>
          
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl font-medium hover:bg-secondary transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
          
          {/* Help Text */}
          <p className="mt-8 text-xs text-muted-foreground">
            If you believe this is a mistake,{' '}
            <Link to="/contact" className="text-primary hover:underline">
              contact our support team
            </Link>
          </p>
        </div>
      </main>
    </PageLayout>
  )
}

export default NotFound