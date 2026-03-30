// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}NEXIUS FAVICON.png`}
                alt="Nexentrix logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold">Nexentrix</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              AI-powered solutions, education, and automation for Africa and beyond.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/1KAPY3koe9/"
                aria-label="Nexentrix on Facebook"
                title="Nexentrix on Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://x.com/nexentrix"
                aria-label="Nexentrix on Twitter"
                title="Nexentrix on Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://www.instagram.com/nexentrix.ltd?igsh=bGZpdHdsOGtsYW5t"
                aria-label="Nexentrix on Instagram"
                title="Nexentrix on Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://linkedin.com/company/nexentrix"
                aria-label="Nexentrix on LinkedIn"
                title="Nexentrix on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://github.com/Nexentrix"
                aria-label="Nexentrix on GitHub"
                title="Nexentrix on GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </div>
          
          {/* Products Column */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products#lumina" className="text-muted-foreground hover:text-white hover:bg-primary hover:rounded-md hover:px-1 hover:-translate-x-0.5 transition-all">Lumina AI</Link></li>
              <li><Link to="/academy" className="text-muted-foreground hover:text-white hover:bg-primary hover:rounded-md hover:px-1 hover:-translate-x-0.5 transition-all">Nexentrix Academy</Link></li>
              <li><Link to="/products#topup" className="text-muted-foreground hover:text-white hover:bg-primary hover:rounded-md hover:px-1 hover:-translate-x-0.5 transition-all">Top-Up Platform</Link></li>
              <li><Link to="/products#enterprise" className="text-muted-foreground hover:text-white hover:bg-primary hover:rounded-md hover:px-1 hover:-translate-x-0.5 transition-all">Enterprise Solutions</Link></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="text-muted-foreground hover:text-white hover:bg-primary hover:rounded-md hover:px-1 hover:-translate-x-0.5 transition-all">About Us</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-white hover:bg-primary hover:rounded-md hover:px-1 hover:-translate-x-0.5 transition-all">Careers</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-white hover:bg-primary hover:rounded-md hover:px-1 hover:-translate-x-0.5 transition-all">Blog</Link></li>
              <li><Link to="/academy" className="text-muted-foreground hover:text-white hover:bg-primary hover:rounded-md hover:px-1 hover:-translate-x-0.5 transition-all">Academy</Link></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <FiMail size={14} />
                <a href="mailto:info.nexentrixltd@gmail.com" className="text-muted-foreground hover:text-white hover:bg-primary hover:rounded-md hover:px-1 hover:-translate-x-0.5 transition-all">
                  info.nexentrixltd@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone size={14} />
                <a href="tel:+2349110468788" className="text-muted-foreground hover:text-white hover:bg-primary hover:rounded-md hover:px-1 hover:-translate-x-0.5 transition-all">
                  +234(0)9110468788
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone size={14} />
                <a href="tel:+2349133300572" className="text-muted-foreground hover:text-white hover:bg-primary hover:rounded-md hover:px-1 hover:-translate-x-0.5 transition-all">
                  +234(0)9133300572
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin size={14} />
                <span>FCT, Abuja Nigeria</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nexentrix Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="text-muted-foreground hover:text-white hover:bg-primary hover:rounded-md hover:px-1 hover:-translate-x-0.5 transition-all">Privacy Policy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-white hover:bg-primary hover:rounded-md hover:px-1 hover:-translate-x-0.5 transition-all">Terms of Service</Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-white hover:bg-primary hover:rounded-md hover:px-1 hover:-translate-x-0.5 transition-all">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer