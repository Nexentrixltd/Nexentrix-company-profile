// src/components/sections/blog/BlogHero.tsx
import { Calendar, Clock, User, ArrowRight, TrendingUp } from 'lucide-react'

const featuredPost = {
  id: 1,
  title: 'The Future of AI in Africa: Trends Shaping 2025 and Beyond',
  excerpt: 'From healthcare to agriculture, discover how artificial intelligence is transforming the African continent and creating unprecedented opportunities for innovation.',
  category: 'Industry Trends',
  author: 'Dr. Oluwaseun Adekunle',
  authorRole: 'CEO & Founder',
  date: 'March 15, 2024',
  readTime: '8 min read',
  image: '🌍',
  featured: true,
}

const BlogHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            <span className="text-sm">Insights & Updates</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            The Nexentrix Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, perspectives, and stories about AI innovation in Africa and beyond
          </p>
        </div>
        
        {/* Featured Post Card */}
        <div className="max-w-5xl mx-auto">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-6 md:p-8 hover:border-primary/50 transition-all hover:-translate-y-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Content */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    Featured Article
                  </span>
                  <span className="text-xs text-muted-foreground">{featuredPost.category}</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground">{featuredPost.excerpt}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <button className="inline-flex items-center gap-2 text-primary font-medium group/btn">
                  Read Article
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Right Side - Visual */}
              <div className="hidden md:flex justify-center">
                <div className="text-8xl">{featuredPost.image}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogHero