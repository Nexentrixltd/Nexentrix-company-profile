// src/components/sections/careers/EmployeeTestimonials.tsx
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Adaobi Okonkwo',
    role: 'Senior AI Engineer',
    image: '👩‍💻',
    content: 'Working at Nexentrix has been transformative. The culture of innovation and collaboration is unmatched, and I\'m proud to be building solutions that actually make a difference in people\'s lives.',
    joined: '2026',
    quote: 'The best place I\'ve ever worked',
  },
  {
    name: 'Michael Osei',
    role: 'Product Manager',
    image: '👨‍💼',
    content: 'The autonomy and trust we have here is incredible. Everyone is empowered to take ownership and make decisions. It\'s rare to find a place where you can grow this fast.',
    joined: '2026',
    quote: 'Growth opportunities are endless',
  },
  {
    name: 'Ngozi Okonkwo',
    role: 'Head of Education',
    image: '👩‍🏫',
    content: 'Seeing the impact of Nexentrix Academy on students across Africa is what gets me excited to come to work every day. The mission-driven culture here is real.',
    joined: '2026',
    quote: 'Mission-driven and impactful',
  },
  {
    name: 'James Kariuki',
    role: 'Sales Lead',
    image: '👨‍💻',
    content: 'From day one, I felt welcomed and valued. The support from leadership and colleagues has been incredible. It\'s a place where you can truly be yourself.',
    joined: '2026',
    quote: 'Supportive and inclusive',
  },
]

const EmployeeTestimonials = () => {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm">Voices of Nexentrix</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Team Says
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the people who make Nexentrix what it is
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border shadow-xl">
            <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/20" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-3xl">
                {testimonials[current].image}
              </div>
              <div>
                <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
                <p className="text-sm text-primary">{testimonials[current].role}</p>
                <p className="text-xs text-muted-foreground">Joined {testimonials[current].joined}</p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-4">
              "{testimonials[current].content}"
            </p>
            
            <div className="pt-4 border-t border-border">
              <p className="text-sm italic text-primary">— {testimonials[current].quote}</p>
            </div>
          </div>
          
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 p-2 rounded-full border border-border hover:bg-primary/10 transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 p-2 rounded-full border border-border hover:bg-primary/10 transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === current ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmployeeTestimonials