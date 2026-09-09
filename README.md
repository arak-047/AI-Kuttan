# AI Kuttan Premium Website Foundation

This repository contains the foundational architecture for the futuristic, premium website of **AI Kuttan**, built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## Architecture

The project is structured modularly to allow repeated visual layer redesigns without rewriting the entire application:

- `src/app/` - Next.js App Router for all application routes.
- `src/components/layout/` - Global layout wrappers, including `LenisProvider`.
- `src/components/navigation/` - Navigation components (Navbar, Sidebar).
- `src/components/footer/` - Global footer.
- `src/components/loader/` - Premium global page loader experience.
- `src/components/ui/` - Small, primitive reusable components (Buttons, Badges).
- `src/components/sections/` - Page sections (Hero, Features, Testimonials).
- `src/components/cards/` - Reusable card architectures (Service, Case Study).
- `src/components/forms/` - Form primitives and composed forms.
- `src/motion/` - Reusable, context-aware GSAP motion components.
- `src/data/` - Pure data-driven structures (navigation, services lists) separated from UI.
- `src/hooks/` - Custom React hooks (motion, interactions).
- `src/lib/` - Utility functions (e.g., `utils.ts` for Tailwind merge, `gsap.ts` for plugin registration).
- `src/styles/` - Global CSS containing the central design tokens.

## Design Tokens

Design variables (colors, spacing, radii) are centrally managed via CSS variables in `src/app/globals.css`. This enables easy theming and dark mode integration via Tailwind 4's `@theme` directive, separating structure from the visual skin.

## Motion Architecture

The motion system is powered by **GSAP** and **Lenis** (for smooth scrolling).
- A `LenisProvider` handles smooth scrolling globally.
- Reusable motion wrappers like `FadeIn.tsx` use `gsap.context()` for robust unmounting and cleanup.
- Animations respect `prefers-reduced-motion`.

## Getting Started

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. View at [http://localhost:3000](http://localhost:3000)

## Next Steps

This repository is currently a visual skeleton. The data structures and foundational architecture are in place, ready for the premium visual implementation phase.
