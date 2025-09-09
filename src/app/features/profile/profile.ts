import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth-service';
import { BackHomeButton } from '../../shared/components/back-home-button/back-home-button';
import { Order, OrderService } from '../../core/services/order/order';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, BackHomeButton],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  prenom: string;
  orders: Signal<Order[]>;

  constructor(private order: OrderService, private auth: AuthService) {
    this.prenom = this.auth.getUser()?.name ?? 'Utilisateur';
    this.orders = this.order.history;
  }

}
