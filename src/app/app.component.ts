import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DarkModeService } from 'angular-dark-mode';
import { ProjectsComponent } from './projects/projects.component';
import { CapabilityComponent } from './capability/capability.component';
import { ContactComponent } from './contact/contact.component';
import { SmoothScrollDirective } from './smooth-scroll.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, 
            HomeComponent, ProjectsComponent, CapabilityComponent, 
            ContactComponent, SmoothScrollDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private darkModeService: DarkModeService) {}
}
