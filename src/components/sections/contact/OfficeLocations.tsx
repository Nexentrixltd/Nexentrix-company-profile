// src/components/sections/contact/OfficeLocations.tsx
import { Clock, Phone, Mail, Building } from 'lucide-react'

const offices = [
  {
    city: 'Lagos, Nigeria',
    address: '123 AI Avenue, Victoria Island',
    phone: '+234 123 456 7890',
    email: 'lagos@nexentrix.com',
    hours: 'Mon-Fri: 9am - 6pm',
    image: '🌍',
    isHeadquarters: true,
  },
  {
    city: 'Accra, Ghana',
    address: '45 Tech Hub, Cantonments',
    phone: '+233 123 456 789',
    email: 'accra@nexentrix.com',
    hours: 'Mon-Fri: 9am - 5pm',
    image: '🌍',
    isHeadquarters: false,
  },
  {
    city: 'Nairobi, Kenya',
    address: '78 Innovation Center, Westlands',
    phone: '+254 123 456 789',
    email: 'nairobi@nexentrix.com',
    hours: 'Mon-Fri: 9am - 5pm',
    image: '🌍',
    isHeadquarters: false,
  },
  {
    city: 'Cape Town, South Africa',
    address: '12 Silicon Street, Gardens',
    phone: '+27 123 456 789',
    email: 'capetown@nexentrix.com',
    hours: 'Mon-Fri: 9am - 5pm',
    image: '🌍',
    isHeadquarters: false,
  },
]

const OfficeLocations = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Building className="h-4 w-4 mr-2" />
            <span className="text-sm">Global Presence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Offices
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're growing across Africa to better serve our clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((office, idx) => (
            <div
              key={idx}
              className={`relative p-6 rounded-2xl bg-card border ${
                office.isHeadquarters
                  ? 'border-primary/50 shadow-lg shadow-primary/10'
                  : 'border-border'
              } hover:border-primary/50 transition-all hover:-translate-y-2`}
            >
              {office.isHeadquarters && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs">
                  Headquarters
                </div>
              )}
              
              <div className="text-4xl mb-3">{office.image}</div>
              <h3 className="text-xl font-bold mb-1">{office.city}</h3>
              <p className="text-sm text-muted-foreground mb-4">{office.address}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 text-primary" />
                  <a href={`tel:${office.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 text-primary" />
                  <a href={`mailto:${office.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 text-primary" />
                  <span className="text-muted-foreground">{office.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfficeLocations