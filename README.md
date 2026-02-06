# Bikash Kumar Chand - Portfolio Website

A premium, modern portfolio website showcasing full-stack development expertise, built with React, Tailwind CSS, and Framer Motion.

## 🎨 Design Philosophy

This portfolio embraces **editorial minimalism meets tech sophistication** - inspired by industry leaders like Linear, Stripe, and Vercel. The design prioritizes:

- **Typography Excellence**: Custom font pairing with Space Grotesk for display and Inter for body text
- **Sophisticated Color Palette**: Deep navy/charcoal base with electric cyan, blue, and purple accents
- **Meaningful Animations**: Scroll-triggered reveals and micro-interactions that enhance rather than distract
- **Asymmetric Layouts**: Breaking traditional grids for a memorable, distinctive appearance
- **Premium Details**: Noise textures, gradient meshes, glassmorphism, and subtle glow effects

## ✨ Features

### Core Sections
- **Hero Section**: Animated introduction with stats, CTAs, and social links
- **About**: Professional summary with interactive highlight cards
- **Skills**: Categorized technical expertise with animated progress bars
- **Experience**: Timeline view with detailed role descriptions and technologies
- **Projects**: Showcase with modal details, hover effects, and impact metrics
- **Education**: Academic background with visual hierarchy
- **Contact**: Modern form with validation and social integration

### Technical Highlights
- Fully responsive design (mobile-first approach)
- Dark mode with subtle gradients and atmospheric effects
- Smooth scroll-based animations using Framer Motion
- Optimized performance with lazy loading and code splitting
- SEO-ready with proper meta tags and semantic HTML
- Accessibility compliant (ARIA labels, keyboard navigation)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Modern browser with ES6+ support

### Installation

1. **Clone or download the project**
   ```bash
   cd portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

Preview production build:
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
portfolio-site/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Sticky navbar with scroll detection
│   │   ├── Hero.jsx            # Landing section with animated intro
│   │   ├── About.jsx           # Professional summary
│   │   ├── Skills.jsx          # Technical expertise showcase
│   │   ├── Experience.jsx      # Work history timeline
│   │   ├── Projects.jsx        # Project portfolio with modals
│   │   ├── Education.jsx       # Academic credentials
│   │   ├── Contact.jsx         # Contact form and info
│   │   └── Footer.jsx          # Site footer
│   ├── styles/
│   │   └── index.css           # Global styles and utilities
│   ├── App.jsx                 # Main app component with loader
│   └── main.jsx                # Entry point
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind customization
├── postcss.config.js          # PostCSS configuration
└── README.md                   # This file
```

## 🎨 Customization Guide

### Colors
Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: { DEFAULT: '#0A0E27', /* ... */ },
  accent: {
    cyan: '#00D9FF',
    blue: '#4D7CFE',
    purple: '#8B5CF6',
  }
}
```

### Typography
Font families are defined in `tailwind.config.js` and imported in `src/styles/index.css`:

```javascript
fontFamily: {
  display: ['Space Grotesk', 'system-ui', 'sans-serif'],
  body: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

### Content
Update personal information in respective component files:
- Hero.jsx - Name, tagline, stats
- About.jsx - Professional summary
- Skills.jsx - Technical skills
- Experience.jsx - Work history
- Projects.jsx - Project details
- Education.jsx - Academic background
- Contact.jsx - Contact information

### Images
Replace the dummy profile image in `About.jsx`:
```javascript
<img src="YOUR_IMAGE_URL" alt="Your Name" />
```

## 🔧 Technology Stack

### Core
- **React 18.3** - UI library
- **Vite 5.1** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework

### Animation & Interaction
- **Framer Motion 11.0** - Animation library
- **Lucide React** - Icon library

### Features
- CSS custom properties for theming
- CSS Grid & Flexbox for layouts
- Intersection Observer API for scroll animations
- Modern ES6+ JavaScript

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Performance Optimizations

- Lazy loading for images and components
- Code splitting for optimal bundle size
- Optimized animations with GPU acceleration
- Minimal third-party dependencies
- Tree-shaking for unused code elimination

## 📄 License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio.

## 🙏 Acknowledgments

Design inspiration from:
- Linear (https://linear.app)
- Stripe (https://stripe.com)
- Vercel (https://vercel.com)

## 📞 Contact

**Bikash Kumar Chand**
- Email: bikashchand1998@gmail.com
- Phone: +91 8917453160
- Location: Bhubaneswar, Odisha, India
- LinkedIn: [linkedin.com/in/bikashchand](https://linkedin.com/in/bikashchand)
- GitHub: [github.com/bikashchand](https://github.com/bikashchand)

---

**Built with ❤️ using React & Tailwind CSS**
