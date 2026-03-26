// src/components/sections/blog/FeaturedPost.tsx
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'

interface FeaturedPostProps {
  post: {
    id: number
    title: string
    excerpt: string
    category: string
    author: string
    authorRole: string
    date: string
    readTime: string
    image: string
  }
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Article</h2>
          <p className="text-muted-foreground">Hand-picked insights from our experts</p>
        </div>
        
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-6 md:p-8 hover:border-primary/50 transition-all hover:-translate-y-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium w-fit">
                {post.category}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground">{post.excerpt}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <button className="inline-flex items-center gap-2 text-primary font-medium group/btn">
                Read Full Article
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="hidden md:flex justify-center">
              <div className="text-8xl">{post.image}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPost