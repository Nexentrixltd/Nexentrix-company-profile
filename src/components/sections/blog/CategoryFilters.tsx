import { Sparkles, Briefcase, GraduationCap, TrendingUp, Users, Newspaper } from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Posts', icon: Newspaper, count: 24 },
  { id: 'ai-trends', name: 'AI Trends', icon: TrendingUp, count: 8 },
  { id: 'product-updates', name: 'Product Updates', icon: Sparkles, count: 6 },
  { id: 'academy', name: 'Academy', icon: GraduationCap, count: 5 },
  { id: 'case-studies', name: 'Case Studies', icon: Briefcase, count: 3 },
  { id: 'community', name: 'Community', icon: Users, count: 2 },
]

interface CategoryFiltersProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const CategoryFilters = ({ activeCategory, onCategoryChange }: CategoryFiltersProps) => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => {
          const Icon = category.icon
          const isActive = activeCategory === category.id
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border hover:border-primary/50 hover:bg-primary/5'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm font-medium">{category.name}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                isActive
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

export default CategoryFilters