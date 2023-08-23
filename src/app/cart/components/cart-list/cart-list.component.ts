import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductModel } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {

  constructor(private cartService: CartService) { }

  get cartItems() {
    return this.cartService.cartItems;
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  isCartEmpty(): boolean {
    return !this.cartService.cartItems.length;
  }

  getTotalCost(): number {
    return this.cartService.getTotalCost();
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  onQuantityIncrease(product: ProductModel): void {
    this.cartService.addToCart(product);
  }

  onQuantityDecrease(product: ProductModel): void {
    this.cartService.decreaseCount(product);
  }

  onDeleteItem(product: ProductModel): void {
    this.cartService.deleteItem(product);
  }
}
