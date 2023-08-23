import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input({required: true})
  product!: ProductModel;

  @Output()
  addProductToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>

  onAddToCart(): void {
    console.log(`The product ${this.product.id} has been added to the cart`);
    this.addProductToCart.emit(this.product);
  }
}
