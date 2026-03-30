// src/components/sections/careers/OpenPositions.tsx
import { useState } from 'react'
import { MapPin, Clock, Briefcase, ChevronRight, Search, Filter } from 'lucide-react'

interface Job {
  id: number
  title: string
  department: 'Engineering' | 'Product' | 'Sales' | 'Marketing' | 'Operations' | 'Education'
  location: 'Abuja' | 'Remote'
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  experience: 'Entry' | 'Mid' | 'Senior' | 'Lead'
  description: string
  postedDate: string
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Abuja',
    type: 'Full-time',
    experience: 'Senior',
    description: 'Lead development of AI models for Lumina AI healthcare platform. Experience with TensorFlow, PyTorch, and production ML systems required.',
    postedDate: '2026-03-15',
  },
  {
    id: 2,
    title: 'Machine Learning Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: 'Mid',
    description: 'Build and deploy ML models for various AI solutions. Strong Python skills and experience with scikit-learn required.',
    postedDate: '2026-03-12',
  },
  {
    id: 3,
    title: 'Product Manager - Lumina AI',
    department: 'Product',
    location: 'Abuja',
    type: 'Full-time',
    experience: 'Senior',
    description: 'Drive product strategy for our healthcare AI platform. Experience with B2B SaaS and healthcare tech preferred.',
    postedDate: '2026-03-10',
  },
  {
    id: 4,
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: 'Mid',
    description: 'Build beautiful, responsive interfaces for our products. Expertise in React, TypeScript, and Tailwind CSS required.',
    postedDate: '2026-03-08',
  },
  {
    id: 5,
    title: 'AI Curriculum Developer',
    department: 'Education',
    location: 'Abuja',
    type: 'Full-time',
    experience: 'Mid',
    description: 'Create engaging AI courses for Nexentrix Academy. Strong background in AI/ML and curriculum design.',
    postedDate: '2026-03-05',
  },
  {
    id: 6,
    title: 'Sales Development Representative',
    department: 'Sales',
    location: 'Abuja',
    type: 'Full-time',
    experience: 'Entry',
    description: 'Generate leads and qualify opportunities for enterprise sales. Excellent communication skills required.',
    postedDate: '2026-03-01',
  },
  {
    id: 7,
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    experience: 'Senior',
    description: 'Lead marketing strategy and campaigns. Experience with B2B tech marketing and content strategy.',
    postedDate: '2026-02-28',
  },
  {
    id: 8,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Abuja',
    type: 'Full-time',
    experience: 'Senior',
    description: 'Manage cloud infrastructure and CI/CD pipelines. AWS, Kubernetes, and Terraform expertise required.',
    postedDate: '2026-02-25',
  },
  {
    id: 9,
    title: 'Technical Writer',
    department: 'Operations',
    location: 'Remote',
    type: 'Contract',
    experience: 'Mid',
    description: 'Create documentation and technical content for our products. Strong writing skills and tech background.',
    postedDate: '2026-02-20',
  },
]

const departments = ['All', 'Engineering', 'Product', 'Sales', 'Marketing', 'Operations', 'Education']
const locations = ['All', 'Abuja', 'Remote']
const experienceLevels = ['All', 'Entry', 'Mid', 'Senior', 'Lead']

