import { Injectable } from '@angular/core';
import { CartItemModel } from '../models/cart-item.model';
import { ProductModel } from 'src/app/products/models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartObservableService {
  private cartItems: BehaviorSubject<CartItemModel[]> = new BehaviorSubject<CartItemModel[]>([]);

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

  getProducts(): Observable<CartItemModel[]> {
    return this.cartItems.asObservable();
  }

  removeAllProducts(): void {
    this.cartItems.next([]);
  }

  getTotalCost(): number {
    return this.cartItems.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  getTotalQuantity(): number {
    return this.cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
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
    const currentCart = this.cartItems.value;
    const updatedCart = currentCart.filter(ci => ci.product.id != product.id);

    this.cartItems.next(updatedCart)
  }

  get isEmptyCart(): boolean {
    return this.cartItems.value.length == 0;
  }

  private increaseCartItemQuantity(cartItemIndex: number): void {
    if (cartItemIndex > -1) {
      let cartItem = this.cartItems.value[cartItemIndex];
      this.changeQuantity(cartItemIndex, cartItem.quantity + 1);
    }
  }

  private decreaseCartItemQuantity(cartItemIndex: number): void {
    if (cartItemIndex > -1) {
      let cartItem = this.cartItems.value[cartItemIndex];
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
    let updatedCartItem = new CartItemModel(this.cartItems.value[cartItemIndex].product, newQuantity);
    const currentCart = this.cartItems.value;
    const updatedCart = currentCart.slice();
    updatedCart.splice(cartItemIndex, 1, updatedCartItem);

    this.cartItems.next(updatedCart);
  }

  private findCartItemIndex(product: ProductModel): number {
    return this.cartItems.value.findIndex(x => x.product.id == product.id);
  }

  private addNewProductToCart(product: ProductModel, quantity: number = 1): void {
    const currentCart = this.cartItems.value;
    const updatedCart = [...currentCart, new CartItemModel(product, quantity)];
    
    this.cartItems.next(updatedCart);
  }
}
