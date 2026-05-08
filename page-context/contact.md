# Contact Page

## Purpose
Make it easy for potential clients to reach you and capture leads.

## Content Sections

### 1. Hero
- Title: “Get in Touch”
- Subtitle: “Have a project in mind? Let’s discuss how WakeTech can help.”

### 2. Contact Form
- Fields: Name, Email, Subject, Message, Budget (dropdown), Timeline (dropdown).
- Use shadcn `Form` components: `Input`, `Textarea`, `Select`, `Button`.
- Placeholder text and validation hints.
- Submit button: “Send Message”.
- After submission: success toast or redirect to thank you page.

### 3. Contact Information
- Grid of 3–4 items:
  - Email: `hello@waketech.com`
  - Phone: `+254 7XX XXX XXX` (Kenyan format)
  - Location: Nairobi, Kenya
  - Availability: “Usually respond within 24 hours”
- Icons: Mail, Phone, MapPin, Clock (Lucide).

### 4. Social Links
- Title: “Connect”
- Row of icons/buttons: LinkedIn, GitHub, Twitter, WhatsApp.
- Use `Button` with `variant="ghost"` and icon.

### 5. Optional: Calendar Booking
- Embed Calendly or provide a link to schedule a call.
- Button: “Schedule a Call”.

## Layout & Components

- **Container**: `max-w-4xl mx-auto`
- **Layout**: Two-column on larger screens: left contact form (`md:col-span-2`), right contact info (`md:col-span-1`). Stacked on mobile.
- **Form**: Use `grid grid-cols-1 md:grid-cols-2 gap-4` for fields.
- **Social buttons**: `flex space-x-4`.
