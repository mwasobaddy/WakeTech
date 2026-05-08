# UI Context for WakeTech

## Theme

WakeTech’s visual language is bright, energetic, and professional—inspired by a sunrise. The primary theme is light and airy, with surfaces white or light gray, and the sunrise gradient (`#FF6B35` → `#004E89`) used sparingly to draw attention to primary actions and key highlights. The design feels spacious, modern, and trustworthy. A dark mode variant is also available for developer tools and night usage; it inverts the surface and text colors while keeping the gradient accent.

## Colors

All colors are exposed as CSS custom properties. Components must use these tokens; no hardcoded hex values are allowed.

| Role                 | CSS Variable            | Value (light)          | Dark mode override         |
|----------------------|-------------------------|------------------------|----------------------------|
| Page background      | `--bg-base`             | `#F7F7F7`              | `#0F172A` (slate-900)      |
| Surface              | `--bg-surface`          | `#FFFFFF`              | `#1E293B` (slate-800)      |
| Primary text         | `--text-primary`        | `#1A1A1A`              | `#F8FAFC` (slate-50)       |
| Muted text           | `--text-muted`          | `#6C757D`              | `#94A3B8` (slate-400)      |
| Primary accent start | `--accent-primary-start`| `#FF6B35`              | `#FF6B35` (same)           |
| Primary accent end   | `--accent-primary-end`  | `#004E89`              | `#38BDF8` (sky blue for dark)|
| Gradient primary     | `--gradient-primary`    | `linear-gradient(90deg, var(--accent-primary-start), var(--accent-primary-end))` | same |
| Border               | `--border-default`      | `#E5E7EB`              | `#334155` (slate-700)      |
| Error                | `--state-error`         | `#EF4444`              | `#F87171` (red-400)        |
| Success              | `--state-success`       | `#10B981`              | `#34D399` (emerald-400)    |
| Info                 | `--state-info`          | `#3B82F6` (blue-500)   | `#60A5FA` (blue-400)       |
| Warning              | `--state-warning`       | `#F59E0B` (amber-500)  | `#FBBF24` (amber-400)      |

## Typography

| Role      | Font family                         | CSS Variable          |
|-----------|-------------------------------------|-----------------------|
| UI text   | Inter, system-ui, sans-serif        | `--font-sans`         |
| Code/mono | JetBrains Mono, Fira Code, monospace| `--font-mono`         |

Base sizes: 16px root, with fluid type scaling using Tailwind’s `text-base` etc. Headings use `font-sans` with bold weights. Code blocks use `font-mono` at `text-sm`.

## Border Radius

Apply rounded corners consistently:

| Context           | Tailwind class   | Value   |
|-------------------|------------------|---------|
| Inline / small UI | `rounded-sm`     | 0.125rem|
| Buttons, inputs   | `rounded`        | 0.25rem |
| Cards / panels    | `rounded-lg`     | 0.5rem  |
| Modals / overlays | `rounded-xl`     | 0.75rem |

## Component Library

We use **shadcn/ui** components built on top of Tailwind CSS. All components reside in `components/ui/`. When you need a new component, run `npx shadcn-ui@latest add [component]` rather than writing from scratch. Customize components by editing their `className` props or by creating wrapper components that inject our theme tokens.

Common components: Button, Card, Input, Textarea, Select, Dialog, DropdownMenu, Tabs, Table, Avatar, Badge, Separator, Skeleton, Toast.

## Layout Patterns

- **Landing page**: Centered container `max-w-7xl`, padding `px-4 sm:px-6 lg:px-8`. Hero section with `py-20` and gradient heading. Feature grid with `grid-cols-1 md:grid-cols-3 gap-8`. Footer with `border-t` and `py-8`.
- **App dashboard**: Fixed left sidebar `w-64` with `border-r`, main content `flex-1` with `overflow-auto`. Top header `h-16` with `flex items-center justify-between`. Cards inside main area with `bg-surface` and `rounded-lg border`.
- **Modals**: Fixed inset-0 flex items-center justify-center with `bg-black/50 backdrop-blur-sm`. Modal content `bg-surface rounded-xl max-w-2xl w-full p-6`.
- **Navbar**: Sticky top `z-50 w-full border-b bg-base/80 backdrop-blur`. Inside container with logo left, nav links center, CTA right.

## Icons

We use **Lucide React** icons. All icons are stroke-only (no fill). Default size for inline icons is `h-4 w-4`; for button icons `h-5 w-5`. Use the `size` prop to adjust: `<EyeIcon size={16} />`. Import icons individually: `import { EyeIcon } from 'lucide-react';`.

## Brand Elements

- **Logo**: The WakeTech wordmark uses a custom geometric sans-serif, all uppercase `WAKETECH`. The horizontal stroke of the “T” extends slightly longer on the right and curves upward like a rising sun. Optional monogram: interlocking W and K with a subtle circuit trace. The logo should always have clear space equal to the height of the “W”.
- **Logo colors**: Use the primary gradient (`--gradient-primary`) on light backgrounds; on dark surfaces use the light text color (`--text-primary`) or invert to a negative version. Always provide a single-color (monochrome) variant for stamps and embossing.
- **Tagline**: If used, set in `font-sans italic` with `text-muted` color: e.g., `italic text-[#6C757D]`.

## Design Principles

- Clarity over decoration
- Generous whitespace
- Consistent spacing scales (`space-4`, `space-6`, `space-8`)
- Accessible color contrast (minimum 4.5:1 for normal text)
- Responsive first (mobile layouts default)
- Progressive enhancement (works without JavaScript)
