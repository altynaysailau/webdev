import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="border: 1px solid #ccc; padding: 10px; border-radius: 8px;">
      <h4>{{ product.name }}</h4>
      <p>ID: {{ product.id }}</p>
      <button (click)="deleteMe()">Удалить</button>
    </div>
  `
})
export class ProductItemComponent {
  @Input() product!: Product;

  // Создаем событие, которое отправит ID наверх в ProductList
  @Output() removeProduct = new EventEmitter<number>();

  deleteMe() {
    this.removeProduct.emit(this.product.id);
  }
}
