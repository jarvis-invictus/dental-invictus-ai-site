# Invictus AI Design System
This document serves as the universal design reference for the Invictus AI brand, derived directly from the live codebase and website.

## 1. Brand Identity
- **Brand Name**: Invictus AI
- **Tagline**: "Patient Growth System for Dental Clinics"
- **Positioning Statement**: "We help dental clinics get more patients through websites, Meta ads, and reputation management. You focus on dentistry. We fill your schedule."
- **Brand Personality**: Confident, Direct, Vibrant, Professional, Modern.
- **Target Audience**: Dental clinic owners and dentists in India struggling with unpredictable patient flow and looking for a done-for-you growth engine.

## 2. Color Palette
The brand relies on a highly vibrant, high-contrast palette rooted in its signature "Bond" colors.

| Name | Hex Value | Usage |
| :--- | :--- | :--- |
| **Bond Lime (Primary)** | `#ccff00` | Primary CTA buttons, WhatsApp highlights, active states, "sticker" shadows, success indicators. |
| **Bond Navy (Dark)** | `#0f172a` | Primary text, dark section backgrounds, primary layout structure, dark buttons. |
| **Bond Cyan (Accent)** | `#06b6d4` | Meta Ads + Content service highlighting, gradient backgrounds, hover borders. |
| **Bond Purple (Accent)** | `#d946ef` | Website Chatbot service highlighting, gradient backgrounds, icons. |
| **Bond Orange (Accent)** | `#f97316` | UI sticker shadows, warning/alert accents. |
| **Bond Pink (Accent)** | `#ec4899` | Gradients and subtle UI accents. |
| **Bond Gray (Muted)** | `#64748b` | Body text, subheadings, less dominant UI text. |
| **Reputation Accent** | `#f59e0b` | Google star ratings, Reputation Management service highlighting. |
| **Success Accent** | `#34d399` | Used for growth metrics (e.g., "↑ 8%"). |
| **Background Light** | `#ffffff` | Base background for light sections and cards. |
| **Background Alt** | `#f8fafc` | Subtle slate-50 backgrounds for alternating layout sections. |

*Note: The UI relies heavily on semi-transparent variants (e.g., `bg-bond-lime/10` or `bg-white/10`) for depth.*

## 3. Typography
The brand uses a modern geometric sans-serif paired with a handwriting font for organic accents.

- **Primary Font**: `Inter` (sans-serif, loaded via Google Fonts).
- **Accent Font**: `Nothing You Could Do` (cursive/handwriting, loaded via Google Fonts).
- **Weights Used**: `400` (Normal), `500` (Medium), `600` (Semibold), `700` (Bold), `900` (Black).

### Type Scale
| Element | Font-size (rem) | Font-size (px) | Line-height | Font-weight | Letter-spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1 (Fluid)** | `clamp(2.5rem, 5vw + 1rem, 4.5rem)` | `40px - 72px` | `1.1` | `900` (Black) | `tracking-tight` (-0.025em) |
| **H2 (Fluid)** | `clamp(1.75rem, 4vw + 0.75rem, 3rem)` | `28px - 48px` | `1.2` | `900` (Black) | `tracking-tight` (-0.025em) |
| **H3** | `1.875rem` | `30px` | `2.25rem` (36px) | `900` (Black) | Normal |
| **H4** | `1.5rem` | `24px` | `2rem` (32px) | `700` (Bold) | Normal |
| **Body (Large)** | `1.125rem` | `18px` | `1.625` (Relaxed) | `500` (Medium) | Normal |
| **Body (Base)** | `1rem` | `16px` | `1.625` (Relaxed) | `400`/`500` | Normal |
| **Caption/Label** | `0.75rem` - `0.875rem`| `12px - 14px` | `1.5` | `700` (Bold) | `tracking-widest` (0.1em)* |
| **Button Text** | `1rem` - `1.125rem` | `16px - 18px` | `1.5` | `700` (Bold) | Normal |

*(Note: Uppercase tracking-widest is heavily used for overline text like "Problem 01")*

## 4. Spacing & Layout
- **Base Spacing Unit**: Tailwind's `0.25rem` (`4px`) scale.
- **Max Content Width**: `1280px` (`max-w-7xl`) for standard sections, `1152px` (`max-w-6xl`) for focused blocks.
- **Section Padding**: Top/bottom padding is aggressively large to let content breathe: `6rem` (`py-24`, 96px) or `7rem` (`pt-28`, 112px). Side padding is `1.5rem` (`px-6`, 24px).
- **Background Layout**: Uses a clean light grid via `linear-gradient` (`background-size: 40px 40px`).
- **Breakpoints**: Standard Tailwind breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).

## 5. Component Library
### Buttons
- **Primary (Navy)**: `bg-bond-navy text-white hover:bg-bond-navy/90`. Shadow elevates on hover.
- **Lime (CTA)**: `bg-bond-lime text-bond-navy font-bold hover:bg-[#b3e600]`. Heavy focus on action driving (e.g., WhatsApp Us).
- **Outline**: `bg-white text-bond-navy border-2 border-slate-200`. On hover, the border becomes Lime and background gets a `10%` Lime tint.
- **Interaction**: All buttons use `hover:-translate-y-1` or `hover:scale-105` with a `300ms` transition.
- **Sizes**: 
  - `sm`: `h-9 px-4 text-xs rounded-lg`
  - `md`: `h-12 px-6 text-sm rounded-xl`
  - `lg`: `h-14 px-8 text-lg rounded-xl`

