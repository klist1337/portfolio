import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { DarkModeToogleComponent } from '../dark-mode-toogle/dark-mode-toogle.component';
import { DarkModeService } from 'angular-dark-mode';
import { SmoothScrollService } from '../smooth-scroll.service';


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
  constructor(private route:Router, 
    private darkModeService: DarkModeService,
    private smoothScrollService: SmoothScrollService,
    ) {}

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe(
      (darkmode) => {
      this.isDarkMode = darkmode;
    });
  }
  isActive(routePath: string) : boolean {
    return this.route.url == routePath;
  }
  getNavBarStyles() : {[key: string]: boolean} {
    return {
      'dark-mode': this.isDarkMode,
      'navbar-light': !this.isDarkMode,
      'bg-light': !this.isDarkMode,
      'navbar-dark': this.isDarkMode,
    }
  }
  scrollToComponent(componentId: string) {
    this.smoothScrollService.scrollToComponent(componentId);
    this.route.navigate([`/${componentId}`]);
  }

}
