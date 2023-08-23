import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';
import { ProductModel } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input({required: true})
  cartItem!: CartItemModel;

  @Input({required: true})
  itemCount!: number;

  @Output()
  quantityIncrease: EventEmitter<ProductModel> = new EventEmitter<ProductModel>

  @Output()
  quantityDecrease: EventEmitter<ProductModel> = new EventEmitter<ProductModel>

  @Output()
  deleteItem: EventEmitter<ProductModel> = new EventEmitter<ProductModel>

  onQuantityIncrease(): void {
    this.quantityIncrease.emit(this.cartItem.product);
  }

  onQuantityDecrease(): void {
    this.quantityDecrease.emit(this.cartItem.product);
  }

  onDeleteItem(): void {
    this.deleteItem.emit(this.cartItem.product);
  }
}
