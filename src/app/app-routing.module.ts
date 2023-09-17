import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LoginComponent, PageNotFoundComponent } from './pages';
import { OrdersComponent } from './orders/orders.component';
import { cartNotEmptyGuard } from './orders';

const extraOptions: ExtraOptions = {
  bindToComponentInputs: true,
};

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'order',
    component: OrdersComponent,
    canActivate: [cartNotEmptyGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page Not Found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
