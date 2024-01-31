import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-capability',
  standalone: true,
  imports: [NgClass],
  templateUrl: './capability.component.html',
  styleUrl: './capability.component.css'
})
export class CapabilityComponent implements OnInit{
  isDarkMode = false;
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
}
