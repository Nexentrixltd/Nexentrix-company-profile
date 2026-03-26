// src/components/sections/academy/InstructorSpotlight.tsx
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { Users, BookOpen } from 'lucide-react'

const instructors = [
  {
    name: 'Dr. Oluwaseun Adekunle',
    role: 'Lead AI Instructor',
    bio: 'AI researcher with 10+ years experience in machine learning and African tech ecosystems.',
    expertise: ['Deep Learning', 'Computer Vision', 'NLP'],
    students: 2840,
    courses: 4,
    image: '👨‍🏫',
    social: { linkedin: '#', twitter: '#', email: 'seun@nexentrix.com' },
  },
  {
    name: 'Prof. Amina Mohammed',
    role: 'Machine Learning Expert',
    bio: 'Former lead AI engineer at Google, passionate about ethical AI development.',
    expertise: ['ML Algorithms', 'TensorFlow', 'PyTorch'],
    students: 2150,
    courses: 3,
    image: '👩‍🏫',
    social: { linkedin: '#', twitter: '#', email: 'amina@nexentrix.com' },
  },
  {
    name: 'Kofi Mensah',
    role: 'Data Science Specialist',
    bio: 'Product leader specializing in AI-first solutions for emerging markets.',
    expertise: ['Data Science', 'Analytics', 'Visualization'],
    students: 1780,
    courses: 3,
    image: '👨‍💻',
    social: { linkedin: '#', twitter: '#', email: 'kofi@nexentrix.com' },
  },
]

const InstructorSpotlight = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm">Expert Instructors</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn from Industry Experts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            World-class instructors with real-world experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-2xl">
                  {instructor.image}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{instructor.name}</h3>
                  <p className="text-primary text-sm">{instructor.role}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">{instructor.bio}</p>
              
              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {instructor.expertise.map((exp, eIdx) => (
                  <span key={eIdx} className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                    {exp}
                  </span>
                ))}
              </div>
              
              {/* Stats */}
              <div className="flex justify-between text-sm text-muted-foreground mb-4 pt-4 border-t border-border">
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>{instructor.students} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  <span>{instructor.courses} courses</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a
                  href={instructor.social.linkedin || '#'}
                  aria-label={`${instructor.name} on LinkedIn`}
                  title={`${instructor.name} on LinkedIn`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
                >
                  <FiLinkedin className="h-4 w-4" />
                </a>
                <a
                  href={instructor.social.twitter || '#'}
                  aria-label={`${instructor.name} on Twitter`}
                  title={`${instructor.name} on Twitter`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
                >
                  <FiTwitter className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${instructor.social.email}`}
                  aria-label={`Email ${instructor.name}`}
                  title={`Email ${instructor.name}`}
                  className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
                >
                  <FiMail className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstructorSpotlight