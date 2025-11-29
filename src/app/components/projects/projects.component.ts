import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { TagComponent } from '../../shared/tag/tag.component';
import { ButtonComponent } from '../../shared/button/button.component';

interface Project {
  title: string;
  type: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl: string;
  websiteUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, TagComponent, ButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Angular Clean Architecture Tasks',
      type: 'Angular app',
      description:
        'Task management app showcasing layered frontend architecture (core, domain, infrastructure, features, shared).',
      highlights: ['Clean architecture', 'Feature-based structure', 'Testable use cases'],
      tech: ['Angular', 'TypeScript', 'Clean Architecture'],
      githubUrl: 'https://github.com/CodeZettaa/todoCleanArch',
      websiteUrl: 'https://codezettaa.github.io/todoCleanArch/todos',
    },
    {
      title: 'Angular Signals Ticket Dashboard',
      type: 'Angular 19 + Signals + PrimeNG',
      description:
        'Ticket management dashboard with CRUD, filters, and analytics charts using Angular Signals and PrimeNG.',
      highlights: ['Signals-based state management', 'Charts', 'Professional UI'],
      tech: ['Angular 19', 'Signals', 'PrimeNG', 'Chart.js'],
      githubUrl: 'https://github.com/CodeZettaa/angular-signals-ticket-dashboard',
      websiteUrl: 'https://codezettaa.github.io/angular-signals-ticket-dashboard/dashboard',
    },
    {
      title: 'Angular Performance Patterns',
      type: 'Angular patterns repo',
      description:
        'Collection of examples for performance best practices in Angular: OnPush, trackBy, lazy loading, smart/presentational components.',
      highlights: ['Performance optimization', 'Best practices'],
      tech: ['Angular', 'Performance', 'Best Practices'],
      githubUrl: 'https://github.com/USERNAME/angular-performance-patterns',
    },
    {
      title: 'Fullstack Job Tracker',
      type: 'Fullstack (Angular + NestJS)',
      description:
        'Small fullstack project using NestJS API and Angular frontend to track job applications.',
      highlights: ['Fullstack integration', 'REST', 'Basic CRUD'],
      tech: ['Angular', 'NestJS', 'TypeScript', 'REST API'],
      githubUrl: 'https://github.com/USERNAME/fullstack-job-tracker',
    },
    {
      title: 'Frontend Architecture Workshop',
      type: 'Teaching / workshop material',
      description:
        'Slides and demos used in workshops about frontend architecture, JavaScript internals, and module bundlers.',
      highlights: ['Teaching', 'Architecture storytelling'],
      tech: ['Workshop', 'Architecture', 'JavaScript'],
      githubUrl: 'https://github.com/USERNAME/frontend-architecture-workshop',
    },
  ];
}

