// src/components/sections/about/TeamOverview.tsx
import { FiLinkedin, FiTwitter, FiMail } from "react-icons/fi"

const team = [
  {
    name: 'Oluwaseun Adekunle',
    role: 'Founder & CEO',
    bio: 'AI researcher with 10+ years experience in machine learning and African tech ecosystems.',
    image: 'OA',
    social: { linkedin: '#', twitter: '#', email: 'seun@nexentrix.com' },
  },
  {
    name: 'Amina Mohammed',
    role: 'Chief Technology Officer',
    bio: 'Former lead AI engineer at Google, passionate about ethical AI development.',
    image: 'AM',
    social: { linkedin: '#', twitter: '#', email: 'amina@nexentrix.com' },
  },
  {
    name: 'Kofi Mensah',
    role: 'Head of Product',
    bio: 'Product leader specializing in AI-first solutions for emerging markets.',
    image: 'KM',
    social: { linkedin: '#', twitter: '#', email: 'kofi@nexentrix.com' },
  },
  {
    name: 'Ngozi Okonkwo',
    role: 'Head of Education',
    bio: 'EdTech expert building Africa\'s largest AI learning community.',
    image: 'NO',
    social: { linkedin: '#', twitter: '#', email: 'ngozi@nexentrix.com' },
  },
]

const TeamOverview = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm">Leadership</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate experts driving AI innovation across Africa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group relative text-center"
            >
              <div className="relative mb-4">
                {/* Avatar */}
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-3xl font-bold text-primary border-2 border-primary/30 group-hover:border-primary transition-all">
                  {member.image}
                </div>
                
                {/* Social Links - Appears on hover */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                  <a
                    href={member.social.linkedin || '#'}
                    aria-label={`${member.name} on LinkedIn`}
                    title={`${member.name} on LinkedIn`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-card border border-border hover:bg-primary/10 transition-colors"
                  >
                    <FiLinkedin className="h-3 w-3" />
                  </a>
                  <a
                    href={member.social.twitter || '#'}
                    aria-label={`${member.name} on Twitter`}
                    title={`${member.name} on Twitter`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-card border border-border hover:bg-primary/10 transition-colors"
                  >
                    <FiTwitter className="h-3 w-3" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    aria-label={`Email ${member.name}`}
                    title={`Email ${member.name}`}
                    className="p-2 rounded-full bg-card border border-border hover:bg-primary/10 transition-colors"
                  >
                    <FiMail className="h-3 w-3" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary text-sm mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamOverview