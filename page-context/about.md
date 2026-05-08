# About Page

## Purpose
Tell your story, build credibility, and connect with potential clients on a personal level.

## Content Sections

### 1. Hero / Profile
- Large heading: “About Me” or “Hello, I’m Kelvin”
- Subheading: “Software Engineer & Founder of WakeTech”
- Two-column layout: Left – portrait photo (round or rounded-square); Right – brief bio paragraph (3–4 sentences).
- Stats line: e.g., “3+ years experience, 50+ projects delivered, 100% client satisfaction.”

### 2. My Journey
- Title: “My Journey”
- Narrative: How you got into coding, key milestones, founding WakeTech.
- Use timeline component (vertical line with dots) or simple paragraphs with icons.
- Optional: embed images or certificates.

### 3. Skills & Technologies
- Title: “Tech Stack”
- Grid of skill categories: Frontend (React, TypeScript, Tailwind), Backend (Node.js, Python, PostgreSQL), Tools (Git, Docker, AWS), DevOps (CI/CD, monitoring).
- Each skill as a badge/tag: `bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm`.

### 4. Experience
- Title: “Experience”
- Reverse chronological list of roles (company, title, dates, key achievements).
- Use a simple list with left border accent: `border-l-2 border-[#FF6B35] pl-4 space-y-6`.

### 5. Education & Certifications
- Title: “Education”
- Degrees, institutions, years.
- Certifications: e.g., AWS Certified Developer, Google Cloud Professional.
- Use icons for certs (e.g., `Award` from Lucide).

### 6. Personal Touch
- Title: “Beyond Code”
- Short paragraph about interests: hiking, reading, African tech ecosystems, etc.
- Mention your Kenyan heritage subtly.

### 7. Call to Action
- “Let’s work together” button linking to /contact.

## Layout & Components

- **Container**: `max-w-5xl mx-auto`
- **Profile section**: `grid grid-cols-1 md:grid-cols-2 gap-8 items-center`
- **Section spacing**: `py-12` with `border-b` between sections (except last).
- **Headings**: `text-2xl font-bold text-[#1A1A1A] mb-4`
- **Body text**: `text-[#6C757D] leading-relaxed`
- **Timeline**: `relative pl-8` before pseudo-element for line.
- **Badges**: `inline-block bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-xs font-medium`
- **Cards**: Not heavily used; rely on clear typography.

## Components from shadcn/ui

- Button (primary and secondary), Separator (between sections), AwardIcon, BriefcaseIcon, etc.
