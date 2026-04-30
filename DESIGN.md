# AA Mold Hunters - DESIGN.md

## Color Palette

### Dark Theme (Primary)
| Token | HSL | Hex | Role |
|-------|-----|-----|------|
| `--background` | 222 47% 6% | #0B1120 | Page background |
| `--foreground` | 210 40% 98% | #F1F5F9 | Primary text |
| `--tech-navy` | 222 47% 6% | #0B1120 | Brand background |
| `--tech-slate` | 217 33% 17% | #1E293B | Cards, elevated surfaces |
| `--eco-primary` | 152 68% 51% | #2ECC71 | Primary accent (CTA, success) |
| `--eco-hover` | 152 68% 45% | #27AE60 | Hover state |
| `--eco-dark` | 152 68% 25% | #1D8348 | Dark accent |
| `--alert-amber` | 38 92% 50% | #F59F0B | Urgency, warnings |
| `--muted-foreground` | 215 20% 65% | #94A3B8 | Secondary text |

### Semantic Colors
| Purpose | Token | Hex |
|---------|-------|-----|
| Primary action | `--eco-primary` | #2ECC71 |
| Urgent/emergency | `--alert-amber` | #F59F0B |
| Destructive | `--destructive` | hsl(0 62.8% 30.6%) |

### Contrast Status
⚠️ **Known Issues:**
- `text-white/40` (footer copyright) fails 4.5:1 ratio
- `--alert-amber` on white text fails ratio on buttons

---

## Typography

### Font Stack
- **Display/Headings**: System font stack (no Google Fonts loaded)
- **Body**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

### Scale
| Element | Size | Weight |
|---------|------|--------|
| Hero heading | 3rem+ | 800 (bold) |
| Section heading (h2) | 2rem | 700 |
| Card heading (h3) | 1.25rem | 600 |
| Body | 1rem | 400 |
| Small text | 0.875rem | 400 |
| Label/caption | 0.75rem | 500 |

### Line Length
- Max body width: 75ch (implemented via `max-w-7xl`)
- Hero text: wider for impact, shorter lines

---

## Spatial System

### Container
- Max width: 1440px (`max-w-7xl` ≈ 1280px + padding)
- Padding: `px-4 sm:px-6 lg:px-8 xl:px-12`

### Section Rhythm
- Hero: Full viewport height, minimal padding
- Sections: `py-16 md:py-24` vertical padding
- Cards: `p-6` internal padding

### Component Spacing
- Button padding: `px-4 py-2` (compact), `px-6 py-3` (standard)
- Form field gap: `space-y-4`
- Navigation link gap: `gap-1`

---

## Components

### Buttons
| Variant | Style |
|---------|-------|
| Primary | `bg-eco-primary text-white` |
| Secondary | `bg-tech-slate text-white` |
| Ghost | `bg-transparent hover:bg-white/10` |
| Alert | `bg-alert-amber text-tech-navy` |

**States:**
- Hover: darken 10%, add glow shadow
- Active: scale(0.98)
- Disabled: opacity 50%

### Cards
- Background: `--tech-slate` with `bg-tech-slate/60 backdrop-blur-xl`
- Border: `border-white/10`
- Radius: `rounded-xl`

### Form Inputs
- Background: `bg-tech-slate/50`
- Border: `border-white/10`
- Focus ring: `--eco-primary`

### Navigation
- Height: `h-16 md:h-20`
- Background: `bg-tech-navy/80 backdrop-blur-md` (top), `bg-tech-navy/90 backdrop-blur-xl` (scrolled)
- Logo: Shield icon in `--eco-primary` container

---

## Motion Philosophy

### Principles
- **Purposeful only**: Animation communicates state, not decoration
- **Fast feedback**: Hover/active states under 150ms
- **Calm entrances**: Page load reveals stagger, no jarring pops

### Key Animations
| Animation | Duration | Easing |
|-----------|----------|--------|
| Navbar transition | 500ms | ease-out |
| Button hover | 150ms | ease-out |
| Accordion open | 200ms | ease-out |
| Marquee scroll | 20s | linear |
| Float (hero elements) | 6s | ease-in-out |

---

## Visual Assets

### Icons
- Library: **Lucide React** (consistent, clean line icons)
- Size standards: 16px (inline), 20px (nav), 24px (section icons)

### Images
- Hero: Full-width background image with gradient overlay
- Gallery: Before/after comparisons
- Team: Professional photo

### Decorative Elements
- Gradient overlays on hero: `bg-gradient-hero`
- Glow shadows on primary CTAs: `shadow-glow`
- Glass morphism on cards: `glass-card`

---

## Dark Theme Implementation

The site is dark-first by design. `html` has `class="dark"` set in layout.

```css
.dark {
  --background: 222 47% 6%;
  --foreground: 210 40% 98%;
  /* ... all tokens override */
}
```

---

## Accessibility Baseline

### Current Score: 83 (needs improvement)

### Known Failures
1. Button contrast: `#2ECC71` on white = 1.87:1 ❌
2. Amber button contrast: `#F59F0B` on white = 2.13:1 ❌
3. Footer muted text: `text-white/40` fails ❌
4. Floating CTA close button: no aria-label ❌

### Z-Index Stack
| Layer | Value | Component |
|-------|-------|-----------|
| Banner | z-[70] | UrgencyBanner |
| Navigation | z-50 | Navigation |
| Overlay | z-50 | Modals, sheets |
| Floating CTA | z-50 | FloatingCTA |

---

## Responsive Breakpoints

| Breakpoint | Min-width | Nav behavior |
|------------|-----------|-------------|
| Mobile | 0 | Hamburger menu, stacked layout |
| Tablet | 640px | Same as mobile |
| Desktop | 1024px | Full nav links visible |
| Wide | 1280px | Expanded spacing |
