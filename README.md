# Spider-Verse Portfolio: Anomaly-1610
A high-performance, multiversal portfolio built with **Next.js 16**, **React Three Fiber**, and **Tailwind CSS**. Designed with the high-fidelity aesthetic of *Spider-Man: Across the Spider-Verse*.

## Features

- **3D Dimensional Timeline:** An immersive landing page featuring a Three.js canvas where you can "swing" through project skyscrapers.
- **Tech Arsenal (Skills):** A high-tech HUD-style skills page with "pop-up" hover effects and glassmorphism textures.
- **Project Vault:** A dedicated archival terminal for exploring GitHub repositories and custom project cards.
- **Multiversal HUD:** A persistent global UI with a hardware-accelerated crosshair (reticle) that tracks cursor movement.
- **Secure Signal (Contact):** A fully integrated contact form powered by **Formspree**, featuring comic-book "stickers" (BAM!, THWIP!).
- **Glassmorphism Sidebar:** A transparent, blurred navigation system designed for maximum readability and visual depth.

## Live Demo

Check out the live multiversal portfolio: [huzaifanadeem-portfolio.vercel.app](https://huzaifanadeem-portfolio.vercel.app)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **3D Engine:** Three.js / @react-three/fiber / @react-three/drei
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Animations:** GSAP / CSS Keyframes
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

1. Navigate to the project directory:
   ```bash
   cd portfolio-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   npm start
   ```

## Project Structure

- `src/app/`: Next.js pages and layouts.
- `src/components/HUD/`: Global UI elements (Sidebar, Reticle, Header).
- `src/components/Scene/`: 3D components and project cards.
- `src/components/Web/`: Specialized 3D web-slinging effects.
- `src/lib/`: Utility functions and API integrations (GitHub).
- `public/`: Static assets, including the 3D assets and your CV.

## Security & Deployment

- **Formspree:** Ensure you verify your endpoint in the Formspree dashboard to enable ReCAPTCHA and spam filtering.
- **GitHub API:** The project fetches data from the public GitHub API; no sensitive tokens are required for basic usage.
- **Vercel:** Optimized for one-click deployment via the Vercel platform.

---
**Subject ID:** SMHN-1610 | **Status:** ACTIVE_DEVELOPER | **Dimension:** EARTH-1610
