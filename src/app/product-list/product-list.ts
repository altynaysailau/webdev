import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item';
import { Product } from '../product.model'; // Проверь, чтобы имя файла совпадало

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div class="product-grid">
      @for (p of products; track p.id) {
        <app-product-item
          [product]="p"
          (removeProduct)="onRemove($event)" />
      } @empty {
        <p>В этой категории пока нет товаров.</p>
      }
    </div>
  `,
  styles: [`
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      padding: 20px;
    }
  `]
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  onRemove(id: number): void {
    // Использование filter — это "золотой стандарт" в Angular для удаления
    this.products = this.products.filter(p => p.id !== id);
  }
}
