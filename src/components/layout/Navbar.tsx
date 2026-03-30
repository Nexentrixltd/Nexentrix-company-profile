// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'

interface NavbarProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Academy', href: '/academy' },
  { name: 'Contact', href: '/contact' },
]

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={`${import.meta.env.BASE_URL}NEXIUS FAVICON.png`}
              alt="Nexentrix logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-foreground">Nexentrix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary border-b-2 border-primary pb-0.5'
                      : 'text-muted-foreground hover:text-primary hover:border-b-2 hover:border-primary hover:pb-0.5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 active:scale-95 active:bg-secondary/70 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="hidden md:inline-flex px-5 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 active:scale-95 active:bg-primary/80 transition-all"
            >
              Get Started
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-secondary hover:bg-secondary/80 active:scale-95 transition-all"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                navigate('/contact')
                setIsMobileMenuOpen(false)
              }}
              className="w-full mt-4 px-5 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 active:scale-95 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar