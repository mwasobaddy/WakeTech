# Home Page

## Purpose
Convert visitors into leads by showcasing WakeTech’s value proposition, expertise, and inviting contact.

## Content Sections

### 1. Hero
- Large headline with gradient text: “WakeTech: Software That Wakes.”
- Subheading: “Custom solutions built with precision and a passion for innovation.”
- Primary CTA button: “Start a Project” (links to /contact)
- Secondary CTA: “View Portfolio” (links to /projects)
- Optional: subtle animated background (geometric shapes or rising wave) using CSS.

### 2. Services Preview
- Title: “What I Do”
- Grid of 3–4 service cards:
  - Web Development (React, Next.js, Vue)
  - Backend & APIs (Node.js, Python, PostgreSQL)
  - Cloud & DevOps (AWS, Docker, CI/CD)
- Each card: icon (Lucide), title, brief description, “Learn more” link to /services.

### 3. About Snippet
- Heading: “About Me”
- 2–3 sentence intro: “I’m Kelvin Obadiah Mwangi Wanjohi, a software engineer with X years of experience...”
- Photo: Circle avatar on right, text on left, or vice versa.
- CTA: “Read my full story →” linking to /about.

### 4. Featured Projects
- Title: “Featured Work”
- Carousel or grid of 2–3 project cards (see Projects page for full list). Each shows project image, title, short description, tech stack tags.
- CTA: “View all projects →” linking to /projects.

### 5. Call to Action
- Centered banner: “Ready to bring your idea to life?”
- Button: “Get in Touch” (primary) linking to /contact.

## Layout & Components

- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Hero**: `py-20` with centered content. Gradient text: `bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B35] to-[#004E89]`.
- **Cards**: `bg-surface rounded-lg border p-6 hover:shadow-md transition-shadow`.
- **Buttons**: Use shadcn `Button` with variant:
  - Primary: `bg-gradient-to-r from-[#FF6B35] to-[#004E89] text-white hover:opacity-90`
  - Secondary: `bg-surface border border-[#E5E7EB] text-gray-900 hover:bg-gray-50`
- **Icons**: Lucide icons `h-5 w-5 text-[#FF6B35]`.
- **Spacing**: Section spacing `py-12` or `py-16`.
- **Dark mode**: All tokens automatically adapt via CSS variables.

## Interactions

- Smooth scroll for anchor links.
- Hover effects on cards (lift up slightly).
- Button hover: opacity change for gradient.
