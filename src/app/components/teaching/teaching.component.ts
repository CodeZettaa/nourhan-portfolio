import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

interface TeachingItem {
  title: string;
  description: string;
  topics?: string[];
}

@Component({
  selector: 'app-teaching',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './teaching.component.html',
  styleUrl: './teaching.component.css',
})
export class TeachingComponent {
  teachingItems: TeachingItem[] = [
    {
      title: 'JavaScript from Zero to Advanced – JS Hero',
      description:
        'Long-form course covering JS fundamentals, weird parts, internals. Deep dives into event loop, closures, memory management, and V8 engine behavior.',
      topics: [
        'JavaScript fundamentals and advanced concepts',
        'Event loop and asynchronous programming',
        'Closures, scope, and memory management',
        'V8 engine internals',
        'Common pitfalls and best practices',
      ],
    },
    {
      title: 'Angular from Scratch to Production',
      description:
        'Comprehensive courses and workshops at ITI, Route, and Elevate covering everything from basics to production-ready applications.',
      topics: [
        'Angular fundamentals and component architecture',
        'Routing and navigation',
        'Standalone components and modern APIs',
        'Angular Signals and reactive patterns',
        'RxJS and state management',
        'NgRx for complex state',
        'Clean architecture on the frontend',
      ],
    },
    {
      title: 'Frontend Architecture for Humans',
      description:
        'A series of sessions and videos focusing on real-world architecture, module bundlers, and clean frontend layering. Making complex concepts accessible.',
      topics: [
        'Frontend architecture patterns',
        'Module bundlers (Webpack, Vite)',
        'Clean frontend layering',
        'Monorepo strategies',
        'Performance optimization',
      ],
    },
    {
      title: 'سكريبتها صح',
      description:
        'Advanced Arabic content explaining deep technical concepts (event loop, browser rendering, memory, V8, etc.) in an engaging, story-driven format.',
      topics: [
        'JavaScript internals in Arabic',
        'Browser rendering pipeline',
        'Memory management',
        'V8 engine deep dives',
        'Story-based technical explanations',
      ],
    },
  ];
}

