// src/pages/Academy.tsx
import { useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import AcademyHero from '../components/sections/academy/AcademyHero'
import CourseCategories from '../components/sections/academy/CourseCategories'
import CourseGrid from '../components/sections/academy/CourseGrid'
import LearningPaths from '../components/sections/academy/LearningPaths'
import InstructorSpotlight from '../components/sections/academy/InstructorSpotlight'
import Testimonials from '../components/sections/academy/Testimonials'
import LiveWebinars from '../components/sections/academy/LiveWebinars'
import MentorshipProgram from '../components/sections/academy/MentorshipProgram'
import CertificationShowcase from '../components/sections/academy/CertificationShowcase'
import CommunityStats from '../components/sections/academy/CommunityStats'
import AcademyCTA from '../components/sections/academy/AcademyCTA'

const Academy = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <PageLayout>
      <main>
        <section id="academy-hero" data-shape="cone">
          <AcademyHero />
        </section>
        <section id="categories" data-shape="grid">
          <CourseCategories 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </section>
        <section id="courses" data-shape="spiral">
          <CourseGrid activeCategory={activeCategory} />
        </section>
        <section id="paths" data-shape="circle">
          <LearningPaths />
        </section>
        <section id="instructors" data-shape="wave">
          <InstructorSpotlight />
        </section>
        <section id="testimonials" data-shape="cloth">
          <Testimonials />
        </section>
        <section id="webinars" data-shape="grid">
          <LiveWebinars />
        </section>
        <section id="mentorship" data-shape="cone">
          <MentorshipProgram />
        </section>
        <section id="certification" data-shape="circle">
          <CertificationShowcase />
        </section>
        <section id="community" data-shape="spiral">
          <CommunityStats />
        </section>
        <section id="academy-cta" data-shape="wave">
          <AcademyCTA />
        </section>
      </main>
    </PageLayout>
  )
}

export default Academy