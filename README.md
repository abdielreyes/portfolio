# Abdiel Reyes - Portfolio

A modern, responsive portfolio website built with Astro, React, and Tailwind CSS. Features animated sections, dark mode, downloadable PDF resumes, and SEO optimization for ATS compatibility.

## Features

- **Animated Portfolio** - Smooth animations powered by Framer Motion
- **Dark Mode** - System preference detection with manual toggle
- **PDF Resume Generation** - Download Resume (1 page) or Full CV
- **SEO Optimized** - JSON-LD structured data for search engines and ATS parsers
- **Fully Responsive** - Mobile-first design for all screen sizes
- **Print Friendly** - Optimized print styles for the resume page
- **Docker Ready** - Containerized deployment support

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | [Astro](https://astro.build/) |
| **UI Library** | [React](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) (custom implementation) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **PDF Generation** | [@react-pdf/renderer](https://react-pdf.org/) |
| **Data Format** | [JSON Resume](https://jsonresume.org/) |
| **Language** | TypeScript |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/abdielreyes/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Docker Deployment

```bash
# Build the Docker image
docker build -t portfolio .

# Run the container
docker run -p 8080:80 portfolio
```

The site will be available at `http://localhost:8080`

## Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── portfolio/       # Main portfolio sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Navigation.tsx
│   │   ├── resume/          # Resume/CV components
│   │   │   ├── PrintableResume.tsx
│   │   │   └── ResumePDF.tsx
│   │   └── ui/              # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       └── theme-toggle.tsx
│   ├── data/
│   │   └── resume.json      # Resume data (JSON Resume format)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   └── resume.astro     # Resume page
│   ├── styles/
│   │   └── global.css       # Global styles & print CSS
│   └── types/
│       └── resume.ts        # TypeScript types
├── Dockerfile
├── nginx.conf
└── package.json
```

## Customization

### Update Resume Data

Edit `src/data/resume.json` following the [JSON Resume schema](https://jsonresume.org/schema/):

```json
{
  "basics": {
    "name": "Your Name",
    "label": "Your Title",
    "email": "your@email.com"
  },
  "work": [...],
  "education": [...],
  "skills": [...]
}
```

### Modify Theme Colors

Edit the CSS variables in `src/styles/global.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
}

.dark {
  --primary: 210 40% 98%;
}
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |

## License

MIT
