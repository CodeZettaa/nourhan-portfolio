import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TeachingComponent } from '../teaching/teaching.component';
import { ContentCodezettaComponent } from '../content-codezetta/content-codezetta.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    TeachingComponent,
    ContentCodezettaComponent,
    ContactComponent,
  ],
  template: `
    <app-navbar />
    <app-hero />
    <app-about />
    <app-experience />
    <app-skills />
    <app-projects />
    <app-teaching />
    <app-content-codezetta />
    <app-contact />
  `,
  styles: [],
})
export class HomeComponent {}

