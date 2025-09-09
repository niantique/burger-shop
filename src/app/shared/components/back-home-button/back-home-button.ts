import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-home-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-home-button.html',
  styleUrl: './back-home-button.css'
})
export class BackHomeButton {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

}
