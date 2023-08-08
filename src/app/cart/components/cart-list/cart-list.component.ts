import { Component, OnInit } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems: Array<CartItemModel> = []

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems; 
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  isCartEmpty(): boolean {
    return !this.cartItems.length;
  }
}
