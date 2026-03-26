// src/components/sections/contact/ContactHero.tsx
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowDown } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: ['hello@nexentrix.com', 'support@nexentrix.com'],
    action: 'mailto:hello@nexentrix.com',
    color: 'from-blue-500/20',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+234 123 456 7890', '+234 987 654 3210'],
    action: 'tel:+2341234567890',
    color: 'from-green-500/20',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Lagos, Nigeria', 'Accra, Ghana', 'Nairobi, Kenya'],
    action: '#',
    color: 'from-orange-500/20',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon-Fri: 9am - 6pm', 'Sat: 10am - 2pm', 'Sun: Closed'],
    action: '#',
    color: 'from-purple-500/20',
  },
]

const ContactHero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageCircle className="h-4 w-4 mr-2" />
            <span className="text-sm">Get in Touch</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Connect
            <span className="text-primary block mt-2">We'd Love to Hear From You</span>
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Have questions about our products, partnership opportunities, or just want to say hello? 
            Reach out to us through any of these channels.
          </p>
          
          <button 
            onClick={scrollToForm}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
            Send Us a Message
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            return (
              <a
                key={idx}
                href={info.action}
                className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2 cursor-pointer ${
                  info.action === '#' ? 'cursor-default' : ''
                }`}
                onClick={(e) => info.action === '#' && e.preventDefault()}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.color} bg-primary/10 mb-4`}>
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                {info.details.map((detail, dIdx) => (
                  <p key={dIdx} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactHero