import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-block.component.html',
  styleUrl: './card-block.component.css'
})
export class CardBlockComponent {
  @Input() product: any;
  @Output() selected = new EventEmitter<any>();

  ngOnInit() {
  }

  onSelect() {
    this.selected.emit(this.product);
  }

  applyDiscount() {
    this.product.price -= 15;
  }
}