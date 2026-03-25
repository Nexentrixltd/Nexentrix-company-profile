// src/components/sections/academy/LiveWebinars.tsx
import { Calendar, Clock, Users, Video, ArrowRight, Bell } from 'lucide-react'

const webinars = [
  {
    title: 'The Future of AI in Africa',
    speaker: 'Dr. Oluwaseun Adekunle',
    date: 'April 15, 2026',
    time: '2:00 PM WAT',
    attendees: 1240,
    image: '🌍',
  },
  {
    title: 'Building Production ML Models',
    speaker: 'Prof. Amina Mohammed',
    date: 'April 18, 2026',
    time: '3:00 PM WAT',
    attendees: 890,
    image: '🤖',
  },
  {
    title: 'AI Ethics & Responsible Development',
    speaker: 'Dr. Fatima Hassan',
    date: 'April 22, 2026',
    time: '1:00 PM WAT',
    attendees: 560,
    image: '⚖️',
  },
]

const LiveWebinars = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Video className="h-4 w-4 mr-2" />
              <span className="text-sm">Live Events</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Upcoming Webinars
            </h2>
            <p className="text-muted-foreground mt-2">
              Learn from experts in real-time
            </p>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-all">
            <Bell className="h-4 w-4" />
            <span className="text-sm">Get Reminders</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webinars.map((webinar, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{webinar.image}</div>
              <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
              <p className="text-primary text-sm mb-4">with {webinar.speaker}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{webinar.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{webinar.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{webinar.attendees.toLocaleString()} registered</span>
                </div>
              </div>
              
              <button className="w-full group/btn inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all">
                <span className="text-sm font-medium">Register Now</span>
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LiveWebinars