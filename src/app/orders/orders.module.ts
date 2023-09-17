import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders.component';
import { PlaceOrderComponent } from '.';

@NgModule({
  declarations: [
    OrdersComponent,
    PlaceOrderComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class OrdersModule { }
