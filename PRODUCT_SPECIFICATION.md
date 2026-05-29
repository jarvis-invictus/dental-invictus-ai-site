# Product Specification Document
## Invictus AI — Corporate Website

| Field            | Detail                                      |
|------------------|---------------------------------------------|
| **Product**      | Invictus AI Corporate Website               |
| **Domain**       | [invictus-ai.in](https://invictus-ai.in)    |
| **Version**      | 0.1.0                                       |
| **Date**         | February 13, 2026                           |
| **Stack**        | Next.js 16 · React 19 · Tailwind CSS 4 · Framer Motion |

---

## 1. Product Purpose

Invictus AI is a **service-based AI agency** that builds custom AI automation, intelligent agents, and digital infrastructure for modern businesses. This website serves as the company's **primary digital storefront** — designed to:

- Communicate the brand's positioning: *"Enterprise-Grade AI. Startup Speed."*
- Showcase the full range of 7 service offerings
- Convert visitors into **booked strategy calls** (via GoHighLevel / LeadConnector)
- Establish credibility through client case studies
- Rank on search engines for AI automation–related keywords in India

---

## 2. Target Audience

| Segment                     | Description                                                    |
|-----------------------------|----------------------------------------------------------------|
| **SME Founders / CEOs**     | Non-technical business owners looking to automate operations   |
| **Operations Managers**     | Teams drowning in manual processes and seeking AI solutions    |
| **Marketing Teams**         | Seeking AI-powered lead gen, WhatsApp campaigns, digital ads   |
| **Healthcare / Dental**     | Clinics needing voice AI, appointment booking, reduced no-shows|
| **Travel / Real Estate**    | Industries requiring 24/7 lead capture and automated follow-ups|

---

## 3. Site Architecture

The website is a **single-page application (SPA)** with smooth scroll navigation. All content lives on one route (`/`), organized into the following sections from top to bottom:

```
┌────────────────────────────────┐
│          Navbar (fixed)        │
├────────────────────────────────┤
│          Hero Section          │
├────────────────────────────────┤
│        Who We Are              │
├────────────────────────────────┤
│     Services (What We Offer)   │
│  └── Service Expansion Modal   │
├────────────────────────────────┤
│         Use Cases              │
├────────────────────────────────┤
│      How We Work (Timeline)    │
├────────────────────────────────┤
│    Client Stories / Carousel   │
├────────────────────────────────┤
│           Footer               │
└────────────────────────────────┘
```

---

## 4. Feature Specification

### 4.1 Navbar

| Property              | Detail                                                  |
|-----------------------|---------------------------------------------------------|
| **Type**              | Fixed / sticky top navigation                           |
| **Scroll Behavior**   | Transparent on top → glass-morphism background on scroll (`bg-white/90 backdrop-blur-md`) |
| **Logo**              | Clickable logo image (`/logo.png`), links to `/`        |
| **Nav Links**         | Services (`#services`), About Us (`#who-we-are`), Use Cases (`#use-cases`) |
| **CTA Button**        | "Book Strategy" → opens external LeadConnector booking page in new tab |
| **Mobile Menu**       | Hamburger toggle (Menu / X icons), full-width dropdown with nav links + CTA |
| **Responsiveness**    | Desktop nav hidden on mobile; mobile menu hidden on desktop (`md:` breakpoint) |

> **Test Points:**
> - [ ] Navbar turns opaque on scroll (past 10px)
> - [ ] All anchor links scroll to correct sections
> - [ ] Mobile hamburger opens/closes correctly
> - [ ] "Book Strategy" opens `https://api.leadconnectorhq.com/widget/booking/ueskMJ9Ug4gjlImoO5RB` in a new tab
> - [ ] Logo links back to homepage
> - [ ] Mobile nav links close the menu on click

---

### 4.2 Hero Section

| Property              | Detail                                                  |
|-----------------------|---------------------------------------------------------|
| **Headline**          | "We Engineer Intelligent Business Systems."             |
| **Tagline Badge**     | "Enterprise-Grade AI. Startup Speed." (rotated sticker) |
| **Sub-headline**      | Describes the sweet spot between a Tech Consultancy and an AI Lab |
| **Primary CTA**       | "Book a Strategy Call" → external booking link (new tab) |
| **Secondary CTA**     | "View Solutions" → scrolls to `#services`               |
| **Visual Right-Side** | 3 animated floating bento cards (ROI +300%, Active Agents Live, Code snippet) |
| **Animations**        | Framer Motion slide-in (left content, right visuals), continuous float on cards |
| **Background**        | 3 blurred gradient blobs (purple, cyan, lime) for depth |

> **Test Points:**
> - [ ] Both CTAs are clickable and functional
> - [ ] Floating cards animate continuously
> - [ ] Hero renders correctly on desktop and mobile (right visual hidden on mobile via `hidden lg:block`)
> - [ ] Text is readable against background blobs

---

### 4.3 Who We Are Section

| Property              | Detail                                                  |
|-----------------------|---------------------------------------------------------|
| **ID**                | `#who-we-are`                                           |
| **Header**            | "Who We Are" sticker with decorative tape strip         |
| **Layout**            | 2-column grid: left = manifesto text, right = visual    |
| **Left Content**      | Headline ("We build systems, not just software"), description, 3 numbered pillars: Custom AI Agents, Enterprise Integration, ROI-First Engineering |
| **Right Content**     | Polaroid-style terminal visual showing `invictus init` animation with stats badges (99.9% Uptime, <50ms Latency) |
| **Caption**           | Handwriting-font label: "System Architecture v2.0"      |
| **Background**        | Dot-grid pattern at 3% opacity                          |

> **Test Points:**
> - [ ] Section scrolls to when "About Us" nav link is clicked
> - [ ] Terminal animation plays on viewport entry (typewriter effect)
> - [ ] Stats badges (99.9%, <50ms) animate in with spring effect
> - [ ] Responsive: stacks to single column on mobile
> - [ ] Paperclip icon displays correctly above the visual

---

### 4.4 Service Grid (What We Offer)

| Property              | Detail                                                  |
|-----------------------|---------------------------------------------------------|
| **ID**                | `#services`                                             |
| **Header**            | "What We Offer" sticker with pin decoration             |
| **Layout**            | 4-column grid (`md:2, lg:4`), consulting card spans 2 columns |
| **Cards (7 total)**   | Each has: colored sticker header, description note, "View" button |
| **Click Behavior**    | Clicking any card opens the **Service Expansion Modal** |
| **Custom Event**      | Listens for `openService` custom event (dispatched from Footer links) to auto-open a specific service |
| **Animations**        | Staggered fade-in on viewport, hover lift (`y: -5`), shadow transitions |

#### 7 Services:

| #  | Service ID    | Title                          | Color       |
|----|---------------|--------------------------------|-------------|
| 1  | `consulting`  | AI Consulting & Strategy       | Lime/Amber  |
| 2  | `web-dev`     | Web Design & Development       | Blue        |
| 3  | `agents`      | AI Conversational Agents       | Purple      |
| 4  | `voice`       | Voice AI Solutions             | Orange      |
| 5  | `whatsapp`    | WhatsApp Business Automation   | Green       |
| 6  | `automation`  | AI Automation Workflows        | Cyan        |
| 7  | `marketing`   | Digital Marketing              | Pink        |

> **Test Points:**
> - [ ] All 7 service cards render with correct titles, colors, and icons
> - [ ] Consulting card spans 2 columns on `md+` screens
> - [ ] Clicking a card opens the ServiceExpansion modal
> - [ ] "View" button inside each card links to external booking page
> - [ ] Footer service links dispatch `openService` event and auto-open correct card
> - [ ] Staggered animation plays on scroll into viewport
> - [ ] Cards have hover lift effect

---

### 4.5 Service Expansion Modal

| Property              | Detail                                                  |
|-----------------------|---------------------------------------------------------|
| **Trigger**           | Clicking any service card in the grid                   |
| **Backdrop**          | Full-screen dark overlay (`bg-bond-navy/90 backdrop-blur-md`) |
| **Layout**            | 2-panel: Left (40%) = title + description + CTA, Right (60%) = detailed content |
| **Left Panel**        | Service title (large), description in handwriting font, "Start Project" CTA (links to booking) |
| **Right Panel**       | The Challenge (problem), The Solution, Execution Plan (numbered steps), Expected Outcome |
| **Close**             | X button in top-right corner, or clicking backdrop       |
| **Animation**         | Spring scale + fade in/out via `AnimatePresence`         |

> **Test Points:**
> - [ ] Modal opens with correct service data for each of the 7 services
> - [ ] Backdrop click closes the modal
> - [ ] X button closes the modal
> - [ ] "Start Project" CTA links to external booking page
> - [ ] All fields (problem, solution, steps, result) render correctly for each service
> - [ ] Modal is scrollable on smaller viewports
> - [ ] Modal animates in/out smoothly

---

### 4.6 Use Cases Section

| Property              | Detail                                                  |
|-----------------------|---------------------------------------------------------|
| **ID**                | `#use-cases`                                            |
| **Header**            | "Use Cases" sticker (cyan background)                   |
| **Layout**            | 12-column grid: Left (4 cols) = tab list, Right (8 cols) = content panel |
| **Tabs (7)**          | One for each service, with colored icons and labels     |
| **Content Panel**     | Title, intro paragraph, 4 bullet points with check icons, 3 stats cards |
| **Tab Switching**     | Click to switch; active tab highlighted with border + pulse dot |
| **Animation**         | Content slides/rotates with `AnimatePresence mode="wait"` |

#### Stats per Use Case (sample):

| Service               | Stat 1      | Stat 2       | Stat 3       |
|------------------------|-------------|--------------|--------------|
| AI Consulting          | 3-5x ROI   | 70% fail rate| 30% faster   |
| Web Development        | 200% lift   | 100:1 UX ROI | 70% mobile   |
| AI Agents              | 80% auto    | 391% convert | $0.50/chat   |
| Voice AI               | 30% missed  | $1K+ lost    | 60% fewer    |
| WhatsApp               | 98% open    | 45% CTR      | 25% recovery |
| Automation             | 5.4x return | 90% less err | 50% costs    |
| Digital Marketing      | 200% ROI    | 5.3x SEO     | 6x profitable|

> **Test Points:**
> - [ ] All 7 tabs render and are clickable
> - [ ] Switching tabs updates the right panel with the correct content
> - [ ] Stats display correct values per service
> - [ ] Active tab shows "Currently Viewing" label and pulse indicator
> - [ ] Smooth animation on tab switch (no jarring transitions)
> - [ ] Responsive: tabs stack above content on mobile

---

### 4.7 How We Work (Process Timeline)

| Property              | Detail                                                  |
|-----------------------|---------------------------------------------------------|
| **ID**                | `#process`                                              |
| **Header**            | "How We Work" sticker (lime background)                 |
| **Sub-header**        | "A proven 6-step framework that takes you from first call to full automation." |
| **Layout**            | 6-column grid on desktop, 2-column on tablet, 1-column on mobile |
| **Connector Line**    | Horizontal gradient line on desktop connecting all steps |
| **CTA**               | "Book a Strategy Call" button at the bottom              |

#### 6 Steps:

| Step | Title            | Color   | Description                                              |
|------|------------------|---------|----------------------------------------------------------|
| 01   | Discovery Call   | Purple  | Discuss goals, pain points, success metrics              |
| 02   | AI Audit         | Lime    | Deep dive into workflows for automation opportunities    |
| 03   | Custom Proposal  | White   | Tailored roadmap with milestones, timelines, ROI         |
| 04   | Build & Test     | Cyan    | Agile development with weekly demos                      |
| 05   | Launch & Training| Navy    | Deploy, onboard team, ensure smooth operation            |
| 06   | Ongoing Support  | Pink    | 24/7 monitoring, optimization, scaling                   |

> **Test Points:**
> - [ ] All 6 steps render with correct icons, colors, titles, descriptions
> - [ ] Connector line animates in on desktop (gradient scaleX animation)
> - [ ] Step badges show "Step 01" through "Step 06"
> - [ ] Icons have hover rotate/scale effect
> - [ ] CTA button links to external booking page
> - [ ] Timeline stacks vertically on mobile

---

### 4.8 Client Stories / Testimonials Carousel

| Property              | Detail                                                  |
|-----------------------|---------------------------------------------------------|
| **ID**                | `#testimonials`                                         |
| **Header**            | "Client Stories" sticker (purple background, white text)|
| **Sub-header**        | "Real businesses. Real results."                        |
| **Carousel**          | Auto-rotates every 6 seconds, pauses on hover          |
| **Navigation**        | Left/right arrow buttons + dot indicators               |
| **Card Layout**       | Left (3/5) = text content, Right (2/5) = hero stat visual |

#### 4 Client Stories:

| Client             | Industry         | Key Stat      | Services Count |
|--------------------|------------------|---------------|----------------|
| The Rich Royals    | Forex Institute  | 2x Brand Reach| 4 services     |
| Elite Tours & Travel| Travel & Tourism| 60% Less Work | 5 services     |
| Smile Dental Clinic| Healthcare       | 45% Fewer No-Shows | 3 services |
| Bloom Interio      | Interior Design  | 3x More Leads | 2 services     |

> **Test Points:**
> - [ ] All 4 stories render correctly with unique colors and data
> - [ ] Auto-rotation works (6-second interval)
> - [ ] Auto-rotation pauses when mouse hovers over the card area
> - [ ] Left/right arrows navigate correctly (wraps around)
> - [ ] Dot indicators highlight the current story
> - [ ] Clicking a dot navigates to the corresponding story
> - [ ] Client website links open in new tab (where available)
> - [ ] Direction animation (slide left/right) corresponds to navigation direction
> - [ ] Service icons render correctly on the right panel

---

### 4.9 Footer

| Property              | Detail                                                  |
|-----------------------|---------------------------------------------------------|
| **ID**                | `#contact`                                              |
| **Layout**            | 4-column grid: Brand (2 cols), Services links (1 col), Contact info (1 col) |
| **Brand Column**      | Logo + tagline description                              |
| **Services Column**   | 7 clickable service names → scrolls to card & dispatches `openService` event |
| **Contact Column**    | Location ("Available Globally, Based in India"), Phone (+91 9699577641), Email (sahilbagul7641@gmail.com) |
| **Bottom Bar**        | Copyright © 2026 + Privacy Policy / Terms links (placeholder `#`) |
| **Interaction**       | Service links scroll to the specific card and open it via custom event |

> **Test Points:**
> - [ ] Logo is clickable and links to homepage
> - [ ] All 7 service links scroll to the correct service card and open the expansion modal
> - [ ] Email link opens mailto
> - [ ] Phone number displays correctly
> - [ ] Privacy Policy and Terms of Service links exist (currently `#` placeholders)
> - [ ] Copyright year is dynamically generated
> - [ ] Footer responds correctly on all breakpoints

---

## 5. Design System & Visual Language

### 5.1 Color Palette

| Token           | Hex / Value       | Usage                        |
|-----------------|-------------------|------------------------------|
| `bond-navy`     | Dark navy          | Primary text, buttons, backgrounds |
| `bond-lime`     | Bright yellow-green| Accent, highlights, CTAs, sticker headers |
| `bond-purple`   | Vivid purple       | Service accent, icons, decorative |
| `bond-cyan`     | Bright cyan        | Secondary accent, links, automation |
| `bond-orange`   | Warm orange        | Voice AI accent              |
| `bond-pink`     | Hot pink           | Marketing accent, support    |
| `bond-gray`     | Muted slate        | Body text, descriptions      |

### 5.2 Typography

| Font                     | Variable             | Usage                     |
|--------------------------|----------------------|---------------------------|
| **Inter**                | `--font-inter`       | All body text, headings   |
| **Nothing You Could Do** | `--font-handwriting` | Decorative labels, captions |

### 5.3 Design Motifs

- **Sticker/Collage Aesthetic** — Section headers styled as physical stickers with tape, pins, and rotation
- **Glassmorphism** — Navbar on scroll, frosted glass panels  
- **Shadow System** — Custom `shadow-sticker` and `shadow-sticker-lime/purple` for 3D paper-like depth
- **Micro-Rotations** — Elements rotated 1–3° for organic, hand-placed feel
- **Dotted Backgrounds** — Radial-gradient dot patterns for texture

### 5.4 Animations (Framer Motion)

| Animation Type          | Where Used                                     |
|-------------------------|------------------------------------------------|
| Slide-in (x/y offset)  | Hero content, WhoWeAre terminal lines          |
| Continuous float        | Hero bento cards (y-axis oscillation)           |
| Stagger on viewport     | Service cards, timeline steps                   |
| Hover rotate/scale      | Sticker headers, timeline icons, buttons        |
| Spring scale            | Service modal open/close, stat badges           |
| Slide + rotate (tab)    | Use cases content panel switching               |
| Carousel slide          | Testimonials (directional x-offset + rotation)  |

---

## 6. SEO & Technical Specifications

### 6.1 Metadata

| Field                | Value                                                              |
|----------------------|--------------------------------------------------------------------|
| Title (default)      | "Invictus AI \| Enterprise-Grade AI. Startup Speed."               |
| Description          | "Custom AI automation, intelligent agents, and digital infrastructure for modern businesses..." |
| Keywords             | AI automation, AI agency, intelligent agents, AI chatbots, etc.    |
| Locale               | `en_IN`                                                            |
| Category             | Technology                                                         |

### 6.2 Open Graph / Social

- OG image configured at `{SITE_URL}/og-image.png` (1200×630)
- Twitter card: `summary_large_image`
- Locale: `en_IN`

### 6.3 Structured Data (JSON-LD)

- `@type`: Organization
- Includes: name, URL, logo, description, founding date (2024), contact point (sales), offers (3 core services)

### 6.4 Technical SEO Files

| File         | Purpose                                |
|--------------|----------------------------------------|
| `sitemap.ts` | Auto-generates XML sitemap (4 URLs)    |
| `robots.ts`  | Allows all crawlers, disallows `/api/` and `/_next/` |

### 6.5 Analytics

- **Google Tag Manager** (`GTM-TB9SQLN2`) — loaded via `afterInteractive` strategy
- **Google Search Console** — verification code configured

> **Test Points:**
> - [ ] `<title>` tag renders correctly in browser tab
> - [ ] OG meta tags present in page source
> - [ ] JSON-LD structured data is valid (test via Google Rich Results Tool)
> - [ ] `sitemap.xml` is accessible and well-formed
> - [ ] `robots.txt` is accessible and disallows correct paths
> - [ ] GTM script loads after page becomes interactive

---

## 7. External Integrations

| Integration           | URL / ID                                                | Purpose                    |
|-----------------------|---------------------------------------------------------|----------------------------|
| **LeadConnector (GHL)** | `https://api.leadconnectorhq.com/widget/booking/ueskMJ9Ug4gjlImoO5RB` | Strategy call booking CTA  |
| **Google Tag Manager**| `GTM-TB9SQLN2`                                          | Analytics & tracking       |
| **Google Search Console** | Verification code in metadata                       | Search indexing            |

> **Test Points:**
> - [ ] All booking links open in a new tab and load the correct booking widget
> - [ ] GTM container loads and fires correctly (check via GTM debug mode)
> - [ ] No CORS or mixed-content errors in console

---

## 8. Responsive Design Requirements

| Breakpoint  | Behavior                                                    |
|-------------|-------------------------------------------------------------|
| **Mobile** (`<768px`)  | Single column layouts, mobile hamburger menu, hero visual hidden, timeline stacks, carousel full-width |
| **Tablet** (`md: 768px+`) | 2-column grids, service cards 2-col, timeline 2-col    |
| **Desktop** (`lg: 1024px+`) | Full layouts — 4-col service grid, 6-col timeline, 12-col use cases, side-by-side hero |

> **Test Points:**
> - [ ] Website is fully functional at 320px width (smallest common mobile)
> - [ ] No horizontal overflow at any breakpoint
> - [ ] Touch interactions work on mobile (tap to open services, swipe carousel)
> - [ ] Text remains readable at all sizes
> - [ ] All interactive elements have appropriate touch target sizes (≥44px)

---

## 9. Performance Requirements

| Metric                | Target                |
|-----------------------|-----------------------|
| Lighthouse Score      | ≥ 90 (Performance)    |
| First Contentful Paint| < 1.5s                |
| Largest Contentful Paint | < 2.5s             |
| Cumulative Layout Shift | < 0.1               |
| Bundle Size           | Optimized via Next.js tree-shaking |
| Image Optimization    | Next.js `<Image>` or optimized assets |
| Font Loading          | Google Fonts with `next/font` (no layout shift) |

> **Test Points:**
> - [ ] Run Lighthouse audit — all scores ≥ 90
> - [ ] No render-blocking resources
> - [ ] Fonts load without FOUT/FOIT
> - [ ] No unused JavaScript in production build
> - [ ] Images are properly optimized and lazy-loaded

---

## 10. Accessibility Requirements

| Requirement           | Status / Notes                                          |
|-----------------------|---------------------------------------------------------|
| Semantic HTML         | Uses `<nav>`, `<section>`, `<footer>`, `<main>`        |
| Alt Text              | Logo images have alt text                               |
| Keyboard Navigation   | All interactive elements should be reachable via Tab    |
| Focus Indicators      | Buttons have `focus-visible:ring-2` style               |
| Color Contrast        | Primary text (navy on white) has high contrast          |
| ARIA Labels           | Modal close button, carousel controls need ARIA labels  |

> **Test Points:**
> - [ ] Tab through entire page — all links and buttons are reachable
> - [ ] Screen reader announces page structure correctly
> - [ ] Modal traps focus when open
> - [ ] Carousel arrows have accessible labels
> - [ ] Color contrast ratios meet WCAG AA standard (≥4.5:1 for text)
> - [ ] No content depends solely on color to convey meaning

---

## 11. Complete Test Checklist Summary

### Navigation & Routing
- [ ] All navbar anchor links scroll to correct sections
- [ ] Mobile menu opens, navigates, and closes properly
- [ ] Logo returns to top of page
- [ ] Smooth scroll behavior works across all links

### Service Grid & Modal
- [ ] All 7 services render correctly
- [ ] Clicking each service opens the correct modal
- [ ] Modal displays correct challenge, solution, steps, and outcome
- [ ] Modal close via X button and backdrop click
- [ ] Footer service links trigger scroll + modal open via custom event

### Use Cases Tabs
- [ ] All 7 tabs switch content correctly
- [ ] Stats render accurate values
- [ ] Animation transitions smoothly between tabs

### Process Timeline
- [ ] All 6 steps render with correct data and colors
- [ ] Connector line animation plays on desktop
- [ ] CTA button is functional

### Client Stories
- [ ] Carousel auto-rotates every 6 seconds
- [ ] Pause on hover works
- [ ] Arrow navigation works (forward and backward, with wrap-around)
- [ ] Dot indicators are synchronized with active story

### External Links
- [ ] All "Book a Strategy Call" / "Start Project" buttons open the booking widget
- [ ] Client website links open correctly in new tab
- [ ] Email `mailto:` link works

### SEO & Meta
- [ ] Title, description, OG tags, and Twitter cards are correct
- [ ] JSON-LD structured data is valid
- [ ] Sitemap and robots.txt are accessible

### Cross-Browser & Device
- [ ] Works on Chrome, Firefox, Safari, Edge
- [ ] Works on iOS Safari and Android Chrome
- [ ] No console errors in production build

---

*Document generated from codebase analysis on February 13, 2026.*
*Source: `/our website/Claude's website/` — Next.js 16 project*
