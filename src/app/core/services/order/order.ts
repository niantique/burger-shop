import { Injectable, signal } from '@angular/core';
import { Product } from '../../models/product';

export interface Order {
  id: string;
  date: Date;
  items: Product[];
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders = signal<Order[]>(this.readOrders());
  readonly history = this.orders.asReadonly();

  addOrder(items: Product[]) {
    const newOrder: Order = {
      id: crypto.randomUUID(),
      date: new Date(),
      items,
    };
    this.orders.update((list) => {
      const updated = [...list, newOrder];
      this.saveOrders(updated);
      return updated;
    });
  }

  clearHistory() {
    this.orders.set([]);
    localStorage.removeItem('order_history');
  }

  private saveOrders(data: Order[]) {
    localStorage.setItem('order_history', JSON.stringify(data));
  }

  private readOrders(): Order[] {
    try {
      const raw = localStorage.getItem('order_history');
      if (!raw) return [];
      const parsed: Order[] = JSON.parse(raw);
      return parsed.map((o) => ({
        ...o,
        date: new Date(o.date),
      }));
    } catch {
      return [];
    }
  }
}
