import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsPromiseService } from '../..';
import { CartObservableService } from 'src/app/cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: Promise<Array<ProductModel>>;

  constructor(
    private productService: ProductsPromiseService,
    private cartService: CartObservableService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onProductToCartAdded(product: ProductModel) {
    this.cartService.addProduct(product);
  }
}
