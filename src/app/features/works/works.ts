import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ProjectMetric {
  label: string;
  value: string;
  icon: string;
  description: string;
}

export interface ArchitecturePillar {
  title: string;
  badge: string;
  icon: string;
  accentClass: string;
  description: string;
  highlights: string[];
  techTags: string[];
}

export interface PreviewAppItem {
  name: string;
  category: string;
  version: string;
  type: 'necessary' | 'optional';
  icon: string;
  tags: string[];
  description: string;
}

@Component({
  selector: 'app-works',
  imports: [CommonModule, RouterLink],
  styleUrl: './works.scss',
  templateUrl: './works.html',
})
export class Works {
  // Active tab inside the TechSource live mockup preview
  activeMockupTab: 'windows' | 'android' | 'table' | 'modal' = 'windows';

  // Quick stats ribbon
  projectMetrics: ProjectMetric[] = [
    {
      label: 'Production Status',
      value: 'Live & Active',
      icon: 'fa-solid fa-circle-check',
      description: 'Deployed and accessible worldwide',
    },
    {
      label: 'Core Framework',
      value: 'Angular SPA',
      icon: 'fa-brands fa-angular',
      description: 'Modular lazy-loaded routing',
    },
    {
      label: 'Backend & Database',
      value: 'Cloud Firestore',
      icon: 'fa-solid fa-fire',
      description: 'Real-time NoSQL cloud storage',
    },
    {
      label: 'Enterprise UI Suite',
      value: 'PrimeNG + Bootstrap',
      icon: 'fa-solid fa-gem',
      description: 'Data tables, dialogs & reactive grid',
    },
  ];

  // Architectural Pillars of TechSource
  architecturalPillars: ArchitecturePillar[] = [
    {
      title: 'Modular Angular Frontend',
      badge: 'Client Architecture',
      icon: 'fa-brands fa-angular',
      accentClass: 'accent-angular',
      description:
        'Architected with modular route-driven lazy-loading (WindowsModule, AndroidModule, LinksModule, HomepageModule) ensuring fast initial bundle loading and isolated state management.',
      highlights: [
        'Route-based lazy chunk splitting with webpack',
        'Hash location strategy for robust static hosting',
        'Component isolation and reactive navigation guards',
      ],
      techTags: ['Angular', 'TypeScript', 'Lazy Loading', 'RxJS', 'SCSS'],
    },
    {
      title: 'Real-Time Cloud Firestore',
      badge: 'Database & Cloud',
      icon: 'fa-solid fa-database',
      accentClass: 'accent-firebase',
      description:
        'Powered by Google Firebase Cloud Firestore (techsource-pth) for dynamic app metadata, real-time data synchronization, cloud storage buckets, and dynamic link generation.',
      highlights: [
        'NoSQL schema storing versions, release notes & direct links',
        'Real-time document listening with zero server maintenance',
        'Flexible tagging taxonomy for granular resource filtering',
      ],
      techTags: ['Firebase', 'Cloud Firestore', 'NoSQL', 'Dynamic Links'],
    },
    {
      title: 'Enterprise UI & PrimeNG Tables',
      badge: 'Data Presentation',
      icon: 'fa-solid fa-table-cells',
      accentClass: 'accent-primeng',
      description:
        'Integrated PrimeNG data tables featuring column sorting, custom cell renderers, multi-attribute filtering (choice, name, update date), and responsive dialog overlays.',
      highlights: [
        'PrimeNG DataTables with column sorting & dropdown filtering',
        'Draggable and resizable modal dialogs for app deep dives',
        'Optimized DOM rendering with minimal reflows',
      ],
      techTags: ['PrimeNG', 'DataTables', 'p-dialog', 'p-dropdown'],
    },
    {
      title: 'UX, Productivity & Micro-Interactions',
      badge: 'User Experience',
      icon: 'fa-solid fa-wand-magic-sparkles',
      accentClass: 'accent-ux',
      description:
        'Designed around rapid user workflows with 1-click clipboard link copying, feedback toasts, multi-tier status dots (Essential vs. Optional), and smooth loading animations.',
      highlights: [
        '1-click direct link copying via ngx-clipboard with toast confirmation',
        'Intuitive color-coded status badges (Green = Essential, Yellow = Optional)',
        'Custom multi-ball loading spinners with ngx-spinner',
      ],
      techTags: ['ngx-clipboard', 'ngx-spinner', 'Font Awesome 6', 'Toasts'],
    },
  ];

