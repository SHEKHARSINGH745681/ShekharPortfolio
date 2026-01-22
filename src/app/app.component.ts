import { Component } from '@angular/core';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HomeComponent } from './app/home/home.component';
import { SkillsComponent } from './app/skills/skills.component';
import { ProjectsComponent } from './app/projects/projects.component';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';
}
