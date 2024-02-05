import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  isDarkMode = false;
  darkMode$ = this.darkModeService.darkMode$;
  constructor(private darkModeService:DarkModeService) {}
  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe(
      (darkmode) => {
        this.isDarkMode = darkmode;
      });
  }
  getContactStyle(): {[key:string]: boolean} {
    return {
      'dark-mode': this.isDarkMode,
    }
  }
}
