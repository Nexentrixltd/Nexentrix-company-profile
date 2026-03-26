// src/components/sections/blog/AuthorSpotlight.tsx
// import { Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react'

const authors = [
  {
    name: 'Dr. Oluwaseun Adekunle',
    role: 'CEO & Founder',
    bio: 'AI researcher with 10+ years experience in machine learning and African tech ecosystems.',
    avatar: '👨‍💻',
    posts: 24,
    social: { twitter: '#', linkedin: '#', email: 'seun@nexentrix.com' },
  },
  {
    name: 'Dr. Amina Mohammed',
    role: 'Chief Technology Officer',
    bio: 'Former lead AI engineer at Google, passionate about ethical AI development.',
    avatar: '👩‍💻',
    posts: 18,
    social: { twitter: '#', linkedin: '#', email: 'amina@nexentrix.com' },
  },
  {
    name: 'Kofi Mensah',
    role: 'Head of Product',
    bio: 'Product leader specializing in AI-first solutions for emerging markets.',
    avatar: '👨‍💼',
    posts: 12,
    social: { twitter: '#', linkedin: '#', email: 'kofi@nexentrix.com' },
  },
]

const AuthorSpotlight = () => {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <h3 className="font-semibold mb-4">Featured Authors</h3>
      
      <div className="space-y-4">
        {authors.map((author, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-lg">
              {author.avatar}
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">{author.name}</h4>
              <p className="text-xs text-muted-foreground">{author.role}</p>
              <p className="text-xs text-primary mt-1">{author.posts} articles</p>
            </div>
            <button className="text-xs text-primary hover:underline">View</button>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-center text-sm text-primary hover:underline">
        View All Authors
      </button>
    </div>
  )
}

export default AuthorSpotlight