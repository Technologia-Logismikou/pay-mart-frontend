import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { MainComponent } from './main/main.component';
import { DeliveryZonesComponent } from './delivery-zones/delivery-zones.component';
import { DeliveryZonesFormModalComponent } from './delivery-zones/delivery-zones-form-modal/delivery-zones-form-modal.component';

@NgModule({
    declarations: [DashboardComponent, OrdersComponent, ProductsComponent, CategoriesComponent, AppearanceComponent, MainComponent, DeliveryZonesComponent, DeliveryZonesFormModalComponent],
    imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
