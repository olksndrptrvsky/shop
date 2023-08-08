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
    this.cartItems.length = 0;
    console.log(this.cartItems.length);
  }

  private findProductInCart(product: ProductModel): CartItemModel | undefined {
    return this.cartItems.find(x => x.product.id == product.id);
  }

  private addNewProductToCart(product: ProductModel): void {
    this.cartItems.push(new CartItemModel(product));
  }
}
