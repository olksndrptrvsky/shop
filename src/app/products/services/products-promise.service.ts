import { Inject, Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ProductsApi } from '../products.config';

@Injectable({
  providedIn: 'root'
})
export class ProductsPromiseService {
  constructor(
    private http: HttpClient,
    @Inject(ProductsApi) private productsUrl: string) { }

  getProducts() : Promise<Array<ProductModel>> {
    let request$ = this.http.get<ProductModel[]>(this.productsUrl);
    return firstValueFrom(request$)
      .then()
      .catch(this.handleError);
  }

  getProduct(productId: number) : Promise<ProductModel | undefined> {
    const getProductUrl = `${this.productsUrl}/${productId}`; 
    let request$ = this.http.get<ProductModel | undefined>(getProductUrl);
    return firstValueFrom(request$)
      .then()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error during HTTP request occurred', error);
    return Promise.reject(error.message || error);
  }
}
