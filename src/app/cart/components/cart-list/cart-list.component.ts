import { Component, Inject, InjectionToken } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductModel } from 'src/app/products/models/product.model';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { GeneratorFactory } from 'src/app/core/services/generator.factory';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {

  constructor(
    private cartService: CartService,) {
  }

  get cartItems() {
    return this.cartService.cartProducts;
  }

  onClearCart(): void {
    this.cartService.removeAllProducts();
  }

  isCartEmpty(): boolean {
    return this.cartService.isEmptyCart;
  }

  getTotalCost(): number {
    return this.cartService.getTotalCost();
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  onQuantityIncrease(product: ProductModel): void {
    this.cartService.addProduct(product);
  }

  onQuantityDecrease(product: ProductModel): void {
    this.cartService.decreaseQuantity(product);
  }

  onDeleteItem(product: ProductModel): void {
    this.cartService.removeProduct(product);
  }
}
