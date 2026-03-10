# CarBasix Landing Page Master Plan

## 1. Product positioning to use on the page

### Core positioning

CarBasix is not “an idea” or “coming soon”.
The landing page should present it as:

* a working platform
* built for vehicle importers, traders, and brokers
* designed to search multiple vehicle marketplaces in one interface
* able to filter opportunities quickly
* able to estimate total landed/import cost

### Main CTA

Use:

* **Try it free**

Secondary CTA ideas:

* **Book a demo**
* **See how it works**

### Message the page must communicate in the first screen

A visitor should immediately understand:

* this is a platform for professional import workflows
* it aggregates listings from multiple sources
* it helps compare options faster
* it helps estimate real total cost
* they can start using it now

---

## 3. Business goal checklist

Before design or coding, define these clearly.

### Conversion goal

* [ ] Primary conversion is **free trial signup**
* [ ] Secondary conversion is **demo request**
* [ ] Decide whether trial is instant signup or waitlist-gated
* [ ] Decide whether CTA goes to signup page, modal, or embedded form

### Audience

* [ ] Primary audience: importers
* [ ] Secondary audience: traders/resellers
* [ ] Optional audience: brokers / sourcing teams
* [ ] Decide which market geography is mentioned on page
* [ ] Decide whether page copy is English, Russian, or both

### Offer

* [ ] Define what “free” means
* [ ] Free trial duration decided
* [ ] Trial limitations decided
* [ ] Demo availability decided
* [ ] Optional “no credit card required” decided

---

## 4. Page structure checklist

This is the recommended layout for version 1.

## Header

Purpose: orientation + CTA

* [ ] Logo
* [ ] Small navigation
* [ ] Main CTA button: **Try it free**
* [ ] Optional secondary header link: **Book a demo**

Suggested nav:

* Product
* Benefits
* How it works
* FAQ

Do not overload the header.

---

## Hero section

Purpose: instant understanding + action

Include:

* [ ] strong headline
* [ ] supporting subheadline
* [ ] primary CTA
* [ ] secondary CTA
* [ ] product screenshot or UI animation
* [ ] short credibility line

Suggested content angle:

* headline focused on faster sourcing and smarter filtering
* subheadline focused on multi-source search + landed cost estimation

Example direction:

* **Find profitable import vehicles faster**
* **Search listings from multiple marketplaces, filter by importer criteria, and estimate total landed cost in one workflow.**

Hero checklist:

* [ ] headline under 10–12 words if possible
* [ ] subheadline clear, not buzzword-heavy
* [ ] real dashboard visual
* [ ] CTA visible without scrolling
* [ ] no generic stock hero image

---

## Problem section

Purpose: make visitors feel understood

Show the current workflow pain:

* [ ] too many tabs
* [ ] manual comparison
* [ ] spreadsheets for costing
* [ ] poor visibility across sources
* [ ] wasted time on weak-fit cars

Format:

* 3–5 cards or a split “before / after” block

---

## Solution section

Purpose: explain what CarBasix does

* [ ] explain aggregation of multiple sources
* [ ] explain filtering workflow
* [ ] explain result review process
* [ ] explain cost calculation
* [ ] explain save/mark/source link functionality

Format:

* one concise intro
* one product screenshot
* 3–4 explanatory bullets/cards

---

## Benefits section

Purpose: sell outcomes, not features

Recommended 4 benefit cards:

* [ ] Search multiple sources in one place
* [ ] Filter faster by importer criteria
* [ ] Estimate full landed cost automatically
* [ ] Review and prioritize better opportunities

Each card should include:

* [ ] short title
* [ ] one-sentence explanation
* [ ] simple icon

---

## How it works section

Purpose: make workflow obvious

3-step structure:

* [ ] Choose marketplaces and filters
* [ ] Review matched listings and compare options
* [ ] Check full import cost and act

This section works well with:

* [ ] step cards
* [ ] mini product mockups
* [ ] short animated flow

---

## Product feature highlight section

Purpose: show specific reasons to trust the product

Possible feature blocks:

* [ ] marketplace selector
* [ ] advanced filters
* [ ] listing table / result cards
* [ ] landed cost calculator
* [ ] source links and decision marking

Use cropped screenshots, not long text.

---

## Who it’s for section

Purpose: audience qualification

* [ ] Importers
* [ ] Car traders / resellers
* [ ] Brokers
* [ ] Sourcing teams

For each group, explain 1 practical use case.

---

## Trust section

Purpose: reduce friction

Since you may not yet have testimonials, use:

