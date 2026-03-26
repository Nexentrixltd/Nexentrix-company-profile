// src/components/sections/contact/MapSection.tsx
import { MapPin, MessageSquare } from 'lucide-react'

const MapSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Find Us</h2>
          <p className="text-muted-foreground">
            Visit our headquarters in Lagos, Nigeria
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden border border-border">
          {/* Map Placeholder - Replace with actual map integration */}
          <div className="h-[400px] bg-gradient-to-br from-primary/20 to-primary/5 flex flex-col items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-2">Nexentrix Headquarters</h3>
              <p className="text-muted-foreground">123 AI Avenue, Victoria Island, Lagos, Nigeria</p>
              <p className="text-sm text-muted-foreground mt-2">
                📍 Interactive map integration coming soon
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <button 
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                  <MessageSquare className="h-4 w-4" />
                  Contact Us
                </button>
                <a 
                  href="https://maps.google.com/?q=Victoria+Island+Lagos+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-primary/30 hover:bg-primary/10 transition-all text-sm">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          
          {/* Optional: Add Google Maps iframe
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.123456789!2d3.456789!3d6.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMjQuMiJOIDPCsDI3JzI0LjIiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          ></iframe>
          */}
        </div>
      </div>
    </section>
  )
}

export default MapSection