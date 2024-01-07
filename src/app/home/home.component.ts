import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass, NgIf} from '@angular/common';
import { DarkModeService } from 'angular-dark-mode';
import { RouterLink} from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgClass, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isPhoneViewed = false;
  darkmode$ = this.darkModeService.darkMode$;
  isDarkMode = false;
  constructor (public responsive: BreakpointObserver, private darkModeService: DarkModeService) {}

    ngOnInit(){
    this.responsive
    .observe (Breakpoints.HandsetPortrait).
    subscribe(result => {
      this.isPhoneViewed = false;
      if (result.matches) {
        this.isPhoneViewed = true;
      }
    }
    )
    this.darkModeService.darkMode$.subscribe(
      (darkmode) => {
        this.isDarkMode = darkmode;
      }
    )
  }
  getHomeStyles() : {[key: string] : boolean} {
    return {
      'dark-mode': this.isDarkMode,
    }
  }
}