* [ ] “built for professional import workflows”
* [ ] list of supported source types / marketplaces
* [ ] note about real workflow automation
* [ ] founder/operator credibility
* [ ] product screenshot consistency
* [ ] FAQ that addresses objections

Optional future trust assets:

* [ ] customer logos
* [ ] quotes
* [ ] usage stats
* [ ] case studies

---

## FAQ section

Purpose: answer objections before signup

Recommended questions:

* [ ] Which marketplaces are supported?
* [ ] Is it for importers only?
* [ ] Does it calculate total landed/import cost?
* [ ] Can I review original listings?
* [ ] Is there a free trial?
* [ ] Do I need to install anything?
* [ ] Which markets is it best for?

---

## Final CTA section

Purpose: capture conversion again

* [ ] repeat main value proposition
* [ ] strong CTA: **Try it free**
* [ ] optional secondary CTA: **Book a demo**
* [ ] optional short reassurance line

---

## Footer

* [ ] logo
* [ ] product links
* [ ] privacy policy
* [ ] terms
* [ ] contact email
* [ ] social / Telegram / LinkedIn if relevant

---

## 5. Content production checklist

## Messaging

* [ ] final headline
* [ ] final subheadline
* [ ] one-sentence product definition
* [ ] 4 benefit statements
* [ ] 3-step workflow text
* [ ] FAQ answers
* [ ] CTA microcopy
* [ ] trust microcopy

## Product assets

* [ ] polished hero screenshot
* [ ] feature screenshots
* [ ] optional short interaction video/GIF
* [ ] logo in SVG
* [ ] favicon
* [ ] OG share image

## Supporting content

* [ ] privacy policy text
* [ ] terms text or placeholder
* [ ] support email
* [ ] trial/signup destination

---

## 6. Style and design checklist

### Visual style

Use:

* [ ] premium SaaS aesthetic
* [ ] dashboard-centric visuals
* [ ] clean grid
* [ ] restrained color palette
* [ ] subtle borders/shadows
* [ ] compact but readable UI

Avoid:

* [ ] dealership-style design
* [ ] overuse of car photography
* [ ] racing/tuning aesthetics
* [ ] glossy “startup template” look without product focus
* [ ] too much animation

### Typography

* [ ] one modern sans-serif family
* [ ] clear hierarchy
* [ ] large hero headline
* [ ] compact body text
* [ ] readable line lengths

### Colors

* [ ] neutral background
* [ ] one accent color for CTA
* [ ] muted support colors
* [ ] dashboard visuals consistent with product branding

### Components

* [ ] clean buttons
* [ ] soft cards
* [ ] icon + text feature blocks
* [ ] screenshot frames
* [ ] sticky header optional
* [ ] FAQ accordion optional

---

## 7. Recommended technical stack

## Main stack

* [ ] **Astro**
* [ ] **Tailwind CSS**
* [ ] static deployment
* [ ] Yandex Metrica
* [ ] optional simple form backend

Astro’s docs emphasize easy project creation through `npm create astro@latest`, and Astro sites are static by default, which makes it a natural fit for a fast marketing page. ([Astro Documentation][2])

### Why Astro here

* [ ] excellent for marketing/content pages
* [ ] strong performance
* [ ] minimal JS by default
* [ ] easy to add interactive islands only where needed
* [ ] simple static deploy flow

Astro’s islands architecture is especially useful here because the page can remain mostly static while interactive parts such as accordions, sliders, or mini demos are isolated. ([Astro Documentation][1])

---

## 8. Hosting options checklist

## Best free-first option: Cloudflare Pages

Good when you want:

* free hosting
* fast CDN delivery
* custom domain support
* simple Git deploy flow

Cloudflare Pages currently advertises a free tier with unlimited sites, unlimited static requests, unlimited bandwidth, and up to 500 builds per month; the limits docs also state 500 monthly builds on Free. ([pages.cloudflare.com][3])

Checklist:

* [ ] connect GitHub repo
* [ ] set build command
* [ ] set output directory
* [ ] attach custom domain
* [ ] enable HTTPS

## Simplest alternative: GitHub Pages

Good when you want:

* fully static hosting
* minimal operational work
* GitHub-native flow

Astro has an official deployment guide for GitHub Pages. ([Astro Documentation][4])

Checklist:

* [ ] repo ready
* [ ] GitHub Actions workflow configured
* [ ] custom domain configured if needed
* [ ] HTTPS enabled

## Own VPS option

Use this if you want:

* full control
* same VPS as app/backend
* no platform dependency

For Astro static output, VPS deployment is straightforward:

* [ ] build site locally or via CI
* [ ] upload `dist/`
* [ ] serve with Nginx
* [ ] attach SSL with Let’s Encrypt
* [ ] enable gzip/brotli and caching

