import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isPhoneViewed = false;
  constructor (public responsive: BreakpointObserver) {}

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
  }
}
