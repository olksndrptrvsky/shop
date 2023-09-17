import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { canDeactivateGuard, isAdminGuard } from '../core';
import { AddProductComponent, EditProductComponent, ProductsComponent, productResolver } from '.';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [isAdminGuard],
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/add',
        component: AddProductComponent
      },
      {
        path: 'products/:productId',
        component: EditProductComponent,
        resolve: {
          productFromResolver: productResolver 
        },
        canDeactivate: [canDeactivateGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
