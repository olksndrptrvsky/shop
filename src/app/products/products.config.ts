import { InjectionToken } from '@angular/core';

export const ProductsApi = new InjectionToken<string>('ProductsApi', {
  providedIn: 'root',
  factory: () => 'http://localhost:3000/products'
});
