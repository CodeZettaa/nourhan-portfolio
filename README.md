# Nourhan Saeed - Personal Portfolio

This is the personal portfolio website of **Nourhan Saeed** (also known as Nourhan Bardalh), a Senior / Staff Frontend Engineer (Angular) and Tech Instructor.

## About

This portfolio showcases my work as:

- **Senior / Staff Frontend Engineer** at Almatar (travel-tech company)
- **Tech Instructor** at ITI, Route Academy, and Elevate Egypt
- **Founder & Content Creator** at CodeZetta

## Technologies Used

This portfolio is built with:

- **Angular 19** - Modern Angular with standalone components
- **TypeScript** - Strict mode enabled
- **CSS** - Custom dark theme with modern styling
- **Angular Router** - For navigation and smooth scrolling
- **Standalone Components** - No NgModules, modern Angular architecture

## Features

- ✅ Responsive, mobile-first design
- ✅ Dark theme with excellent contrast
- ✅ Smooth scrolling navigation
- ✅ Clean, professional UI
- ✅ Production-ready code structure
- ✅ Easy deployment to GitHub Pages

## Getting Started

### Prerequisites

- Node.js v20.19+ or v22.12+
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd nourhan-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

To build the project for production:

```bash
npm run build:prod
```

The build artifacts will be stored in the `dist/nourhan-portfolio/` directory.

### Build for GitHub Pages

To build the project specifically for GitHub Pages deployment:

```bash
npm run build:gh-pages
```

This will build the project with the correct base href for GitHub Pages.

### Deploy to GitHub Pages

#### Option 1: Manual Deployment

After building for GitHub Pages, you can deploy using:

```bash
npm install --save-dev angular-cli-ghpages
npm run deploy:gh-pages
```

This command will:

1. Build the project with the correct base href
2. Deploy to the `gh-pages` branch using `angular-cli-ghpages`

#### Option 2: Automatic Deployment (GitHub Actions)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select `gh-pages` branch as the source
4. The workflow will automatically deploy on every push to `main`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── hero/              # Hero/Intro section
│   │   ├── about/             # About section
│   │   ├── experience/        # Experience timeline
│   │   ├── skills/            # Skills section
│   │   ├── projects/          # Featured projects
│   │   ├── teaching/          # Teaching & Speaking
│   │   ├── content-codezetta/ # CodeZetta content section
│   │   ├── contact/           # Contact section
│   │   └── home/              # Main home component
│   ├── shared/
│   │   ├── navbar/            # Navigation bar
│   │   ├── button/            # Reusable button component
│   │   ├── tag/               # Tag/badge component
│   │   └── section-title/     # Section title component
│   ├── app.component.ts       # Root component
│   ├── app.config.ts          # App configuration
│   └── app.routes.ts          # Routing configuration
├── styles.css                  # Global styles
└── index.html                  # Main HTML file
```

## Customization

### Updating Content

- **Personal Information**: Edit the components in `src/app/components/`
- **Projects**: Update the `projects` array in `projects.component.ts`
- **Experience**: Update the `experiences` array in `experience.component.ts`
- **Skills**: Update the `skillCategories` array in `skills.component.ts`
- **Social Links**: Update links in `contact.component.ts` and `content-codezetta.component.ts`

### Styling

The global styles are in `src/styles.css`. The color scheme uses CSS variables defined in `:root`:

- `--bg-primary`, `--bg-secondary`, `--bg-tertiary` - Background colors
- `--text-primary`, `--text-secondary`, `--text-tertiary` - Text colors
- `--accent-primary`, `--accent-secondary` - Accent colors
- `--border-color` - Border colors

## Development

### Code Formatting

Format code using Prettier:

```bash
npm run format
```

### Linting

Run ESLint:

```bash
npm run lint
```

## License

This project is private and personal.

## Contact

- **Email**: nourhansaed6@gmail.com
- **GitHub**: [CodeZettaa](https://github.com/CodeZettaa)
- **LinkedIn**: [nourhan-saeed](https://linkedin.com/in/nourhan-saeed)
- **YouTube**: [CodeZetta](https://youtube.com/@codezetta)
- **TikTok**: [@codezetta8](https://tiktok.com/@codezetta8)

---

Built with ❤️ using Angular 19
