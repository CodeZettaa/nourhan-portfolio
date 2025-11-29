import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  email = 'nourhan@example.com';
  message = "Let's talk about frontend, architecture, or teaching.";

  socialLinks: SocialLink[] = [
    { label: 'GitHub', url: 'https://github.com/USERNAME', icon: '💻' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/nourhan-saeed', icon: '💼' },
    { label: 'YouTube / CodeZetta', url: 'https://youtube.com/@codezetta', icon: '📺' },
    { label: 'TikTok', url: 'https://tiktok.com/@codezetta8', icon: '🎵' },
  ];
}

