import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list'; // Импорт нового компонента
import { categories, products as initialProducts } from './data';
import { Category, Product } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  categories: Category[] = categories;
  productList: Product[] = [...initialProducts]; // Храним общее состояние здесь
  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  // Получаем только товары выбранной категории
  get filteredProducts() {
    return this.productList.filter(p => p.categoryId === this.selectedCategory?.id);
  }

  // Метод для удаления товара из общего списка
  handleDelete(productId: number) {
    this.productList = this.productList.filter(p => p.id !== productId);
  }
}
