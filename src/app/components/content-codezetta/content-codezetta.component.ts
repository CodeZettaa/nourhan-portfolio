import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

interface ContentLink {
  label: string;
  url: string;
  icon?: string;
}

interface ContentType {
  title: string;
  description: string;
}

@Component({
  selector: 'app-content-codezetta',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './content-codezetta.component.html',
  styleUrl: './content-codezetta.component.css',
})
export class ContentCodezettaComponent {
  description =
    'CodeZetta is my personal brand where I teach JavaScript, Angular, and frontend engineering in a practical, story-driven way.';

  links: ContentLink[] = [
    { label: 'YouTube: CodeZetta Channel', url: 'https://youtube.com/@codezetta', icon: '📺' },
    { label: 'TikTok: @codezetta8', url: 'https://tiktok.com/@codezetta8', icon: '🎵' },
    { label: 'LinkedIn Profile', url: 'https://linkedin.com/in/nourhan-saeed', icon: '💼' },
  ];

  contentTypes: ContentType[] = [
    {
      title: 'Short Reels',
      description: 'Dev reality, tips, common mistakes, and quick insights',
    },
    {
      title: 'Long-form Deep Dives',
      description: 'Comprehensive explanations of complex topics like event loop, memory, and V8',
    },
    {
      title: 'Career & Soft Skills',
      description: 'Guidance for developers on career growth, interviews, and professional development',
    },
  ];
}

