import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<ProductModel> = [
    new ProductModel(1, "product1", 1),
    new ProductModel(2, "product2", 2),
    new ProductModel(3, "product3", 3),
  ]

  constructor() { }

  getProducts() : Array<ProductModel> {
    return this.products;
  }
}
