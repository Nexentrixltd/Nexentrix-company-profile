# Nexentrix Landing Page - Implementation Plan

## Tech Setup
1. `npx create-react-app nexentrix` (or `npx create-next-app`)
2. Install dependencies:
   - `npm install -D tailwindcss postcss autoprefixer`
   - `npm install framer-motion`
   - `npm install react-hook-form` (forms)
3. Initialize Tailwind: `npx tailwindcss init -p`
4. Add base colors+fonts in `tailwind.config.js`.

## Page Layout and Components
1. `src/components/Hero.jsx`
   - headline, subheadline, CTA buttons, background effect
   - use `framer-motion` fade-in + parallax overlay

2. `src/components/About.jsx`
   - 2-3 paragraphs, mission + vision cards
   - simple responsive grid

3. `src/components/Divisions.jsx`
   - 4 cards array mapped
   - includes icon, title, description

4. `src/components/Products.jsx`
   - 3 project tiles with `Learn More` link
   - optional modal for details

5. `src/components/WhyChooseUs.jsx`
   - bullet list with icons
   - use `motion.ul` stagger plugin

6. `src/components/AcademyHighlight.jsx`
   - content block + CTA
   - optional testimonial slider

7. `src/components/CallToAction.jsx`
   - bold CTA headline + 3 buttons

8. `src/components/Footer.jsx`
   - contact, socials, nav links

9. `src/components/LeadCaptureForm.jsx`
   - email input, submit button
   - `react-hook-form` validation
   - submits to API route (or sheet)

## Responsive & Animation
1. Mobile-first CSS with Tailwind breakpoints (`sm`, `md`, `lg`, `xl`).
2. Use `framer-motion` for reveal effects and hover animations.
3. Sticky top nav (if included) + smooth scroll `scroll-behavior: smooth` in CSS.

## Functional Requirements
1. Ensure all sections are within WordPress semantics (`<header>`, `<main>`, `<section>`, `<footer>`).
2. Add `aria-label` on CTA buttons and forms.
3. Add loading performance checks (Lighthouse).
4. Embed email capture endpoint (e.g., Zapier, Supabase, Netlify forms).

## Metrics & Analytics
1. Add Google Analytics or Plausible snippet.
2. Track:
   - CTA click events
   - form submissions
   - scroll depth

## Deployment
1. Connect repository to Vercel / Netlify.
2. Environment settings for API endpoint.
3. Set up preview builds and production branch.

## Optional Future Extensions
1. Add separate pages for each product: `/lumina-ai`, `/academy`, `/top-up`.
2. Add dashboard login (Auth0 or NextAuth).
3. Add Chatbot widget in footer.
4. Add blog section with MDX posts.
