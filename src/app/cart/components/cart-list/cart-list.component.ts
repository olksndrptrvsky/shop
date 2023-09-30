import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartItemModel } from '../../models/cart-item.model';
import { Router } from '@angular/router';
import { CartObservableService } from '../..';
import { AppSettingsService } from 'src/app/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements AfterViewInit {
  sortOptions = new Map<keyof CartItemModel, boolean>(); 

  @ViewChild('sortingColumnSelect')
  sortingColumn!: ElementRef;

  @ViewChild('isAscCheckbox')
  isAsc!: ElementRef;

  private router = inject(Router);
  
  constructor(
    public cartService: CartObservableService,
    private appSettingsService: AppSettingsService) {
      this.appSettingsService.getAppSettings().subscribe(appSettings => {
        console.log("Got value from AppSettingService: ", appSettings);
      });
  }

  ngAfterViewInit(): void {
    console.log(this.sortingColumn, this.isAsc);
  }

  onClearCart(): void {
    this.cartService.removeAllProducts();
  }

  onPlaceOrder(): void {
    this.router.navigate(['/order']);
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
