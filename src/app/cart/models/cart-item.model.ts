import { ProductModel } from "src/app/products/models/product.model";

export class CartItemModel {
    // product: ProductModel;
    // count: number;

    constructor(public product: ProductModel, public count: number = 1) {
        // this.product = product;
        // this.count = count;
    }

    incrementCount(): void {
        this.count++;
    }
}
