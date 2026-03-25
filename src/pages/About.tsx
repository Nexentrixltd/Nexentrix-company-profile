// src/pages/About.tsx
import PageLayout from '../components/layout/PageLayout'
import AboutHero from '../components/sections/about/AboutHero'
import MissionVision from '../components/sections/about/MissionVision'
import Timeline from '../components/sections/about/Timeline'
import CoreValues from '../components/sections/about/CoreValues'
import TeamOverview from '../components/sections/about/TeamOverview'
import OfficeCulture from '../components/sections/about/OfficeCulture'
import JoinCTA from '../components/sections/about/JoinCTA'

const About = () => {
  return (
    <PageLayout>
      <main>
        <section id="about-hero" data-shape="cone">
          <AboutHero />
        </section>
        <section id="mission-vision" data-shape="circle">
          <MissionVision />
        </section>
        <section id="timeline" data-shape="spiral">
          <Timeline />
        </section>
        <section id="values" data-shape="grid">
          <CoreValues />
        </section>
        <section id="team" data-shape="wave">
          <TeamOverview />
        </section>
        <section id="culture" data-shape="cloth">
          <OfficeCulture />
        </section>
        <section id="join" data-shape="cone">
          <JoinCTA />
        </section>
      </main>
    </PageLayout>
  )
}

export default About