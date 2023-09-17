import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<ProductModel> = [
    new ProductModel(1, "product1", 1, true),
    new ProductModel(2, "product2", 2, false),
    new ProductModel(3, "product3", 3, true),
  ]

  constructor() { }

  getProducts() : Promise<Array<ProductModel>> {
    return Promise.resolve(this.products);
  }

  getProduct(productId: number) : Promise<ProductModel | undefined> {
    return Promise.resolve(this.products.find(x => x.id == productId));
  }
}
