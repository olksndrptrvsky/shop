import { ResolveFn } from '@angular/router';
import { ProductsPromiseService } from '../services';
import { inject } from '@angular/core';

export const productViewTitleResolver: ResolveFn<string> = (route, state) => {
    let productService = inject(ProductsPromiseService);
    const productId = route.paramMap.get('productId');

    if (!productId) {
        return "";
    }

    return productService.getProduct(+productId)
        .then(product => product?.name ?? "Product Not Found")
        .catch(_ => "Product");
};
