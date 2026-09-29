import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import moment from 'moment';

export type TimelineFilter = 'all' | 'experience' | 'education';

export interface TimelineItem {
  id: string;
  qualification: string;
  at: string;
  location: string;
  duration: string;
  periodBadge?: string;
  icon: string;
  type: 'experience' | 'education';
  isCurrent?: boolean;
  summary: string;
  highlights: string[];
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About implements OnInit {
  activeFilter: TimelineFilter = 'all';

  whenCount: string = '';
  yearsCount: string = '';
  daysRaw: number = 0;

  timelineData: TimelineItem[] = [
    {
      id: 'ust',
      qualification: 'Software Engineer',
      at: 'UST',
      location: 'Bangalore, India',
      duration: 'August 2021 — Present',
      periodBadge: 'Current Role',
      icon: 'fa-solid fa-briefcase',
      type: 'experience',
      isCurrent: true,
      summary:
        'Engineering scalable, resilient web applications using Angular, TypeScript, and modern CSS/SCSS architecture. Focusing on responsive components, accessible user interfaces, state management, and high-performance frontend solutions.',
      highlights: ['Angular Enterprise Architecture', 'TypeScript & RxJS', 'Component Systems & SCSS', 'Cross-browser Accessibility'],
    },
    {
      id: 'vr-growing',
      qualification: 'Freelance Developer',
      at: 'VR Growing',
      location: 'Kerala, India',
      duration: 'January 2021 — July 2021',
      periodBadge: '7 Months',
      icon: 'fa-solid fa-briefcase',
      type: 'experience',
      isCurrent: false,
      summary:
        'Developed custom web client solutions and interactive interfaces from initial concepts to deployment. Crafted fluid, pixel-accurate web pages with focus on responsive layouts and optimal user flows.',
      highlights: ['Client Solutions', 'Responsive Layouts', 'Interactive UI', 'Performance Optimization'],
    },
    {
      id: 'psn-be',
      qualification: 'B.E Computer Engineering',
      at: 'PSN Engineering College',
      location: 'Tirunelveli, India',
      duration: 'June 2017 — November 2020',
      periodBadge: 'Bachelor Degree',
      icon: 'fa-solid fa-graduation-cap',
      type: 'education',
      isCurrent: false,
      summary:
        'Acquired comprehensive grounding in software engineering principles, algorithms, data structures, computer networks, and full-stack software development methodologies.',
      highlights: ['Data Structures & Algorithms', 'Software Engineering', 'Database Systems', 'Object-Oriented Design'],
    },
    {
      id: 'psn-diploma',
      qualification: 'Diploma in Computer Engineering',
      at: 'PSN Polytechnic College',
      location: 'Tirunelveli, India',
      duration: 'June 2014 — April 2017',
      periodBadge: 'Diploma',
      icon: 'fa-solid fa-graduation-cap',
      type: 'education',
      isCurrent: false,
      summary:
        'Built early foundational skills in computer architecture, systems programming in C/C++, network setup, and fundamental software lab practicums.',
      highlights: ['Programming Fundamentals', 'Computer Hardware & OS', 'Networking Essentials', 'Hands-on Labs'],
    },
  ];

  ngOnInit(): void {
    this.calculateDate();
  }

  calculateDate(): void {
    try {
      const startDate = moment('01/01/2021', 'DD/MM/YYYY');
      const now = moment();
      this.daysRaw = now.diff(startDate, 'days');
    } catch {
      const startDate = new Date(2021, 0, 1);
      const now = new Date();
      this.daysRaw = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    }
    this.whenCount = `${this.daysRaw.toLocaleString()} days`;
    this.yearsCount = (this.daysRaw / 365.25).toFixed(1);
  }

  get filteredTimeline(): TimelineItem[] {
    if (this.activeFilter === 'all') {
      return this.timelineData;
    }
    return this.timelineData.filter((item) => item.type === this.activeFilter);
  }

  setFilter(filter: TimelineFilter): void {
    this.activeFilter = filter;
  }

  get experienceCount(): number {
    return this.timelineData.filter((i) => i.type === 'experience').length;
  }

  get educationCount(): number {
    return this.timelineData.filter((i) => i.type === 'education').length;
  }
}
