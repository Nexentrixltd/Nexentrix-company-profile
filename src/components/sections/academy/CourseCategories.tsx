// src/components/sections/academy/CourseCategories.tsx
import { Brain, Code, Database, Shield, Bot, Sparkles, TrendingUp } from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Courses', icon: Sparkles, count: 9 },
  { id: 'fundamentals', name: 'AI Fundamentals', icon: Brain, count: 1 },
  { id: 'machine-learning', name: 'Machine Learning', icon: Bot, count: 2 },
  { id: 'deep-learning', name: 'Deep Learning', icon: TrendingUp, count: 2 },
  { id: 'data-science', name: 'Data Science', icon: Database, count: 2 },
  { id: 'ethics', name: 'AI Ethics', icon: Shield, count: 1 },
  { id: 'programming', name: 'Programming', icon: Code, count: 1 },
]

interface CourseCategoriesProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const CourseCategories = ({ activeCategory, onCategoryChange }: CourseCategoriesProps) => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border hover:border-primary/50 hover:bg-primary/5'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm font-medium">{category.name}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeCategory === category.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-secondary text-muted-foreground'
              }`}>
                {category.count}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CourseCategories