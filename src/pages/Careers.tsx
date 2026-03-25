// src/pages/Careers.tsx
import PageLayout from '../components/layout/PageLayout'
import CareersHero from '../components/sections/careers/CareersHero'
import WhyJoinUs from '../components/sections/careers/WhyJoinUs'
import OpenPositions from '../components/sections/careers/OpenPositions'
import LifeAtNexentrix from '../components/sections/careers/LifeAtNexentrix'
import HiringProcess from '../components/sections/careers/HiringProcess'
import EmployeeTestimonials from '../components/sections/careers/EmployeeTestimonials'
import InternshipProgram from '../components/sections/careers/InternshipProgram'
import DiversityCommitment from '../components/sections/careers/DiversityCommitment'
import ApplicationCTA from '../components/sections/careers/ApplicationCTA'

const Careers = () => {
  return (
    <PageLayout>
      <main>
        <section id="careers-hero" data-shape="cone">
          <CareersHero />
        </section>
        <section id="why-join" data-shape="circle">
          <WhyJoinUs />
        </section>
        <section id="open-positions" data-shape="grid">
          <OpenPositions />
        </section>
        <section id="life" data-shape="wave">
          <LifeAtNexentrix />
        </section>
        <section id="hiring-process" data-shape="spiral">
          <HiringProcess />
        </section>
        <section id="testimonials" data-shape="cloth">
          <EmployeeTestimonials />
        </section>
        <section id="internship" data-shape="torus">
          <InternshipProgram />
        </section>
        <section id="diversity" data-shape="star">
          <DiversityCommitment />
        </section>
        <section id="apply" data-shape="ring">
          <ApplicationCTA />
        </section>
      </main>
    </PageLayout>
  )
}

export default Careers