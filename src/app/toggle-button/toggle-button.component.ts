import { NgClass } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports:[NgClass],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.css'
})
export class ToggleButtonComponent implements OnInit {
  isDarkMode = false;
  darkMode$ = this.darkModeService.darkMode$;
  @Output() changed = new EventEmitter<boolean>(); 
  constructor(private darkModeService: DarkModeService) {}
  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe (
      (darkmode) => {
        this.isDarkMode = darkmode;
      });
  }
  getToggleBtnStyle(): {[key: string]:boolean} {
    return {
      'dark-mode': this.isDarkMode,
    }
  }
}
