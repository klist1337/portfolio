import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass, NgIf} from '@angular/common';
import { DarkModeService } from 'angular-dark-mode';
import { Router, RouterLink} from '@angular/router';
import { SmoothScrollService } from '../smooth-scroll.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgClass, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  isPhoneViewed = false;
  otherViewed = false;
  darkmode$ = this.darkModeService.darkMode$;
  isDarkMode = false;
  
  constructor (public responsive: BreakpointObserver, 
    private darkModeService: DarkModeService,
    private route: Router,
    private smoothScrollService:SmoothScrollService,
    ) {}

    @HostListener('window:resize' , ['$event'])
    onResize(event :Event): void {
      this.checkScreenSize();
    }
    ngOnInit(){
    this.responsive
    .observe (Breakpoints.HandsetPortrait).
    subscribe(result => {
      this.isPhoneViewed = false;
      if (result.matches) {
        this.isPhoneViewed = true;
      }
    }
    ),
    this.darkModeService.darkMode$.subscribe(
      (darkmode) => {
        this.isDarkMode = darkmode;
      }
    )
    this.checkScreenSize();
  }

  checkScreenSize() : void {
    const screenWidth = window.innerWidth;
    const threshold = 1600;
    this.otherViewed = screenWidth < threshold;
  }
  getImageUrl() : string {
    return this.otherViewed ? './assets/image4.png' : './assets/image5.png';
  }

  getHomeStyles() : {[key: string] : boolean} {
    return {
      'dark-mode': this.isDarkMode,
    }
  }
  scrollToComponent(componentId: string) {
    this.smoothScrollService.scrollToComponent(componentId);
    this.route.navigate([`/${componentId}`]);
  }
}
