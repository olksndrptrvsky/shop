import { Injectable } from '@angular/core';
import { CartItemModel } from '../models/cart-item.model';
import { ProductModel } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Array<CartItemModel> = [];

  constructor() { }

  addToCart(product: ProductModel): void {
    let cartItem = this.findProductInCart(product);

    if (cartItem) {
      cartItem.incrementCount();
    }
    else {
      this.addNewProductToCart(product);
    }
  }

  clearCart(): void {
    this.cartItems = [];
  }

  getTotalCost(): number {
    return this.cartItems.reduce((sum, item) => sum + item.product.price * item.count, 0);
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((sum, item) => sum + item.count, 0);
  }

  decreaseCount(product: ProductModel): void {
    let cartItem = this.cartItems.find(x => x.product.id == product.id) ?? null;
    if (!cartItem)
      return;

    cartItem?.decrementCount();

    if (cartItem.count <= 0)
      this.deleteItem(cartItem.product);
  }

  deleteItem(product: ProductModel): void {
    this.cartItems = this.cartItems.filter(ci => ci.product.id != product.id);
  }

  private findProductInCart(product: ProductModel): CartItemModel | undefined {
    return this.cartItems.find(x => x.product.id == product.id);
  }

  private addNewProductToCart(product: ProductModel): void {
    this.cartItems.push(new CartItemModel(product));
  }
}
