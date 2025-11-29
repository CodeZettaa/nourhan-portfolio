import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

interface Experience {
  role: string;
  company: string;
  timeline: string;
  location?: string;
  websiteUrl?: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Staff / Senior Frontend Engineer',
      company: 'Almatar (Travel-Tech)',
      timeline: '~8 years (founding/early member to now)',
      location: 'Remote / KSA-based company',
      websiteUrl: 'https://almatar.com',
      responsibilities: [
        'Lead frontend engineer on large Angular applications in travel-tech',
        'Work with Angular (16–20), monorepo setups (Nx), SSR/CSR/SSG',
        'Designed and implemented frontend architecture for multiple squads (B2C, B2B, CRD, internal tools)',
        'Integrated 3rd party SDKs (e.g., personalization, analytics, internal UI SDKs)',
        'Mentored frontend engineers, performed code reviews, supported promotions and growth',
        'Collaborated with product & backend teams on performance, UX, and scalability',
      ],
    },
    {
      role: 'Frontend / JavaScript Instructor',
      company: 'ITI (Information Technology Institute)',
      timeline: 'Ongoing',
      websiteUrl: 'https://iti.gov.eg',
      responsibilities: [
        'Teach modern JavaScript and Angular from zero to advanced',
        'Prepare students for real-world projects and interviews',
        'Design course content, exercises, and hands-on labs',
      ],
    },
    {
      role: 'Full Stack / Frontend Instructor',
      company: 'Route Academy',
      timeline: 'Ongoing',
      websiteUrl: 'https://routeegypt.com',
      responsibilities: [
        'Teach JavaScript, frontend frameworks, and full stack concepts',
        'Mentor junior and mid-level developers through projects',
      ],
    },
    {
      role: 'Frontend / JavaScript Instructor',
      company: 'Elevate Egypt',
      timeline: 'Ongoing',
      websiteUrl: 'https://elevateegypt.com',
      responsibilities: [
        'Teach JavaScript, frontend fundamentals, and advanced topics',
        'Focus on practical, project-based learning',
      ],
    },
    {
      role: 'Founder & Content Creator',
      company: 'CodeZetta',
      timeline: 'Ongoing',
      websiteUrl: 'https://youtube.com/@codezetta',
      responsibilities: [
        'Create content on YouTube, TikTok, and other platforms about JavaScript internals, Angular concepts, and frontend architecture',
        'Produce series like "JS Hero" – a deep JavaScript course',
        'Produce "سكريبتها صح" – advanced, story-based technical videos',
      ],
    },
  ];
}

