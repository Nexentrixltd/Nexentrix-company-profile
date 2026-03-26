// src/pages/ServerError.tsx
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import { RefreshCw, Home, Mail, AlertTriangle, Clock, Shield } from 'lucide-react'
import { useState, useEffect } from 'react'

const Error500 = () => {
  const [countdown, setCountdown] = useState(10)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [errorRef] = useState(() => `NX-500-${Math.random().toString(36).substring(2, 8).toUpperCase()}`)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      window.location.reload()
    }, 500)
  }

  return (
    <PageLayout intensity={0.4} particleCount={400}>
      <main className="min-h-[70vh] flex items-center justify-center py-24">
        <div className="max-w-2xl mx-auto text-center px-4">
          {/* 500 Animation */}
          <div className="relative mb-8">
            <div className="text-8xl md:text-9xl font-bold text-red-500/20">500</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl md:text-7xl animate-pulse">⚠️</div>
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Server Error
          </h1>
          
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Something went wrong on our end. Our team has been notified and we're working to fix it.
          </p>
          
          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Auto Refresh</span>
              </div>
              <p className="text-2xl font-bold text-primary">
                {countdown > 0 ? `${countdown}s` : 'Now'}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Page will refresh automatically
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Status</span>
              </div>
              <p className="text-sm font-medium text-yellow-500">Investigating</p>
              <p className="text-xs text-muted-foreground mt-1">
                Incident reported
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Impact</span>
              </div>
              <p className="text-sm font-medium">Partial outage</p>
              <p className="text-xs text-muted-foreground mt-1">
                Some services affected
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Try Again'}
            </button>
            
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl font-medium hover:bg-secondary transition-all"
            >
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </div>
          
          {/* Contact Support */}
          <div className="p-4 rounded-xl bg-secondary/30 border border-border">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="text-left">
                <p className="text-sm font-medium mb-1">Still having issues?</p>
                <p className="text-xs text-muted-foreground">
                  Our support team is ready to help
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 hover:bg-primary/10 transition-all text-sm"
              >
                <Mail className="h-4 w-4" />
                Contact Support
              </Link>
            </div>
          </div>
          
          {/* Error Reference */}
          <p className="mt-8 text-xs text-muted-foreground">
            Error Reference: {errorRef}
          </p>
        </div>
      </main>
    </PageLayout>
  )
}

export default Error500