// src/pages/BlogPost.tsx
import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Heart, Link2 } from 'lucide-react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import NewsletterSignup from '../components/sections/blog/NewsletterSignup'
import AuthorSpotlight from '../components/sections/blog/AuthorSpotlight'
import TrendingTopics from '../components/sections/blog/TrendingTopics'

interface ArticleData {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  authorRole: string
  authorAvatar: string
  authorBio: string
  authorSocial: { twitter: string; linkedin: string; email: string }
  date: string
  readTime: string
  image: string
  coverImage: string
  tags: string[]
  relatedPosts: number[]
}

// Full article data with rich content
const articlesData: Record<string, ArticleData> = {
  '1': {
    id: 1,
    title: 'How Lumina AI is Revolutionizing Healthcare Diagnostics',
    excerpt: 'Learn how our AI-powered platform is helping doctors detect diseases earlier and more accurately across Africa.',
    content: `
      <p>Healthcare in Africa faces unique challenges: limited access to specialists, diagnostic delays, and resource constraints. Lumina AI was built to address these challenges head-on.</p>
      
      <h2>The Problem: Late Diagnosis</h2>
      <p>In many African countries, patients wait weeks or months for specialist consultations. By the time they receive a diagnosis, conditions have often progressed to advanced stages, reducing treatment options and survival rates.</p>
      
      <p>Our research shows that early detection can improve patient outcomes by up to 60%. But how do we bring specialist-level diagnostics to communities without specialists?</p>
      
      <h2>The Solution: AI-Powered Diagnostics</h2>
      <p>Lumina AI uses advanced machine learning algorithms trained on millions of medical images and patient records. Our platform can:</p>
      <ul>
        <li>Detect early signs of diseases from medical images with 98% accuracy</li>
        <li>Predict patient outcomes based on historical data</li>
        <li>Recommend personalized treatment plans</li>
        <li>Flag urgent cases for immediate specialist attention</li>
      </ul>
      
      <h2>Real-World Impact</h2>
      <p>Since launching in Lagos, we've partnered with 50+ hospitals and clinics. Here are some results:</p>
      <ul>
        <li>Average diagnosis time reduced from 14 days to 4 hours</li>
        <li>Early detection rates increased by 45%</li>
        <li>Patient satisfaction scores at 94%</li>
      </ul>
      
      <h2>What's Next</h2>
      <p>We're expanding to Ghana and Kenya in Q2 2024. Our team is also developing new models for pediatric care and maternal health monitoring.</p>
      
      <blockquote>
        "Lumina AI has transformed how we practice medicine. What used to take weeks now takes minutes."
        — Dr. Adebayo Ogunlesi, Chief of Medicine, Lagos University Teaching Hospital
      </blockquote>
      
      <p>Ready to learn more? Contact our team for a demo or visit our <a href="/products">products page</a>.</p>
    `,
    category: 'Product Updates',
    author: 'Dr. Amina Mohammed',
    authorRole: 'Chief Technology Officer',
    authorAvatar: '👩‍⚕️',
    authorBio: 'Dr. Amina Mohammed is the CTO of Nexentrix, leading the development of Lumina AI. She previously led AI research at Google and holds a PhD in Machine Learning from Stanford.',
    authorSocial: { twitter: '#', linkedin: '#', email: 'amina@nexentrix.com' },
    date: 'March 12, 2024',
    readTime: '6 min read',
    image: '🏥',
    coverImage: '🏥',
    tags: ['Healthcare', 'AI', 'Lumina AI', 'Innovation'],
    relatedPosts: [2, 3, 5],
  },
  '2': {
    id: 2,
    title: 'The State of AI Education in Africa: 2024 Report',
    excerpt: 'An in-depth look at the growing demand for AI skills and how Nexentrix Academy is bridging the gap.',
    content: `
      <p>Africa is experiencing a digital transformation, and artificial intelligence is at the heart of it. But there's a critical gap: the skills needed to build and deploy AI solutions aren't keeping pace with demand.</p>
      
      <h2>The Skills Gap</h2>
      <p>According to our research, there are 10x more AI job openings than qualified candidates across the continent. Companies are struggling to find talent, while thousands of potential students lack access to quality education.</p>
      
      <h2>Nexentrix Academy's Approach</h2>
      <p>We built Nexentrix Academy to democratize AI education. Our platform offers:</p>
      <ul>
        <li>Self-paced courses designed for African learners</li>
        <li>Real-world projects with local context</li>
        <li>Live mentorship from industry experts</li>
        <li>Career support and job placement assistance</li>
      </ul>
      
      <h2>2024 Impact Metrics</h2>
      <ul>
        <li>10,000+ students enrolled across 8 African countries</li>
        <li>85% graduation rate (industry average is 40%)</li>
        <li>500+ students placed in tech roles</li>
        <li>Average salary increase of 150% for graduates</li>
      </ul>
      
      <h2>Student Success Story</h2>
      <p>Meet Adaobi, a 24-year-old from Lagos who completed our Machine Learning course. Within three months, she landed a role as an AI Engineer at a leading fintech company. "The Academy gave me the skills and confidence to pursue my dream career," she says.</p>
      
      <h2>Looking Ahead</h2>
      <p>We're launching new courses in Generative AI and Computer Vision this quarter. We're also expanding our scholarship program to reach 500 underserved students across Africa.</p>
      
      <p>Ready to start your AI journey? <a href="/academy">Explore our courses</a>.</p>
    `,
    category: 'Academy',
    author: 'Kofi Mensah',
    authorRole: 'Head of Product',
    authorAvatar: '👨‍🏫',
    authorBio: 'Kofi Mensah leads product development at Nexentrix Academy. He has 8 years of experience in edtech and previously built learning platforms for universities across West Africa.',
    authorSocial: { twitter: '#', linkedin: '#', email: 'kofi@nexentrix.com' },
    date: 'March 10, 2024',
    readTime: '10 min read',
    image: '📚',
    coverImage: '📚',
    tags: ['Education', 'AI Skills', 'Nexentrix Academy', 'Africa'],
    relatedPosts: [1, 4, 6],
  },
  '3': {
    id: 3,
    title: 'Building Ethical AI: Our Framework for Responsible Development',
    excerpt: 'A deep dive into our approach to ensuring AI systems are fair, transparent, and accountable.',
    content: `
      <p>As AI becomes more powerful, the responsibility to build it ethically grows. At Nexentrix, we've developed a comprehensive framework for responsible AI development that guides everything we do.</p>
      
      <h2>Our Ethical Principles</h2>
      <ul>
        <li><strong>Fairness:</strong> AI systems must be free from bias and work equitably for all users</li>
        <li><strong>Transparency:</strong> We believe in explainable AI — users should understand how decisions are made</li>
        <li><strong>Accountability:</strong> Humans remain responsible for AI outcomes</li>
        <li><strong>Privacy:</strong> User data is protected with the highest security standards</li>
        <li><strong>Beneficence:</strong> AI should be used to benefit humanity, not harm it</li>
      </ul>
      
      <h2>Implementing the Framework</h2>
      <p>Our ethical framework isn't just theoretical. We've built it into our development process:</p>
      <ul>
        <li>Bias audits on all training data before model development</li>
        <li>Regular testing for disparate impact across demographic groups</li>
        <li>External ethics reviews by independent experts</li>
        <li>User feedback loops to identify and fix issues</li>
      </ul>
      
      <h2>Case Study: Lumina AI Bias Testing</h2>
      <p>When developing Lumina AI, we tested our models across 10,000 diverse medical images. We found that initial versions had 2% higher error rates for darker skin tones. Through targeted training data augmentation, we eliminated this gap entirely.</p>
      
      <h2>Continuous Improvement</h2>
      <p>Ethical AI isn't a one-time checklist. We continuously monitor our systems and update our approach as new challenges emerge. We also publish annual transparency reports detailing our progress.</p>
      
      <p>Interested in learning more? <a href="/contact">Contact our ethics team</a>.</p>
    `,
    category: 'AI Trends',
    author: 'Dr. Oluwaseun Adekunle',
    authorRole: 'CEO & Founder',
    authorAvatar: '👨‍💻',
    authorBio: 'Dr. Oluwaseun Adekunle is the founder and CEO of Nexentrix. He holds a PhD in AI Ethics from Oxford and has published extensively on responsible AI development.',
    authorSocial: { twitter: '#', linkedin: '#', email: 'seun@nexentrix.com' },
    date: 'March 8, 2024',
    readTime: '7 min read',
    image: '⚖️',
    coverImage: '⚖️',
    tags: ['Ethics', 'Responsible AI', 'Governance'],
    relatedPosts: [1, 5, 8],
  },
  // Additional articles...
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>()
  const [saved, setSaved] = useState(false)
  const [liked, setLiked] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'comments' | 'related'>('comments')
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([
    { id: 1, name: 'Adaobi Okonkwo', date: 'March 13, 2024', content: 'This is incredibly insightful! I had no idea AI could have such impact on healthcare in Africa.', avatar: 'A' },
    { id: 2, name: 'Michael Osei', date: 'March 13, 2024', content: 'The results with Lumina AI are impressive. When will it be available in Ghana?', avatar: 'M' },
  ])

  const article = id ? articlesData[id] : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const handleShare = async () => {
    const url = window.location.href
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.trim()) {
      setComments(prev => [...prev, {
        id: prev.length + 1,
        name: 'You',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: comment,
        avatar: '👤',
      }])
      setComment('')
    }
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Article not found</h2>
          <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
        </div>
      </div>
    )
  }

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Product Updates': return 'bg-blue-500/20 text-blue-500'
      case 'AI Trends': return 'bg-purple-500/20 text-purple-500'
      case 'Academy': return 'bg-green-500/20 text-green-500'
      case 'Community': return 'bg-orange-500/20 text-orange-500'
      default: return 'bg-secondary text-muted-foreground'
    }
  }

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Back to Blog</span>
        </Link>
        
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{article.title}</h1>
          
          {/* Author Info */}
          <div className="flex items-center justify-between py-4 border-y border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-xl">
                {article.authorAvatar}
              </div>
              <div>
                <p className="font-medium">{article.author}</p>
                <p className="text-xs text-muted-foreground">{article.authorRole}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSaved(!saved)}
                aria-label={saved ? 'Remove bookmark' : 'Bookmark article'}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <Bookmark className={`h-4 w-4 ${saved ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
              </button>
              <button
                onClick={() => setLiked(!liked)}
                aria-label={liked ? 'Unlike article' : 'Like article'}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <Heart className={`h-4 w-4 ${liked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
              </button>
              <div className="relative">
                <button
                  onClick={handleShare}
                  aria-label="Copy article link"
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Share2 className="h-4 w-4" />
                </button>
                {copied && (
                  <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-black text-white text-xs rounded-lg whitespace-nowrap">
                    Link copied!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Cover Image */}
        <div className="mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 h-64 flex items-center justify-center text-6xl">
          {article.coverImage}
        </div>
        
        {/* Article Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 pt-4 border-t border-border">
          {article.tags.map((tag: string, idx: number) => (
            <span key={idx} className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
        
        {/* Share Section */}
        <div className="bg-secondary/30 rounded-2xl p-6 mb-12">
          <h3 className="font-semibold mb-4">Share this article</h3>
          <div className="flex gap-3">
            <button aria-label="Share on Facebook" className="p-2 rounded-lg bg-blue-600/20 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
              <FaFacebookF className="h-5 w-5" />
            </button>
            <button aria-label="Share on Twitter" className="p-2 rounded-lg bg-sky-500/20 text-sky-500 hover:bg-sky-500 hover:text-white transition-all">
              <FaTwitter className="h-5 w-5" />
            </button>
            <button aria-label="Share on LinkedIn" className="p-2 rounded-lg bg-blue-700/20 text-blue-700 hover:bg-blue-700 hover:text-white transition-all">
              <FaLinkedinIn className="h-5 w-5" />
            </button>
            <button aria-label="Copy article link" className="p-2 rounded-lg bg-gray-600/20 text-gray-600 hover:bg-gray-600 hover:text-white transition-all">
              <Link2 className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Author Bio */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-12">
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-2xl flex-shrink-0">
              {article.authorAvatar}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{article.author}</h3>
              <p className="text-sm text-primary mb-2">{article.authorRole}</p>
              <p className="text-sm text-muted-foreground mb-3">{article.authorBio}</p>
              <div className="flex gap-2">
                <a href="#" className="text-xs text-muted-foreground hover:text-primary">Twitter</a>
                <a href="#" className="text-xs text-muted-foreground hover:text-primary">LinkedIn</a>
                <a href="#" className="text-xs text-muted-foreground hover:text-primary">All Articles</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Comments & Related Posts Tabs */}
        <div className="mb-12">
          <div className="flex gap-4 border-b border-border mb-6">
            <button
              onClick={() => setActiveTab('comments')}
              className={`pb-2 text-sm font-medium transition-colors ${
                activeTab === 'comments' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Comments ({comments.length})
            </button>
            <button
              onClick={() => setActiveTab('related')}
              className={`pb-2 text-sm font-medium transition-colors ${
                activeTab === 'related' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Related Posts
            </button>
          </div>
          
          {activeTab === 'comments' ? (
            <div>
              {/* Comment Form */}
              <form onSubmit={handleComment} className="mb-8">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                  placeholder="Leave a comment..."
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <button
                  type="submit"
                  className="mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all"
                >
                  Post Comment
                </button>
              </form>
              
              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm">
                      {comment.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{comment.name}</span>
                        <span className="text-xs text-muted-foreground">{comment.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {article.relatedPosts.map((postId: number) => {
                const relatedPost = articlesData[postId]
                if (!relatedPost) return null
                return (
                  <Link
                    key={postId}
                    to={`/blog/${postId}`}
                    className="block p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{relatedPost.image}</div>
                      <div>
                        <h4 className="font-medium hover:text-primary transition-colors">{relatedPost.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{relatedPost.date} • {relatedPost.readTime}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        {/* Related Sidebar */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-12">
          <TrendingTopics />
          <AuthorSpotlight />
        </div>
        
        {/* Newsletter */}
        <NewsletterSignup />
      </div>
    </main>
  )
}

export default BlogPost