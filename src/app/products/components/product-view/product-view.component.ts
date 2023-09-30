import { Component, Input, OnInit, inject } from '@angular/core';
import { ProductsPromiseService } from '../../services';
import { ProductModel } from '../../models/product.model';
import { Router } from '@angular/router';
import { CartObservableService } from 'src/app/cart';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @Input({ required: true })
  productId!: string;

  product!: ProductModel | undefined;

  private productService = inject(ProductsPromiseService);
  private router = inject(Router);
  private cartService = inject(CartObservableService);

  ngOnInit() {
    this.productService.getProduct(+this.productId)
      .then(product => this.product = product)
      .catch(error => {
        console.log("catched in the ngOnInit");
        console.error(error);
      });
  }

  onBuy() {
    this.addToCart();
    this.router.navigate(['cart']);
  }

  onAddToCart() {
    this.addToCart();
  }

  private addToCart() {
    this.cartService.addProduct(this.product!);
  }
}
