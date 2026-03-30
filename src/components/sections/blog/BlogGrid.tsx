// src/components/sections/blog/BlogGrid.tsx
import { Calendar, Clock, ArrowRight, Bookmark, Share2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface Article {
  id: number
  title: string
  excerpt: string
  category: string
  author: string
  authorAvatar: string
  date: string
  readTime: string
  image: string
  featured?: boolean
}

const articles: Article[] = [
  {
    id: 1,
    title: 'How Lumina AI is Revolutionizing Healthcare Diagnostics',
    excerpt: 'Learn how our AI-powered platform is helping doctors detect diseases earlier and more accurately across Africa.',
    category: 'Product Updates',
    author: 'Dr. Amina Mohammed',
    authorAvatar: '👩‍⚕️',
    date: 'March 12, 2026',
    readTime: '6 min read',
    image: '🏥',
  },
  {
    id: 2,
    title: 'The State of AI Education in Africa: 2026 Report',
    excerpt: 'An in-depth look at the growing demand for AI skills and how Nexentrix Academy is bridging the gap.',
    category: 'Academy',
    author: 'Kofi Mensah',
    authorAvatar: '👨‍🏫',
    date: 'March 10, 2026',
    readTime: '10 min read',
    image: '📚',
  },
  {
    id: 3,
    title: 'Building Ethical AI: Our Framework for Responsible Development',
    excerpt: 'A deep dive into our approach to ensuring AI systems are fair, transparent, and accountable.',
    category: 'AI Trends',
    author: 'Dr. Oluwaseun Adekunle',
    authorAvatar: '👨‍💻',
    date: 'March 8, 2026',
    readTime: '7 min read',
    image: '⚖️',
  },
  {
    id: 4,
    title: 'From Student to AI Engineer: Success Story from Our Academy',
    excerpt: 'Meet Adaobi, who went from complete beginner to landing a role as an AI Engineer at a top tech firm.',
    category: 'Community',
    author: 'Ngozi Okonkwo',
    authorAvatar: '👩‍🎓',
    date: 'March 5, 2026',
    readTime: '5 min read',
    image: '🌟',
  },
  {
    id: 5,
    title: 'Top 5 AI Trends to Watch in 2026',
    excerpt: 'From generative AI to edge computing, discover the trends that will shape the industry this year.',
    category: 'AI Trends',
    author: 'Michael Osei',
    authorAvatar: '📊',
    date: 'March 3, 2026',
    readTime: '8 min read',
    image: '📈',
  },
  {
    id: 6,
    title: 'How to Build a Career in AI: A Comprehensive Guide',
    excerpt: 'Everything you need to know about starting and advancing your career in artificial intelligence.',
    category: 'Academy',
    author: 'Prof. Amina Mohammed',
    authorAvatar: '👩‍🏫',
    date: 'February 28, 2026',
    readTime: '12 min read',
    image: '🚀',
  },
  {
    id: 7,
    title: 'Nexentrix Top-Up: Simplifying Digital Payments Across Africa',
    excerpt: 'How our platform is making it easier for millions to manage airtime, bills, and subscriptions.',
    category: 'Product Updates',
    author: 'James Kariuki',
    authorAvatar: '💳',
    date: 'February 25, 2026',
    readTime: '5 min read',
    image: '📱',
  },
  {
    id: 8,
    title: 'The Future of Work: AI as a Collaborative Partner',
    excerpt: 'Exploring how AI is augmenting human capabilities rather than replacing them.',
    category: 'Industry Trends',
    author: 'Dr. Oluwaseun Adekunle',
    authorAvatar: '🤝',
    date: 'February 20, 2026',
    readTime: '6 min read',
    image: '💼',
  },
  {
    id: 9,
    title: 'Meet Our Team: The Minds Behind Lumina AI',
    excerpt: 'Get to know the brilliant engineers and researchers building our healthcare platform.',
    category: 'Community',
    author: 'Adaobi Okonkwo',
    authorAvatar: '👥',
    date: 'February 15, 2026',
    readTime: '4 min read',
    image: '👨‍💻',
  },
]

interface BlogGridProps {
  activeCategory: string
  searchQuery?: string
}

const BlogGrid = ({ activeCategory, searchQuery = '' }: BlogGridProps) => {
  const navigate = useNavigate()
  const [savedPosts, setSavedPosts] = useState<number[]>(() => {
    const stored = localStorage.getItem('saved-blog-posts')
    if (stored) {
      try {
        return JSON.parse(stored)
      } catch {
        return []
      }
    }
    return []
  })
  const [copiedArticleId, setCopiedArticleId] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(6)

  useEffect(() => {
    localStorage.setItem('saved-blog-posts', JSON.stringify(savedPosts))
  }, [savedPosts])

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'all' || 
      article.category.toLowerCase().replace(/ /g, '-') === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const displayedArticles = filteredArticles.slice(0, visibleCount)
  const hasMore = visibleCount < filteredArticles.length

  const toggleSave = (id: number) => {
    setSavedPosts(prev => 
      prev.includes(id) ? prev.filter(postId => postId !== id) : [...prev, id]
    )
  }

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Product Updates': return 'bg-blue-500/20 text-blue-500'
      case 'AI Trends': return 'bg-purple-500/20 text-purple-500'
      case 'Academy': return 'bg-green-500/20 text-green-500'
      case 'Community': return 'bg-orange-500/20 text-orange-500'
      case 'Industry Trends': return 'bg-pink-500/20 text-pink-500'
      default: return 'bg-secondary text-muted-foreground'
    }
  }

  return (
    <div>
      {filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-semibold mb-2">No articles found</h3>
          <p className="text-muted-foreground">Try a different category or search term</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((article) => (
              <div
                key={article.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2"
              >
                {/* Article Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-5xl relative">
                  {article.image}
                  
                  {/* Save Button */}
                  <button
                    onClick={() => toggleSave(article.id)}
                    aria-label={savedPosts.includes(article.id) ? 'Unsave article' : 'Save article'}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-primary/80 transition-colors"
                  >
                    <Bookmark 
                      className={`h-4 w-4 ${savedPosts.includes(article.id) ? 'fill-primary text-primary' : 'text-white'}`}
                    />
                  </button>
                </div>
                
                <div className="p-5">
                  {/* Category Badge */}
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <button
                      onClick={async () => {
                        await navigator.clipboard.writeText(`${window.location.origin}/blog/${article.id}`)
                        setCopiedArticleId(article.id)
                        setTimeout(() => setCopiedArticleId(null), 2000)
                      }}
                      aria-label="Copy article link"
                      className="p-1 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <Share2 className="h-3 w-3 text-muted-foreground" />
                    </button>
                    {copiedArticleId === article.id && (
                      <span className="ml-2 text-xs text-primary">Copied!</span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs">
                      {article.authorAvatar}
                    </div>
                    <span className="text-xs text-muted-foreground">{article.author}</span>
                  </div>
                  
                  {/* Metadata */}
                  <div className="flex justify-between items-center text-xs text-muted-foreground pt-3 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => navigate(`/blog/${article.id}`)}
                    className="w-full mt-4 group/btn inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-primary/30 hover:bg-primary/10 transition-all"
                  >
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all"
              >
                Load More Articles
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default BlogGrid