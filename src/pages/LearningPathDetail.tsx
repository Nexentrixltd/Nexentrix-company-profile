// src/pages/LearningPathDetail.tsx
import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import { Target, Clock, BookOpen, Award, Users, TrendingUp, ArrowRight, CheckCircle, Briefcase } from 'lucide-react'

const LearningPathDetail = () => {
  const navigate = useNavigate()

  const careerPaths = [
    {
      id: 'ai-engineer',
      title: 'AI Engineer',
      icon: Target,
      description: 'Master AI development from fundamentals to production deployment. Build and optimize machine learning models for real-world applications.',
      duration: '6 months',
      level: 'Intermediate to Advanced',
      courses: 6,
      projects: 8,
      skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Cloud Deployment', 'Model Optimization'],
      curriculum: [
        'AI Fundamentals & Python Programming',
        'Machine Learning Algorithms & Implementation',
        'Deep Learning & Neural Networks',
        'Computer Vision & Natural Language Processing',
        'MLOps & Production Deployment',
        'Capstone Project: End-to-End AI Solution',
      ],
      careerOutcomes: [
        'AI/ML Engineer at tech companies',
        'Research Scientist positions',
        'AI Consultant roles',
        'Average salary: $80k - $120k',
      ],
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      icon: TrendingUp,
      description: 'Extract insights from data and build predictive models. Learn statistical analysis, data visualization, and machine learning.',
      duration: '5 months',
      level: 'Beginner to Intermediate',
      courses: 5,
      projects: 6,
      skills: ['Python', 'R', 'SQL', 'Statistics', 'Data Visualization', 'Machine Learning'],
      curriculum: [
        'Python for Data Science',
        'Statistics & Probability',
        'Data Analysis & Visualization',
        'Machine Learning Fundamentals',
        'Business Intelligence & Analytics',
        'Capstone: Real-World Data Science Project',
      ],
      careerOutcomes: [
        'Data Scientist at enterprises',
        'Business Intelligence Analyst',
        'Data Analyst positions',
        'Average salary: $75k - $110k',
      ],
    },
    {
      id: 'ai-product-manager',
      title: 'AI Product Manager',
      icon: Briefcase,
      description: 'Lead AI product development and strategy. Bridge the gap between technical teams and business stakeholders.',
      duration: '4 months',
      level: 'Intermediate',
      courses: 4,
      projects: 5,
      skills: ['Product Strategy', 'AI Fundamentals', 'Agile Management', 'Data-Driven Decision Making', 'Stakeholder Communication'],
      curriculum: [
        'AI & ML Fundamentals for PMs',
        'Product Management Principles',
        'AI Ethics & Governance',
        'Business Intelligence with AI',
        'Capstone: AI Product Launch',
      ],
      careerOutcomes: [
        'AI Product Manager roles',
        'Technical Product Manager',
        'AI Strategy Consultant',
        'Average salary: $90k - $140k',
      ],
    },
  ]

  const whyChoosePath = [
    {
      icon: Target,
      title: 'Structured Learning',
      description: 'Follow a proven curriculum designed by industry experts with a clear progression from basics to advanced topics.',
    },
    {
      icon: Users,
      title: 'Mentorship Included',
      description: 'Get guidance from experienced professionals who have worked in your target role at leading companies.',
    },
    {
      icon: BookOpen,
      title: 'Hands-On Projects',
      description: 'Build a portfolio of real-world projects that demonstrate your skills to potential employers.',
    },
    {
      icon: Award,
      title: 'Career Support',
      description: 'Resume reviews, interview prep, and job placement assistance to help you land your dream role.',
    },
  ]

  const successStories = [
    {
      name: 'Amara Johnson',
      role: 'AI Engineer at TechCorp',
      path: 'AI Engineer Path',
      quote: 'The structured curriculum and hands-on projects helped me transition from software development to AI engineering in just 6 months.',
      salary: '+65% salary increase',
    },
    {
      name: 'Kwame Osei',
      role: 'Data Scientist at FinanceStartup',
      path: 'Data Scientist Path',
      quote: 'The mentorship program was invaluable. My mentor helped me navigate career decisions and prepare for technical interviews.',
      salary: 'Landed dream job',
    },
  ]

  return (
    <PageLayout>
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Target className="h-4 w-4 mr-2" />
                <span className="text-sm">Career Paths</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Choose Your AI Career Path
                <span className="text-primary block mt-2">Launch Your Dream Career</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Structured learning paths designed to take you from beginner to job-ready professional. 
                Each path includes mentorship, projects, and career support.
              </p>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        {careerPaths.map((path, idx) => {
          const Icon = path.icon
          return (
            <section key={path.id} className={`py-20 ${idx % 2 === 1 ? 'bg-secondary/30' : ''}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{path.title}</h2>
                    <p className="text-muted-foreground mb-6">{path.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-card border border-border">
                        <Clock className="h-5 w-5 text-primary mb-2" />
                        <div className="text-sm text-muted-foreground">Duration</div>
                        <div className="font-semibold">{path.duration}</div>
                      </div>
                      <div className="p-4 rounded-xl bg-card border border-border">
                        <BookOpen className="h-5 w-5 text-primary mb-2" />
                        <div className="text-sm text-muted-foreground">Courses</div>
                        <div className="font-semibold">{path.courses} courses</div>
                      </div>
                      <div className="p-4 rounded-xl bg-card border border-border">
                        <Award className="h-5 w-5 text-primary mb-2" />
                        <div className="text-sm text-muted-foreground">Level</div>
                        <div className="font-semibold">{path.level}</div>
                      </div>
                      <div className="p-4 rounded-xl bg-card border border-border">
                        <Target className="h-5 w-5 text-primary mb-2" />
                        <div className="text-sm text-muted-foreground">Projects</div>
                        <div className="font-semibold">{path.projects} projects</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Skills You'll Master</h3>
                      <div className="flex flex-wrap gap-2">
                        {path.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="px-3 py-1 rounded-full bg-primary/10 text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => navigate('/enroll')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
                      Enroll in This Path
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Curriculum
                      </h3>
                      <ul className="space-y-3">
                        {path.curriculum.map((item, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        Career Outcomes
                      </h3>
                      <ul className="space-y-3">
                        {path.careerOutcomes.map((outcome, oIdx) => (
                          <li key={oIdx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}

        {/* Why Choose a Learning Path */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose a Structured Learning Path?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get everything you need to transition into your target AI career
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChoosePath.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border text-center">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Student Success Stories
              </h2>
              <p className="text-muted-foreground">
                Real results from students who completed our learning paths
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successStories.map((story, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-card border border-border">
                  <div className="mb-4">
                    <div className="text-lg font-semibold">{story.name}</div>
                    <div className="text-sm text-muted-foreground">{story.role}</div>
                    <div className="text-sm text-primary mt-1">{story.path}</div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{story.quote}"</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
                    <TrendingUp className="h-4 w-4" />
                    {story.salary}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-8 md:p-12">
              <div className="relative text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Start Your AI Career?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Choose your path and start learning today. Get personalized guidance from our admissions team.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => navigate('/enroll')}
                    className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
                    Enroll Now
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                    Talk to Career Advisor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}

export default LearningPathDetail
