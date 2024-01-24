import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {

  constructor(private router: Router) { }
  scrollToComponent(componentId: string) {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }
}

