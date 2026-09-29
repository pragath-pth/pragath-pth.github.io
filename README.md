<div align="center">

  # 🌟 Pragath G — Personal Portfolio

  <p align="center">
    <strong>A modern, responsive personal portfolio crafted with Angular 22 & cutting-edge web technologies.</strong>
  </p>

  <p align="center">
    <a href="https://pragathpth.me/" target="_blank">
      <img src="https://img.shields.io/badge/Live_Demo-pragathpth.me-6366f1?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo" />
    </a>
    <a href="https://github.com/pragath-pth" target="_blank">
      <img src="https://img.shields.io/badge/GitHub-pragath--pth-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/pragath-pth/" target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
    </a>
    <a href="https://www.youtube.com/@PthCreations" target="_blank">
      <img src="https://img.shields.io/badge/YouTube-Subscribe-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube" />
    </a>
  </p>

  <!-- Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/Angular-22-DD0031?style=flat-square&logo=angular&logoColor=white" alt="Angular" />
    <img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/PrimeNG-22-E23237?style=flat-square&logo=primeng&logoColor=white" alt="PrimeNG" />
    <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white" alt="Bootstrap" />
    <img src="https://img.shields.io/badge/SCSS-Sass-CC6699?style=flat-square&logo=sass&logoColor=white" alt="SCSS" />
    <img src="https://img.shields.io/badge/Vitest-5.0-6E9F18?style=flat-square&logo=vitest&logoColor=white" alt="Vitest" />
    <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License" />
  </p>

</div>

---

## 📖 Overview

Welcome to my personal portfolio repository! This website showcases my projects, technical skill set, and professional journey as a **Software Developer & UI Enthusiast**.

Engineered from the ground up utilizing the latest **Angular 22 standalone architecture**, this project combines pixel-perfect UI design, smooth micro-interactions, dark/light theme switching, and seamless responsive design across all viewports.

> [!TIP]
> 🌐 **Experience the live site in action:** **[pragathpth.me](https://pragathpth.me/)**

---

## ✨ Highlights & Features

- ⚡ **Angular 22 Standalone Architecture** — Built with modern Angular conventions, standalone components, clean routing, and reactive paradigms.
- 🌓 **Dynamic Theme Engine** — Seamless Light / Dark mode toggle featuring custom animated SVG sun/moon micro-interactions and smooth theme transitions.
- 🎨 **Modern Design System** — Styled with SCSS, PrimeNG 22 components, PrimeIcons, and Bootstrap 5 utilities for consistent, clean aesthetics.
- 📱 **Mobile-First & Fully Responsive** — Tailored to provide an optimal browsing experience on smartphones, tablets, and wide-screen desktops.
- 🚀 **Next-Gen Testing & Tooling** — Powered by modern Angular CLI with Vitest and Prettier for fast testing cycles and clean code standards.
- ⚡ **High Performance & Accessibility** — Semantic HTML5 markup, optimized asset delivery, and accessible contrast ratios.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework & Core** | ![Angular](https://img.shields.io/badge/Angular_22-DD0031?style=flat&logo=angular&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript_6-3178C6?style=flat&logo=typescript&logoColor=white) ![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=flat&logo=reactivex&logoColor=white) |
| **UI Components** | ![PrimeNG](https://img.shields.io/badge/PrimeNG_22-E23237?style=flat&logo=primeng&logoColor=white) ![PrimeIcons](https://img.shields.io/badge/PrimeIcons-41B883?style=flat) ![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat&logo=bootstrap&logoColor=white) |
| **Styling & Assets** | ![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white) ![FontAwesome](https://img.shields.io/badge/FontAwesome_7-528DD7?style=flat&logo=fontawesome&logoColor=white) |
| **Date & Utilities** | ![Moment.js](https://img.shields.io/badge/Moment.js-blueviolet?style=flat) |
| **Testing & Tooling** | ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat&logo=vitest&logoColor=white) ![JSDOM](https://img.shields.io/badge/JSDOM-F7DF1E?style=flat&logo=javascript&logoColor=black) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black) |

---

## 📂 Project Architecture

```plaintext
pragath-pth/
├── public/                 # Static assets (images, icons, etc.)
│   └── assets/
│       └── images/
├── src/
│   ├── app/
│   │   ├── core/           # Core singletons, guards, and interceptors
│   │   ├── features/       # Feature modules and views
│   │   │   └── home/       # Home page hero section and connect cards
│   │   ├── shared/         # Reusable UI components, directives, pipes, services
│   │   │   ├── components/ # Header (with animated theme switch), Footer
│   │   │   └── services/   # ThemeService and shared utilities
│   │   ├── app.config.ts   # Application providers and configuration
│   │   ├── app.routes.ts   # Route definitions
│   │   └── app.ts          # Root component
│   ├── environments/       # Environment configuration files
│   ├── styles.scss         # Global SCSS styles, variables, and themes
│   └── index.html          # HTML entry point
├── angular.json            # Angular workspace configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.x or v20.x+ recommended)
- [npm](https://www.npmjs.com/) (v9.x or higher)
- [Angular CLI](https://angular.dev/tools/cli) (v22+)

```bash
npm install -g @angular/cli
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pragath-pth/pragath-pth.git
   cd pragath-pth
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

### Running Locally

Launch the local development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

### Running Tests

Execute unit tests via [Vitest](https://vitest.dev/):

```bash
npm test
```

### Building for Production

Compile and bundle the production artifacts:

```bash
npm run build
```

The compiled output will be generated inside the `dist/` directory, optimized for deployment to hosting platforms such as GitHub Pages, Vercel, or Netlify.

---

## 📜 Available NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm start` | Runs the Angular development server on `http://localhost:4200/` |
| `npm run build` | Builds the production-ready bundle into the `dist/` folder |
| `npm run watch` | Builds in development mode with continuous file watching |
| `npm test` | Runs the test suite using Vitest |

---

## 📬 Connect With Me

<div align="center">

  [![Website](https://img.shields.io/badge/Portfolio-pragathpth.me-6366f1?style=for-the-badge&logo=googlechrome&logoColor=white)](https://pragathpth.me/)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Pragath%20G-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pragath-pth/)
  [![GitHub](https://img.shields.io/badge/GitHub-pragath--pth-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pragath-pth)
  [![YouTube](https://img.shields.io/badge/YouTube-PthCreations-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@PthCreations)
  [![Instagram](https://img.shields.io/badge/Instagram-@pragath__pth-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/pragath_pth)

  <p>📍 Kollam, Kerala, India • IST (UTC+5:30)</p>

</div>

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to use it for inspiration or reference.

<div align="center">
  <sub>Crafted with ❤️ by <a href="https://pragathpth.me/">Pragath G</a></sub>
</div>
