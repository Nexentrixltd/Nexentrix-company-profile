// src/components/sections/careers/OpenPositions.tsx
import { useState } from 'react'
import { MapPin, Clock, Briefcase, ChevronRight, Search, Filter } from 'lucide-react'

interface Job {
  id: number
  title: string
  department: 'Engineering' | 'Product' | 'Sales' | 'Marketing' | 'Operations' | 'Education'
  location: 'Lagos' | 'Accra' | 'Nairobi' | 'Remote'
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
    location: 'Lagos',
    type: 'Full-time',
    experience: 'Senior',
    description: 'Lead development of AI models for Lumina AI healthcare platform. Experience with TensorFlow, PyTorch, and production ML systems required.',
    postedDate: '2024-03-15',
  },
  {
    id: 2,
    title: 'Machine Learning Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: 'Mid',
    description: 'Build and deploy ML models for various AI solutions. Strong Python skills and experience with scikit-learn required.',
    postedDate: '2024-03-12',
  },
  {
    id: 3,
    title: 'Product Manager - Lumina AI',
    department: 'Product',
    location: 'Lagos',
    type: 'Full-time',
    experience: 'Senior',
    description: 'Drive product strategy for our healthcare AI platform. Experience with B2B SaaS and healthcare tech preferred.',
    postedDate: '2024-03-10',
  },
  {
    id: 4,
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: 'Mid',
    description: 'Build beautiful, responsive interfaces for our products. Expertise in React, TypeScript, and Tailwind CSS required.',
    postedDate: '2024-03-08',
  },
  {
    id: 5,
    title: 'AI Curriculum Developer',
    department: 'Education',
    location: 'Accra',
    type: 'Full-time',
    experience: 'Mid',
    description: 'Create engaging AI courses for Nexentrix Academy. Strong background in AI/ML and curriculum design.',
    postedDate: '2024-03-05',
  },
  {
    id: 6,
    title: 'Sales Development Representative',
    department: 'Sales',
    location: 'Nairobi',
    type: 'Full-time',
    experience: 'Entry',
    description: 'Generate leads and qualify opportunities for enterprise sales. Excellent communication skills required.',
    postedDate: '2024-03-01',
  },
  {
    id: 7,
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    experience: 'Senior',
    description: 'Lead marketing strategy and campaigns. Experience with B2B tech marketing and content strategy.',
    postedDate: '2024-02-28',
  },
  {
    id: 8,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Lagos',
    type: 'Full-time',
    experience: 'Senior',
    description: 'Manage cloud infrastructure and CI/CD pipelines. AWS, Kubernetes, and Terraform expertise required.',
    postedDate: '2024-02-25',
  },
  {
    id: 9,
    title: 'Technical Writer',
    department: 'Operations',
    location: 'Remote',
    type: 'Contract',
    experience: 'Mid',
    description: 'Create documentation and technical content for our products. Strong writing skills and tech background.',
    postedDate: '2024-02-20',
  },
]

const departments = ['All', 'Engineering', 'Product', 'Sales', 'Marketing', 'Operations', 'Education']
const locations = ['All', 'Lagos', 'Accra', 'Nairobi', 'Remote']
const experienceLevels = ['All', 'Entry', 'Mid', 'Senior', 'Lead']

const OpenPositions = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [selectedExperience, setSelectedExperience] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

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
                onClick={() => setSelectedJob(null)}
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
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <input id="applicant-name" type="text" placeholder="Full Name" aria-label="Full Name" className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address *</label>
                  <input id="applicant-email" type="email" placeholder="Email Address" aria-label="Email Address" className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">LinkedIn Profile</label>
                  <input id="linkedin-url" type="url" placeholder="LinkedIn Profile" aria-label="LinkedIn Profile" className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Resume/CV *</label>
                  <input id="resume-upload" type="file" aria-label="Resume upload" className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary" />
                  <p className="text-xs text-muted-foreground mt-1">PDF, DOC, or DOCX (max 5MB)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Cover Letter</label>
                  <textarea id="cover-letter" rows={4} placeholder="Cover Letter" aria-label="Cover Letter" className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
                  Submit Application
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