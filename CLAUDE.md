# CLAUDE.md — Everyday Micro-Rituals

## Project Overview

Website for the **Everyday Micro-Rituals** book project by the Centre for Positive Health Sciences, RCSI University of Medicine and Health Sciences, Dublin, Ireland.

This is a static marketing and contact site — no database, no auth, no dashboard. The purpose is to introduce the book project, showcase the team, invite contributions, and collect contact form submissions via Formspree.

**Principal Investigator:** Prof. Christian van Nieuwerburgh (PhD), RCSI
**Co-Investigator:** Kristina Shea, RCSI / University of Bologna
**Project Duration:** March 2026 – January 2027
**Publication:** Open-access e-book via RCSI Library, launched at Positive Health Summit, January 2027

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS custom properties |
| Fonts | Google Fonts via next/font/google |
| Contact Form | Formspree (https://formspree.io/f/YOUR_FORM_ID) |
| Deployment | Render (static export or Node server) |

**No database. No authentication. No CMS.**

---

## Design Language

This site uses a **Japanese editorial aesthetic** — refined, minimal, structured. Key principles:

- **Zero border-radius** on all form inputs, buttons, and boxes (sharp edges throughout)
- **Square "mon" marks** instead of circular avatars (referencing Japanese family crests)
- **Vertical text strips** on the left side of key sections (like Japanese book spines)
- **Ghosted kanji watermarks** — large, very low-opacity kanji behind section content:
  - Hero: 日 (day/sun)
  - About: 水 (water — fits the blue palette)
  - Contribute: 参加 (participation)
- **Japanese section numbering:** ○○一  ○○二  ○○三  ○○四
- **Japanese counting for steps:** 一  二  三
- **Shippori Mincho B1** for all display headings and large numerals
- **Zen Kaku Gothic New** for all body copy, labels, and UI text
- **Hairline rules** (1px or 0.5px) as dividers — never thick borders
- Subtle **seigaiha (wave fan) tile pattern** on the hero background

---

## Colour Tokens

All colours are defined as CSS custom properties in `src/app/globals.css` and referenced throughout. Do not hardcode hex values in components — always use the CSS variable.

```css
/* Backgrounds */
--mist:        #EEF3F8;   /* lightest blue-white — main bg */
--mist-d:      #DDE8F2;   /* slightly deeper — section alt bg */
--mist-dd:     #CDDAEA;   /* deeper still */
--paper:       #F5F9FC;   /* near-white with blue tint — cards, form */

/* Dark blues */
--navy:        #0D2137;   /* deep ink navy — hero panel, footer, about */
--navy-m:      #152D4A;   /* mid navy — hover states */
--navy-l:      #1E3F63;   /* lighter navy — contribute banner */

/* Accent blues */
--accent:      #2B6CB0;   /* medium blue — kickers, borders, focus rings */
--accent-l:    #4A90D9;   /* lighter — stats on dark bg, quote lines */
--accent-xs:   #C8DDF0;   /* very pale — phase tag borders */
--accent-mist: #E4F0F9;   /* near-white — phase tag backgrounds */

/* Supporting */
--slate:       #547792;   /* muted blue-grey */
--slate-l:     #89A8C0;   /* lighter slate */
--fog:         #D4E4EF;   /* borders and dividers */

/* Text */
--ink:         #0A1929;   /* primary text */
--ink-m:       #1A3048;   /* slightly lighter */
--ink-s:       #4A6278;   /* secondary text */
--ink-xs:      #8BAABB;   /* muted / placeholder */
```

---

## Typography

```css
/* Display — all headings, large numbers, quotes */
font-family: 'Shippori Mincho B1', serif;

/* Body — all body copy, labels, UI text, nav */
font-family: 'Zen Kaku Gothic New', sans-serif;

/* Accent italic — pull quotes, team credentials */
font-family: 'Shippori Mincho', serif;
```

Font weights in use:
- Shippori Mincho B1: 400, 600, 700, 800
- Shippori Mincho: 400, 500, 600
- Zen Kaku Gothic New: 300, 400, 500, 700

---

## Page Structure

```
src/app/
├── layout.tsx          — Root layout: fonts, metadata, Navbar, Footer
├── page.tsx            — Home / Hero
├── about/page.tsx      — About the Book
├── project/page.tsx    — How It Works (3 phases)
├── team/page.tsx       — The Team
├── contribute/page.tsx — Contribute Banner + steps
└── contact/page.tsx    — Contact Form (Formspree)
```

All pages use the App Router. No `pages/` directory. No `getServerSideProps` or `getStaticProps` — use React Server Components where possible.

---

## Component Library

```
src/components/
├── Navbar.tsx        — Fixed nav: logo mark + site title + nav links + CTA
├── Footer.tsx        — Dark navy footer: logo, links, copyright
├── VertStrip.tsx     — Left vertical text strip with accent dot markers
├── SectionKicker.tsx — Small uppercase accent-coloured label with left rule
├── FadeIn.tsx        — Scroll-triggered fade-in via IntersectionObserver
├── MonMark.tsx       — Square Japanese-style "mon" crest mark (team avatars)
├── PhaseItem.tsx     — Single phase row (index + title + tag + body text)
├── TeamCard.tsx      — Full team member card with mon, bio, tags
└── ContactForm.tsx   — Formspree contact form with success state
```

---

## Key Sections & Content

### Hero (page.tsx)
- Left vertical strip (RCSI · 2026 / Micro-Rituals / Well-being)
- Ghost kanji: 日 at ~9rem, very low opacity
- Kicker: "A Book Project · RCSI 2026"
- H1: "Everyday Micro-Rituals" (em = accent blue, italic)
- Subtitle: "Simple Practices for Well-being That Fit into Your Day"
- Body copy: brief project description
- CTA buttons: "Share Your Practice" (navy fill) + "About the book" (text link)
- Right panel (dark navy bg): quote block with accent left border, fact rows (voices, duration, publication, launch date)
- Corner mark: small square with 〇 glyph

### About (about/page.tsx)
- Dark navy background, ghost kanji 水
- Section number: ○○一
- Stats grid: 30–40 voices / Free / 20′ / '27

### Project — How It Works (project/page.tsx)
- Section number: ○○二
- Three phase rows: 01 A Brief Conversation / 02 Research & Origins / 03 A Book for Everyone
- Each row: index label + title + accent-bordered tag pill + body text
- Hover state: paper background, padding shift

### Team (team/page.tsx)
- Section number: ○○三
- Two-column grid with 1px border

**Christian van Nieuwerburgh** — Principal Investigator
- Professor of Coaching & Positive Psychology, RCSI
- Global Director, Growth Coaching International
- Principal Fellow, Centre for Wellbeing Science, University of Melbourne
- Honorary CollectivEd Fellow, Leeds Beckett University
- ICF Professional Certified Coach, EMCC Master Practitioner
- Author: An Introduction to Coaching Skills: A Practical Guide (3rd ed.)
- Co-editor: From Surviving to Thriving: A Student's Guide to Feeling and Doing Well at University
- Tags: Positive Psychology, Coaching, ICF · EMCC, RCSI, Melbourne · Leeds Beckett

**Kristina Shea** — Co-Investigator
- 15+ years finance leadership background; former Deputy Director of a major government agency; international non-profits
- Masters at Pepperdine University — discovered Appreciative Inquiry
- Gallup certified, ICF-certified coach, UPenn MAPP program graduate
- PhD candidate, University of Bologna — studying leader and leadership development in the Italian and European context
- Focus: leadership interventions that enhance collective well-being
- Academic publications, book chapters, proven well-being interventions
- Tags: Leadership Development, Positive Psychology, Appreciative Inquiry, ICF Coach, Gallup, UPenn MAPP, Bologna · RCSI

### Contribute (contribute/page.tsx)
- Dark navy-l background, ghost kanji 参加
- Japanese counting steps: 一 Get in touch / 二 A conversation / 三 Into the book
- CTA: "Get in Touch →" (mist button)

### Contact (contact/page.tsx)
- Left vertical strip
- Section kicker + heading: "We'd love to hear from you"
- Contact details: Institution / Location / Duration / Publication
- Form fields: First name, Last name, Email, Subject (dropdown), Connection to RCSI, Message, Consent checkbox
- Formspree endpoint: https://formspree.io/f/YOUR_FORM_ID
- Success state: square mon mark with ✓, "Received with gratitude"

---

## Contact Form — Subject Dropdown Options

```
- Sharing my micro-ritual
- Learning more about the project
- Research collaboration
- Media enquiry
- Something else
```

---

## Form Setup (Formspree)

The contact form POSTs to Formspree. The form ID needs to be added to `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

In `ContactForm.tsx`, use:

```tsx
action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`}
```

Or hardcode the full URL directly if preferred.

---

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

---

## Deployment

- Platform: **Render**
- Build command: `npm run build`
- Start command: `npm run start`
- Node version: 18+
- Domain connected via Porkbun DNS (ALIAS + CNAME records pointing to Render)

---

## Rules for Claude Code

1. **Always use CSS custom properties** (`var(--navy)`) — never hardcode hex values in components
2. **Never use border-radius** on buttons, inputs, form boxes, or team cards — hard design rule
3. **Shippori Mincho B1 for all headings** — never use Tailwind's default font stack for h1/h2/h3
4. **App Router only** — no `pages/` directory, no `getServerSideProps`, no `getStaticProps`
5. **Server Components by default** — only add `'use client'` when interactivity is genuinely needed (forms, scroll observers)
6. **Keep components small and single-purpose** — one component per file
7. **Formspree for contact form** — no backend API routes needed
8. **No external UI libraries** — no shadcn, no MUI, no Chakra; build from scratch with Tailwind + CSS variables
9. **TypeScript strict mode** — no `any` types
10. **Mobile responsive** — vertical strip columns collapse on screens below 1000px; nav links hidden on mobile
