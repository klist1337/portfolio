import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appSmoothScroll]',
  standalone: true
})
export class SmoothScrollDirective {

  @Input() targetComponentId!: string;
  @Input() targetRoute!: string;

  constructor(private route: Router,
    private el: ElementRef) { }

    @HostListener('window:scroll' , ['$event'])
    onScroll(event: Event) {
      const componentElement = document.getElementById(this.targetComponentId);
      if (componentElement) {
        const componentOffset = componentElement.offsetTop;
        const scrolledY = window.scrollY;
        const windowHeight = window.innerHeight;
        //Check if the scrolled to the component from top to bottom
        if (scrolledY >= componentOffset && scrolledY <= componentOffset + windowHeight)
          this.route.navigate([this.targetRoute]);
         //Check if the scrolled to the component from bottom to top
        if (scrolledY <= componentOffset && scrolledY >= componentOffset - windowHeight)
          this.route.navigate([this.targetRoute]);
      }
    }

}
