PROJECT OVERVIEW

Design a modern, fully responsive single-page restaurant & bar website for Relax Point Restaurant cum Bar, located near ICICI Bank, Majitar, Sikkim 737136. Contact: 07043577723. The design must be mobile-first, pixel-perfect on all screen sizes (320px to 2560px), with every element responsive and all buttons functional/clickable.


🖥️ FRAMES TO CREATE
Set up 3 frames for breakpoints:

Desktop – 1440px wide
Tablet – 768px wide
Mobile – 375px wide

Use Auto Layout on every frame and section. Enable Constraints (Left & Right = Scale) on all elements.

🎨 DESIGN SYSTEM
Color Palette:

Primary Background: #0D0D0D (deep black)
Section Alt Background: #1A1A1A
Accent Gold: #C9A84C
Accent Red: #A63228
Text Primary: #F5F5F5
Text Muted: #9E9E9E
Button Hover: #E6C76A

Typography:

Heading Font: Playfair Display – Bold, sizes 56/40/28/22px
Body Font: Inter – Regular/Medium, sizes 16/14/13px
Accent/Label Font: Montserrat – SemiBold, uppercase, letter-spacing 3px

Border Radius: 8px buttons, 12px cards, 0px nav
Shadows: 0px 8px 32px rgba(0,0,0,0.5) on cards

📐 SECTIONS (Top to Bottom — Single Page)

1. 🔝 STICKY NAVIGATION BAR

Full-width, #0D0D0D with 80% opacity blur (glassmorphism)
Left: Logo text — "Relax Point" in Playfair Display Gold + small tagline "Restaurant & Bar"
Right: Nav links — Home | Menu | About | Gallery | Contact (Inter, 14px, white)
Far right: CTA Button — "Reserve a Table" – filled gold pill button
Mobile: Hamburger menu (☰) that opens a full-screen drawer overlay
Constraint: Fixed position, always on top (z-index behavior noted)


2. 🦸 HERO SECTION

Full viewport height (100vh), dark overlay on background image (restaurant/bar ambiance photo placeholder)
Centered content:

Small label: WELCOME TO (Montserrat, gold, uppercase)
H1: "Relax Point" (Playfair Display, 72px desktop / 40px mobile, white)
Subheading: "Restaurant cum Bar" (gold italic)
Body text: "Where Every Evening Becomes an Experience — Majitar, Sikkim"
Two CTA buttons side by side:

Primary: "View Our Menu" (gold filled)
Secondary: "Call Us Now" (outlined white, links to tel:07043577723)




Scroll indicator arrow at bottom center (animated bounce)
Mobile: Stack buttons vertically, reduce font sizes


3. 🍽️ ABOUT / VIBE SECTION

Two-column layout (image left, text right) — stacks on mobile
Left: Rounded image placeholder (restaurant interior)
Right:

Label: OUR STORY
H2: "A Place to Unwind & Indulge"
Body: 2–3 lines describing ambiance, food, drinks
3 icon+stat cards inline: 🍛 Local Cuisine | 🍺 Premium Bar | 📍 Majitar, Sikkim
Button: "Explore Menu" (gold)




4. 🍜 MENU SECTION

Label: WHAT WE SERVE
H2: "Our Menu"
Tab switcher: Food | Drinks | Specials (pill tabs, gold active state)
Grid of 6 menu cards (2 cols mobile, 3 cols desktop):

Each card: image placeholder, dish name (Playfair), price (gold), short description (muted)
Hover state: slight scale + gold border glow


Below grid: "Full Menu on Request" text link


5. ✨ EXPERIENCE / FEATURES STRIP

Dark section #1A1A1A, full width
4 icon feature blocks in a row (2x2 on mobile):

🍷 Premium Spirits
🎵 Live Music Nights
🏔️ Himalayan Ambiance
🍱 Multi-Cuisine Kitchen




6. 🖼️ GALLERY SECTION

Label: MOMENTS
H2: "Gallery"
Masonry/bento grid: 6 image placeholders in varied sizes
Hover: dark overlay + zoom icon
Mobile: 2-column grid


7. ⭐ TESTIMONIALS

Centered, #0D0D0D background
H2: "What Our Guests Say"
Carousel of 3 review cards:

Star rating (gold ★★★★★)
Quote text in italic
Guest name + location


Dot navigation below carousel


8. 📍 CONTACT & LOCATION SECTION

Two-column: Info left, Map embed right (stacks on mobile)
Left column:

H2: "Find Us"
📍 Near ICICI Bank, Majitar, Sikkim 737136
📞 Clickable: 07043577723
🕐 Hours: Mon–Sun, 11 AM – 11 PM (placeholder)
CTA Button: "Get Directions" (links to Google Maps)
Second button: "Call Now" (tel link)


Right: Google Maps embed placeholder frame (rounded corners)


9. 🦶 FOOTER

Dark #080808, full width
Logo + tagline
Quick links row: Home | Menu | Gallery | Contact
Bottom bar: © 2025 Relax Point Restaurant cum Bar. All rights reserved. | Majitar, Sikkim
Social icons: Facebook, Instagram, WhatsApp (circle icon buttons, gold hover)


📱 RESPONSIVENESS RULES

Use Auto Layout with Wrap for all grids
Min-width on buttons: 160px, full-width on mobile
Images: Fill Container width, fixed aspect ratio
Nav collapses to hamburger below 768px
Font sizes reduce by ~30% on mobile
All padding: 80px desktop → 40px tablet → 24px mobile
Touch targets minimum 44×44px


🔘 INTERACTIVE COMPONENTS (Figma Prototyping)

Nav links → scroll to section (anchor behavior)
"Call Us Now" button → Interaction noted as tel:07043577723
"Get Directions" → External link to Google Maps
Hamburger → overlay menu opens
Tab switcher → show/hide menu card groups
Carousel dots → switch testimonial cards
Hover states on all buttons: color shift + subtle shadow


✅ COMMON ISSUES TO PRE-FIX

✔ No overflow/clipping on mobile — all text wraps correctly
✔ Images have aspect ratio locked, no distortion
✔ Buttons never overflow their containers
✔ Nav z-index above hero overlay
✔ Form inputs have visible focus states
✔ Color contrast AA accessible (white on dark bg)
✔ No horizontal scroll on any breakpoint
✔ All clickable elements have hover + active states defined