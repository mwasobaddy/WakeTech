# WakeTech Website - Dependencies & Setup Guide

This document lists the required libraries, tools, and configuration steps for building the WakeTech portfolio website.

## Core

| Package | Version (example) | Install Command |
|---------|-------------------|-----------------|
| React | 19.x | `npm install react@latest react-dom@latest` |
| Next.js | 15.x (App Router) | `npx create-next-app@latest` or `npm install next@latest react@latest react-dom@latest` |
| TypeScript | 5.x | `npm install -D typescript @types/react @types/node` |

## Styling & UI

| Package | Purpose | Install Command |
|---------|---------|-----------------|
| Tailwind CSS | Utility-first CSS framework | `npm install -D tailwindcss@latest postcss autoprefixer` (v3) or `npm install tailwindcss@latest @tailwindcss/vite@latest` (v4 with Vite) |
| shadcn/ui | Component library built on Radix UI | `npx shadcn@latest init` (then add components) |
| Lucide React | Icon set | `npm install lucide-react` |
| clsx | Conditional classnames helper | `npm install clsx` |
| tailwind-merge | Tailwind class merger | `npm install tailwind-merge` |

Create `lib/utils.ts` with:
```ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: Parameters<typeof twMerge>[0]) {
  return twMerge(clsx(inputs));
}
```

## Animation

| Package | Purpose | Install Command |
|---------|---------|-----------------|
| GSAP | Core animation library | `npm install gsap` |
| GSAP ScrollTrigger | Scroll‑based triggers | `npm install gsap` (ScrollTrigger included with gsap core) |

Example registration:
```ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
```

## Forms & Validation

| Package | Purpose | Install Command |
|---------|---------|-----------------|
| react-hook-form | Form state management | `npm install react-hook-form` |
| zod | Schema validation | `npm install zod` |
| @hookform/resolvers | Resolver bridge | `npm install @hookform/resolvers` |

## Blog Utilities (optional)

| Package | Purpose | Install Command |
|---------|---------|-----------------|
| date-fns | Date formatting | `npm install date-fns` |
| gray-matter | Parse frontmatter | `npm install gray-matter` |
| remark | Markdown processor | `npm install remark remark-html` |
| rehype-stringify | HTML output | `npm install rehype-stringify` |
| rehype-slug | Heading IDs | `npm install rehype-slug` |
| remark-gfm | GitHub‑flavored markdown | `npm install remark-gfm` |

## Development Tools

| Package | Purpose | Install Command |
|---------|---------|-----------------|
| ESLint | Linting | `npm install -D eslint` |
| Prettier | Code formatting | `npm install -D prettier` |
| Tailwind CSS IntelliSense | VS Code extension | Install from marketplace |

## Optional

| Package | Purpose | Install Command |
|---------|---------|-----------------|
| @emailjs/browser | Contact form without backend | `npm install @emailjs/browser` |

---

## Configuration Highlights

### Tailwind (`tailwind.config.js`)
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: 'var(--bg-base)',
        surface: 'var(--bg-surface)',
        primary: 'var(--text-primary)',
        muted: 'var(--text-muted)',
      },
    },
  },
  plugins: [],
};
```

### Global CSS (`app/globals.css`)
Add:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-base: #F7F7F7;
  --bg-surface: #FFFFFF;
  --text-primary: #1A1A1A;
  --text-muted: #6C757D;
  --accent-primary-start: #FF6B35;
  --accent-primary-end: #004E89;
  --border-default: #E5E7EB;
  --state-error: #EF4444;
  --state-success: #10B981;
}

[data-theme="dark"] {
  --bg-base: #0F172A;
  --bg-surface: #1E293B;
  --text-primary: #F8FAFC;
  --text-muted: #94A3B8;
  --border-default: #334155;
}
```

### Dark Mode Toggle (custom, no next-themes)
Create a React context that sets `document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')`.

### Routing Structure (Next.js App Router)
- `/app/page.tsx` – Home
- `/app/about/page.tsx` – About
- `/app/projects/page.tsx` – Projects
- `/app/services/page.tsx` – Services
- `/app/contact/page.tsx` – Contact
- `/app/blog/page.tsx` – Blog (optional)
- `/app/resume/page.tsx` – Résumé

Each page uses components from `components/ui/` (shadcn) and theme tokens.

### GSAP Integration
In any client component:
```ts
"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MySection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".my-element", {
      scrollTrigger: {
        trigger: ".my-element",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
    });
  }, []);
  return <section className="my-element">...</section>;
}
```

---

All libraries integrate with the WakeTech `ui-context.md` design tokens for a consistent, minimal, and modern look.