# TCECEED Clean Energy Academic Portal

**TETFund Centre of Excellence for Clean Energy and Entrepreneurship Development (TCECEED)**  
*The Federal Polytechnic Nasarawa, Nasarawa State, Nigeria*

---

## Overview

A modern, high-performance academic and innovation portal built using **TanStack Router**, **TanStack Query**, **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

The portal brings together the tripartite institutional identity of:
1. **TETFund** (Tertiary Education Trust Fund)
2. **The Federal Polytechnic Nasarawa** (Host Academic Institution)
3. **TCECEED** (Centre of Excellence for Clean Energy and Entrepreneurship Development)

---

## Key Features

- **TanStack Router Architecture**: Fully type-safe routing across 6 primary academic modules:
  - **Home (`/`)**: Dynamic Framer Motion hero slider, live animated stat counters, executive mandate overview, 4 core goals, and active cohort impact galleries.
  - **About TCECEED (`/about`)**: Institutional origin, decentralized energy deficit metrics bento, vision, mission & core values, statutory mandate, and advanced laboratory calibration units.
  - **Management Structure (`/management`)**: 3-Tier audited governance organogram (Governing Councils & Quality Boards &rarr; Center Directorate & Functional Officers &rarr; Stakeholder Execution Ecosystem), executive roster profiles, and operational charter.
  - **Research & Projects (`/research`)**: Translational research portfolio (TRL 6-8, 14+ patents, 45kW capacity), interactive stream filters (Solar PV, Biogas & Agro-Waste, Mechanical & Wind, Hybrid Inverter Carts), and Joint Concept Note submission dialog.
  - **Career & Technical Internship (`/internship`)**: Track A (Research Fellows) and Track B (6-Month Technical Internship with monthly stipend), operational framework, and an interactive online application form with live reference ticket generation.
  - **News & Publications (`/news`)**: Searchable academic dispatches repository, live category and year filtering, lead story feature, and full article reading modal with publication download simulation.
  - **Contact Us (`/contact`)**: Secretariat helplines, WhatsApp live desk direct link, institutional enquiry registry form, and regional transit directions from Abuja Airport, Lafia, and Keffi.
- **Official Tripartite Branding**:
  - Exact preservation and display of all 3 official logos (`logo1.png` - TETFund, `logo2.png` - FedPoly Nasarawa, `logo3.png` - TCECEED) across the fixed navigation header, footer, and institutional accreditation banners.
- **Framer Motion Animation System**:
  - Smooth page transitions with `<AnimatePresence mode="wait">`.
  - Viewport-triggered scroll reveals with easing curves.
  - Dynamic Ken-Burns hero carousel with progress indicator animations.
  - `AnimatedCounter` component for statistics (<10%, 14+ patents, 500+ fellows).
  - Spring-animated interactive modals and responsive mobile slide-out drawer.
- **High-Fidelity Real Photographic Assets**:
  - Incorporated all real photographs of laboratory benches, solar training arrays, inverter assembly sessions, graduation ceremonies, and MoU signings.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI component architecture |
| **@tanstack/react-router** | Type-safe client-side routing |
| **@tanstack/react-query** | Cache and data management |
| **Framer Motion** | Declarative animations and page transitions |
| **Tailwind CSS** | Styling following `DESIGN.md` institutional token system |
| **Lucide React & Material Symbols** | Sharp institutional and technical iconography |
| **Vite 6** | Ultra-fast build tool and development server |

---

## Running the Application

### Development Server
```bash
npm run dev
```
Starts the local development server at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Type-checks TypeScript and compiles production assets into `dist/` with optimized chunk splitting.

### Preview Production Build
```bash
npm run preview
```
Previews the compiled production build locally.

