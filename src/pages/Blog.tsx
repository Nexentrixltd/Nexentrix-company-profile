// src/pages/Blog.tsx
import { useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import BlogHero from '../components/sections/blog/BlogHero'
import CategoryFilters from '../components/sections/blog/CategoryFilters'
import BlogGrid from '../components/sections/blog/BlogGrid'
import NewsletterSignup from '../components/sections/blog/NewsletterSignup'
import TrendingTopics from '../components/sections/blog/TrendingTopics'
import AuthorSpotlight from '../components/sections/blog/AuthorSpotlight'

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <PageLayout>
      <main>
        <section id="blog-hero" data-shape="cone">
          <BlogHero />
        </section>

        <section id="blog-content" data-shape="grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-md px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Search articles"
              />
            </div>

            <CategoryFilters
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <BlogGrid activeCategory={activeCategory} searchQuery={searchQuery} />
              </div>
              <div className="space-y-6">
                <TrendingTopics />
                <AuthorSpotlight />
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}

export default Blog