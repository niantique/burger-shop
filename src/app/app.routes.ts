import { Routes } from '@angular/router';
import { Register } from './features/auth/register/register';
import { Login } from './features/auth/login/login';
import { ProductDetail } from './features/products/product-detail/product-detail';
import { Home } from './features/home/home/home';
import { NotFound } from './features/not-found/not-found';
import { Cart } from './features/cart/cart/cart';
import { OrderConfirmation } from './features/order-confirmation/order-confirmation';
import { Profile } from './features/profile/profile';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'register', component: Register },
    { path: 'login', component: Login },
    { path: 'products/:id', component: ProductDetail},
    { path: 'cart', component: Cart},
    { path: 'confirmation', component: OrderConfirmation},
    { path: 'profile', component: Profile},
    { path: '**', component: NotFound}
];
