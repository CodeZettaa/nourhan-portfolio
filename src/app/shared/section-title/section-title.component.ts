import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `<h2 class="section-title" [id]="id">{{ title }}</h2>`,
  styleUrl: './section-title.component.css',
})
export class SectionTitleComponent {
  @Input() title = '';
  @Input() id = '';
}

