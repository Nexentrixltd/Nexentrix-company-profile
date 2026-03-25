// src/components/sections/blog/TrendingTopics.tsx
import { TrendingUp, Flame, ArrowRight } from 'lucide-react'

const trendingTopics = [
  { name: 'Generative AI', posts: 12, trend: '+45%' },
  { name: 'AI in Healthcare', posts: 8, trend: '+32%' },
  { name: 'Machine Learning', posts: 15, trend: '+28%' },
  { name: 'AI Ethics', posts: 6, trend: '+67%' },
  { name: 'Data Science', posts: 10, trend: '+23%' },
  { name: 'Computer Vision', posts: 5, trend: '+41%' },
]

const TrendingTopics = () => {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border sticky top-24">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="h-5 w-5 text-orange-500" />
        <h3 className="font-semibold">Trending Topics</h3>
      </div>
      
      <div className="space-y-3">
        {trendingTopics.map((topic, idx) => (
          <button
            key={idx}
            className="w-full group flex items-center justify-between p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="h-3 w-3 text-primary" />
              <span className="text-sm">{topic.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">{topic.posts} posts</span>
              <span className="text-xs text-green-800">{topic.trend}</span>
              <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default TrendingTopics