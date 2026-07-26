# Forextrade

A modern forex trading landing page built with React and Vite, featuring smooth scroll effects, elegant motion, and a conversion-focused layout for trading platforms or fintech products.

Live demo: https://forextrade-seven.vercel.app/

## Features

- Smooth scroll-driven sections for a cohesive storytelling experience across the page.
- Elegant motion and hover interactions that highlight key CTAs and trading benefits.
- Responsive layout with refined spacing and breakpoints for mobile, tablet, and desktop.
- Modular React components organized into `components`, `pages`, and `views` for clean structure.
- Asset-based visual design using custom charts, avatars, and logos from the `public` folder.

## Tech Stack

- **Frontend:** React (via Vite) with JSX entry point in `src/main.jsx` and `src/App.jsx`.
- **Tooling:** Vite bundler, HMR support, ESLint configuration based on the default React + Vite template.
- **Styling:** Custom CSS in `src/index.css` plus design assets from `src/assets` and `public`.
- **Languages:** TypeScript, JavaScript, CSS, and HTML.

## Project Structure

```text
.
├─ public/
│  ├─ fonts/
│  ├─ av1.png ... av4.png
│  ├─ fit1.png ... fit4.png
│  ├─ log1.png ... log5.png
│  ├─ chart2.png
│  ├─ crack.png
│  ├─ logo.png
│  ├─ menu.svg
│  └─ vite.svg
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ pages/
│  ├─ views/
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ eslint.config.js
└─ README.md
```

- `public/` contains all static assets used for hero visuals, charts, logos, and avatar imagery.
- `src/assets/` and `src/components/` collect reusable UI pieces and motion-enhanced blocks.
- `src/pages/` and `src/views` compose the sections of the landing page (hero, features, CTA, footer, etc.).
- `App.jsx` wires together the top-level layout and section composition.
- `main.jsx` bootstraps the React application and mounts it to the DOM.

## Getting Started

### Prerequisites

- Node.js (recommended: LTS version).
- npm (installed with Node.js).

### Installation

```bash
# Clone the repository
git clone https://github.com/rishavvrajj/forextrade.git

# Move into the project directory
cd forextrade

# Install dependencies
npm install
```

### Development

Run the Vite dev server with hot module replacement:

```bash
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`) in your browser to view the landing page.

### Build

Create a production build:

```bash
npm run build
```

This generates optimized static assets ready for deployment to platforms like Vercel, Netlify, or any static host.

### Preview

You can preview the production build locally:

```bash
npm run preview
```

## Customization

- Update images and branding in `public/` (logo, charts, avatars, logotypes) to match your product or trading platform.
- Adjust layout, typography, and spacing via `src/index.css` and component-level styles.
- Extend or reorganize sections in `src/views` and `src/pages` to reflect new marketing copy or funnel steps.
- Integrate real data or API calls into components if you want to evolve this from a static landing page into a full product shell.

## ESLint & Code Quality

The project starts from the official React + Vite template and includes an ESLint setup tuned for React projects.  
You can expand the configuration for type-aware linting with TypeScript and `typescript-eslint` if you plan to grow this into a production-grade application.

## Deployment

This project is already deployed on Vercel at `forextrade-seven.vercel.app`.  
You can connect your GitHub repository directly to Vercel and enable automatic deployments on push to `main` or any other branch.

## License

No explicit license file is present in the repository at the time of writing.  
If you plan to open source this project, consider adding a `LICENSE` file (for example, MIT) to clarify usage and contributions.
