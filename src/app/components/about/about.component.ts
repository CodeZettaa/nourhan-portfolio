import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}

