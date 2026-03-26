// src/components/sections/academy/LearningPaths.tsx
import { useNavigate } from 'react-router-dom'
import { Target, Briefcase, Rocket } from 'lucide-react'

const paths = [
  {
    icon: Target,
    title: 'AI Engineer',
    description: 'Build and deploy AI models for production environments.',
    courses: ['AI Fundamentals', 'Machine Learning', 'Deep Learning', 'MLOps'],
    duration: '6 months',
    jobs: ['AI Engineer', 'ML Engineer', 'AI Developer'],
    salary: '$80k - $120k',
  },
  {
    icon: Briefcase,
    title: 'Data Scientist',
    description: 'Extract insights and build predictive models from data.',
    courses: ['Python for AI', 'Data Science', 'Machine Learning', 'Statistics'],
    duration: '5 months',
    jobs: ['Data Scientist', 'Data Analyst', 'BI Analyst'],
    salary: '$75k - $110k',
  },
  {
    icon: Rocket,
    title: 'AI Product Manager',
    description: 'Lead AI product development and strategy.',
    courses: ['AI Fundamentals', 'AI Ethics', 'Product Management', 'Business Intelligence'],
    duration: '4 months',
    jobs: ['AI Product Manager', 'Technical PM', 'AI Consultant'],
    salary: '$90k - $140k',
  },
]

const LearningPaths = () => {
  const navigate = useNavigate()

  const handleViewPath = () => {
    navigate('/learning-paths')
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Target className="h-4 w-4 mr-2" />
            <span className="text-sm">Career Paths</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Structured programs designed to launch your AI career
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {paths.map((path, idx) => {
            const Icon = path.icon
            return (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
                  <p className="text-muted-foreground mb-4">{path.description}</p>
                  
                  {/* Courses */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.courses.map((course, cIdx) => (
                        <span key={cIdx} className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Career Info */}
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{path.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Potential Roles:</span>
                      <span className="font-medium">{path.jobs[0]}+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Avg. Salary:</span>
                      <span className="font-medium text-primary">{path.salary}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleViewPath}
                    className="w-full mt-6 px-4 py-2 rounded-lg border border-primary/30 hover:bg-primary/10 transition-all font-medium">
                    View Path
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LearningPaths