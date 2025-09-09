import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from '../../../shared/components/button/button';
import { ProductService } from '../../../core/services/product/product';
import { RouterModule } from '@angular/router';
import { Product } from '../../../core/models/product';
import { CartService } from '../../../core/services/cart/cart';

@Component({
  selector: 'app-burger-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe, Button, RouterModule],
  templateUrl: './burger-list.html',
  styleUrl: './burger-list.css'
})
export class BurgerList {
  burgers$;

  constructor(
    private productService: ProductService,
    private cart: CartService
) {
    this.burgers$ = this.productService.getAll();
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = '/burger.avif';
  }

  addToCart(burger: Product) {
    this.cart.add(burger);
  }

};

