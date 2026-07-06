# HatsonTech Corporate Website

![HatsonTech Logo](./image/hatsontech-logo.png)

**Software Solutions & Innovation.**
*Yazılım Çözümleri ve İnovasyon.*

A modern, fully bilingual (English / Turkish), responsive, static website for **HatsonTech** — a software solutions and innovation company. Built with plain HTML, CSS and JavaScript so it can be hosted anywhere, including **GitHub Pages**.

---

## 🎩 About HatsonTech

HatsonTech is an Ankara-based software solutions and innovation company operating at ODTÜ Teknokent. We design and build custom software, web platforms, mobile apps, cloud systems, and AI-powered products for businesses — and we build our own products, led by **FlowDesk**, an all-in-one business management platform.

### Company Information
- **Location:** Mustafa Kemal Mahallesi Bilişim İnovasyon Merkezi ODTÜ Teknokent, 06510 Çankaya, Ankara
- **Phone:** +90 542 412 2111
- **Email:** info@hatsontech.com
- **Website:** https://hatsontech.com
- **Founded:** 2026

### Founders
- **İsmail Tarık Şenkal** — Co-Founder
- **Halide Yılmaz** — Co-Founder

---

## 🚀 Products

- **FlowDesk** — *Flagship product.* An all-in-one business management platform: CRM, project & task management, invoicing, and team collaboration in a single cloud-native app.
- **HatsonAI** — *AI engine.* Document understanding, retrieval-augmented (RAG) assistants that cite their sources, and workflow automation that powers the smart features across our products and client projects.
- **StorePilot** — *Commerce platform.* An e-commerce and retail management platform: modern storefront, inventory and order management, and sales analytics.

## 🛠️ What We Build

- **Custom Software** — web apps, dashboards, APIs and integrations
- **Web & Mobile Apps** — responsive web, native iOS/Android, cross-platform
- **AI & Data** — AI assistants, RAG search, machine learning, data engineering
- **Cloud & DevOps** — cloud-native infrastructure, CI/CD, microservices, security

## 🤝 Solutions & Services

Custom software development, web platform development, AI & machine learning, RAG & enterprise search, mobile app development, and big data & data engineering — delivered to businesses across Türkiye. See `/solutions/` (EN) and `/cozumler/` (TR).

---

## 🌐 Website Features

- ✅ **Fully bilingual** (English & Turkish) with smooth language transitions (preference stored in `localStorage`)
- ✅ **Responsive** — mobile, tablet, desktop
- ✅ **Working contact form** and **CV/careers form** via [FormSubmit](https://formsubmit.co) (no backend required)
- ✅ **Interactive particle hero**, AOS scroll animations, smooth scrolling
- ✅ **SEO & GEO optimized** — meta tags, Open Graph, Twitter cards, JSON-LD structured data, `robots.txt`, `sitemap.xml`, `llms.txt`, hreflang
- ✅ **Blog / Insights** — 25 plain-language articles on software, AI, LLMs and modern engineering (EN at `/insights/`, TR at `/faydali-bilgiler/`)

### Sections
Home · About · What We Build · Products · Solutions · Technologies · Careers · Insights · Contact

---

## 🎨 Design System

Colors extracted from the logo (blue **H** + red hat):

- **Primary Blue:** `#1E4FA0`
- **Dark Blue:** `#14336B`
- **Navy:** `#0F2A57`
- **Light Blue:** `#D9E4F5`
- **Red (accent):** `#E01B24`
- **Dark Red:** `#B3141B`

**Fonts:** Montserrat (headings), Open Sans (body). Colors are defined as CSS custom properties in `css/style.css` (`:root`).

---

## 📁 Project Structure

```
hatsontech/
├── index.html                # Single-page main site
├── 404.html                  # Custom error page
├── css/style.css             # All styles (CSS custom properties)
├── js/
│   ├── main.js               # Interactivity, language switch, forms
│   └── translations.js       # Bilingual content (EN/TR)
├── image/
│   ├── hatsontech-logo.png   # Logo (also favicon)
│   └── faydali-bilgiler/     # Blog article images
├── insights/                 # Blog — English
├── faydali-bilgiler/         # Blog — Turkish
├── solutions/                # Solutions & service pages — English
├── cozumler/                 # Solutions & service pages — Turkish
├── privacy-policy.html · terms-of-service.html · cookie-policy.html
├── robots.txt · sitemap.xml · sitemap.txt · llms.txt
├── CNAME                     # Custom domain for GitHub Pages
└── package.json
```

---

## ▶️ Quick Start

Open `index.html` directly, or run a local server:

```bash
# Node
npx http-server -p 8000 -o
# or Python
python -m http.server 8000
```

Then visit http://localhost:8000. The site defaults to Turkish; use the EN/TR switch in the navbar.

---

## 📧 Contact Form (Important)

The **contact form** posts to FormSubmit's AJAX endpoint and the **careers/CV form** posts natively (so the PDF attaches). Both deliver to **info@hatsontech.com**.

> **One-time activation:** the very first submission triggers a confirmation email from FormSubmit to `info@hatsontech.com`. Click the activation link once, and the forms are live. This requires the `info@hatsontech.com` mailbox to exist. To change the destination address, update:
> - `js/main.js` → `CONTACT_ENDPOINT`
> - `index.html` → the careers form `action` (`https://formsubmit.co/…`) and its `_next` field

---

## 🚀 Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit — HatsonTech website"
git branch -M main
git remote add origin https://github.com/HatsonTech/hatsontech-website.git
git push -u origin main
```

Then: **Settings → Pages → Branch: `main` / root → Save.** The included `CNAME` (`hatsontech.com`) sets the custom domain — point your DNS to GitHub Pages, or remove `CNAME` to serve at `*.github.io`.

---

## 📄 License

Copyright © 2026 **HatsonTech**. All rights reserved. Proprietary — unauthorized copying, modification, or distribution is prohibited without written permission.

**Last Updated:** 2026
