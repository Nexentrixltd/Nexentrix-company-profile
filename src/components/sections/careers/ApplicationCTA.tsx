// src/components/sections/careers/ApplicationCTA.tsx
import { Send, Mail, MessageCircle, Clock, Heart } from 'lucide-react'

const ApplicationCTA = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join us in building the future of AI in Africa. Browse our open positions and 
            find where you fit in.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
              View All Openings
              <Send className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
              <Mail className="h-4 w-4" />
              Sign Up for Job Alerts
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>2-3 week process</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span>Interview support available</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-primary" />
              <span>Relocation assistance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApplicationCTA