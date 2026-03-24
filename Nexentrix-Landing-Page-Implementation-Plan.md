# Nexentrix Landing Page - Implementation Plan

This repository is a multi-page, section-based website. The goal is to keep features isolated, easy to review, and clear for PR names by page and section.

## PR naming guideline (example)
- `feat/homepage-hero-and-cta`
- `feat/about-page-values-section`
- `feat/products-page-card-grid`
- `fix/shared-navbar-mobile-spacing`
- `chore/tailwind-colors-update`

> PR title should include the page + section/module.

## Project pages structure
- `/` (Home)
- `/about`
- `/products`
- `/academy`
- `/contact`

Each page is split into discrete sections for easier work and PR scope.

## Shared layout
- `src/layouts/MainLayout.tsx`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/ScrollToTop.tsx`

### Main shared tasks
1. Responsive navbar with mobile menu.
2. Global typography + container / max width.
3. Theme colors (tailwind configuration). 
4. Site metadata and SEO utilities.

## Home page (`/`)
1. `src/pages/Home.tsx`
2. Sections:
   - `HeroSection` (headline/subheadline, primary CTA, bg image/gradient)
   - `AboutPeek` (short text + values icons)
   - `Divisions` (4 cards with icons)
   - `WhyChooseUs` (text list + metrics)
   - `LeadCapture` (email form, privacy note)
   - `FeaturedProducts` (3 product tiles w/ CTA)

PR examples:
- `feat/home-hero-section`
- `feat/home-featured-products`
- `feat/home-lead-capture-form`

## About page (`/about`)
1. `src/pages/About.tsx`
2. Sections:
   - `MissionVision` cards
   - `TeamOverview` (grid of leader cards)
   - `Timeline` (company story)
   - `CoreValues` (icons + text)

PR examples:
- `feat/about-mission-vision`
- `feat/about-team-section`

## Products page (`/products`)
1. `src/pages/Products.tsx`
2. Sections:
   - `ProductGrid` (cards with image, summary, `Learn More`)
   - `ProductDetailModal` (optional modal)
   - `Comparison` (feature table)

PR examples:
- `feat/products-grid`
- `feat/products-detail-modal`

## Academy page (`/academy`)
1. `src/pages/Academy.tsx`
2. Sections:
   - `CoursesList` (cards, filter by category)
   - `Testimonials` (slider)
   - `CTAJoin` (join now button)

PR example:
- `feat/academy-courses-and-testimonials`

## Contact page (`/contact`)
1. `src/pages/Contact.tsx`
2. Sections:
   - `ContactForm` (name/email/message, client validation)
   - `OfficeDetails` (map + address + socials)
   - `Newsletter` (email signup)

PR example:
- `feat/contact-form-validation`

## Component-level tasks
- `src/components/SectionTitle.tsx` (reusable heading + subtext)
- `src/components/StatsCard.tsx` (stat number + label)
- `src/components/Card.tsx` (card wrapper)

### PR Examples
- `feat/components-section-title`
- `refactor/components-card-variants`

## Responsive & accessibility checklist
- mobile-first design (`sm`, `md`, `lg`, `xl`)
- keyboard focus states
- aria labels for buttons and forms
- semantic HTML tags (`<main>`, `<section>`, `<article>`, `<footer>`)
- contrast ratios for call-to-action

## Data and form integration
- `src/services/email.ts` (API wrapper)
- `src/api/contact` (if Next.js) or Netlify/Forms endpoint
- Email captured fields: `email`, `name`, `company`

## Analytics + metrics
- add GA/Plausible to layout
- track CTA click, form submit, and scroll milestones

## Deployment
- test deploy each page by verifying critical paths:
  - `/` home
  - `/about`
  - `/products`
  - `/academy`
  - `/contact`
- preview environments for feature branch review

## Optional extension (post-launch)
- `/lumina-ai`, `/top-up` product pages
- blog section with MDX
- auth dashboard / user login
- chatbot widget in footer
