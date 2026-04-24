# Bizee Website Clone

A complete React + TypeScript recreation of the Bizee.com business formation website, built with Vite and Tailwind CSS.

## Overview

This project is a comprehensive clone of Bizee.com, featuring all major pages and functionality from the original site. The application helps entrepreneurs start and manage their businesses with LLC formation, registered agent services, and more.

## Features

- **Complete Homepage** with pricing tiers, service listings, and interactive state/entity selector
- **Business Formation Pages**: LLC, S-Corporation, C-Corporation, and Nonprofit
- **Management Services**: Registered Agent and Virtual Address pages
- **Resources**: Business Name Generator, Articles section, and State-specific information
- **Fully Responsive Design** with Tailwind CSS
- **Professional UI** matching Bizee's warm color palette (orange, peach, cream, gold)
- **React Router** for seamless navigation
- **50-State Coverage** with dynamic state-specific pages

## Tech Stack

- **React 19.2.0** with hooks
- **TypeScript** for type safety
- **Vite 7.2** for fast development and building
- **Tailwind CSS 4** for styling
- **React Router 6** for client-side routing

## Pages Included

### Main Pages
- **Home** (`/`) - Hero section, pricing tiers, services overview, FAQs
- **LLC Formation** (`/llc`) - Complete guide to forming an LLC
- **S-Corporation** (`/s-corporation`) - Tax election information and benefits
- **C-Corporation** (`/c-corporation`) - Traditional corporation formation
- **Nonprofit** (`/nonprofit`) - 501(c)(3) organization setup
- **Registered Agent** (`/registered-agent`) - Agent service information and pricing
- **Virtual Address** (`/virtual-address`) - Professional business address service
- **About** (`/about`) - Company information and values
- **Business Name Generator** (`/business-name-generator`) - Interactive name generator tool
- **Articles** (`/articles`) - Business resources and guides
- **State Info** (`/state/:state`) - State-specific LLC formation information

### Additional Routes
All major routes from the sitemap are covered, with over 30 functional routes including DBA, trademark, compliance, and more.

## Design Features

- **Brand Colors**:
  - Primary Orange: `#FF4A00`
  - Peach: `#fcd9cd`
  - Cream: `#fff5e6`
  - Gold: `#ffe7ad`

- **Typography**: Responsive clamp-based sizing
- **Layout**: Clean, modern design with generous spacing
- **Components**: Reusable Header and Footer across all pages
- **Interactive Elements**: Dropdowns, accordions, hover states

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx        # Navigation header with dropdowns
│   └── Footer.tsx        # Multi-column footer
├── pages/
│   ├── Home.tsx                    # Landing page
│   ├── LLC.tsx                     # LLC formation page
│   ├── SCorporation.tsx            # S-Corp page
│   ├── CCorporation.tsx            # C-Corp page
│   ├── Nonprofit.tsx               # Nonprofit page
│   ├── RegisteredAgent.tsx         # Registered agent service
│   ├── VirtualAddress.tsx          # Virtual address service
│   ├── About.tsx                   # About page
│   ├── BusinessNameGenerator.tsx   # Name generator tool
│   ├── Articles.tsx                # Blog/articles listing
│   └── StateInfo.tsx               # State-specific information
├── App.tsx              # Main app with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind

```

## Features by Page

### Homepage
- Interactive entity type and state selector
- Three pricing tiers (Basic, Standard, Premium)
- Service category cards
- Trustpilot rating display
- FAQ accordion section

### Business Formation Pages
- Detailed information about each entity type
- Step-by-step formation guides
- Benefits and requirements
- State-by-state links
- Call-to-action sections

### Service Pages
- Comprehensive service descriptions
- Pricing information
- Feature comparisons
- FAQ sections

### Tools
- Business Name Generator with real-time name generation
- State-specific information templates
- Article listing with category filtering

## Customization

The design system is built into Tailwind's configuration:

```js
// tailwind.config.js
colors: {
  'bizee-orange': '#FF4A00',
  'bizee-peach': '#fcd9cd',
  'bizee-cream': '#fff5e6',
  'bizee-gold': '#ffe7ad',
  'bizee-dark': '#505050',
  'bizee-gray': '#989898',
}
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile, tablet, and desktop

## License

This is a demonstration project for educational purposes.
