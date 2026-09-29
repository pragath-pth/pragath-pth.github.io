import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

export interface SkillItem {
  id: string;
  name: string;
  categoryId: 'web-lang' | 'frameworks' | 'database-api' | 'devops' | 'tools' | 'quality' | 'systems';
  categoryLabel: string;
  icon: string;
  iconColor?: string;
  level: 'Core Mastery' | 'Advanced' | 'Proficient';
  levelClass: 'level-core' | 'level-adv' | 'level-prof';
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
}

export interface ProficiencyBar {
  title: string;
  subtitle: string;
  percentage: number;
  icon: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule, FormsModule, RouterLink],
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  activeCategory: string = 'all';
  searchQuery: string = '';

  categories: SkillCategory[] = [
    { id: 'all', name: 'All Skills', icon: 'fa-solid fa-shapes' },
    { id: 'web-lang', name: 'Web & Programming', icon: 'fa-solid fa-code' },
    { id: 'frameworks', name: 'Frameworks & Libraries', icon: 'fa-brands fa-angular' },
    { id: 'database-api', name: 'Databases & APIs', icon: 'fa-solid fa-database' },
    { id: 'devops', name: 'DevOps & Deployment', icon: 'fa-brands fa-git-alt' },
    { id: 'tools', name: 'Dev & Design Tools', icon: 'fa-solid fa-screwdriver-wrench' },
    { id: 'quality', name: 'Quality & Agile', icon: 'fa-solid fa-shield-halved' },
    { id: 'systems', name: 'System Expertise', icon: 'fa-solid fa-microchip' },
  ];

  proficiencyBars: ProficiencyBar[] = [
    {
      title: 'Enterprise Angular Ecosystem',
      subtitle: 'Angular 9–20, Signals, RxJS, Component Architecture & Standalone APIs',
      percentage: 95,
      icon: 'fa-brands fa-angular',
    },
    {
      title: 'Web & Modern Frontend Standards',
      subtitle: 'TypeScript, JavaScript, SCSS / CSS3, Responsive Design & Accessibility',
      percentage: 94,
      icon: 'fa-brands fa-js',
    },
    {
      title: 'Data Grids & Analytics Visualization',
      subtitle: 'AG Grid Enterprise, amCharts (4 & 5), ExcelJS reporting',
      percentage: 92,
      icon: 'fa-solid fa-chart-pie',
    },
    {
      title: 'DevOps, Quality & Code Integrity',
      subtitle: 'Git, Bitbucket, IIS, Cloud Foundry, Semgrep SAST, Postman & JMeter',
      percentage: 86,
      icon: 'fa-solid fa-shield-halved',
    },
    {
      title: 'Databases & Schema Design',
      subtitle: 'MS SQL Server, MongoDB, High-performance Queries & ORM Integrations',
      percentage: 82,
      icon: 'fa-solid fa-database',
    },
    {
      title: 'API & Backend Development (Foundational)',
      subtitle: '.NET 8, ASP.NET Core Web API, C#, RESTful integration & endpoint basics',
      percentage: 65,
      icon: 'fa-solid fa-server',
    },
  ];

  skills: SkillItem[] = [
    // Web & Programming Technologies
    {
      id: 'angular',
      name: 'Angular (9–20)',
      categoryId: 'frameworks',
      categoryLabel: 'Frameworks & Libraries',
      icon: 'fa-brands fa-angular',
      iconColor: '#DD0031',
      level: 'Core Mastery',
      levelClass: 'level-core',
      description: 'Extensive hands-on expertise building enterprise-scale applications across Angular 9 through 20. Proficient in Signals, standalone components, RxJS reactive patterns, lazy loading, and state management.',
      tags: ['Angular 9–20', 'Signals', 'RxJS', 'Standalone APIs', 'Micro-frontends'],
      featured: true,
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      categoryId: 'web-lang',
      categoryLabel: 'Web & Programming',
      icon: 'fa-brands fa-js',
      iconColor: '#3178C6',
      level: 'Core Mastery',
      levelClass: 'level-core',
      description: 'Strong static typing, custom generics, strict type checking, OOP patterns, and clean interface design powering robust frontends and shared data models.',
      tags: ['Strict Typing', 'Generics', 'Interfaces', 'ESNext'],
      featured: true,
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      categoryId: 'web-lang',
      categoryLabel: 'Web & Programming',
      icon: 'fa-brands fa-js',
      iconColor: '#F7DF1E',
      level: 'Core Mastery',
      levelClass: 'level-core',
      description: 'Core ECMAScript specifications, asynchronous programming, event loop mechanics, closures, and modern functional techniques for web engineering.',
      tags: ['ES6+', 'Async/Await', 'DOM API', 'Event-Driven'],
    },
    {
      id: 'dotnet-core',
      name: '.NET 8 / ASP.NET Core',
      categoryId: 'web-lang',
      categoryLabel: 'Web & Programming',
      icon: 'fa-solid fa-server',
      iconColor: '#512BD4',
      level: 'Proficient',
      levelClass: 'level-prof',
      description: 'Foundational experience building backend web services and Web APIs using .NET 8, C#, dependency injection, and MVC controllers for client integration.',
      tags: ['.NET 8', 'ASP.NET Core', 'Web API', 'MVC', 'C#'],
    },
    {
      id: 'csharp',
      name: 'C# (C-Sharp)',
      categoryId: 'web-lang',
      categoryLabel: 'Web & Programming',
      icon: 'fa-solid fa-code',
      iconColor: '#9B4F96',
      level: 'Proficient',
      levelClass: 'level-prof',
      description: 'Basic-to-intermediate object-oriented programming, class modeling, LINQ queries, and backend service methods supporting ASP.NET Core applications.',
      tags: ['OOP', 'LINQ', 'C# Basics', 'Backend Logic'],
    },
    {
      id: 'html5',
      name: 'HTML5',
      categoryId: 'web-lang',
      categoryLabel: 'Web & Programming',
      icon: 'fa-brands fa-html5',
      iconColor: '#E34F26',
      level: 'Core Mastery',
      levelClass: 'level-core',
      description: 'Semantic markup structure, accessibility (WCAG / ARIA), SEO optimization, responsive elements, and clean DOM hierarchy.',
      tags: ['Semantic HTML', 'ARIA / A11y', 'SEO Structure', 'Forms'],
    },
    {
      id: 'css-scss',
      name: 'CSS3 & SCSS',
      categoryId: 'web-lang',
      categoryLabel: 'Web & Programming',
      icon: 'fa-brands fa-sass',
      iconColor: '#CC6699',
      level: 'Core Mastery',
      levelClass: 'level-core',
      description: 'Modern CSS architecture, SCSS mixins and nested rules, CSS variables (dark/light theming), Flexbox, CSS Grid, keyframes, and micro-interactions.',
      tags: ['SCSS / Sass', 'CSS Custom Properties', 'Flexbox & Grid', 'Animations'],
    },

    // Frameworks & Libraries
    {
      id: 'ag-grid',
      name: 'AG Grid',
      categoryId: 'frameworks',
      categoryLabel: 'Frameworks & Libraries',
      icon: 'fa-solid fa-table-cells',
      iconColor: '#00A2E8',
      level: 'Core Mastery',
      levelClass: 'level-core',
      description: 'Implementing complex enterprise data grids, row virtualization, custom cell renderers, client/server-side filtering, sorting, pagination, and multi-column grouping.',
      tags: ['Virtualization', 'Custom Renderers', 'Server-Side Row Model', 'Enterprise Grid'],
      featured: true,
    },
    {
      id: 'amcharts',
      name: 'amCharts (4 & 5)',
      categoryId: 'frameworks',
      categoryLabel: 'Frameworks & Libraries',
      icon: 'fa-solid fa-chart-pie',
      iconColor: '#67B7DC',
      level: 'Advanced',
      levelClass: 'level-adv',
      description: 'Crafting responsive, high-performance data visualizations including XY charts, pie charts, financial time-series, interactive heatmaps, and customizable tooltips.',
      tags: ['amCharts 4', 'amCharts 5', 'Data Visualization', 'Interactive Dashboards'],
      featured: true,
    },
    {
      id: 'primeng',
      name: 'PrimeNG',
      categoryId: 'frameworks',
      categoryLabel: 'Frameworks & Libraries',
      icon: 'fa-solid fa-gem',
      iconColor: '#E23237',
      level: 'Core Mastery',
      levelClass: 'level-core',
      description: 'Accelerating enterprise frontend delivery using PrimeNG rich component suites, themed dialogues, overlays, tables, and form inputs.',
      tags: ['UI Components', 'Modals & Overlays', 'Forms', 'PrimeIcons'],
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      categoryId: 'frameworks',
      categoryLabel: 'Frameworks & Libraries',
      icon: 'fa-brands fa-bootstrap',
      iconColor: '#7952B3',
      level: 'Proficient',
      levelClass: 'level-prof',
      description: 'Mobile-first responsive grid system, utility classes, cross-device layouts, and rapid interface scaffolding.',
      tags: ['Responsive Grid', 'Utility Classes', 'Flex Layout', 'Mobile-First'],
    },
    {
      id: 'exceljs',
      name: 'ExcelJS',
      categoryId: 'frameworks',
      categoryLabel: 'Frameworks & Libraries',
      icon: 'fa-solid fa-file-excel',
      iconColor: '#107C41',
      level: 'Advanced',
      levelClass: 'level-adv',
      description: 'Exporting and generating comprehensive Excel workbooks, styling cells, building formulas, formatting enterprise reports, and streaming large dataset downloads.',
      tags: ['Spreadsheet Generation', 'Styling & Formulas', 'Data Export', 'Reporting'],
    },

    // Databases & API Development
    {
      id: 'ms-sql',
      name: 'MS SQL Server',
      categoryId: 'database-api',
      categoryLabel: 'Databases & APIs',
      icon: 'fa-solid fa-database',
      iconColor: '#CC292B',
      level: 'Advanced',
      levelClass: 'level-adv',
      description: 'Relational database schema design, stored procedures, indexing, performance tuning, and transactional integrity for enterprise backend systems.',
      tags: ['T-SQL', 'Stored Procedures', 'Indexing & Tuning', 'Relational Design'],
      featured: true,
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      categoryId: 'database-api',
      categoryLabel: 'Databases & APIs',
      icon: 'fa-solid fa-leaf',
      iconColor: '#47A248',
      level: 'Proficient',
      levelClass: 'level-prof',
      description: 'NoSQL document storage, schema modeling, aggregation pipelines, and JSON document retrieval for scalable web applications.',
      tags: ['NoSQL', 'Document Storage', 'Aggregation', 'JSON Schemas'],
    },
    {
      id: 'rest-apis',
      name: 'REST APIs & Integration',
      categoryId: 'database-api',
      categoryLabel: 'Databases & APIs',
      icon: 'fa-solid fa-network-wired',
      iconColor: '#009688',
      level: 'Proficient',
      levelClass: 'level-prof',
      description: 'Consuming and integrating RESTful APIs with Angular frontends, handling HTTP requests/responses, JSON schemas, error handling, and basic endpoint creation in ASP.NET Core.',
      tags: ['REST APIs', 'HTTP Services', 'JSON Contracts', 'Frontend-Backend Integration'],
    },

    // Deployment & Version Control
    {
      id: 'git',
      name: 'Git',
      categoryId: 'devops',
      categoryLabel: 'DevOps & Deployment',
      icon: 'fa-brands fa-git-alt',
      iconColor: '#F05032',
      level: 'Core Mastery',
      levelClass: 'level-core',
      description: 'Distributed version control, branch management, merge conflict resolution, interactive rebasing, and clean commit hygiene.',
      tags: ['Version Control', 'Git Flow', 'Branching', 'Rebase'],
    },
    {
      id: 'github',
      name: 'GitHub',
      categoryId: 'devops',
      categoryLabel: 'DevOps & Deployment',
      icon: 'fa-brands fa-github',
      iconColor: '#808080',
      level: 'Core Mastery',
      levelClass: 'level-core',
      description: 'Repository hosting, Pull Request reviews, collaborative workflows, and GitHub Pages deployment pipelines.',
      tags: ['Pull Requests', 'Code Reviews', 'GitHub Pages', 'Collaboration'],
    },
    {
      id: 'bitbucket',
      name: 'Bitbucket',
      categoryId: 'devops',
      categoryLabel: 'DevOps & Deployment',
      icon: 'fa-brands fa-bitbucket',
      iconColor: '#0052CC',
      level: 'Advanced',
      levelClass: 'level-adv',
      description: 'Enterprise repository management, branch permissions, code reviews, and integration with Atlassian toolsets.',
      tags: ['Enterprise Git', 'Branch Permissions', 'Atlassian Ecosystem'],
    },
    {
      id: 'cloud-foundry',
      name: 'Cloud Foundry',
      categoryId: 'devops',
      categoryLabel: 'DevOps & Deployment',
      icon: 'fa-solid fa-cloud',
      iconColor: '#0070BA',
      level: 'Proficient',
      levelClass: 'level-prof',
      description: 'Deploying, managing, and scaling cloud-native enterprise web applications and microservices on PaaS environments.',
      tags: ['PaaS Deployment', 'Cloud-Native', 'Application Scaling', 'Environment Config'],
    },
    {
      id: 'iis',
      name: 'IIS (Internet Information Services)',
      categoryId: 'devops',
      categoryLabel: 'DevOps & Deployment',
      icon: 'fa-brands fa-windows',
      iconColor: '#0078D7',
      level: 'Proficient',
      levelClass: 'level-prof',
      description: 'Configuring web servers for hosting ASP.NET Core and Angular applications, URL rewriting, SSL certificates, and application pools.',
      tags: ['Web Server Hosting', 'URL Rewrite', 'App Pools', 'Windows Server'],
    },

    // Development & Design Tools
    {
      id: 'vscode',
      name: 'Visual Studio Code',
      categoryId: 'tools',
      categoryLabel: 'Dev & Design Tools',
      icon: 'fa-solid fa-code',
      iconColor: '#007ACC',
      level: 'Core Mastery',
      levelClass: 'level-core',
      description: 'Primary IDE for full-stack engineering, leveraged with advanced extensions, linting, debugging, and terminal automation.',
      tags: ['Primary IDE', 'Debugging', 'Extensions', 'Productivity'],
    },
    {
      id: 'postman',
      name: 'Postman',
      categoryId: 'tools',
      categoryLabel: 'Dev & Design Tools',
      icon: 'fa-solid fa-paper-plane',
      iconColor: '#FF6C37',
      level: 'Core Mastery',
      levelClass: 'level-core',
      description: 'API development, automated endpoint testing, mock servers, request environment variables, and pre-request scripts.',
      tags: ['API Testing', 'Collection Runners', 'Mock Services', 'Environment Sets'],
    },
    {
      id: 'jmeter',
      name: 'Apache JMeter',
      categoryId: 'tools',
      categoryLabel: 'Dev & Design Tools',
      icon: 'fa-solid fa-gauge-high',
      iconColor: '#D22128',
      level: 'Proficient',
      levelClass: 'level-prof',
      description: 'Performance testing, load simulation, throughput analysis, and identifying latency bottlenecks under high traffic loads.',
      tags: ['Performance Testing', 'Load Simulation', 'Throughput Metrics'],
    },
    {
      id: 'figma',
      name: 'Figma',
      categoryId: 'tools',
      categoryLabel: 'Dev & Design Tools',
      icon: 'fa-brands fa-figma',
      iconColor: '#F24E1E',
      level: 'Advanced',
      levelClass: 'level-adv',
      description: 'Translating UI/UX wireframes and component design systems into pixel-perfect Angular templates, tokens, and responsive styles.',
      tags: ['UI/UX Design', 'Design Systems', 'Handoff', 'Prototyping'],
    },
    {
      id: 'photoshop',
      name: 'Adobe Photoshop',
      categoryId: 'tools',
      categoryLabel: 'Dev & Design Tools',
      icon: 'fa-solid fa-palette',
      iconColor: '#31A8FF',
      level: 'Proficient',
      levelClass: 'level-prof',
      description: 'Asset optimization, digital image editing, raster graphic enhancements, and icon refinement for web presentation.',
      tags: ['Asset Optimization', 'Graphic Editing', 'Image Assets'],
    },

    // Project & Code Quality Tools
    {
      id: 'jira',
      name: 'Atlassian JIRA',
      categoryId: 'quality',
      categoryLabel: 'Quality & Agile',
      icon: 'fa-brands fa-jira',
      iconColor: '#0052CC',
      level: 'Core Mastery',
      levelClass: 'level-core',
      description: 'Agile project tracking, sprint planning, ticket lifecycle management, backlog grooming, and team collaboration.',
      tags: ['Agile / Scrum', 'Sprint Planning', 'Issue Tracking', 'Workflow'],
    },
    {
      id: 'confluence',
      name: 'Atlassian WIKI / Confluence',
      categoryId: 'quality',
      categoryLabel: 'Quality & Agile',
      icon: 'fa-brands fa-confluence',
      iconColor: '#172B4D',
      level: 'Advanced',
      levelClass: 'level-adv',
      description: 'Authoring architectural documentation, onboarding guides, technical requirements, and API specs for developer alignment.',
      tags: ['Tech Documentation', 'Knowledge Base', 'Architecture Specs'],
    },
    {
      id: 'semgrep',
      name: 'Semgrep',
      categoryId: 'quality',
      categoryLabel: 'Quality & Agile',
      icon: 'fa-solid fa-shield-halved',
      iconColor: '#2B7489',
      level: 'Advanced',
      levelClass: 'level-adv',
      description: 'Static Application Security Testing (SAST), automated code pattern scanning, vulnerability prevention, and security policy enforcement.',
      tags: ['SAST Security', 'Static Code Analysis', 'Vulnerability Audits'],
    },

    // System Expertise
    {
      id: 'it-support',
      name: 'IT Support & Diagnostics',
      categoryId: 'systems',
      categoryLabel: 'System Expertise',
      icon: 'fa-solid fa-headset',
      iconColor: '#00BCD4',
      level: 'Advanced',
      levelClass: 'level-adv',
      description: 'Comprehensive troubleshooting of software issues, network configuration, local environment setup, and workstation diagnostics.',
      tags: ['Technical Support', 'Environment Troubleshooting', 'Network Diagnostics'],
    },
    {
      id: 'hardware',
      name: 'Hardware Assembly',
      categoryId: 'systems',
      categoryLabel: 'System Expertise',
      icon: 'fa-solid fa-microchip',
      iconColor: '#E65100',
      level: 'Advanced',
      levelClass: 'level-adv',
      description: 'Building custom workstation hardware, component selection, thermal management, upgrade cycles, and physical hardware maintenance.',
      tags: ['PC Assembly', 'Workstation Build', 'Hardware Maintenance'],
    },
    {
      id: 'os-install',
      name: 'OS Installations & Config',
      categoryId: 'systems',
      categoryLabel: 'System Expertise',
      icon: 'fa-solid fa-compact-disc',
      iconColor: '#4CAF50',
      level: 'Advanced',
      levelClass: 'level-adv',
      description: 'Provisioning operating systems (Windows, Linux), multi-boot environments, driver configurations, and developer toolchain installations.',
      tags: ['Windows & Linux', 'OS Provisioning', 'Driver Setup', 'Developer Config'],
    },
  ];

  get filteredSkills(): SkillItem[] {
    return this.skills.filter((skill) => {
      const matchesCategory =
        this.activeCategory === 'all' || skill.categoryId === this.activeCategory;

      if (!matchesCategory) {
        return false;
      }

      if (!this.searchQuery.trim()) {
        return true;
      }

      const query = this.searchQuery.toLowerCase().trim();
      const inName = skill.name.toLowerCase().includes(query);
      const inDesc = skill.description.toLowerCase().includes(query);
      const inCat = skill.categoryLabel.toLowerCase().includes(query);
      const inTags = skill.tags.some((tag) => tag.toLowerCase().includes(query));

      return inName || inDesc || inCat || inTags;
    });
  }

  setCategory(categoryId: string): void {
    this.activeCategory = categoryId;
  }

  clearSearch(): void {
    this.searchQuery = '';
  }

  get totalSkillsCount(): number {
    return this.skills.length;
  }

  getCategoryCount(categoryId: string): number {
    if (categoryId === 'all') {
      return this.skills.length;
    }
    return this.skills.filter((s) => s.categoryId === categoryId).length;
  }
}
