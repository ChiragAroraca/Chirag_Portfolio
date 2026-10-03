# Chirag Arora – Mobile Application Developer Portfolio 🚀

A production-ready, personal portfolio website engineered for **Chirag Arora**, Senior React Native & Cross-Platform Mobile Engineer.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, featuring dark-mode-first glassmorphism, 3D phone mockup interactions, scroll-drawn timelines, modal deep-dives, and dedicated project case study routes.

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Test
```bash
npm run build
npm run start
```

---

## 📁 Where to Add & Edit Your Real Content

All content is strictly separated into typed data files in `/data` and static assets in `/public` so you can update anything without touching React components:

### 1. Profile Picture & Avatar
- Drop your high-res headshot at `public/avatar.jpg` (or `public/chirag.jpg`).
- An AI-enhanced studio developer portrait is already generated and placed at `/public/avatar.jpg` and `/public/chirag.jpg`.

### 2. Resume PDF
- Replace `public/Chirag_Arora_Resume.pdf` with your updated resume PDF. All "Download Resume" buttons across the navbar, hero, and footer link directly to this file.

### 3. Personal Info & Contact (`data/personal.ts`)
- **LinkedIn / GitHub**: Update `linkedin`, `github`, and `email` properties.
- **Phone Number**: Update `phone` (`+91-9571259623`). Protected on the UI with a click-to-reveal toggle to block automated web scrapers.
- **Bio & Rotating Roles**: Add or edit the role titles that type out in the hero section.

### 4. Projects & Case Studies (`data/projects.ts`)
Each project supports:
- `title`, `tagline`, `category` (`Mobile` | `E-commerce` | `Fintech` | `Media`)
- `role`, `company`, `timeline`, `impact`
- `overview`, `myRole`, `keyContributions`, `techStack`
- `challengesAndSolutions` (array of challenge & solution pairs)
- `outcomes` (measurable metrics & results)
- `thumbnail` & `gallery` (`public/projects/<slug>/preview.jpg`)
- `playStoreUrl` & `appStoreUrl` (Buttons only appear when URLs are supplied)

### 5. Experience Timeline (`data/experience.ts`)
- Add or modify company roles, duration, location, bullet achievements, and key project deliverables.

### 6. Skills & Engineering Philosophy (`data/skills.ts`)
- Modify skill groups, highlight badges, and ticker marquee items.

---

## 🚢 Deploying to Vercel (Step-by-Step)

### Option A: Via GitHub (Recommended)
1. Initialize git and commit the codebase:
   ```bash
   git add .
   git commit -m "feat: complete Chirag Arora portfolio website"
   git branch -M main
   ```
2. Create a new repository on GitHub (e.g. `chiragarora30/portfolio`) and push:
   ```bash
   git remote add origin https://github.com/chiragarora30/portfolio.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and click **"Add New Project"** -> **"Import Git Repository"**.
4. Select your portfolio repo. Framework preset will automatically detect **Next.js**.
5. Click **"Deploy"**. Vercel will build and assign you a live HTTPS domain in under 60 seconds!

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🎨 Design System & Features
- **3D Tilt Phone Mockup**: Interactive phone bezel with auto-rotating app screenshots and floating tech badges.
- **Scroll Timeline**: Animated SVG line that draws dynamically as you scroll down career history.
- **Case Study Modals & Dedicated Pages**: Click "Quick View" for in-place modals or navigate to `/projects/[slug]` for full deep-dive case studies.
- **Spam Protection**: Phone number is masked until explicitly revealed by user click.
- **SEO & Social Cards**: Pre-configured OpenGraph cards, Twitter preview, `robots.txt`, `sitemap.xml`, and JSON-LD `Person` schema.
