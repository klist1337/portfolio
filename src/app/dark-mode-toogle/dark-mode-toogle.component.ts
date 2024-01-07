import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-dark-mode-toogle',
  standalone: true,
  imports: [],
  templateUrl: './dark-mode-toogle.component.html',
  styleUrl: './dark-mode-toogle.component.css'
})
export class DarkModeToogleComponent {
  darkmode$ = this.darkModeService.darkMode$;
  constructor(private darkModeService: DarkModeService) {}
  
  onToggle(): void {
    this.darkModeService.toggle();
  }
}
