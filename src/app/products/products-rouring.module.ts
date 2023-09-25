import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent, ProductViewComponent, productViewTitleResolver } from '.';
import { ProductsComponent } from './products.component';

const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent,
        title: 'Products',
        children: [
            // обычно расположение объектов от более специфического path к более общему
            {
                path: '',
                component: ProductListComponent
            },
            {
                path: ':productId',
                component: ProductViewComponent,
                title: productViewTitleResolver
            }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
