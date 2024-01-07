import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { DarkModeToogleComponent } from '../dark-mode-toogle/dark-mode-toogle.component';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbCollapseModule, NgStyle, NgIf, RouterOutlet, RouterLink, DarkModeToogleComponent, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  darkmode$ = this.darkModeService.darkMode$;
  isDarkMode = false;
  constructor(private router: Router, private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe(
      (darkmode) => {
      this.isDarkMode = darkmode;
    });
  }
  isActive(route: string) : boolean {
    return this.router.url == route;
  }
  getNavBarStyles() : {[key: string]: boolean} {
    return {
      'dark-mode': this.isDarkMode,
      'navbar-light': !this.isDarkMode,
      'bg-light': !this.isDarkMode,
      'navbar-dark': this.isDarkMode,
    }
  }
  
}
