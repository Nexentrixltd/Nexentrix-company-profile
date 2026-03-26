// src/pages/MentorshipApplication.tsx
import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import { MessageCircle, Users, Target, Calendar, Sparkles, Award, ArrowRight, CheckCircle, TrendingUp, Briefcase } from 'lucide-react'

const MentorshipApplication = () => {
  const navigate = useNavigate()

  const mentorshipBenefits = [
    {
      icon: MessageCircle,
      title: '1-on-1 Sessions',
      description: 'Weekly personalized sessions with experienced mentors tailored to your goals and learning pace.',
    },
    {
      icon: Target,
      title: 'Career Guidance',
      description: 'Get expert advice on career transitions, interview preparation, and professional development.',
    },
    {
      icon: Briefcase,
      title: 'Project Reviews',
      description: 'Detailed code reviews and project feedback to improve your technical skills and portfolio.',
    },
    {
      icon: TrendingUp,
      title: 'Resume & Portfolio',
      description: 'Professional help optimizing your resume, LinkedIn, and GitHub to attract top employers.',
    },
  ]

  const mentorProfiles = [
    {
      name: 'Dr. Kwame Nkrumah',
      role: 'Senior AI Engineer',
      company: 'Google AI',
      expertise: ['Machine Learning', 'Computer Vision', 'MLOps'],
      experience: '12+ years',
      students: 45,
      rating: 4.9,
      image: '👨🏿‍💻',
      bio: 'Former ML lead at major tech companies. Specialized in helping students transition into AI roles.',
    },
    {
      name: 'Amina Diallo',
      role: 'Data Science Manager',
      company: 'Microsoft',
      expertise: ['Data Science', 'Python', 'Statistics'],
      experience: '10+ years',
      students: 38,
      rating: 5.0,
      image: '👩🏿‍💼',
      bio: 'Passionate about data-driven decision making. Mentored 30+ successful data scientists.',
    },
    {
      name: 'Taiwo Adebayo',
      role: 'AI Product Manager',
      company: 'Meta',
      expertise: ['Product Strategy', 'AI Ethics', 'Business'],
      experience: '8+ years',
      students: 28,
      rating: 4.9,
      image: '👨🏿‍💼',
      bio: 'Led AI product launches at Fortune 500 companies. Expert in product-market fit and strategy.',
    },
  ]

  const programStructure = [
    {
      phase: 'Month 1-2',
      title: 'Foundation & Goal Setting',
      activities: [
        'Initial assessment and skills evaluation',
        'Define clear learning objectives and career goals',
        'Create personalized learning roadmap',
        'Weekly 1-hour mentorship sessions',
      ],
    },
    {
      phase: 'Month 3-4',
      title: 'Skill Development',
      activities: [
        'Hands-on project work with mentor guidance',
        'Code reviews and technical feedback',
        'Deep dives into specific technologies',
        'Portfolio building and optimization',
      ],
    },
    {
      phase: 'Month 5-6',
      title: 'Career Preparation',
      activities: [
        'Interview preparation and mock interviews',
        'Resume and LinkedIn optimization',
        'Networking strategies and connections',
        'Job search guidance and offer negotiation',
      ],
    },
  ]

  const successMetrics = [
    { value: '150+', label: 'Active Mentors', icon: Users },
    { value: '98%', label: 'Satisfaction Rate', icon: Sparkles },
    { value: '85%', label: 'Career Advancement', icon: TrendingUp },
    { value: '2,000+', label: 'Mentorship Hours', icon: Calendar },
  ]

  const applicationRequirements = [
    'Commitment to weekly sessions for 6 months',
    'Basic programming knowledge (Python preferred)',
    'Active participation in coursework and projects',
    'Clear career goals in AI/Data Science field',
    'Willingness to give and receive constructive feedback',
  ]

  const testimonials = [
    {
      name: 'Sarah Okafor',
      role: 'ML Engineer at Startup',
      quote: 'My mentor helped me transition from web development to ML engineering. The personalized guidance was invaluable in landing my dream job.',
      result: 'Landed job in 4 months',
    },
    {
      name: 'Chidi Okonkwo',
      role: 'Data Scientist at Bank',
      quote: 'The mentorship program gave me the confidence and skills to make a career pivot. My mentor\'s industry insights were game-changing.',
      result: '+50% salary increase',
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
                <MessageCircle className="h-4 w-4 mr-2" />
                <span className="text-sm">1-on-1 Mentorship</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get Expert AI Mentorship
                <span className="text-primary block mt-2">Personalized Guidance for Your Career</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Work one-on-one with experienced AI professionals. Get personalized guidance, 
                project reviews, and career coaching to accelerate your journey into AI.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => navigate('/contact')}
                  className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
                  Apply for Mentorship
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/academy')}
                  className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                  Browse Courses
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {successMetrics.map((metric, idx) => {
                const Icon = metric.icon
                return (
                  <div key={idx} className="text-center p-6 rounded-2xl bg-card border border-border">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What You Get with Mentorship
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive support to accelerate your AI career journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mentorshipBenefits.map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Meet Our Mentors */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our Expert Mentors
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Learn from professionals working at top tech companies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mentorProfiles.map((mentor, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                  <div className="text-5xl mb-4 text-center">{mentor.image}</div>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                    <div className="text-sm text-muted-foreground">{mentor.role}</div>
                    <div className="text-sm text-primary">{mentor.company}</div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 text-center">{mentor.bio}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-medium">{mentor.experience}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Students:</span>
                      <span className="font-medium">{mentor.students} mentored</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Rating:</span>
                      <span className="font-medium flex items-center gap-1">
                        <Award className="h-4 w-4 text-yellow-500" />
                        {mentor.rating}/5.0
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.expertise.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2 py-1 rounded-full bg-primary/10 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => navigate('/contact')}
                    className="w-full px-4 py-2 border border-primary/30 rounded-lg hover:bg-primary/10 transition-all text-sm font-medium">
                    Request This Mentor
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Structure */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                6-Month Program Structure
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Structured pathway from learning to career success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programStructure.map((phase, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border">
                  <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    {phase.phase}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                  <ul className="space-y-3">
                    {phase.activities.map((activity, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Application Requirements
              </h2>
              <p className="text-muted-foreground">
                What we look for in mentorship applicants
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-card border border-border">
              <ul className="space-y-4">
                {applicationRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Success Stories
              </h2>
              <p className="text-muted-foreground">
                How mentorship transformed their careers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-card border border-border">
                  <div className="mb-4">
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
                    <TrendingUp className="h-4 w-4" />
                    {testimonial.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-8 md:p-12">
              <div className="relative text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Apply for Mentorship?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Limited spots available each cohort. Apply now to work with expert mentors 
                  and accelerate your AI career journey.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
                    Submit Application
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => navigate('/learning-paths')}
                    className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                    View Learning Paths
                  </button>
                </div>
                
                <p className="mt-6 text-sm text-muted-foreground">
                  Applications reviewed within 5 business days • Next cohort starts May 1, 2026
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}

export default MentorshipApplication
