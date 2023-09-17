import { Component, Input, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services';
import { ProductModel } from '../../models/product.model';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @Input({ required: true })
  productId!: string;

  product!: ProductModel | undefined;

  private productService = inject(ProductService);
  private router = inject(Router);
  private cartService = inject(CartService);

  ngOnInit() {
    this.productService.getProduct(+this.productId)
      .then(product => this.product = product)
      .catch(error => console.error(error))
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
