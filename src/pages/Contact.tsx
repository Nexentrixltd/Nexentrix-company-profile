// src/pages/Contact.tsx
import PageLayout from '../components/layout/PageLayout'
import ContactHero from '../components/sections/contact/ContactHero'
import ContactForm from '../components/sections/contact/ContactForm'
import OfficeLocations from '../components/sections/contact/OfficeLocations'
import FAQSection from '../components/sections/contact/FAQSection'
import SupportChannels from '../components/sections/contact/SupportChannels'
import NewsletterSignup from '../components/sections/contact/NewsletterSignup'
import MapSection from '../components/sections/contact/MapSection'

const Contact = () => {
  return (
    <PageLayout>
      <main>
        <section id="contact-hero" data-shape="cone">
          <ContactHero />
        </section>
        <section id="contact-form" data-shape="circle">
          <ContactForm />
        </section>
        <section id="offices" data-shape="grid">
          <OfficeLocations />
        </section>
        <section id="faq" data-shape="spiral">
          <FAQSection />
        </section>
        <section id="support" data-shape="wave">
          <SupportChannels />
        </section>
        <section id="newsletter" data-shape="cloth">
          <NewsletterSignup />
        </section>
        <section id="map" data-shape="cone">
          <MapSection />
        </section>
      </main>
    </PageLayout>
  )
}

export default Contact