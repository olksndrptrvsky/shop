import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductsPromiseService } from 'src/app/products';
import { ProductModel } from 'src/app/products/models/product.model';

export const productResolver: ResolveFn<ProductModel> = (route, state) => {
  // лучше использовать const вместо let
  const productId = route.paramMap.get("productId");
  const productService = inject(ProductsPromiseService);
  const defaultProduct = new ProductModel(0, "", 0, false);

  if (!productId)
    return defaultProduct;

  return productService.getProduct(+productId).then(product => product ?? defaultProduct);
};
