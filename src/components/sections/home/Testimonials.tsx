// src/components/sections/home/Testimonials.tsx
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Adaobi Okonkwo',
    role: 'CTO, TechStars Africa',
    content: 'Nexentrix has transformed how we approach AI integration. Their Lumina AI platform reduced our diagnostic time by 60%.',
    avatar: 'A',
  },
  {
    name: 'Michael Osei',
    role: 'Founder, TechSpace Nigeria',
    content: 'The Academy provided my team with cutting-edge skills. Within 3 months, we built our first production AI model.',
    avatar: 'M',
  },
  {
    name: 'Dr. Fatima Hassan',
    role: 'Healthcare Director',
    content: 'Lumina AI is revolutionizing healthcare in Nigeria. Early detection rates have improved dramatically.',
    avatar: 'F',
  },
  {
    name: 'James Kariuki',
    role: 'Startup Founder',
    content: 'Best decision we made was partnering with Nexentrix. Their automation solutions saved us 200+ hours monthly.',
    avatar: 'J',
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses and professionals across Africa
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border shadow-xl">
            <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/20" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                {testimonials[current].avatar}
              </div>
              <div>
                <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              "{testimonials[current].content}"
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            title="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 p-2 rounded-full border border-border hover:bg-primary/10 transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            title="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 p-2 rounded-full border border-border hover:bg-primary/10 transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                title={`Go to testimonial ${idx + 1}`}
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

export default Testimonials