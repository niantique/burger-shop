import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Button } from '../../../shared/components/button/button';
import { BackHomeButton } from '../../../shared/components/back-home-button/back-home-button';
import { CartService } from '../../../core/services/cart/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, Button, BackHomeButton],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  burgers;
  total;

  constructor(private cart: CartService, private router: Router) {
    this.burgers = this.cart.items;
    this.total = this.cart.total;
  }

  removeBurger(id: string) {
    this.cart.remove(id);
  }

  checkout() {
    this.cart.checkout();
    this.router.navigate(['/confirmation']);
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = '/burger.avif';
  }
}
