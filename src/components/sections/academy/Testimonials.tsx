// src/components/sections/academy/Testimonials.tsx
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Adaobi Okonkwo',
    role: 'AI Engineer at TechStars',
    course: 'Machine Learning Mastery',
    content: 'The ML Mastery course completely transformed my career. Within 3 months of completing it, I landed my dream job as an AI Engineer.',
    rating: 5,
    avatar: 'A',
    image: '👩‍💻',
  },
  {
    name: 'Michael Osei',
    role: 'Data Scientist',
    course: 'Data Science with Python',
    content: 'The hands-on projects and mentorship were invaluable. I went from zero coding experience to building production-ready ML models.',
    rating: 5,
    avatar: 'M',
    image: '👨‍💻',
  },
  {
    name: 'Dr. Fatima Hassan',
    role: 'Healthcare AI Researcher',
    course: 'AI Fundamentals',
    content: 'Excellent curriculum with real-world applications. The instructors are incredibly knowledgeable and supportive.',
    rating: 5,
    avatar: 'F',
    image: '👩‍⚕️',
  },
  {
    name: 'James Kariuki',
    role: 'Startup Founder',
    course: 'AI Product Management',
    content: 'This course gave me the confidence to lead AI initiatives at my startup. Highly recommended!',
    rating: 4,
    avatar: 'J',
    image: '👨‍💼',
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
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real learners
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border shadow-xl">
            <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/20" />
            
            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < testimonials[current].rating
                      ? 'text-yellow-500 fill-yellow-500'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
              "{testimonials[current].content}"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-xl">
                {testimonials[current].image}
              </div>
              <div>
                <h4 className="font-semibold">{testimonials[current].name}</h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role} • {testimonials[current].course}
                </p>
              </div>
            </div>
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