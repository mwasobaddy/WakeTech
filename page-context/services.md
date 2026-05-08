# Services Page

## Purpose
Clearly communicate what you offer, your process, and build trust in your capabilities.

## Content Sections

### 1. Hero
- Title: “Services”
- Subtitle: “Full-cycle software development tailored to your needs.”
- Optional: background subtle pattern.

### 2. Service Cards
- Grid of cards, each representing a service:
  - Full-Stack Web Development
  - Mobile App Development (React Native/Flutter)
  - Cloud Architecture & DevOps
  - Technical Consulting & Audits
  - Maintenance & Support
- Each card includes:
  - Icon (e.g., Globe, Smartphone, Cloud, ClipboardList, Wrench from Lucide).
  - Title
  - Short description (2–3 sentences)
  - Bullet list of key deliverables or technologies.
  - Optional “Learn more” link that scrolls to detailed section below.

### 3. Process
- Title: “How We Work”
- Horizontal steps: 1. Discovery → 2. Design → 3. Build → 4. Test → 5. Deploy → 6. Maintain.
- Each step: icon, short heading, brief text.
- Layout: `flex flex-col md:flex-row justify-between` with numbered circles.

### 4. Technology Stack
- Title: “Technologies We Use”
- Display logos or names of frameworks, languages, tools (React, Vue, Node, Python, AWS, Docker, etc.) in a cloud/tag format.
- Or use a grid with icons.

### 5. Pricing / Engagement Models
- Title: “Engagement Models”
- Three options: Fixed Price, Time & Materials, Retainer.
- Brief explanation of each, maybe a “Recommended” badge on one.
- CTA: “Discuss your project” linking to /contact.

### 6. FAQ
- Simple accordion of common questions (using shadcn `Accordion` component).
- 4–5 questions: e.g., “What is your typical timeline?”, “Do you provide ongoing support?”, “What about post-launch maintenance?”

### 7. Final CTA
- “Ready to start your project?” with large primary button to /contact.

## Layout & Components

- **Container**: `max-w-6xl mx-auto`
- **Service Cards**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`. Each: `bg-surface border rounded-xl p-6 hover:shadow-lg transition-shadow`.
- **Process**: `grid grid-cols-1 md:grid-cols-6 gap-4 text-center`. Use circles with numbers (`w-10 h-10 rounded-full bg-[#FF6B35] text-white font-bold`).
- **Tech Stack**: `flex flex-wrap justify-center gap-4`.
- **Accordion**: Use shadcn `Accordion` with `type="single" collapsible`.
