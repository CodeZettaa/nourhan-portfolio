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

After building for GitHub Pages, you can deploy using:

```bash
npm run deploy:gh-pages
```

This command will:
1. Build the project with the correct base href
2. Deploy to the `gh-pages` branch using `angular-cli-ghpages`

**Note:** Make sure you have `angular-cli-ghpages` installed globally or as a dev dependency. If not, install it:

```bash
npm install -g angular-cli-ghpages
```

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

- **Email**: nourhan@example.com
- **GitHub**: [USERNAME](https://github.com/USERNAME)
- **LinkedIn**: [nourhan-saeed](https://linkedin.com/in/nourhan-saeed)
- **YouTube**: [CodeZetta](https://youtube.com/@codezetta)
- **TikTok**: [@codezetta8](https://tiktok.com/@codezetta8)

---

Built with ❤️ using Angular 19

