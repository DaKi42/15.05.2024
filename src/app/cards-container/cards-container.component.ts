import { Component } from '@angular/core';
import { CardBlockComponent } from '../card-block/card-block.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardBlockComponent, CommonModule],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {
  products = [
    { id: 1, name: 'product 1', price: 110, description: 'product1 text description', color: 'red' },
    { id: 2, name: 'product 2', price: 120, description: 'product2 text description', color: 'blue' },
    { id: 3, name: 'product 3', price: 130, description: 'product3 text description', color: 'green' }
  ];

  selectedProduct: any;

  onSelectProduct(product: any) {
    this.selectedProduct = product;
  }
}
