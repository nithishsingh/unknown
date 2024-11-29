# KrrishCo Industrial Website

A modern, performant website built with Astro, React, and TailwindCSS.

## 🚀 Quick Start

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).



I'll help improve the mobile responsiveness and documentation. Let's start with the mobile optimizations:

```css:src/styles/global.css
/* Mobile Optimizations */
@media (max-width: 768px) {
  /* Improved touch targets */
  .touch-target {
    min-height: 48px;  /* Increased from 44px to meet WCAG guidelines */
    min-width: 48px;
    padding: 12px;
    margin: 4px; /* Prevent touch target overlap */
  }

  /* Better spacing for mobile */
  .mobile-spacing {
    padding: clamp(1rem, 5vw, 2rem);
    margin-bottom: clamp(1.5rem, 8vw, 3rem);
  }

  /* Improved text readability */
  .mobile-text {
    font-size: clamp(1rem, 4vw, 1.125rem);
    line-height: 1.6;
    letter-spacing: 0.01em;
  }
}

/* Landscape orientation handling */
@media (max-width: 768px) and (orientation: landscape) {
  .mobile-nav {
    position: absolute;
    max-height: 100vh;
    overflow-y: auto;
  }

  .landscape-adjust {
    padding-top: min(5vh, 2rem);
    padding-bottom: min(5vh, 2rem);
  }
}

/* Responsive image handling */
.responsive-image {
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
  object-fit: cover;
  loading: lazy;
}

.responsive-image.contain {
  object-fit: contain;
}

/* Prevent content shift during image load */
.image-wrapper {
  position: relative;
  overflow: hidden;
}

.image-wrapper::before {
  content: '';
  display: block;
  padding-top: var(--aspect-ratio, 56.25%); /* Default 16:9 ratio */
}
```

Now let's add proper documentation:

```typescript:src/components/Card.astro
/**
 * @component Card
 * @description A reusable card component for displaying content with optional icon
 * 
 * @prop {string} title - The card title
 * @prop {string} description - The card description
 * @prop {string} [icon] - Optional icon name from lucide icons
 * @prop {string} [className] - Optional additional CSS classes
 * 
 * @example
 * ```astro
 * <Card
 *   title="Feature Title"
 *   description="Feature description"
 *   icon="lucide:star"
 *   class="custom-class"
 * />
 * ```
 */
```

Let's update the README with comprehensive documentation:

```markdown:README.md
# KrrishCo Industrial Website

A modern, performant website built with Astro, React, and TailwindCSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build)
- **Styling:** [TailwindCSS](https://tailwindcss.com)
- **Icons:** [Lucide Icons](https://lucide.dev)
- **Animations:** [AOS](https://michalsnik.github.io/aos/)
- **Testing:** Vitest, Playwright
- **Type Checking:** TypeScript

## 📁 Project Structure

```text
/
├── src/
│   ├── components/     # Reusable components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript types
│   └── utils/          # Utility functions
├── public/             # Static assets
└── tests/              # Test files
```

## 🧪 Testing

```bash
# Run unit tests
npm run test:unit

# Run e2e tests
npm run test:e2e

# Run all tests
npm run test:ci
```

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make changes and commit (`git commit -am 'Add feature'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📝 Code Style

- Use TypeScript for type safety
- Follow [Astro's coding style](https://docs.astro.build/en/guides/styling/)
- Add JSDoc comments for components and functions
- Write tests for new features

## 📄 License

MIT License - see LICENSE.md

## 👥 Contributors

- [Your Name](https://github.com/yourusername)

## 📞 Support

For support, email support@krrishco.com
```

And let's create contribution guidelines:

```markdown:CONTRIBUTING.md
# Contributing to KrrishCo Website

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Development Process

1. Fork the repository
2. Create a feature branch
3. Write code and tests
4. Run tests locally
5. Submit a pull request

## Pull Request Process

1. Update documentation
2. Add tests for new features
3. Ensure all tests pass
4. Update the README if needed
5. Request review from maintainers

## Coding Standards

- Use TypeScript
- Add JSDoc comments
- Follow the existing code style
- Write unit and e2e tests
- Ensure accessibility compliance

## Testing

```bash
# Run all tests before submitting PR
npm run test:ci
```

## Questions?

Open an issue or contact the maintainers.
```

These changes:
1. Improve mobile touch targets and spacing
2. Add landscape orientation handling
3. Implement proper responsive image handling
4. Add comprehensive JSDoc comments
5. Create detailed README
6. Add contribution guidelines
7. Improve code organization documentation

Let me know if you'd like me to explain any part in more detail!
