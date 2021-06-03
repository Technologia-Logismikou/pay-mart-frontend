import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StorefrontComponent } from './storefront/storefront.component';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';

@NgModule({
    declarations: [StorefrontComponent, CheckoutComponent],
    imports: [SharedModule, CommonModule, StoreRoutingModule, NgxCleaveDirectiveModule],
})
export class StoreModule {}
