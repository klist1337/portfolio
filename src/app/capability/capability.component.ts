import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DarkModeService } from 'angular-dark-mode';

const scale = trigger('scale', [
  state('scaleIn', style({
    transfrom:'scale(1)'
  })),
  state('scaleOut', style({
    transform:'scale(1.1)'
  })),
  transition('scaleIn <=> scaleOut', animate('400ms linear'))
]);

@Component({
  selector: 'app-capability',
  standalone: true,
  imports: [NgClass, NgIf],
  providers:[BrowserModule, BrowserAnimationsModule],
  templateUrl: './capability.component.html',
  animations:[scale],
  styleUrl: './capability.component.css'
})
export class CapabilityComponent implements OnInit{
  cardStates: {[key:string]: string} = {
    'angular': 'scaleIn',
    'nestjs': 'scaleIn',
    'docker': 'scaleIn',
    'nodejs': 'scaleIn',
    'git':  'scaleIn',
    'prisma':  'scaleIn',
    'postgre':  'scaleIn',
    'figma':  'scaleIn',
  };
  isDarkMode = false;
  change = false;
  darkMode$ = this.darkModeService.darkMode$;
  constructor(private darkModeService:DarkModeService) {}

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe(
      (darkmode) => {
        this.isDarkMode = darkmode;
      });
  }
  
  getCapabilitiesStyle() : {[key:string]: boolean} {
    return {
      'dark-mode': this.isDarkMode,
    }
  }
  toggleIn(cardId:string) {
    this.cardStates[cardId] = 'scaleOut';
  }
  toggleOut(cardId:string) {
    this.cardStates[cardId] = 'scaleIn';
  }
  onClick() {
    this.change = !this.change;
  }
}
