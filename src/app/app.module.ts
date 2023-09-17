import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent, PageNotFoundComponent } from './pages';
import { TitleStrategy } from '@angular/router';
import { PageTitleStrategy } from './core';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule,
    OrdersModule,
    SharedModule,
    AdminModule,
    //should be last
    AppRoutingModule,
  ],
  providers: [
    { provide: TitleStrategy, useClass: PageTitleStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
