import { AfterViewInit, Component, ElementRef, Inject, InjectionToken, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements AfterViewInit {
  sortOptionsToTestSorting = new Map<keyof ProductModel, boolean>([
    ["id", true],
    ["name", true],
    ["price", true],
  ]);

  arrayToTestSorting = [
    new ProductModel(1, "abc", 1, false),
    new ProductModel(1, "zbc", 1, false),
    new ProductModel(1, "abc", 2, false),
    new ProductModel(1, "acb", 1, false),
    new ProductModel(2, "abc", 1, false),
    new ProductModel(2, "abc", 1, false),
    new ProductModel(3, "abc", 1, false),
  ]

  sortOptions = new Map<keyof CartItemModel, boolean>(); 

  @ViewChild('sortingColumnSelect')
  sortingColumn!: ElementRef;

  @ViewChild('isAscCheckbox')
  isAsc!: ElementRef;

  constructor(
    private cartService: CartService,) {
  }

  ngAfterViewInit(): void {
    console.log(this.sortingColumn, this.isAsc);
  }

  get cartItems() {
    // this.onUpdateSortingOptions(this.sortingColumn.nativeElement.value, this.isAsc.nativeElement.value);
    return this.cartService.cartProducts;
  }

  onClearCart(): void {
    this.cartService.removeAllProducts();
  }

  isCartEmpty(): boolean {
    return this.cartService.isEmptyCart;
  }

  getTotalCost(): number {
    return this.cartService.getTotalCost();
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  onQuantityIncrease(product: ProductModel): void {
    this.cartService.addProduct(product);
  }

  onQuantityDecrease(product: ProductModel): void {
    this.cartService.decreaseQuantity(product);
  }

  onDeleteItem(product: ProductModel): void {
    this.cartService.removeProduct(product);
  }

  onUpdateSortingOptions(newColumnValue: string, isAsc: boolean): void {
    let newColumn = newColumnValue as keyof CartItemModel;
    this.sortOptions = new Map<keyof CartItemModel, boolean>([
      [newColumn, isAsc]
    ]);

    console.log(this.sortOptions);
  }
}