Recommended practical choice:

* start with **Cloudflare Pages**
* move to **VPS only if you specifically need centralized infra control**

---

## 9. Analytics checklist

## Primary analytics: Yandex Metrica

Yandex Metrica’s official setup flow is to create a tag/counter, copy the code, and install it on all site pages. Their docs say the tag should be placed as close to the top of the page as possible. ([Yandex][5])

Implementation checklist:

* [ ] create Yandex Metrica tag
* [ ] configure tag settings
* [ ] install tag on all pages
* [ ] verify tag is firing
* [ ] enable session replay if desired
* [ ] define goals/events

Suggested goals:

* [ ] click on “Try it free”
* [ ] submit free trial form
* [ ] click on “Book a demo”
* [ ] scroll to pricing/FAQ/final CTA
* [ ] click on source/product demo elements
* [ ] form success page reached

Optional:

* [ ] add UTM tracking
* [ ] add separate analytics like Plausible or GA later

---

## 10. SEO and performance checklist

## SEO basics

* [ ] unique page title
* [ ] meta description
* [ ] one H1
* [ ] structured headings
* [ ] OG image
* [ ] favicon
* [ ] clean URLs
* [ ] sitemap
* [ ] robots.txt
* [ ] canonical URL

## Performance

* [ ] compress screenshots
* [ ] use modern image formats
* [ ] lazy-load below-the-fold images
* [ ] minimize client JS
* [ ] use islands only where needed
* [ ] prefetch fonts carefully
* [ ] test mobile speed

Astro’s performance orientation and static-first rendering make it well-suited for good Core Web Vitals on a marketing page. ([Astro][6])

---

## 11. Suggested file/content structure

For Astro, a clean starter structure could be:

* [ ] `src/pages/index.astro`
* [ ] `src/layouts/MainLayout.astro`
* [ ] `src/components/Header.astro`
* [ ] `src/components/Hero.astro`
* [ ] `src/components/Problem.astro`
* [ ] `src/components/Benefits.astro`
* [ ] `src/components/HowItWorks.astro`
* [ ] `src/components/FeatureShowcase.astro`
* [ ] `src/components/FAQ.astro`
* [ ] `src/components/FinalCTA.astro`
* [ ] `src/components/Footer.astro`
* [ ] `src/styles/global.css`
* [ ] `public/images/...`

Optional:

* [ ] `src/components/MetricTracker.astro`
* [ ] `src/components/TrialForm.astro`

---

## 12. Implementation step-by-step scenario for AI

Use this as a direct execution sequence.

## Phase 1 — Strategy

* [ ] Define target audience priority
* [ ] Confirm CTA wording: **Try it free**
* [ ] Confirm signup destination
* [ ] Define free-trial details
* [ ] Define page language
* [ ] Define marketplaces/regions to mention

## Phase 2 — Copy

* [ ] Generate 5 headline options
* [ ] Generate 5 subheadline options
* [ ] Generate hero CTA copy
* [ ] Write pain section
* [ ] Write benefits
* [ ] Write 3-step workflow section
* [ ] Write FAQ
* [ ] Write final CTA block

## Phase 3 — Wireframe

* [ ] Create desktop wireframe
* [ ] Create mobile wireframe
* [ ] Decide screenshot placements
* [ ] Decide animation or static visuals
* [ ] Decide section order

## Phase 4 — Design

* [ ] Choose palette
* [ ] Choose typography
* [ ] Design buttons/cards
* [ ] Prepare screenshot framing
* [ ] Design FAQ accordion
* [ ] Design CTA blocks
* [ ] Design footer

## Phase 5 — Build

* [ ] Initialize Astro project
* [ ] Add Tailwind
* [ ] Build layout
* [ ] Build sections
* [ ] Add responsiveness
* [ ] Add metadata
* [ ] Add form CTA links
* [ ] Add analytics tag

## Phase 6 — QA

* [ ] Check responsive layout
* [ ] Check CTA buttons
* [ ] Check forms
* [ ] Check analytics events
* [ ] Check image loading
* [ ] Check Lighthouse/Core Web Vitals
* [ ] Check spelling and message clarity

## Phase 7 — Launch

* [ ] Deploy to Cloudflare Pages or GitHub Pages
* [ ] Attach domain
* [ ] Enable SSL
* [ ] Verify page indexing basics
* [ ] Verify analytics collection
* [ ] Test CTA flow end to end

## Phase 8 — Improve after launch

* [ ] test new headlines
* [ ] improve hero visual
* [ ] refine FAQ
* [ ] add social proof
* [ ] add video demo
* [ ] add secondary pages later

