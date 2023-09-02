import { Injectable } from '@angular/core';
import { CartItemModel } from '../models/cart-item.model';
import { ProductModel } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartProducts: Array<CartItemModel> = [];

  constructor() { }

  addProduct(product: ProductModel, count: number = 1): void {
    let cartItemIndex = this.findCartItemIndex(product);

    if (cartItemIndex > -1) {
      this.increaseCartItemQuantity(cartItemIndex);
    }
    else {
      this.addNewProductToCart(product, count);
    }
  }

  getProducts(): Array<CartItemModel> {
    return this.cartProducts;
  }

  removeAllProducts(): void {
    this._cartProducts = [];
  }

  getTotalCost(): number {
    return this.cartProducts.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  getTotalQuantity(): number {
    return this.cartProducts.reduce((sum, item) => sum + item.quantity, 0);
  }
  
  increaseQuantity(product: ProductModel): void {
    let cartItemIndex = this.findCartItemIndex(product);

    if (cartItemIndex > -1) {
      this.increaseCartItemQuantity(cartItemIndex);
    }
  }

  decreaseQuantity(product: ProductModel): void {
    let cartItemIndex = this.findCartItemIndex(product);

    if (cartItemIndex > -1) {
      this.decreaseCartItemQuantity(cartItemIndex);
    }
  }

  removeProduct(product: ProductModel): void {
    this._cartProducts = this.cartProducts.filter(ci => ci.product.id != product.id);
  }

  get cartProducts(): Array<CartItemModel> {
    return this._cartProducts;
  }

  get isEmptyCart(): boolean {
    return this.cartProducts.length == 0;
  }

  private increaseCartItemQuantity(cartItemIndex: number): void {
    if (cartItemIndex > -1) {
      let cartItem = this.getProducts()[cartItemIndex];
      this.changeQuantity(cartItemIndex, cartItem.quantity + 1);
    }
  }

  private decreaseCartItemQuantity(cartItemIndex: number): void {
    if (cartItemIndex > -1) {
      let cartItem = this.getProducts()[cartItemIndex];
      let newQuantity = cartItem.quantity - 1;

      if (newQuantity > 0) {
        this.changeQuantity(cartItemIndex, newQuantity);
      }
      else {
        this.removeProduct(cartItem.product);
      }
    }
  }

  private changeQuantity(cartItemIndex: number, newQuantity: number): void {
    let updatedCartItem = new CartItemModel(this.cartProducts[cartItemIndex].product, newQuantity);
    this._cartProducts = this.cartProducts.slice();
    this._cartProducts.splice(cartItemIndex, 1, updatedCartItem);
  }

  private findCartItemIndex(product: ProductModel): number {
    return this.cartProducts.findIndex(x => x.product.id == product.id);
  }

  private addNewProductToCart(product: ProductModel, quantity: number = 1): void {
    this._cartProducts = [...this._cartProducts, new CartItemModel(product, quantity)];
  }
}
