# Local Setup & Running Guide

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control) - [Download](https://git-scm.com/)

To verify installations, run:
```bash
node --version
npm --version
```

## Installation Steps

1. **Navigate to the project directory:**
```bash
cd "C:\Users\Admin\Desktop\Personal_Space\Sarathy\Work\Web-porfolio\web-portfolio"
```

2. **Install dependencies:**
```bash
npm install
```

This will install all required packages including React, Vite, Tailwind CSS, Framer Motion, and other dependencies.

## Running the Development Server

To start the local development server:

```bash
npm run dev
```

You should see output like:
```
VITE v7.2.4  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  press h + enter to show help
```

3. **Open in browser:**
   - Click the URL or copy `http://localhost:5173/` into your browser
   - The page will automatically reload when you make changes to the code

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This generates a `dist/` folder with optimized files ready for deployment.

## Previewing the Production Build

After building, you can preview the production version locally:

```bash
npm run preview
```

Then open `http://localhost:4173/` in your browser.

## Project Structure

```
web-portfolio/
├── components/           # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Experience.tsx
│   ├── Expertise.tsx
│   ├── Achievements.tsx
│   ├── Articles.tsx
│   ├── Certifications.tsx
│   └── SectionContainer.tsx
├── resume/              # Resume PDF files
├── App.tsx              # Main app component
├── index.tsx            # Entry point
├── types.ts             # TypeScript type definitions
├── vite.config.ts       # Vite configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Important Notes

### Resume Download
- Place your resume PDF in the `resume/` folder
- Name it: `Sarathy_Ranganathan_Resume.pdf`
- The download button in the Hero section will work once the file is added

### External Links
- GitHub: https://github.com/Sarathy-R
- LinkedIn: https://www.linkedin.com/in/sarathy-ranganathan/
- Medium Articles: Linked in the Articles section

### Dark Mode
- The site supports light/dark mode toggle
- Preference is saved in browser localStorage
- Automatically detects system preference on first visit

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically try the next available port. Check the terminal output for the actual URL.

### Dependencies Not Installing
Try clearing npm cache:
```bash
npm cache clean --force
npm install
```

### Changes Not Appearing
- Make sure the dev server is running
- Try hard-refreshing the browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors

### Build Issues
Ensure you're using Node.js v16 or higher:
```bash
node --version
```

## Deployment

To deploy this portfolio:

1. Build the project: `npm run build`
2. The `dist/` folder contains all static files
3. Deploy to services like:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3 + CloudFront
   - Any static hosting service

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Support

For issues or questions, refer to:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

---

Happy coding! 🚀
