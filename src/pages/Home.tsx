// src/pages/Home.tsx
import PageLayout from '../components/layout/PageLayout'
import HeroSection from '../components/sections/home/HeroSection'
import AboutPeek from '../components/sections/home/AboutPeek'
import DivisionsSection from '../components/sections/home/DivisionsSection'
import WhyChooseUs from '../components/sections/home/WhyChooseUs'
import FeaturedProducts from '../components/sections/home/FeaturedProducts'
import AcademyHighlight from '../components/sections/home/AcademyHighlight'
import Testimonials from '../components/sections/home/Testimonials'
import LeadCapture from '../components/sections/home/LeadCapture'
import CTASection from '../components/sections/home/CTASection'

const Home = () => {
  return (
    <PageLayout>
      <main>
        <section id="hero" data-shape="cone">
          <HeroSection />
        </section>
        <section id="about" data-shape="circle">
          <AboutPeek />
        </section>
        <section id="divisions" data-shape="grid">
          <DivisionsSection />
        </section>
        <section id="why-us" data-shape="spiral">
          <WhyChooseUs />
        </section>
        <section id="products" data-shape="wave">
          <FeaturedProducts />
        </section>
        <section id="academy" data-shape="circle">
          <AcademyHighlight />
        </section>
        <section id="testimonials" data-shape="cloth">
          <Testimonials />
        </section>
        <section id="lead" data-shape="cone">
          <LeadCapture />
        </section>
        <section id="cta" data-shape="spiral">
          <CTASection />
        </section>
      </main>
    </PageLayout>
  )
}

export default Home