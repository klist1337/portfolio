import { Component, OnInit } from '@angular/core';
import { DarkModeToogleComponent } from '../dark-mode-toogle/dark-mode-toogle.component';
import { DarkModeService } from 'angular-dark-mode';
import { NgClass, NgFor } from '@angular/common';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';

const scale = trigger('scale', [
  state('scaleIn', style({
    transfrom:'scale(1)'
  })),
  state('scaleOut', style({
    transform:'scale(1.1)'
  })),
  transition('scaleIn <=> scaleOut', animate('800ms linear'))
]);
const wideNarrow = trigger('wideNarrow', [
  state('wide', style({
    height:'550px'
  })),
  state('narrow', style({
   height:'480px'
  })),
  transition('wide => narrow', [animate('0.5s')]),
  transition('narrow => wide', [animate('0.5s')])
]);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DarkModeToogleComponent, NgClass, NgFor],
  providers:[BrowserModule, BrowserAnimationsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations:[
    scale,
  ],
})
export class ProjectsComponent implements OnInit{
  cardStates: {[key:string]: string} = {
    'FT_TRANSCENDANCE': 'scaleIn',
    'FT_IRC': 'scaleIn',
    'INCEPTION':'scaleIn',
    'FT_CONTAINERS': 'scaleIn',
    'CUB3D': 'scaleIn',
    'NETPRACTICE':'scaleIn',
    'MINISHELL': 'scaleIn',
    'FDF':'scaleIn',
    'MINITALK': 'scaleIn'
  };
  constructor(private darkModeService: DarkModeService) {}
    darkmode$ = this.darkModeService.darkMode$;
    isDarkMode = false;
    isWide = false;
    scale = 'scaleIn';
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
    toggleScale() {
      this.scale = this.scale === 'scaleIn' ? 'scaleOut' : 'scaleIn';
    }
    toggleIn(cardId:string) {
      this.cardStates[cardId] = 'scaleOut';
    }
    toggleOut(cardId:string) {
      this.cardStates[cardId] = 'scaleIn';
    }
    darkCardBg():{[key:string]:  boolean} {
      return {
        'dark-mode': this.isDarkMode,
        'bg-slate-50': this.isDarkMode,
      }
    }
}
