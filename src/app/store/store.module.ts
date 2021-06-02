import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StorefrontComponent } from './storefront/storefront.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [StorefrontComponent],
    imports: [SharedModule, CommonModule, StoreRoutingModule],
})
export class StoreModule {}
