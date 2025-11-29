import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ButtonComponent } from '../../shared/button/button.component';
import { TagComponent } from '../../shared/tag/tag.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TagComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  constructor(private http: HttpClient) {}

  scrollToProjects() {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  downloadCV() {
    // Path to the CV PDF in assets folder
    // Try both with and without leading slash for compatibility
    const pdfPath = 'assets/cv/nourhan-saeed-cv.pdf';
    const fileName = 'Nourhan-Saeed-CV.pdf';
    
    // Fetch the PDF file as a blob
    this.http.get(pdfPath, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        // Create a blob URL
        const url = window.URL.createObjectURL(blob);
        
        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.style.display = 'none';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        
        // Clean up after a short delay
        setTimeout(() => {
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }, 100);
      },
      error: (error) => {
        console.error('Error downloading CV:', error);
        // Fallback: try direct download with absolute path
        const link = document.createElement('a');
        link.href = '/' + pdfPath;
        link.download = fileName;
        link.target = '_blank';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          document.body.removeChild(link);
        }, 100);
      },
    });
  }
}

