import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-rouring.module';
import { ProductViewComponent } from './components';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductsComponent,
    ProductViewComponent,
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,
  ],
  exports: [
    ProductListComponent,
  ]
})
export class ProductsModule { }
