# Harbor Technology Consulting Website

A modern, responsive website for Harbor Technology Consulting built with Next.js and Tailwind CSS.

## Features

- Modern UI with nautical-inspired design elements
- Responsive layout for all device sizes
- Optimized for performance and accessibility
- SEO-friendly meta tags and structured data

## Tech Stack

- **Next.js** - React framework for server-rendered React applications
- **TypeScript** - Static type checking for JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/harbor-tech-website.git
cd harbor-tech-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/app` - Next.js app directory with all components and pages
- `/app/components` - Reusable UI components
- `/app/lib` - Utility functions and shared code
- `/app/styles` - Global styles and CSS variables
- `/public` - Static assets like images and icons

## Design System

The project uses a custom design system with the following colors:

- Primary-100: #D6F1FF (Light-sea blue backgrounds)
- Primary-500: #6CC8FF (Brand blue for buttons, links, accents)
- Primary-700: #039BFF (Hover state / headings)
- Secondary-Navy: #023055 (Deep ocean contrast)
- Accent-Sand: #FFFAF4 (Call-out banners)
- Alert-Coral: #FF7860 (Error notices)
- Success-Seafoam: #42D0AE (Success notices)

Typography:
- Display/Headings: "Montserrat" (extra-bold)
- Body: "Inter" (regular)
- Monospace: "JetBrains Mono" (for code snippets)

## Deployment

The site is configured for deployment on Vercel:

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspired by maritime themes of Harbor Springs
- Icons from Lucide React library
- Stock photos from Unsplash 