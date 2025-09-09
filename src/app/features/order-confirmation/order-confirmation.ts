import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackHomeButton } from '../../shared/components/back-home-button/back-home-button';
import { Button } from "../../shared/components/button/button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  imports: [CommonModule, Button],
  templateUrl: './order-confirmation.html',
  styleUrl: './order-confirmation.css'
})
export class OrderConfirmation {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

}
