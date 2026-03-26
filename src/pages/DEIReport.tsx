// src/pages/DEIReport.tsx
import { useState } from 'react'
import { 
  Heart, Globe, Users, Shield, Target, TrendingUp, Award, 
  CheckCircle, ArrowRight, Download, Calendar, BarChart3 
} from 'lucide-react'
import PageLayout from '../components/layout/PageLayout'

const DEIReport = () => {
  const [activeYear, setActiveYear] = useState('2024')

  const metrics = [
    { 
      icon: Users, 
      title: 'Gender Diversity', 
      current: '45%', 
      previous: '38%', 
      description: 'Women in workforce',
      trend: '+7%'
    },
    { 
      icon: Globe, 
      title: 'Global Reach', 
      current: '8+', 
      previous: '6', 
      description: 'Countries represented',
      trend: '+2'
    },
    { 
      icon: Target, 
      title: 'Leadership Diversity', 
      current: '52%', 
      previous: '45%', 
      description: 'Diverse leadership team',
      trend: '+7%'
    },
    { 
      icon: TrendingUp, 
      title: 'Pay Equity', 
      current: '98%', 
      previous: '95%', 
      description: 'Gender pay parity',
      trend: '+3%'
    },
  ]

  const initiatives = [
    {
      title: 'Inclusive Hiring',
      description: 'Blind resume review, diverse interview panels, and skills-based assessments to remove bias from our hiring process.',
      icon: Users,
      status: 'Active',
      color: 'from-blue-500/20',
    },
    {
      title: 'Mentorship Programs',
      description: 'Dedicated mentorship for underrepresented groups with senior leaders as mentors.',
      icon: Heart,
      status: 'Active',
      color: 'from-pink-500/20',
    },
    {
      title: 'Pay Equity Reviews',
      description: 'Bi-annual compensation audits to ensure pay equity across all demographics.',
      icon: BarChart3,
      status: 'Active',
      color: 'from-green-500/20',
    },
    {
      title: 'Employee Resource Groups',
      description: 'Employee-led communities for women in tech, LGBTQ+, parents, and more.',
      icon: Shield,
      status: 'Active',
      color: 'from-purple-500/20',
    },
    {
      title: 'Learning & Development',
      description: 'Unconscious bias training, inclusive leadership workshops, and DEI education for all employees.',
      icon: Award,
      status: 'Active',
      color: 'from-orange-500/20',
    },
    {
      title: 'Flexible Work Policies',
      description: 'Remote work options, flexible hours, and parental leave policies that support diverse needs.',
      icon: Calendar,
      status: 'Active',
      color: 'from-teal-500/20',
    },
  ]

  const commitments = [
    'Achieve 50% gender representation by 2025',
    'Maintain pay equity above 95% across all demographics',
    'Increase representation of underrepresented minorities in leadership to 40% by 2026',
    'Provide 100+ hours of DEI training to every employee annually',
    'Partner with 10+ diversity-focused organizations for recruitment',
    'Publish transparent DEI metrics and progress reports twice yearly',
  ]

  const highlights = [
    {
      year: '2024',
      achievements: [
        'Achieved 45% women representation (up from 38% in 2023)',
        'Launched 5 Employee Resource Groups with 80% participation',
        'Implemented blind resume review for all technical positions',
        'Established DEI Council with representatives from all departments',
        'Provided unconscious bias training to 100% of leadership',
      ]
    },
    {
      year: '2023',
      achievements: [
        'Increased women in leadership to 52%',
        'Expanded recruitment to 3 new African countries',
        'Launched first annual DEI survey with 92% participation',
        'Implemented flexible parental leave policy (6 months)',
        'Created mentorship program for women in engineering',
      ]
    },
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Heart className="h-4 w-4 mr-2" />
              <span className="text-sm">Diversity, Equity & Inclusion</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building a More
              <span className="text-primary block mt-2">Inclusive Future</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              At Nexentrix, diversity isn't just a goal—it's our foundation. Our DEI report 
              showcases our commitment to building an equitable workplace where everyone can thrive.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
                <Download className="h-4 w-4" />
                Download Full Report
              </button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Last updated: March 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Progress in Numbers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent metrics that reflect our commitment to diversity and inclusion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center"
                >
                  <Icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">{metric.current}</div>
                  <div className="text-sm font-medium mb-2">{metric.title}</div>
                  <div className="text-xs text-muted-foreground mb-2">{metric.description}</div>
                  <div className="text-xs text-green-500 font-medium">{metric.trend} YoY</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* DEI Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our DEI Initiatives
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to create lasting change
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, idx) => {
              const Icon = initiative.icon
              return (
                <div 
                  key={idx}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2"
                >
                  <div className={`badge inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-br ${initiative.color} bg-primary/10 mb-4`}>
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{initiative.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500">
                      {initiative.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{initiative.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Commitments
              </h2>
              <p className="text-muted-foreground">
                Clear goals we're working toward to build a more equitable workplace
              </p>
            </div>
            
            <div className="space-y-4">
              {commitments.map((commitment, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Year-by-Year Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Year-by-Year Achievements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Track our progress over time
            </p>
          </div>
          
          {/* Year Selector */}
          <div className="flex justify-center gap-3 mb-10">
            {highlights.map((h) => (
              <button
                key={h.year}
                onClick={() => setActiveYear(h.year)}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${
                  activeYear === h.year
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border hover:border-primary/50'
                }`}
              >
                {h.year}
              </button>
            ))}
          </div>
          
          {/* Achievements */}
          <div className="max-w-3xl mx-auto">
            {highlights.find(h => h.year === activeYear)?.achievements.map((achievement, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 p-5 mb-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {idx + 1}
                </div>
                <p className="text-sm flex-1">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Us in Building an Inclusive Future
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our commitment to 
              diversity, equity, and inclusion.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.location.href = '/careers'}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all"
              >
                View Open Positions
                <ArrowRight className="h-4 w-4" />
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all"
              >
                Contact DEI Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default DEIReport