### Cards ("Bond Cards")
- **Base**: `background: white`, `border: 1px solid rgba(15, 23, 42, 0.05)`, `border-radius: 24px` (`3rem`) or `32px` (`2rem`).
- **Interaction**: `hover:-translate-y-2` (or `-translate-y-1` for smaller cards), `hover:scale-[1.02]`.
- **Shadow**: Signature "sticker" shadow applied.

### Shadow "Stickers"
A defining brand aesthetic is the hard, offset shadow instead of traditional soft drop shadows.
- **Base Sticker**: `4px 4px 0px 0px rgba(0,0,0,0.1)`
- **Hover Sticker**: `8px 8px 0px 0px rgba(0,0,0,0.15)`
- **Colored Stickers**: e.g., `8px 8px 0px 0px #ccff00` (Lime), `#d946ef` (Purple), `#06b6d4` (Cyan).

## 6. Iconography & Imagery
- **Icon Library**: `Lucide React` (Clean, line-based icons).
- **Icon Sizing**: 16px (`w-4`), 20px (`w-5`), 24px (`w-6`), 28px (`w-7`), 32px (`w-8`).
- **Icon Treatment**: Icons are frequently placed inside a `rounded-2xl` container. The container background is 20% opacity of the brand color (e.g., `bg-bond-lime/20`), the icon takes the solid color (`text-bond-navy` or `text-bond-lime`), surrounded by a subtle border (`border-bond-lime/30`).
- **Imagery**: Relies on abstract UI representation, glowing color orbs (`blur-[120px]`), and animated dashboard mockups instead of generic stock photography.

## 7. Motion & Effects
The site feels highly dynamic and alive through micro-interactions.
- **Float**: Continuous Y-axis floating (`translateY(-20px)` or `-8px` over 6s `ease-in-out infinite`).
- **Glow Pulse**: Pulsating box shadows (`30px` to `50px` spread, 3s `ease-in-out infinite`) for highlighting UI panels.
- **WhatsApp Pulse**: A `box-shadow` that radiates outward from the button (`0px` to `10px` spread, fading to `0` opacity over 2s).
- **Shimmer Sweep**: Background position sliding (200% width, 3s linear infinite) used on "Most Popular" badges.
- **Transitions**: Standardized as `transition-all duration-300`. Some cards use a custom `cubic-bezier(0.25, 0.8, 0.25, 1)`.

## 8. Logo Usage
- **Primary Logo**: `/logo.png`. A clean, dark wordmark ("Invictus") with an abstract geometric icon.
- **Icon**: `/icon.png` / `/icon.svg`. The standalone geometric shape.
- **Navbar Layout**: Rendered at `h-10` (`40px` height) with `w-auto object-contain`.
- **Hover State**: `hover:scale-105` applied to the logo container.

## 9. Voice & Tone
Extracted directly from site copy.
- **Tone**: Direct, results-oriented, empathetic, and authoritative.
- **Writing Style**: Short, punchy sentences. High focus on ROI and addressing exact pain points.
- **Recurring Phrases**: "Patient Growth System", "Every Clinic. Same Struggle.", "One System. Three Services.", "You focus on dentistry. We fill your schedule."
- **CTA Language**: High-action verbs ("Book Free Audit", "Explore Website Plans", "Grow Your Reviews").
- **What the brand NEVER sounds like**: It never uses generic tech jargon ("synergy", "optimize digital landscapes"). It never sounds passive or fluffy. It makes hard claims ("15 New Patients. Every Month. Guaranteed.").

## 10. Design Do's and Don'ts
Based on the codebase rules, here are the strict guidelines for extending this design system:

### **Do's**
1. **Do use the exact `#ccff00` Lime** for all primary conversions, WhatsApp buttons, and positive growth metrics.
2. **Do rely on hard "sticker" shadows** (`4px 4px 0px 0px` offset) rather than soft blur shadows to maintain the brand's tactile aesthetic.
3. **Do use massive, black-weight typography** (`font-weight: 900`, tight leading) for H1 and H2 headlines to create impact.
4. **Do employ micro-animations** (hover scales, pulses, floats) to make UI elements feel alive and interactive.
5. **Do use uppercase, tracking-widest label text** (e.g., "PROBLEM 01", "OPTIONAL ADD-ONS") above headings to create structure and hierarchy.

### **Don'ts**
1. **Don't use generic stock photography** of dentists pointing at charts. Stick to UI abstractions, text-heavy value props, and glowing geometric shapes.
2. **Don't write passive or fluffy copy**. Every headline must state a clear, direct outcome (e.g., "15 New Patients. Every Month. Guaranteed.").
3. **Don't dilute the color palette**. Use only the designated `bond-*` colors and avoid introducing new, unapproved shades of blue, green, or red.
4. **Don't clutter the layout**. Maintain generous whitespace with large section paddings (96px+) to let the content and grid background breathe.
5. **Don't use thin or timid typography for headings**. If it's a headline, it must be heavy and authoritative.
