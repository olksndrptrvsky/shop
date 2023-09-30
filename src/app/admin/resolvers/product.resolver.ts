import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductsPromiseService } from 'src/app/products';
import { ProductModel } from 'src/app/products/models/product.model';

export const productResolver: ResolveFn<ProductModel> = (route, state) => {
  let productId = route.paramMap.get("productId");
  let productService = inject(ProductsPromiseService);
  let defaultProduct = new ProductModel(0, "", 0, false);

  if (!productId)
    return defaultProduct;

  return productService.getProduct(+productId).then(product => product ?? defaultProduct);
};
