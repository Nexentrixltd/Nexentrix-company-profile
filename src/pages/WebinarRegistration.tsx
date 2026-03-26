// src/pages/WebinarRegistration.tsx
import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import { Video, Calendar, Clock, Users, Bell, Award, ArrowRight, CheckCircle, Play } from 'lucide-react'

const WebinarRegistration = () => {
  const navigate = useNavigate()

  const upcomingWebinars = [
    {
      id: 1,
      title: 'The Future of AI in Africa',
      speaker: 'Dr. Oluwaseun Adekunle',
      role: 'AI Research Director',
      company: 'African AI Institute',
      date: 'April 15, 2026',
      time: '2:00 PM WAT',
      duration: '90 minutes',
      attendees: 1240,
      image: '🌍',
      topics: [
        'AI adoption trends across African markets',
        'Local innovations in machine learning',
        'Building AI solutions for African challenges',
        'Career opportunities in African AI sector',
      ],
      level: 'All Levels',
      language: 'English',
    },
    {
      id: 2,
      title: 'Building Production-Ready ML Models',
      speaker: 'Prof. Amina Mohammed',
      role: 'Senior ML Engineer',
      company: 'TechGiant Inc.',
      date: 'April 18, 2026',
      time: '3:00 PM WAT',
      duration: '120 minutes',
      attendees: 890,
      image: '🤖',
      topics: [
        'Model training and optimization techniques',
        'Deployment strategies and MLOps',
        'Monitoring and maintaining ML systems',
        'Real-world case studies and challenges',
      ],
      level: 'Intermediate',
      language: 'English',
    },
    {
      id: 3,
      title: 'AI Ethics & Responsible Development',
      speaker: 'Dr. Fatima Hassan',
      role: 'AI Ethics Researcher',
      company: 'AI Ethics Foundation',
      date: 'April 22, 2026',
      time: '1:00 PM WAT',
      duration: '60 minutes',
      attendees: 560,
      image: '⚖️',
      topics: [
        'Ethical considerations in AI development',
        'Bias detection and mitigation strategies',
        'Privacy and data protection in AI',
        'Responsible AI frameworks and guidelines',
      ],
      level: 'Beginner',
      language: 'English',
    },
  ]

  const pastWebinars = [
    {
      title: 'Introduction to Deep Learning',
      views: 3200,
      rating: 4.9,
      duration: '2 hours',
    },
    {
      title: 'Natural Language Processing',
      views: 2800,
      rating: 4.8,
      duration: '90 min',
    },
    {
      title: 'Computer Vision Fundamentals',
      views: 2500,
      rating: 4.9,
      duration: '2 hours',
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Learn from Experts',
      description: 'Industry leaders and researchers share their knowledge and experience',
    },
    {
      icon: Play,
      title: 'Live Q&A Sessions',
      description: 'Ask questions and get answers directly from speakers',
    },
    {
      icon: Award,
      title: 'Certificates',
      description: 'Earn attendance certificates for participated webinars',
    },
    {
      icon: Bell,
      title: 'Recording Access',
      description: 'Registered participants get lifetime access to recordings',
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
                <Video className="h-4 w-4 mr-2" />
                <span className="text-sm">Live Webinars</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Join Live AI Webinars
                <span className="text-primary block mt-2">Learn From Industry Experts</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Free live sessions with AI leaders, researchers, and practitioners. 
                Interactive Q&A, networking, and lifetime access to recordings.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Upcoming Webinars
                </h2>
                <p className="text-muted-foreground">
                  Register now to secure your spot
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              {upcomingWebinars.map((webinar) => (
                <div
                  key={webinar.id}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="text-5xl mb-4">{webinar.image}</div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {webinar.title}
                      </h3>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <span className="font-semibold text-foreground">{webinar.speaker}</span>
                          <span>•</span>
                          <span>{webinar.role} at {webinar.company}</span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            {webinar.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            {webinar.time} ({webinar.duration})
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            {webinar.attendees.toLocaleString()} registered
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">What You'll Learn</h4>
                        <ul className="space-y-2">
                          {webinar.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                          {webinar.level}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-secondary text-sm">
                          {webinar.language}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                          Free
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <button 
                        onClick={() => navigate('/contact')}
                        className="w-full mb-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
                        Register Now
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => navigate('/contact')}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                        <Bell className="h-4 w-4" />
                        Get Reminder
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Attend Our Webinars?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                More than just watching - engage, learn, and grow your network
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border text-center">
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

        {/* Past Webinars */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Past Webinar Recordings
              </h2>
              <p className="text-muted-foreground">
                Access our library of recorded webinars anytime
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastWebinars.map((webinar, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                    <Play className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{webinar.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {webinar.views.toLocaleString()} views
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4 text-yellow-500" />
                      {webinar.rating}/5
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    Duration: {webinar.duration}
                  </div>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="w-full px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-all text-sm font-medium">
                    Watch Recording
                  </button>
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
                  Never Miss a Webinar
                </h2>
                <p className="text-muted-foreground mb-8">
                  Subscribe to get notified about upcoming webinars, exclusive content, and special events.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
                    <Bell className="h-4 w-4" />
                    Subscribe for Updates
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => navigate('/academy')}
                    className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                    Explore Courses
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

export default WebinarRegistration
