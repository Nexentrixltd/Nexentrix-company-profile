// src/App.tsx (with all routes)
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Academy from './pages/Academy'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import LuminaAI from './pages/LuminaAI'
import TopUpPlatform from './pages/TopUpPlatform'
import Documentation from './pages/Documentation'
import CourseEnrollment from './pages/CourseEnrollment'
import LearningPathDetail from './pages/LearningPathDetail'
import WebinarRegistration from './pages/WebinarRegistration'
import MentorshipApplication from './pages/MentorshipApplication'
import DEIReport from './pages/DEIReport'
import NotFound from './pages/NotFound'
import Error500 from './pages/Error500'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import ComingSoon from './pages/ComingSoon'
import { ArrowUp } from 'lucide-react'

class ErrorBoundary extends React.Component<React.PropsWithChildren<object>, { hasError: boolean }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Unhandled error in app:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <Error500 />
    }
    return this.props.children
  }
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'dark'
  })

  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <BrowserRouter basename="/Nexentrix-company-profile">
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />

        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/lumina-ai" element={<LuminaAI />} />
            <Route path="/products/top-up-platform" element={<TopUpPlatform />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/enroll" element={<CourseEnrollment />} />
            <Route path="/learning-paths" element={<LearningPathDetail />} />
            <Route path="/webinars" element={<WebinarRegistration />} />
            <Route path="/mentorship" element={<MentorshipApplication />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/dei-report" element={<DEIReport />} />
<Route path="/privacy" element={<PrivacyPolicy />} />
<Route path="/terms" element={<TermsOfService />} />
<Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/500" element={<Error500 />} />
            <Route path="*" element={<NotFound />} />
<Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>
        </ErrorBoundary>

        <Footer />

        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-2xl shadow-2xl hover:bg-primary/90 transition-all hover:scale-110 z-50 outline outline-2 outline-offset-2 outline-primary/80 dark:outline-primary/50 dark:bg-primary/80 dark:text-primary-foreground"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </button>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App