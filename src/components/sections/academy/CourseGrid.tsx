// src/components/sections/academy/CourseGrid.tsx
import { Clock, Users, Star, ArrowRight, BookOpen, Video } from 'lucide-react'

interface Course {
  id: number
  title: string
  description: string
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  students: number
  rating: number
  lessons: number
  image: string
}

const courses: Course[] = [
  {
    id: 1,
    title: 'AI Fundamentals',
    description: 'Learn the core concepts of artificial intelligence and machine learning.',
    category: 'fundamentals',
    level: 'Beginner',
    duration: '4 weeks',
    students: 2840,
    rating: 4.8,
    lessons: 24,
    image: '🤖',
  },
  {
    id: 2,
    title: 'Machine Learning Mastery',
    description: 'Build and deploy ML models with real-world projects.',
    category: 'machine-learning',
    level: 'Intermediate',
    duration: '8 weeks',
    students: 1850,
    rating: 4.9,
    lessons: 48,
    image: '📊',
  },
  {
    id: 3,
    title: 'Deep Learning Specialization',
    description: 'Master neural networks, CNNs, and RNNs with TensorFlow.',
    category: 'deep-learning',
    level: 'Advanced',
    duration: '12 weeks',
    students: 1250,
    rating: 4.9,
    lessons: 72,
    image: '🧠',
  },
  {
    id: 4,
    title: 'Data Science with Python',
    description: 'Analyze data, visualize insights, and build predictive models.',
    category: 'data-science',
    level: 'Intermediate',
    duration: '6 weeks',
    students: 2100,
    rating: 4.7,
    lessons: 36,
    image: '🐍',
  },
  {
    id: 5,
    title: 'AI Ethics & Governance',
    description: 'Understand responsible AI development and ethical frameworks.',
    category: 'ethics',
    level: 'Beginner',
    duration: '3 weeks',
    students: 980,
    rating: 4.8,
    lessons: 18,
    image: '⚖️',
  },
  {
    id: 6,
    title: 'Python for AI',
    description: 'Essential programming skills for AI development.',
    category: 'programming',
    level: 'Beginner',
    duration: '4 weeks',
    students: 3150,
    rating: 4.8,
    lessons: 28,
    image: '💻',
  },
  {
    id: 7,
    title: 'Natural Language Processing',
    description: 'Build chatbots, sentiment analyzers, and language models.',
    category: 'machine-learning',
    level: 'Advanced',
    duration: '8 weeks',
    students: 1420,
    rating: 4.9,
    lessons: 42,
    image: '📝',
  },
  {
    id: 8,
    title: 'Computer Vision',
    description: 'Master image recognition, object detection, and facial recognition.',
    category: 'deep-learning',
    level: 'Advanced',
    duration: '10 weeks',
    students: 1180,
    rating: 4.8,
    lessons: 56,
    image: '👁️',
  },
  {
    id: 9,
    title: 'Business Intelligence with AI',
    description: 'Leverage AI for business analytics and decision making.',
    category: 'data-science',
    level: 'Intermediate',
    duration: '6 weeks',
    students: 890,
    rating: 4.7,
    lessons: 32,
    image: '📈',
  },
]

interface CourseGridProps {
  activeCategory: string
}

const CourseGrid = ({ activeCategory }: CourseGridProps) => {
  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory)

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Beginner': return 'bg-green-500/20 text-green-500'
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-500'
      case 'Advanced': return 'bg-red-500/20 text-red-500'
      default: return 'bg-secondary text-muted-foreground'
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCourses.map((course) => (
        <div
          key={course.id}
          className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2"
        >
          {/* Course Image/Icon */}
          <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-5xl">
            {course.image}
          </div>
          
          <div className="p-5">
            {/* Level Badge */}
            <div className="flex justify-between items-start mb-3">
              <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(course.level)}`}>
                {course.level}
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium">{course.rating}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {course.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {course.description}
            </p>
            
            {/* Course Metrics */}
            <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Video className="h-3 w-3" />
                <span>{course.lessons} lessons</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>{course.students.toLocaleString()}</span>
              </div>
            </div>
            
            <button className="w-full group/btn inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-primary/30 hover:bg-primary/10 transition-all">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">Enroll Now</span>
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CourseGrid