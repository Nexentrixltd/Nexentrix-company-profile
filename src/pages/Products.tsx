// src/pages/Products.tsx
import PageLayout from '../components/layout/PageLayout'
import ProductsHero from '../components/sections/products/ProductsHero'
import ProductShowcase from '../components/sections/products/ProductShowcase'
import LuminaAISpotlight from '../components/sections/products/LuminaAISpotlight'
import AcademySpotlight from '../components/sections/products/AcademySpotlight'
import TopUpSpotlight from '../components/sections/products/TopUpSpotlight'
import ComparisonTable from '../components/sections/products/ComparisonTable'
import IntegrationSection from '../components/sections/products/IntegrationSection'
// import PricingTiers from '../components/sections/products/PricingTiers'
import ProductCTA from '../components/sections/products/ProductCTA'

const Products = () => {
  return (
    <PageLayout>
      <main>
        <section id="products-hero" data-shape="cone">
          <ProductsHero />
        </section>
        <section id="showcase" data-shape="grid">
          <ProductShowcase />
        </section>
        <section id="lumina" data-shape="circle">
          <LuminaAISpotlight />
        </section>
        <section id="academy" data-shape="spiral">
          <AcademySpotlight />
        </section>
        <section id="topup" data-shape="wave">
          <TopUpSpotlight />
        </section>
        <section id="comparison" data-shape="grid">
          <ComparisonTable />
        </section>
        <section id="integrations" data-shape="cloth">
          <IntegrationSection />
        </section>
        {/* <section id="pricing" data-shape="cone">
          <PricingTiers />
        </section> */}
        <section id="product-cta" data-shape="spiral">
          <ProductCTA />
        </section>
      </main>
    </PageLayout>
  )
}

export default Products