const OpenPositions = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [selectedExperience, setSelectedExperience] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  
  // Application form state
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    linkedin: '',
    coverLetter: '',
  })
  const [resume, setResume] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleApplicationChange = (field: string, value: string) => {
    setApplicationData(prev => ({ ...prev, [field]: value }))
  }

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file size (2MB max for email delivery)
      if (file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB for email delivery. Please compress your resume or use a smaller file.')
        return
      }
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload PDF, DOC, or DOCX files only')
        return
      }
      setResume(file)
    }
  }

  const validateApplication = (): boolean => {
    if (!applicationData.fullName.trim()) {
      alert('Please enter your full name')
      return false
    }
    if (!applicationData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicationData.email)) {
      alert('Please enter a valid email address')
      return false
    }
    if (!resume) {
      alert('Please upload your resume')
      return false
    }
    return true
  }

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateApplication() || !selectedJob) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const fileSizeKB = Math.round(resume!.size / 1024)
      
      const response = await fetch('https://formsubmit.co/ajax/info.nexentrixltd@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          '� NEXENTRIX CAREERS': '━━━━━━━━━━━━━━━━',
          '📋 Form Type': '💼 Career Application',
          '🎯 Position': selectedJob.title,
          '🏢 Department': selectedJob.department,
          '📍 Location': selectedJob.location,
          '⏰ Job Type': selectedJob.type,
          '---': '---',
          '👤 Applicant Name': applicationData.fullName,
          '📧 Email': applicationData.email,
          '🔗 LinkedIn': applicationData.linkedin || 'Not provided',
          '📄 Resume File': `${resume!.name} (${fileSizeKB} KB)`,
          '⚠️ Note': 'Request full resume during interview',
          '✍️ Cover Letter': applicationData.coverLetter || 'No cover letter provided',
          '🕐 Applied': new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' }),
          _subject: `🔶 [Nexentrix Careers] Application for ${selectedJob.title}`,
          _template: 'table',
          _captcha: 'false'
        })
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setApplicationData({
          fullName: '',
          email: '',
          linkedin: '',
          coverLetter: '',
        })
        setResume(null)
        // Close modal after 2 seconds
        setTimeout(() => {
          setSelectedJob(null)
          setSubmitStatus('idle')
        }, 2000)
      } else {
        throw new Error('Failed to submit application')
      }
    } catch (error) {
      console.error('Application submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setSelectedJob(null)
    setApplicationData({
      fullName: '',
      email: '',
      linkedin: '',
      coverLetter: '',
    })
    setResume(null)
    setSubmitStatus('idle')
  }

  const filteredJobs = jobs.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation
    const matchesExperience = selectedExperience === 'All' || job.experience === selectedExperience
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesDepartment && matchesLocation && matchesExperience && matchesSearch
  })

  const getExperienceColor = (level: string) => {
    switch(level) {
      case 'Entry': return 'bg-green-500/20 text-green-500'
      case 'Mid': return 'bg-blue-500/20 text-blue-500'
      case 'Senior': return 'bg-orange-500/20 text-orange-500'
      case 'Lead': return 'bg-purple-500/20 text-purple-500'
      default: return 'bg-secondary text-muted-foreground'
    }
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Briefcase className="h-4 w-4 mr-2" />
            <span className="text-sm">Open Roles</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find your place at Nexentrix and help us build the future of AI in Africa
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>Filters:</span>
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              aria-label="Filter by department"
              className="px-3 py-1 rounded-full bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              aria-label="Filter by location"
              className="px-3 py-1 rounded-full bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
            <select
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
              aria-label="Filter by experience level"
              className="px-3 py-1 rounded-full bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {experienceLevels.map(exp => (
                <option key={exp} value={exp}>{exp}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No positions found</h3>
              <p className="text-muted-foreground">Check back later for new opportunities</p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${getExperienceColor(job.experience)}`}>
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-primary/30 hover:bg-primary/10 transition-all text-sm font-medium"
                  >
                    Apply Now
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Job Application Modal */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="relative max-w-lg w-full bg-card rounded-2xl border border-border p-6 max-h-[90vh] overflow-y-auto">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-1 rounded-lg hover:bg-secondary"
              >
                ✕
              </button>
              
              <h3 className="text-2xl font-bold mb-2">{selectedJob.title}</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-sm text-primary">{selectedJob.department}</span>
                <span className="text-sm text-muted-foreground">{selectedJob.location}</span>
                <span className="text-sm text-muted-foreground">{selectedJob.type}</span>
              </div>
              <p className="text-muted-foreground mb-6">{selectedJob.description}</p>
              
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-sm">
                  ✓ Application submitted successfully! We'll review it and get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                  ✕ Failed to submit application. Please try again.
                </div>
              )}
              
              <form onSubmit={handleApplicationSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    aria-label="Full Name" 
                    value={applicationData.fullName}
                    onChange={(e) => handleApplicationChange('fullName', e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    aria-label="Email Address" 
                    value={applicationData.email}
                    onChange={(e) => handleApplicationChange('email', e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">LinkedIn Profile</label>
                  <input 
                    type="url" 
                    placeholder="https://linkedin.com/in/yourprofile" 
                    aria-label="LinkedIn Profile" 
                    value={applicationData.linkedin}
                    onChange={(e) => handleApplicationChange('linkedin', e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Resume/CV *</label>
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    aria-label="Resume upload" 
                    onChange={handleResumeChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50" 
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {resume ? `Selected: ${resume.name} (${Math.round(resume.size / 1024)} KB)` : 'PDF, DOC, or DOCX (max 2MB)'}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Cover Letter</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us why you're interested in this role..." 
                    aria-label="Cover Letter" 
                    value={applicationData.coverLetter}
                    onChange={(e) => handleApplicationChange('coverLetter', e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50" 
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default OpenPositions