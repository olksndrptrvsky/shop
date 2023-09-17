import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CartItemComponent, CartListComponent } from '.';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-rouring.module';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
    CartComponent,
  ],
  imports: [
    SharedModule,
    CartRoutingModule,
  ],
  exports: [
    CartListComponent,
  ]
})
export class CartModule { }
