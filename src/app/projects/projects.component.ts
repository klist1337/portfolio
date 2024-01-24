import { Component, OnInit } from '@angular/core';
import { DarkModeToogleComponent } from '../dark-mode-toogle/dark-mode-toogle.component';
import { DarkModeService } from 'angular-dark-mode';
import { NgClass } from '@angular/common';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DarkModeToogleComponent, NgClass],
  providers:[BrowserModule, BrowserAnimationsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations:[
    trigger('wideNarrow', [
      state('wide', style({
        height:'550px'
      })),
      state('narrow', style({
       height:'480px'
      })),
      transition('wide => narrow', [animate('0.5s')]),
      transition('narrow => wide', [animate('0.5s')])
    ]),
  ],
})
export class ProjectsComponent implements OnInit{
  constructor(private darkModeService: DarkModeService) {}
    darkmode$ = this.darkModeService.darkMode$;
    isDarkMode = false;
    isWide = false;
    ngOnInit(): void {
      this.darkModeService.darkMode$.subscribe(
        (darkMode) => {
        this.isDarkMode = darkMode;
      });
    }
    getProjectStyle() : {[key: string]: boolean} {
      return {
        'dark-mode': this.isDarkMode,
      }
    }
    toggleAnimation() {
      this.isWide = !this.isWide;
    }
}
