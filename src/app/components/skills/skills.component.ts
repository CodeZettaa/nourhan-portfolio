import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { TagComponent } from '../../shared/tag/tag.component';

interface SkillCategory {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, TagComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend / Frameworks',
      skills: [
        'Angular (up to v19/20)',
        'Angular Signals & Standalone APIs',
        'RxJS',
        'NgRx (where relevant)',
        'Next.js (familiar)',
        'React (familiar)',
      ],
    },
    {
      name: 'JavaScript & TypeScript',
      skills: [
        'Advanced JavaScript (event loop, closures, async, memory)',
        'TypeScript (types, generics, decorators basics)',
        'Browser APIs & performance',
      ],
    },
    {
      name: 'Architecture / Tools',
      skills: [
        'Frontend architecture (Clean Architecture, layered, feature-based)',
        'Monorepos with Nx',
        'SSR/CSR/SSG concepts',
        'Module bundlers & build tools (Webpack, Vite basics)',
        'CI/CD collaboration (GitLab pipelines)',
      ],
    },
    {
      name: 'SEO & Analytics',
      skills: [
        'SEO optimization (meta tags, structured data, semantic HTML)',
        'Performance optimization for SEO',
        'Google Tag Manager (GTM)',
        'WebEngage',
        'Insider',
        'Analytics implementation & tracking',
      ],
    },
    {
      name: 'Backend / Fullstack (familiar)',
      skills: ['Node.js', 'NestJS', 'REST APIs basics', 'Simple fullstack patterns'],
    },
    {
      name: 'Teaching & Communication',
      skills: [
        'Curriculum design (K-12 / bootcamps / adult learners)',
        'Technical content creation',
        'Public speaking & workshops',
        'Mentoring junior developers',
      ],
    },
  ];
}

