import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [CommonModule],
  template: `<span [class]="'tag tag-' + variant">{{ label }}</span>`,
  styleUrl: './tag.component.css',
})
export class TagComponent {
  @Input() label = '';
  @Input() variant: 'default' | 'accent' | 'success' = 'default';
}

