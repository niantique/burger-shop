import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from '../../../shared/components/button/button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../../core/services/product/product';
import { switchMap } from 'rxjs';
import { map } from 'rxjs';
import { BackHomeButton } from '../../../shared/components/back-home-button/back-home-button';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, Button, RouterLink, BackHomeButton],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  burger$;
  suggestedBurgers$;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.burger$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id')!;
        return this.productService.getById(id);
      })
    );
    this.suggestedBurgers$ = this.productService.getAll().pipe(
      map(res => {
        const shuffled = res.items.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4);
      })
    );
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = '/burger.avif';
  }

}
