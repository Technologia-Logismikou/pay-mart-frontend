import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppearanceComponent } from './appearance/appearance.component';
import { CategoriesComponent } from './categories/categories.component';
import { CouponsComponent } from './coupons/coupons.component';
import { DashboardComponent } from './dashboard.component';
import { DeliveryZonesComponent } from './delivery-zones/delivery-zones.component';
import { MainComponent } from './main/main.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                component: MainComponent,
            },
            {
                path: 'orders',
                children: [
                    {
                        path: '',
                        component: OrdersComponent,
                    },
                    {
                        path: ':id',
                        component: OrderDetailsComponent,
                    },
                ],
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
            {
                path: 'delivery-zones',
                component: DeliveryZonesComponent,
            },
            {
                path: 'coupons',
                component: CouponsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
