# EDP Packaging Website — Design Ideas

<response>
<probability>0.07</probability>
<text>
## Idea A — "Industrial Clarity" (Bauhaus Meets Modern B2B)

**Design Movement:** Bauhaus industrial modernism applied to B2B e-commerce

**Core Principles:**
1. Grid-breaking asymmetric layouts — content bleeds to edges, cards offset on diagonal
2. Typography as structure — oversized section labels act as visual anchors
3. Functional colour — colour only applied to communicate hierarchy, never decoration
4. Honest materials — kraft paper textures, corrugated board patterns as CSS backgrounds

**Color Philosophy:**
- Primary: Royal Blue `#1A3A6B` — authority, trust, British industrial heritage
- Accent: Sky Blue `#0288D1` — approachability, technology
- Warm: Kraft Amber `#C8860A` — cardboard, warmth, product authenticity
- Background: Off-white `#F8F6F1` — paper-like, light, breathable
- Text: Charcoal `#2D2D2D`

**Layout Paradigm:** Asymmetric split-column — hero has 60/40 split with animated SVG on right, product cards use masonry-style irregular grid

**Signature Elements:**
1. Animated floating cardboard boxes SVG in hero — boxes drift and rotate gently
2. Wavy SVG section dividers (like Boxtopia) in kraft amber/blue
3. "Corrugated" texture strip used as visual separator between sections

**Interaction Philosophy:** Hover states lift cards with subtle shadow; CTA buttons have a slight rightward arrow animation; phone number pulses gently in header

**Animation:** Boxes float in hero (CSS keyframe translateY + rotate, 4-6s loop); section entries use fade-up (framer-motion); nav links have underline-slide on hover

**Typography System:**
- Display: `Barlow Condensed` 700/800 — bold, industrial, space-efficient
- Body: `Inter` 400/500 — clean, readable
- Accent labels: `Barlow` 600 uppercase tracking-widest
</text>
</response>

<response>
<probability>0.06</probability>
<text>
## Idea B — "Friendly Expert" (Boxtopia-Inspired Illustrated)

**Design Movement:** Contemporary illustrated B2C/B2B hybrid — friendly, approachable, professional

**Core Principles:**
1. Illustrated SVG world — animated scenes with boxes, trucks, warehouses
2. Layered terrain dividers — rolling hills/waves between sections (exactly like Boxtopia)
3. Clean card-based product grid — each category has icon + title + description
4. Prominent trust signals — USP bar below hero, testimonials, certifications

**Color Philosophy:**
- Primary: Royal Blue `#1A3A6B`
- Hero background: Light sky blue `#E8F4FD` — airy, open, optimistic
- Accent: Bright sky `#0288D1`
- Warm: Kraft `#D4A853` — boxes, natural materials
- CTA green: `#2E7D32` — action, go, eco
- Background: Pure white sections alternating with very light blue `#F0F7FF`

**Layout Paradigm:** Stacked full-width sections with SVG wave/hill transitions; hero is full-width with illustrated box scene; product grid is 3-column card layout

**Signature Elements:**
1. Animated SVG hero with floating/bouncing cardboard boxes and a subtle landscape
2. Rolling wave SVG dividers between every major section
3. Icon-led USP strip (Fast Delivery, UK Manufacturer, 30+ Years, Bespoke Service)

**Interaction Philosophy:** Cards scale up 1.02 on hover; CTA buttons have wave-ripple effect; mobile menu slides in from right

**Animation:** Hero boxes float (translateY 0→-12px, 3s ease-in-out infinite alternate); wave dividers are static SVG; page sections fade-in on scroll

**Typography System:**
- Display: `Nunito` 800/900 — rounded, friendly, modern
- Body: `Nunito Sans` 400/600
- This is the CHOSEN design
</text>
</response>

<response>
<probability>0.05</probability>
<text>
## Idea C — "Precision Craft" (Swiss Grid + Craft Paper Aesthetic)

**Design Movement:** Swiss International Style meets craft/artisan packaging

**Core Principles:**
1. Strict typographic grid — everything aligned to invisible baseline grid
2. Monochrome + one accent — 95% blue/white/grey, kraft amber as single accent
3. Large product photography — images dominate, text is secondary
4. Micro-detail obsession — pixel-perfect spacing, hairline borders, precise alignment

**Color Philosophy:**
- Monochrome base: white, light grey `#F5F5F5`, mid grey `#9E9E9E`
- Single accent: Royal Blue `#1A3A6B`
- Kraft highlight: `#C8860A` used sparingly for price/CTA only

**Layout Paradigm:** Magazine-style editorial grid — hero is full-bleed image with overlaid text block; product pages use alternating image-left/text-right layout

**Signature Elements:**
1. Hairline rule separators between sections
2. Large typographic numerals as section counters (01, 02, 03...)
3. Kraft paper texture overlay at 8% opacity on hero

**Interaction Philosophy:** Minimal — hover states are colour shifts only, no scale transforms; focus on content clarity

**Animation:** Minimal — only essential fade-ins, no decorative motion

**Typography System:**
- Display: `DM Serif Display` — elegant, editorial
- Body: `DM Sans` 400/500
</text>
</response>

---

## CHOSEN DESIGN: Idea B — "Friendly Expert"

Boxtopia-inspired illustrated style with animated SVG box hero, rolling wave section dividers, clean card-based product grid, Royal Blue + Sky Blue + Kraft Amber palette, Nunito typography. Light, modern, approachable, professional.
