import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { MainComponent } from './main/main.component';
import { DeliveryZonesComponent } from './delivery-zones/delivery-zones.component';
import { DeliveryZonesFormModalComponent } from './delivery-zones/delivery-zones-form-modal/delivery-zones-form-modal.component';
import { ProductFormModalComponent } from './products/product-form-modal/product-form-modal.component';
import { CategoryFormModalComponent } from './categories/category-form-modal/category-form-modal.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { CouponsComponent } from './coupons/coupons.component';
import { CouponsFormModalComponent } from './coupons/coupons-form-modal/coupons-form-modal.component';

@NgModule({
    declarations: [
        DashboardComponent,
        OrdersComponent,
        ProductsComponent,
        CategoriesComponent,
        AppearanceComponent,
        MainComponent,
        DeliveryZonesComponent,
        DeliveryZonesFormModalComponent,
        ProductFormModalComponent,
        CategoryFormModalComponent,
        OrderDetailsComponent,
        CouponsComponent,
        CouponsFormModalComponent,
    ],
    imports: [CommonModule, DashboardRoutingModule, SharedModule, ColorPickerModule, ChartsModule],
})
export class DashboardModule {}