  // Sample data simulating the TechSource ecosystem in the interactive mockup
  sampleWindowsApps: PreviewAppItem[] = [
    {
      name: 'Visual Studio Code',
      category: 'Development',
      version: 'v1.96.x',
      type: 'necessary',
      icon: 'fa-solid fa-code',
      tags: ['IDE', 'TypeScript', 'Web Dev', 'Microsoft'],
      description: 'Extensible code editor with built-in debugging, Git integration, and ecosystem plugins.',
    },
    {
      name: 'Git SCM & CLI',
      category: 'Version Control',
      version: 'v2.48.x',
      type: 'necessary',
      icon: 'fa-brands fa-git-alt',
      tags: ['VCS', 'CLI', 'GitHub', 'Core Tool'],
      description: 'Fast, scalable, distributed revision control system essential for modern developers.',
    },
    {
      name: '7-Zip Archiver',
      category: 'Utilities',
      version: 'v24.09',
      type: 'necessary',
      icon: 'fa-solid fa-file-zipper',
      tags: ['Compression', 'Archive', 'Open Source'],
      description: 'High-ratio file archiver supporting 7z, ZIP, TAR, GZ, and RAR unpacking.',
    },
    {
      name: 'Postman Desktop',
      category: 'API Testing',
      version: 'v11.x',
      type: 'optional',
      icon: 'fa-solid fa-paper-plane',
      tags: ['REST API', 'HTTP', 'Testing', 'Mocking'],
      description: 'Comprehensive API collaboration platform for building, testing, and debugging endpoints.',
    },
  ];

  sampleAndroidApps: PreviewAppItem[] = [
    {
      name: 'Termux Terminal',
      category: 'Dev Environment',
      version: 'v0.118',
      type: 'necessary',
      icon: 'fa-solid fa-terminal',
      tags: ['Linux', 'Shell', 'Dev Tools', 'Open Source'],
      description: 'Android terminal emulator and Linux environment application working without root.',
    },
    {
      name: 'Nova Launcher Prime',
      category: 'System Customization',
      version: 'v8.x',
      type: 'optional',
      icon: 'fa-solid fa-shapes',
      tags: ['Customization', 'Launcher', 'Productivity'],
      description: 'Powerful, customizable, and versatile home screen replacement for Android.',
    },
    {
      name: 'VLC for Android',
      category: 'Multimedia',
      version: 'v3.5.x',
      type: 'necessary',
      icon: 'fa-solid fa-play',
      tags: ['Media Player', 'Open Source', 'Audio/Video'],
      description: 'Full-featured open source audio and video player handling virtually all media codecs.',
    },
    {
      name: 'Solid Explorer',
      category: 'File Management',
      version: 'v2.8.x',
      type: 'optional',
      icon: 'fa-solid fa-folder-tree',
      tags: ['File Manager', 'Cloud Storage', 'Archive'],
      description: 'Dual-panel file manager with cloud integration, encryption, and archive extraction.',
    },
  ];

  // TechSource Tech Stack Badges
  techStackBadges: { name: string; category: string; icon: string }[] = [
    { name: 'Angular', category: 'Frontend Framework', icon: 'fa-brands fa-angular' },
    { name: 'TypeScript', category: 'Strict Typing', icon: 'fa-brands fa-js' },
    { name: 'Firebase Firestore', category: 'Cloud Database', icon: 'fa-solid fa-fire' },
    { name: 'PrimeNG', category: 'UI Component Suite', icon: 'fa-solid fa-gem' },
    { name: 'Bootstrap & ng-bootstrap', category: 'Layout & Tabs', icon: 'fa-brands fa-bootstrap' },
    { name: 'SCSS Architecture', category: 'Theming & Styles', icon: 'fa-brands fa-sass' },
    { name: 'ngx-clipboard', category: 'UX & Clipboard', icon: 'fa-solid fa-paperclip' },
    { name: 'ngx-spinner', category: 'Async Feedback', icon: 'fa-solid fa-spinner' },
    { name: 'Font Awesome 6', category: 'Iconography', icon: 'fa-solid fa-icons' },
    { name: 'GitHub Pages', category: 'Production CDN Hosting', icon: 'fa-brands fa-github' },
  ];

  // Active copied toast notification indicator
  copiedLinkToast: boolean = false;

  setMockupTab(tab: 'windows' | 'android' | 'table' | 'modal'): void {
    this.activeMockupTab = tab;
  }

  simulateCopy(): void {
    this.copiedLinkToast = true;
    setTimeout(() => {
      this.copiedLinkToast = false;
    }, 2400);
  }
}
