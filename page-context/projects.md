# Projects Page

## Purpose
Showcase your best work with concise, impactful case studies to demonstrate expertise and attract clients.

## Content Structure

### 1. Header
- Title: “Projects” or “Selected Work”
- Subtitle: “A collection of projects I’ve built for clients and for the open source community.”

### 2. Filters (optional)
- Horizontal tabs: All, Web, Mobile, AI/ML, Open Source.
- onClick filters the grid (client-side JavaScript).

### 3. Project Grid
- Responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.
- Each project is a Card:
  - Image: Screenshot or project thumbnail (aspect ratio 16:9, `object-cover rounded-t-lg`).
  - Content area `p-4`:
    - Title (`font-bold text-lg text-[#1A1A1A]`)
    - Short description (`text-[#6C757D] text-sm mt-1`)
    - Tech stack tags: small badges (`bg-gray-100 text-gray-800 rounded-full px-2 py-0.5 text-xs`)
    - Links: “Live Demo” and “GitHub” as Button links (`size="sm" variant="outline"`).
- Hover effect: card border color change or shadow increase.

### 4. Call to Action
- After grid: “Have a project in mind? Let’s talk.” with button to /contact.

## Layout & Components

- **Container**: `max-w-7xl mx-auto px-4 py-12`
- **Filters**: `flex space-x-4 mb-8` with `Button` variants: `ghost` for inactive, `secondary` for active.
- **Project Card**: `bg-surface border rounded-lg overflow-hidden hover:shadow-lg transition-shadow`
- **Image container**: `h-48 overflow-hidden bg-gray-100`
- **Tech badges**: `flex flex-wrap gap-2 mt-3`
- **Links**: `Button size="sm" variant="outline"`
