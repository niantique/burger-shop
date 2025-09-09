import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../../models/product';
import { OrderService } from '../order/order';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private order: OrderService,
    private router: Router
  ) {}
  private burgers = signal<Product[]>([]);

  readonly items = this.burgers.asReadonly();
  readonly total = computed(() =>
  this.burgers().reduce((sum, b) => sum + b.price, 0));

  add(burger: Product) {
    this.burgers.update(list => [... list, burger]);
  }

  remove(id: string) {
    this.burgers.update(list => list.filter(b => b.id !== id));
  }

  clear() {
    this.burgers.set([]);
  }

  checkout() {
    this.order.addOrder(this.items());
    this.clear();
    this.router.navigate(['/confirmation']);
  }
  
}
