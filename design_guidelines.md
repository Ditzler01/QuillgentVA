# Quillgent Virtual Assistant Agency - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from premium service platforms (Toptal, Contra) and SaaS landing pages (Linear, Vercel) - combining professional credibility with modern sophistication. The design should communicate reliability, efficiency, and human touch.

## Typography System
**Primary Font**: Poppins (via Google Fonts CDN)
- **Headings**: 
  - H1: font-bold text-5xl md:text-6xl lg:text-7xl (Hero headline)
  - H2: font-semibold text-3xl md:text-4xl lg:text-5xl (Section headers)
  - H3: font-semibold text-xl md:text-2xl (Card titles, subsections)
- **Body**: 
  - Large: text-lg md:text-xl leading-relaxed (Hero subtext, important CTAs)
  - Regular: text-base leading-relaxed (Standard content)
  - Small: text-sm (Captions, metadata)

## Layout & Spacing System
**Tailwind Spacing Units**: 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: gap-8 md:gap-12
- Container: max-w-7xl mx-auto px-6 md:px-8

## Page Structure (7 Sections)

### 1. Hero Section (90vh)
- **Layout**: Asymmetric - 60/40 split on desktop
- **Left**: Headline, subheadline, dual CTA buttons (primary + secondary with ghost style)
- **Right**: Large hero image showing professional virtual assistant at work (modern, bright workspace aesthetic)
- **Background**: Subtle grain texture overlay, large geometric accent shape in teal (#40929e) at 10% opacity
- **Buttons**: Blurred glass-morphism background (backdrop-blur-md bg-white/10 for dark, bg-black/10 for light)

### 2. Trust Bar
- Horizontal scroll/static row showing: client logos, "500+ businesses served", "99% satisfaction rate", "24/7 support"
- py-12, semi-transparent background

### 3. Services Section
- **Grid**: 3 columns (desktop), 1 column (mobile)
- **Cards**: Elevated with hover animations - lift effect (translateY + shadow increase)
- Each card: Icon (Heroicons), service title, 2-3 line description, "Learn more" link
- Services: Administrative Support, Customer Service, Content Management, Data Entry & Research, Social Media Management, Executive Assistance

### 4. How It Works (3-Step Process)
- Horizontal timeline layout with connecting line
- Numbered circles (1, 2, 3) with accent color
- Step cards with icon, title, description
- Steps: "1. Consultation" → "2. Match & Onboard" → "3. Deliver Excellence"

### 5. Why Quillgent (Benefits Grid)
- 2x2 grid on desktop, stacked mobile
- Each benefit: Large number/stat, headline, supporting text
- Stats: "10+ Years", "500+ Clients", "98% Retention", "50+ VAs"
- Include image: Team photo or office environment (right side, 50% width)

### 6. Testimonials Carousel
- 3 cards visible on desktop, auto-scroll with manual controls
- Each card: Quote, client name, company, photo (circular), 5-star rating
- Subtle animation on scroll/transition

### 7. CTA Section + Footer
- **CTA Block**: Centered, contained box with gradient background using accent color
  - Headline: "Ready to scale your business?"
  - Subtext, primary CTA button, secondary text link
- **Footer**: 
  - 4 columns: Company info, Services, Resources, Contact
  - Social icons, copyright, privacy/terms links
  - Newsletter signup field integrated

## Component Specifications

### Buttons
- **Primary**: Accent color background, white text, rounded-lg, px-8 py-4, font-semibold
- **Secondary/Ghost**: Transparent with border, hover fills with accent
- **Glass (Hero only)**: Blurred background, border, no hover color change

### Cards
- Border subtle (border-primary/10), rounded-2xl, p-8
- Hover: scale-[1.02], shadow-2xl, transition-all duration-300

### Icons
- **Library**: Heroicons (outline for general, solid for emphasis)
- Size: w-8 h-8 for card icons, w-12 h-12 for process steps

## Animations

### Scroll Animations (Framer Motion)
- Fade-in + slide-up on section entry (viewport trigger)
- Stagger children animations for grids (0.1s delay between items)

### Micro-interactions
- Button hover: scale-[1.05], shadow glow
- Card hover: lift effect
- Link hover: accent color underline animation

### Grain Texture
- Fixed pseudo-element overlay on body
- CSS: `background-image: url('data:image/svg+xml...')` with noise filter
- Opacity: 0.03 (subtle), mix-blend-mode: overlay
- Does not interfere with readability

## Images

### Hero Image
- **Type**: Professional workspace or virtual assistant in action
- **Placement**: Right 40% of hero section
- **Style**: Bright, modern, authentic (not stock-looking)
- **Treatment**: Subtle rounded corners (rounded-3xl), optional shadow

### Additional Images
- **Why Quillgent section**: Team/office photo (professional, friendly)
- **Testimonial cards**: Client headshots (circular, small)
- All images use object-cover, aspect ratios maintained

## Theme Integration
- Smooth theme transitions (transition-colors duration-200)
- Theme toggle in header (sun/moon icon, Heroicons)
- Accent color (#40929e) remains constant across themes
- Use provided CSS variables for all color references

## Responsive Breakpoints
- Mobile-first approach
- sm: 640px, md: 768px, lg: 1024px, xl: 1280px
- Hero switches to stacked layout on <md
- Grid columns collapse appropriately
- Typography scales down on mobile (refer to heading specs)

---

**Design Philosophy**: Clean, professional, trustworthy with subtle modern touches. The grain texture and strategic accent color usage add sophistication without overwhelming. Animations enhance but don't distract. Every section serves a clear purpose in the conversion funnel.