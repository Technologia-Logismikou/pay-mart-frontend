import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppearanceComponent } from './appearance/appearance.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'main',
                pathMatch: 'full',
            },
            {
                path: 'main',
                component: MainComponent,
            },
            {
                path: 'orders',
                component: OrdersComponent,
            },
            {
                path: 'categories',
                component: CategoriesComponent,
            },
            {
                path: 'products',
                component: ProductsComponent,
            },
            {
                path: 'appearance',
                component: AppearanceComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
