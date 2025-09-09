import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

const API_URL = 'https://node-eemi.vercel.app/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  getAll(): Observable<{items: Product[] }> {
    return this.http.get<{ items: Product[] }>(`${API_URL}/products`);
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/products/${id}`);
  }
}
