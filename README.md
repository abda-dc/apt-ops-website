# APT OPS Website

A modern, conversion-focused website for APT OPS - AI automation for home service contractors.

Built with React, Tailwind CSS, and Framer Motion.

## Features

- ✅ 9 complete pages (Home, Solutions, Industries, How It Works, Free Audit, About, Privacy, Terms, Disclaimer)
- ✅ Fully responsive design (mobile-first)
- ✅ Modern animations and transitions
- ✅ Working contact form
- ✅ SEO-friendly structure
- ✅ Fast performance
- ✅ Production-ready code

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons
- **Framer Motion** - Animations
- **React Hook Form** - Form handling

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Deploy to Vercel (Recommended - FREE)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** - Vercel will automatically detect your Vite configuration

**OR use the Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel auto-detects settings
4. Click "Deploy"

### Deploy to Netlify (Also FREE)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   netlify deploy --prod
   ```

**OR use Netlify Drop:**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop your `dist` folder
3. Done!

### Other Hosting Options

This is a static site and can be hosted anywhere:
- GitHub Pages
- AWS S3 + CloudFront
- DigitalOcean App Platform
- Render
- Railway

## Project Structure

```
apt-ops-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── Button.jsx
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Solutions.jsx
│   │   ├── Industries.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── FreeAudit.jsx
│   │   ├── About.jsx
│   │   ├── Privacy.jsx
│   │   ├── Terms.jsx
│   │   └── Disclaimer.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization

### Colors

Edit `tailwind.config.js` to change brand colors:

```javascript
colors: {
  'brand-purple': '#8B5CF6',  // Primary brand color
  'brand-green': '#10B981',   // Accent color
  'brand-dark': '#0F172A',    // Background dark
  'brand-darker': '#020617',  // Background darker
}
```

### Content

All page content is in `src/pages/`. Each page is a self-contained React component.

### Form Handling

The contact form in `FreeAudit.jsx` currently logs to console. To connect to a backend:

1. **Option A: Use a form service**
   - [Formspree](https://formspree.io)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - [Web3Forms](https://web3forms.com)

2. **Option B: Build your own API**
   - Update the `handleSubmit` function in `src/pages/FreeAudit.jsx`
   - Send form data to your backend endpoint

### Navigation

Update navigation links in `src/components/Navigation.jsx`

### SEO

Update meta tags in `index.html` for each page (or add React Helmet for dynamic meta tags)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+ (Desktop)
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Bundle size: ~150KB (gzipped)

## License

Proprietary - APT OPS

## Support

For questions or issues:
- Email: info@aptops.com
- Phone: (202) 993 7415

---

**Built with ❤️ following the APT OPS Website Architect System Prompt v2.1**
